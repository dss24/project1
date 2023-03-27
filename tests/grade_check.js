const { test, expect } = require('@playwright/test');

test('should find grade section on the page', async ({ page }) => {
  await page.goto('https://example.com');
  const gradeSection = await page.$('.grade-section');
  expect(gradeSection).not.toBeNull();
});