const { test, expect } = require('@playwright/test');

test('should find profile section on the page', async ({ page }) => {
  await page.goto('https://example.com');
  const profileSection = await page.$('.profile-section');
  expect(profileSection).not.toBeNull();
});