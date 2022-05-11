import {PlaywrightTestConfig} from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 60 * 1000,
  reporter: [['html', {open: 'never', outputFolder: `/home/sftcwl/odp_ohs8139/webroot/fe/${process.env.JENKINS_ID}`, }]],
  use: {
    locale: "zh-CN",
    screenshot: "on",
  },
};
export default config;
