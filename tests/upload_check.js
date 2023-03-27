const { test, expect } = require('@playwright/test');

test('should have an upload button', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://www.example.com');

  // Find the upload button element
  const uploadButton = await page.$('input[type="file"]');
  expect(uploadButton).not.toBeNull();
});