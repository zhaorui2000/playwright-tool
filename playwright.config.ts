import {PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 5 * 60 * 1000,
  reporter: [['html', {open: 'never', outputFolder: `/home/sftcwl/odp_ohs8139/webroot/fe/${process.env.JENKINS_ID}`, }]],
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
