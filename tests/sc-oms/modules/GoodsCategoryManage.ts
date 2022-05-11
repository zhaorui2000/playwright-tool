import parseCookies from "../../../utils/parse-cookies";
import {Browser, expect, Page} from "@playwright/test";

class GoodsCategoryManage {
  page: Page;
  
  constructor(page) {
    this.page = page;
  }
  
  async navigate() {
    await this.page.goto('http://10.189.72.85:8501/');
    await this.page.goto('http://10.189.72.85:8501/base/homePage');
    await this.page.locator('div[role="menuitem"]:has-text("基础数据")').click();
    await this.page.locator('span:has-text("商品数据")').first().click();
    await this.page.locator('a:has-text("商品分类")').click();
    await expect(this.page).toHaveURL('http://10.189.72.85:8501/feOms/CommonDataManage/GoodsData/GoodsCategoryManage');
  }
}

export default GoodsCategoryManage;
