import parseCookies, {ParseCookiesOption} from "./parse-cookies";
import {Browser} from "@playwright/test";

interface GenPagesOptions {
  cookie?: string;
  cookieOption?: ParseCookiesOption;
}

async function genPage(browser: Browser, options: GenPagesOptions = {}) {
  const {cookie = process.env.JENKINS_COOKIE, cookieOption} = options;
  const context = await browser.newContext();
  // 转换并且设置cookie
  console.log(`${"".padEnd(20,"-")}cookie${"".padEnd(20,"-")}`)
  console.log(cookie)
  console.log(`${"".padEnd(20,"-")}cookie${"".padEnd(20,"-")}`)
  if (typeof cookie === "string" && cookie.trim().length !== 0) {
    await context.addCookies(parseCookies(cookie.trim(), cookieOption))
  }
  return await context.newPage();
}

export default genPage;
