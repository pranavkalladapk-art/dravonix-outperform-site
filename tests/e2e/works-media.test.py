"""Verify Works images ship in public and load without an external CDN.

Run: python3 tests/e2e/works-media.test.py
"""

import asyncio
from pathlib import Path
from urllib.parse import urlparse

from playwright.async_api import async_playwright

BASE = "http://localhost:8080"
ROOT = Path(__file__).resolve().parents[2]
SCREENSHOTS = Path("/tmp/browser/works-local-media")


async def verify_images(page, selector):
    images = page.locator(selector)
    assert await images.count() > 0, "No Works images rendered"
    paths = []
    for image in await images.all():
        src = await image.get_attribute("src")
        assert src and src.startswith(("/logos/", "/work/")), src
        assert not urlparse(src).netloc, f"External image: {src}"
        assert (ROOT / "public" / src.lstrip("/")).is_file(), src
        await image.scroll_into_view_if_needed()
        await image.evaluate("image => image.decode()")
        assert await image.evaluate("image => image.naturalWidth > 0"), src
        paths.append(src)
    return paths


async def main():
    SCREENSHOTS.mkdir(parents=True, exist_ok=True)
    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 1800})
        await page.goto(BASE + "/work", wait_until="networkidle")
        paths = await verify_images(page, "main img")
        assert "/logos/sakhi.png" in paths, "Sakhi logo missing"
        assert "/logos/twoblooms.png" in paths, "Twoblooms logo missing"
        section = page.locator("section").filter(has=page.get_by_role("heading", name="Logo Works", exact=True))
        await section.scroll_into_view_if_needed()
        await page.wait_for_timeout(500)
        await section.screenshot(path=str(SCREENSHOTS / "logos.png"))
        print(f"Work page: {len(paths)} local images loaded, including both uploaded logos")
        await page.goto(BASE + "/", wait_until="networkidle")
        paths = await verify_images(page, "#work img")
        await page.locator("#work").screenshot(path=str(SCREENSHOTS / "selected-projects.png"))
        print(f"Homepage: {len(paths)} local Selected Projects images loaded")
        await browser.close()


asyncio.run(main())