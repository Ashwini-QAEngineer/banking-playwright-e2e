import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests', timeout: 45000, retries: 1,
  use: {
    baseURL: 'https://parabank.parasoft.com',
    screenshot: 'only-on-failure', trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
