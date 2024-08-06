import { test, expect } from "@/fixtures/navigate-fixture";

test.use({ links: [{ name: "API" }, { name: "Docs" }] });

test("get started link", async ({ page }) => {
  await expect(page).toHaveURL("https://playwright.dev/docs/input");
});
