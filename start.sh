# 创建目录
mkdir -p browsers/chromium-1000/chrome-linux
# 浏览器创建软连接
ln -s /usr/bin/google-chrome browsers/chromium-1000/chrome-linux/chrome
# 装包
npm install
# 运行测试
PLAYWRIGHT_BROWSERS_PATH=browsers npx playwright test
