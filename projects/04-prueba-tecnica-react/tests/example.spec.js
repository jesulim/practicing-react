// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173'

test('Example end-to-end test', async ({ page }) => {
  // Your test code goes here
  await page.goto(LOCALHOST_URL)
  const title = await page.title()
  expect(title).toBe('Vite App')
})
