const { test, expect } = require('@playwright/test');

test('should reject cookies', async ({ page }) => {
  await page.goto('https://example.com');
  const popup = await page.$('.cookie-popup');
  expect(popup).not.toBeNull();

  const rejectButton = await popup.$('button[data-action="reject"]');
  expect(rejectButton).not.toBeNull();

  await rejectButton.click();

  const cookieBanner = await page.$('.cookie-banner');
  expect(cookieBanner).toBeNull();
});