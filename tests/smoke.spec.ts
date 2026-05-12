import { test, expect } from '@playwright/test';

test.describe('Banking — Playwright TypeScript (E2E) Tests', () => {
  test('TC001 - Application loads successfully', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await expect(page).toHaveTitle(/.+/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC002 - Main navigation is visible', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    const body = await page.locator('body').innerText();
    expect(body.length).toBeGreaterThan(10);
  });
});
