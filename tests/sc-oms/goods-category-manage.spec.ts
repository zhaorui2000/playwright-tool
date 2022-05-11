import {expect, test} from '@playwright/test';
import genPage from "../../utils/gen-page";
import GoodsCategoryManage from "./modules/GoodsCategoryManage";


test('test', async ({browser}) => {
  
  const page = await genPage(browser, {
    cookie: 'sfCustomerId=50; orgId=2053; sensitive=true; tblh-platform=LTA-SSC-BOX|ODY3; customerCode=50; language=zh-CN; Accept-Language=zh-CN; STOKEN=N8QAABlKEpsEhcQfituCm3bd6YGWjomCZHo_w5xTwAAiNIn2OysWAwAAWFEjzjRBI7CHMUZDetFpCPMwAitKMcluO1G0osChmYvwAAcbnmHeHjAABWGQAAb-cdL1BMAA',
    cookieOption: {domain: "10.189.72.85"}
  });
  const goodsCategoryManage = new GoodsCategoryManage(page)
  await goodsCategoryManage.navigate()
  await page.locator('button:has-text("新建")').waitFor({state:"attached"})
  // Click button:has-text("新建")
  await page.locator('button:has-text("新建")').click();
  await expect(page.locator('text=所属一级分类')).toBeHidden()
  
  // Click .scoms-col.scoms-col-20 .scoms-form-item-control-input .scoms-form-item-control-input-content .scoms-select .scoms-select-selector
  await page.locator('.scoms-col.scoms-col-20 .scoms-form-item-control-input .scoms-form-item-control-input-content .scoms-select .scoms-select-selector').click();
  
  // Click text=二级分类
  await page.locator('text=二级分类').click();
  await expect(page.locator('text=所属一级分类')).toBeVisible()
  
  // Click button:has-text("取 消")
  await page.locator('button:has-text("取 消")').click();
  
  // Click button:has-text("新建")
  await page.locator('button:has-text("新建")').click();
  await expect(page.locator('text=所属一级分类')).toBeHidden()
  
  // Click button:has-text("取 消")
  await page.locator('button:has-text("取 消")').click();
  
});
