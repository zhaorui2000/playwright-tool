import {expect, Locator, Page} from "@playwright/test";
import sleep from "../utils/sleep";

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
   * 【test】判断元素是否正确显示在dom中
   * @param locator
   * @param options
   */
  async isInDom(locator: Locator, options?: { timeout: number }) {
    const {timeout} = options ?? {};
    await locator?.waitFor({state: "visible", timeout: timeout ?? 5000});
    await expect(locator).toBeVisible()
  }
  
  /**
   * 【test】判断元素是不显示在dom中
   * @param locator
   * @param options
   */
  async isNotInDom(locator: Locator, options?: { waitDom: Locator, sleepTime: number }) {
    const {waitDom, sleepTime} = options ?? {};
    if (typeof sleepTime === "number" && !Number.isNaN(sleepTime)) {
      await sleep(sleepTime);
    }
    if (waitDom !== undefined) {
      await waitDom?.waitFor({state: "visible"});
    }
    await expect(locator).not.toBeVisible()
  }
  
  
  /**
   * 快照测试
   * {waitDom} 等待某个元素出现在页面中再截图
   */
  async isMatchSnapshot(options?: { waitDom?: Locator }) {
    const {waitDom} = options ?? {};
    await waitDom?.waitFor({state: "visible"});
    await expect(await this.page.screenshot({fullPage: true, animations: "disabled"})).toMatchSnapshot();
  }
}

export default NormalPage;
