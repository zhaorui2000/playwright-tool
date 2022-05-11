import {expect} from "@playwright/test";
import NormalPage from "../../../modules/normal-page";

class GoodsCategoryManage extends NormalPage{
  constructor(page) {
    super(page)
  }
  
  async navigate() {
    await this.page.goto('http://10.189.72.85:8501/');
    await this.page.goto('http://10.189.72.85:8501/base/homePage');
    await this.page.locator('div[role="menuitem"]:has-text("基础数据")').click();
    await this.page.locator('span:has-text("商品数据")').first().click();
    await this.page.locator('a:has-text("商品分类")').click();
    await expect(this.page).toHaveURL('http://10.189.72.85:8501/feOms/CommonDataManage/GoodsData/GoodsCategoryManage');
  }
  async testAddModelDom(){
    // Click button:has-text("新建")
    await this.page.locator('button:has-text("新建")').click();
    await expect(this.page.locator('text=所属一级分类')).toBeHidden()
  
    // Click .scoms-col.scoms-col-20 .scoms-form-item-control-input .scoms-form-item-control-input-content .scoms-select .scoms-select-selector
    await this.page.locator('.scoms-col.scoms-col-20 .scoms-form-item-control-input .scoms-form-item-control-input-content .scoms-select .scoms-select-selector').click();
  
    // Click text=二级分类
    await this.page.locator('text=二级分类').click();
    await expect(this.page.locator('text=所属一级分类')).toBeVisible()
  
    // Click button:has-text("取 消")
    await this.page.locator('button:has-text("取 消")').click();
  
    // Click button:has-text("新建")
    await this.page.locator('button:has-text("新建")').click();
    
    this.isMatchSnapshot({waitDom:this.page.locator('text=创建')})
  
    // Click button:has-text("取 消")
    await this.page.locator('button:has-text("取 消")').click();
  }
}

export default GoodsCategoryManage;
