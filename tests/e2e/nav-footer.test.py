"""
End-to-end test: clicks every navbar and footer link, asserts the correct
route loads, and verifies smooth-scroll lands on the right section (esp.
/contact which is a section on the homepage).

Run: python3 tests/e2e/nav-footer.test.py
"""

import asyncio
import sys
from pathlib import Path
from playwright.async_api import async_playwright

BASE = "http://localhost:8080"
SCREENSHOTS = Path("/tmp/browser/nav-footer/screenshots")
SCREENSHOTS.mkdir(parents=True, exist_ok=True)

# Routes that render HomePage and should smooth-scroll to a section.
SECTION_ROUTES = {
    "/services": "services",
    "/process":  "process",
    "/about":    "about",
    "/contact":  "contact",
    "/ai-studio": "ai-studio",
}
# Routes that load their own dedicated page (top of page).
PAGE_ROUTES = {"/", "/work", "/team",
               "/brand-identity", "/social-media-management",
               "/performance-marketing"}

NAV_OFFSET = 80
TOLERANCE = 160  # smooth-scroll lands within ~NAV_OFFSET +/- spring


async def goto_home(page):
    await page.goto(BASE + "/", wait_until="domcontentloaded")
    await page.wait_for_load_state("networkidle")


async def verify_route(page, href, label):
    """After a click that navigates, verify URL + scroll target."""
    # Wait for URL settle.
    await page.wait_for_url(lambda u: href in u, timeout=8000)
    await page.wait_for_load_state("domcontentloaded")

    if href in SECTION_ROUTES:
        section_id = SECTION_ROUTES[href]
        # Wait for smooth scroll to complete.
        await page.wait_for_timeout(1200)
        result = await page.evaluate(
            """(id) => {
                const el = document.getElementById(id);
                if (!el) return { found: false };
                const top = el.getBoundingClientRect().top;
                return { found: true, top, scrollY: window.scrollY };
            }""",
            section_id,
        )
        assert result["found"], f"[{label}] section #{section_id} missing on {href}"
        # Section top should be near the navbar offset.
        assert abs(result["top"] - NAV_OFFSET) < TOLERANCE, (
            f"[{label}] #{section_id} not scrolled into view on {href}: "
            f"top={result['top']} (expected ~{NAV_OFFSET})"
        )
        print(f"  ✓ {label} -> {href} scrolled to #{section_id} (top={result['top']:.0f})")
    else:
        # Standalone page: confirm path matches.
        url_path = await page.evaluate("() => window.location.pathname")
        assert url_path == href, f"[{label}] expected path {href}, got {url_path}"
        print(f"  ✓ {label} -> {href} loaded")


async def click_link(page, locator, label, href):
    await locator.scroll_into_view_if_needed()
    await locator.click()
    await verify_route(page, href, label)


async def test_navbar(page):
    print("\n=== Navbar links ===")
    nav_links = [
        ("Home", "/"),
        ("Services", "/services"),
        ("Work", "/work"),
        ("Our Process", "/process"),
        ("About", "/about"),
        ("Contact", "/contact"),
    ]
    for label, href in nav_links:
        await goto_home(page)
        link = page.locator("header nav").get_by_role("link", name=label, exact=True).first
        await click_link(page, link, f"nav:{label}", href)

    # CTA "Get a Free Audit" should go to /contact and scroll to contact form.
    print("\n=== Navbar CTA ===")
    await goto_home(page)
    cta = page.locator("header").get_by_role("link", name="Get a Free Audit").first
    await click_link(page, cta, "nav:Get a Free Audit", "/contact")
    await page.screenshot(path=str(SCREENSHOTS / "nav_cta_contact.png"))


async def test_footer(page):
    print("\n=== Footer links ===")
    footer_links = [
        ("Brand Identity", "/brand-identity"),
        ("Social Media Management", "/social-media-management"),
        ("AI-Integrated Video & Design", "/ai-studio"),
        ("Performance Marketing", "/performance-marketing"),
        ("About", "/about"),
        ("Team", "/team"),
        ("Contact", "/contact"),
    ]
    for label, href in footer_links:
        await goto_home(page)
        link = page.locator("footer").get_by_role("link", name=label, exact=True).first
        await link.scroll_into_view_if_needed()
        await link.click()
        await verify_route(page, href, f"footer:{label}")


async def main():
    failures = []
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)
        context = await browser.new_context(viewport={"width": 1280, "height": 1800})
        page = await context.new_page()
        page.on("pageerror", lambda e: failures.append(f"pageerror: {e}"))

        try:
            await test_navbar(page)
            await test_footer(page)
        except AssertionError as e:
            failures.append(str(e))
            await page.screenshot(path=str(SCREENSHOTS / "failure.png"))
        finally:
            await browser.close()

    if failures:
        print("\n❌ FAILURES:")
        for f in failures:
            print(" -", f)
        sys.exit(1)
    print("\n✅ All navbar + footer links route and scroll correctly.")


asyncio.run(main())
