import { test as base, Page } from "@playwright/test";

export type NavigateFixture = {
  links: { name: string }[];
  page: Page;
};

export const test = base.extend<NavigateFixture>({
  links: [[{ name: "" }], { option: true }],
  page: async ({ page, links }, use) => {
    await page.goto("/");
    for (const link of links)
      await page
        .getByRole("link", { name: link.name })
        .press("Control+ArrowRight");
    await use(page);
  },
});

export * from "@playwright/test";
