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
   * 初始化方法，需要手动调一下
   */
  async init() {
    // 加载一个新页面或者新ifream触发 可以取到document
    this.page.on("load", async () => {
      await this.page.addScriptTag({path: "script/add-observer.js"})
    })
  }
  
  /**
   * 导航到当前页面之前的操作
   */
  async navigate() {
  }
  
  /**
   * 基于 add-observer.js 脚本。
   * 等待 document.body 内容没有变化
   */
  async waitDomNoChange() {
    await this.page.locator("#isReady").waitFor({state: "attached"})
  }
  
  /**
   * 【test】判断元素是否正确显示在dom中
   * @param locator
   * @param options
   */
  async isInDom(locator: Locator, options?: { timeout?: number }) {
    const {timeout} = options ?? {};
    await locator?.waitFor({state: "visible", timeout: timeout ?? 5000});
    await expect(locator).toBeVisible()
  }
  
  /**
   * 【test】判断元素是不显示在dom中
   * @param locator
   * @param options
   */
  async isNotInDom(locator: Locator, options?: { waitDom?: Locator, sleepTime?: number }) {
    console.log(this.page.mainFrame())
    const {waitDom, sleepTime} = options ?? {};
    if (typeof sleepTime === "number" && !Number.isNaN(sleepTime)) {
      await sleep(sleepTime);
    }
    if (waitDom !== undefined) {
      await waitDom?.waitFor({state: "visible"});
    }
    await expect(locator).toBeHidden()
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
