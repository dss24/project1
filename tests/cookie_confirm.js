const { test, expect } = require('@playwright/test');

test('should accept cookies', async ({ page }) => {
  await page.goto('https://example.com');
  const popup = await page.$('.cookie-popup');
  expect(popup).not.toBeNull();

  const acceptButton = await popup.$('button[data-action="accept"]');
  expect(acceptButton).not.toBeNull();

  await acceptButton.click();

  const cookieBanner = await page.$('.cookie-banner');
  expect(cookieBanner).not.toBeNull();
});