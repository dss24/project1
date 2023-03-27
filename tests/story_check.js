const { test, expect } = require('@playwright/test');

test('should navigate to story page', async ({ page }) => {
  await page.goto('https://example.com');
  const navbar = await page.$('.navbar');
  expect(navbar).not.toBeNull();

  const storyTab = await navbar.$('a[href="/story"]');
  expect(storyTab).not.toBeNull();

  await storyTab.click();

  const storyPage = await page.$('.story-page');
  expect(storyPage).not.toBeNull();
});