const { test, expect } = require('@playwright/test');

test('should find course section on the page', async ({ page }) => {
  await page.goto('https://example.com');
  const courseSection = await page.$('.course-section');
  expect(courseSection).not.toBeNull();
});