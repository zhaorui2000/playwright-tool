import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  timeout: 1 * 60 * 1000,
  use: {
    locale: "zh-CN",
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
    trace: "on",
    screenshot: "on",
    video: "on",
  },
};
export default config;
