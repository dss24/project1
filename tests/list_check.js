const { test, expect } = require('@playwright/test');

test('should have a list tab that lists courses', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://www.example.com');

  // Find the list tab element and click it
  const listTab = await page.$('#list-tab');
  expect(listTab).not.toBeNull();
  await listTab.click();

  // Wait for the list of courses to load
  await page.waitForSelector('#course-list');

  // Check that the list of courses is not empty
  const courseList = await page.$$('#course-list li');
  expect(courseList.length).toBeGreaterThan(0);
});