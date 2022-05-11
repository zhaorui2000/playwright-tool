import parseCookies, {ParseCookiesOption} from "./parse-cookies";
import {Browser} from "@playwright/test";

interface GenPagesOptions {
  cookie?: string;
  cookieOption?: ParseCookiesOption;
}

async function genPage(browser: Browser, options: GenPagesOptions = {}) {
  console.log(process.env)
  const {cookie, cookieOption} = options;
  const context = await browser.newContext();
  // 转换并且设置cookie
  if (cookie !== undefined) {
    await context.addCookies(parseCookies(cookie, cookieOption))
  }
  return await context.newPage();
}

export default genPage;
