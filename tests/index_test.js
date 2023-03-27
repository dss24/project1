const { test, expect } = require('@playwright/test');

test('should navigate to index page', async ({ page }) => {
  await page.goto('https://example.com');
  const navbar = await page.$('.navbar');
  expect(navbar).not.toBeNull();

  const indexTab = await navbar.$('a[href="/index"]');
  expect(indexTab).not.toBeNull();

  await indexTab.click();

  const indexPage = await page.$('.index-page');
  expect(indexPage).not.toBeNull();
});