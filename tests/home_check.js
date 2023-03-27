const { test, expect } = require('@playwright/test');

test('should navigate to home page', async ({ page }) => {
  await page.goto('https://example.com');
  const homeButton = await page.$('button.home');
  expect(homeButton).not.toBeNull();

  await homeButton.click();

  const homePage = await page.$('.home-page');
  expect(homePage).not.toBeNull();
});