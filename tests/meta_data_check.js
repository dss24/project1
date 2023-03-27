const { test, expect } = require('@playwright/test');

test('should check page metadata', async ({ page }) => {
  await page.goto('https://example.com');
  const pageTitle = await page.title();
  const pageDescription = await page.$eval('meta[name="description"]', element => element.content);
  const pageKeywords = await page.$eval('meta[name="keywords"]', element => element.content);

  expect(pageTitle).toBe('Example Domain');
  expect(pageDescription).not.toBe('');
  expect(pageKeywords).not.toBe('');
});