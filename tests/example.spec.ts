import { test, expect, chromium } from "@playwright/test";

test.beforeAll(async () => {
  console.log(`测试开始${"".padEnd(80, "-")}`);
});
test.afterAll(async () => {
  console.log(`测试结束${"".padEnd(80, "-")}`);
});
test.describe("playwright测试", () => {
  test("三分之一概率成功", () => {
    expect(Math.floor(Math.random() * 3)).toBe(1);
  });
  test("访问百度", async ({}) => {
    const browser = await chromium.launch({
      headless: false,
      args: ["--no-sandbox", "--no-zygote"],
    });
    const page = await browser.newPage();
    // Go to https://www.baidu.com/
    await page.goto("https://www.baidu.com/");
    // Click text=换一换
    await page.click("text=换一换");
    expect(await page.$("text=换一换")).not.toBeNull();
  });
  test("肯定会失败", () => {
    expect(false).toBeTruthy();
  });
  test("肯定会成功", () => {
    expect(true).toBeTruthy();
  });
});
