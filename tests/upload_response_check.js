const { test } = require('@playwright/test');

test('should measure the response time of the upload button', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://www.example.com');

  // Find the upload button element
  const uploadButton = await page.$('input[type="file"]');

  // Measure the response time of the upload button
  const startTime = Date.now();
  await uploadButton.click();
  const responseTime = Date.now() - startTime;

  // Output the response time
  console.log(`Upload button response time: ${responseTime}ms`);
});