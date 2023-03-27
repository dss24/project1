const { test, expect } = require('@playwright/test');

test('should have image descriptions', async ({ page }) => {
  await page.goto('https://example.com');
  const images = await page.$$('img');
  expect(images.length).toBeGreaterThan(0);

  for (const image of images) {
    const altAttribute = await image.getAttribute('alt');
    expect(altAttribute).not.toBe(null);
    expect(altAttribute.trim()).not.toBe('');
  }
});