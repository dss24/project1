const { test } = require('@playwright/test');

test('should measure response time of Home button', async ({ page, browserName }) => {
  await page.goto('https://example.com');
  const startTime = Date.now();
  await page.click('.home-button');
  const endTime = Date.now();
  const responseTime = endTime - startTime;
  console.log(`Response time for Home button in ${browserName}: ${responseTime}ms`);
});