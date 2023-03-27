const { test, expect } = require('@playwright/test');

test('should navigate to content page', async ({ page }) => {
  await page.goto('https://example.com');
  const navbar = await page.$('.navbar');
  expect(navbar).not.toBeNull();

  const contentTab = await navbar.$('a[href="/content"]');
  expect(contentTab).not.toBeNull();

  await contentTab.click();

  const contentPage = await page.$('.content-page');
  expect(contentPage).not.toBeNull();
});