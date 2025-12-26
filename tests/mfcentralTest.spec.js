// @ts-check
import { test, expect } from '@playwright/test';

test('Login to MFCentral', async ({ page }) => {
  // Navigate to the sign in page
  await page.goto('https://app.mfcentral.com/investor/signin');

  // Get credentials from environment variables
  const userid = process.env.USERID;
  const password = process.env.PASSWORD;

  if (!userid || !password) {
    throw new Error('Please set USERID and PASSWORD environment variables before running the test.');
  }

  // Fill in the PAN
  await page.locator('input[type="text"]').fill(userid);

  // Fill in the password
  await page.locator('input[type="password"]').fill(password);

  // Click on "I'm not a robot" checkbox
  await page.frameLocator('iframe[title="reCAPTCHA"]').locator('text=I\'m not a robot').click();

  // Click the Sign In button
  await page.locator('button:has-text("Sign In")').click();

  // Confirm login by checking if redirected or dashboard loads
  await expect(page).toHaveURL(/dashboard|home|investor/); // Adjust based on actual URL
});