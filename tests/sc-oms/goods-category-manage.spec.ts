import {test} from '@playwright/test';
import genPage from "../../utils/gen-page";
import GoodsCategoryManage from "./modules/goods-category-manage";

const baseURL = "http://10.189.72.85:8501"
test.use({
  baseURL
})
test('test', async ({browser}) => {
  const page = await genPage(browser, {
    cookieOption: {domain: "10.189.72.85"}
  });
  const goodsCategoryManage = new GoodsCategoryManage(page);
  await goodsCategoryManage.navigate()
  await goodsCategoryManage.testAddModelDom()
});
