const { test, expect } = require('@playwright/test');

test('should display cookie popup', async ({ page }) => {
  await page.goto('https://example.com');
  const popup = await page.$('.cookie-popup');
  expect(popup).not.toBeNull();
});
