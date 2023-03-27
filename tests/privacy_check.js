const { test, expect } = require('@playwright/test');

test('should navigate to privacy page', async ({ page }) => {
  await page.goto('https://example.com');
  const navbar = await page.$('.navbar');
  expect(navbar).not.toBeNull();

  const privacyTab = await navbar.$('a[href="/privacy"]');
  expect(privacyTab).not.toBeNull();

  await privacyTab.click();

  const privacyPage = await page.$('.privacy-page');
  expect(privacyPage).not.toBeNull();
});