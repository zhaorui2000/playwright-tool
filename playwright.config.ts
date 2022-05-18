import {PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 30 * 1000,
  reporter:"html",
  use: {
    locale: "zh-CN",
    screenshot: "on",
    video: "on",
    trace: "on"
  },
};
export default config;
