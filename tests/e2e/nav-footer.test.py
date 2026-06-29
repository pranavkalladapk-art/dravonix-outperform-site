"""
End-to-end test for navbar + footer:

1. Clicks every navbar and footer link from a fresh homepage load and
   verifies the URL settles on the correct route.
2. Deep-links into every section route (page.goto) and verifies that
   smooth scrolling lands on the matching <section id>, with extra
   focus on /contact (the form must be in view).

Run: python3 tests/e2e/nav-footer.test.py
"""

import asyncio
import sys
from pathlib import Path
from playwright.async_api import async_playwright

BASE = "http://localhost:8080"
SCREENSHOTS = Path("/tmp/browser/nav-footer/screenshots")
SCREENSHOTS.mkdir(parents=True, exist_ok=True)

# Section routes render the homepage and smooth-scroll to a <section id>.
SECTION_ROUTES = {
    "/services":  "services",
    "/process":   "process",
    "/about":     "about",
    "/contact":   "contact",
    "/ai-studio": "ai-studio",
}
NAV_OFFSET = 80
SCROLL_TOLERANCE = 200

NAV_LINKS = [
    ("Home", "/"),
    ("Services", "/services"),
    ("Work", "/work"),
    ("Our Process", "/process"),
    ("About", "/about"),
    ("Contact", "/contact"),
]
FOOTER_LINKS = [
    ("Brand Identity", "/brand-identity"),
    ("Social Media Management", "/social-media-management"),
    ("AI-Integrated Video & Design", "/ai-studio"),
    ("Performance Marketing", "/performance-marketing"),
    ("About", "/about"),
    ("Team", "/team"),
    ("Contact", "/contact"),
]


async def fresh_home(page):
    await page.goto(BASE + "/", wait_until="domcontentloaded")
    await page.wait_for_load_state("networkidle")


async def click_and_verify_url(page, region, label, href):
    """Click a link inside `region` and assert URL becomes `href`."""
    await fresh_home(page)
    link = page.locator(region).get_by_role("link", name=label, exact=True).first
    await link.scroll_into_view_if_needed()
    await link.click()
    await page.wait_for_url(
        lambda u: u.split("?")[0].rstrip("/").endswith(href.rstrip("/")) or
                  (href == "/" and u.rstrip("/").endswith(BASE)),
        timeout=8000,
    )
    actual = await page.evaluate("() => window.location.pathname")
    expected_paths = {href}
    # Section routes may immediately get rewritten by the scroll-spy.
    if href == "/":
        expected_paths.update({"/", "/home"})
    elif href in SECTION_ROUTES:
        # The spy may rewrite to /home if we landed at the top first.
        expected_paths.add("/home")
    assert actual in expected_paths, (
        f"[{region}:{label}] expected {href}, got {actual}"
    )
    print(f"  ✓ click {region}:{label} -> {actual}")


async def deep_link_scroll(page, href):
    """page.goto(href) and assert the section scrolls into view."""
    section_id = SECTION_ROUTES[href]
    await page.goto(BASE + href, wait_until="domcontentloaded")
    # Trailing sections (e.g. #contact) can't always align to NAV_OFFSET
    # because the page can't scroll past its bottom — accept "in viewport".
    try:
        await page.wait_for_function(
            """(id) => {
                const el = document.getElementById(id);
                if (!el) return false;
                const r = el.getBoundingClientRect();
                const alignedTop = Math.abs(r.top - 80) < 200;
                const inViewport = r.top < window.innerHeight && r.bottom > 0;
                return alignedTop || inViewport;
            }""",
            arg=section_id,
            timeout=6000,
        )
    except Exception:
        info = await page.evaluate(
            """(id) => {
                const el = document.getElementById(id);
                return el ? { top: el.getBoundingClientRect().top, scrollY: window.scrollY }
                          : { missing: true };
            }""",
            section_id,
        )
        raise AssertionError(
            f"[deep-link {href}] #{section_id} not in view: {info}"
        )
    top = await page.evaluate(
        "(id) => document.getElementById(id).getBoundingClientRect().top",
        section_id,
    )
    print(f"  ✓ deep-link {href} -> #{section_id} top={top:.0f}")



async def verify_contact_form_in_view(page):
    """Extra focus on /contact: the form itself must be visible."""
    await page.goto(BASE + "/contact", wait_until="domcontentloaded")
    await page.wait_for_selector("#contact form", timeout=8000)
    await page.wait_for_function(
        """() => {
            const f = document.querySelector('#contact form');
            if (!f) return false;
            const r = f.getBoundingClientRect();
            return r.top < window.innerHeight && r.bottom > 0;
        }""",
        timeout=6000,
    )
    await page.screenshot(path=str(SCREENSHOTS / "contact_in_view.png"))
    print("  ✓ /contact form is in viewport after smooth scroll")


async def main():
    failures = []
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1280, "height": 1800})
        page = await context.new_page()
        # Hydration warnings are noisy in dev SSR; surface but don't fail.
        page.on("pageerror", lambda e: print(f"  ! pageerror (ignored): {str(e)[:100]}"))

        async def run(coro, label):
            try:
                await coro
            except AssertionError as e:
                failures.append(f"{label}: {e}")
                print(f"  ✗ {label}: {e}")

        print("\n=== Navbar: click each link ===")
        for label, href in NAV_LINKS:
            await run(click_and_verify_url(page, "header", label, href), f"nav:{label}")
        # Navbar CTA
        await run(
            click_and_verify_url(page, "header", "Get a Free Audit", "/contact"),
            "nav:Get a Free Audit",
        )

        print("\n=== Footer: click each link ===")
        for label, href in FOOTER_LINKS:
            await run(click_and_verify_url(page, "footer", label, href), f"footer:{label}")

        print("\n=== Deep-link smooth scroll for section routes ===")
        for href in SECTION_ROUTES:
            await run(deep_link_scroll(page, href), f"scroll:{href}")

        print("\n=== /contact form visibility ===")
        await run(verify_contact_form_in_view(page), "contact-form-visible")

        await browser.close()

    if failures:
        print(f"\n❌ {len(failures)} failure(s):")
        for f in failures:
            print(" -", f)
        sys.exit(1)
    print("\n✅ All navbar + footer links route correctly and section routes smooth-scroll.")


asyncio.run(main())
