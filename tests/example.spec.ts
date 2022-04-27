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
  
  test("肯定会失败", () => {
    expect(false).toBeTruthy();
  });
  test("肯定会成功", () => {
    expect(true).toBeTruthy();
  });
});
