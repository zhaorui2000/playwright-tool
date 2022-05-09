# 创建目录
mkdir -p browsers/chromium-1000/chrome-linux
# 浏览器创建软连接
ln -s /usr/bin/google-chrome browsers/chromium-1000/chrome-linux/chrome
# 装包
npm install
# 运行
# --- 获取参数
while [ $# -gt 0 ]; do
  case "$1" in
  -a | --args)
    args=$2
    shift
    break
    ;;
  --id)
    id=$2
    shift
    break
    ;;
  esac
done
# --- DONE 获取参数
# --- 运行测试
PLAYWRIGHT_BROWSERS_PATH=browsers JENKINS_ID=$id npx playwright test $args
# --- DONE 运行测试
