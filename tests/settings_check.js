const { test, expect } = require('@playwright/test');

test('should navigate to settings page', async ({ page }) => {
  await page.goto('https://example.com');
  const settingsButton = await page.$('button.settings');
  expect(settingsButton).not.toBeNull();

  await settingsButton.click();

  const settingsPage = await page.$('.settings-page');
  expect(settingsPage).not.toBeNull();
});