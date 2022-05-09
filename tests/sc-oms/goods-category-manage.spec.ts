import { test, expect } from '@playwright/test';

test.use({
  storageState: 'tests/sc-oms/storage.json'
});

test('test', async ({ page }) => {
  
  // Go to http://10.189.72.85:8501/
  await page.goto('http://10.189.72.85:8501/');
  
  // Go to http://10.189.72.85:8501/base/homePage
  await page.goto('http://10.189.72.85:8501/base/homePage');
  
  // Click div[role="menuitem"]:has-text("基础数据")
  await page.locator('div[role="menuitem"]:has-text("基础数据")').click();
  
  // Click div[role="menuitem"]:has-text("商品数据")
  await page.locator('div[role="menuitem"]:has-text("商品数据")').click();
  
  // Click a:has-text("商品分类")
  await page.locator('a:has-text("商品分类")').click();
  await expect(page).toHaveURL('http://10.189.72.85:8501/feOms/CommonDataManage/GoodsData/GoodsCategoryManage');
  
  // Click button:has-text("新建")
  await page.locator('button:has-text("新建")').click();
  
  // 第一次点进来没有所属一级分类
  await expect(page.locator("text=所属一级分类")).toBeHidden()
  
  // Click text=商品分类名称分类层级备注 >> span >> nth=1
  await page.locator('text=商品分类名称分类层级备注 >> span').nth(1).click();
  // Click text=二级分类
  await page.locator('text=二级分类').click();
  
  // 选完二级分类才有所属一级分类
  await expect(page.locator("text=所属一级分类")).toBeVisible()
  
  // Click button:has-text("取 消")
  await page.locator('button:has-text("取 消")').click();
  // Click button:has-text("新建")
  await page.locator('button:has-text("新建")').click();
  // 点完取消再点新建没有所属一级分类
  await expect(page.locator("text=所属一级分类")).toBeHidden()
});
