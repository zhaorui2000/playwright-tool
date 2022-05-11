import {expect, Locator, Page} from "@playwright/test";

export interface NormalPageConfig {

}

class NormalPage {
  page: Page;
  
  constructor(page, config: NormalPageConfig = {}) {
    this.page = page;
  }
  
  /**
   * 导航到当前页面之前的操作
   */
  async navigate() {

  }
  
  /**
   * 快照测试
   * {waitDom} 等待某个元素出现在页面中再截图
   */
  async isMatchSnapshot(options: { waitDom?: Locator } = {}) {
    const {waitDom} = options;
    waitDom?.waitFor({state: "visible"});
    expect(await this.page.screenshot({fullPage: true, animations: "disabled"})).toMatchSnapshot();
  }
}

export default NormalPage;
