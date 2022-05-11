# 创建目录
mkdir -p browsers/chromium-1000/chrome-linux
# 浏览器创建软连接
ln -s /usr/bin/google-chrome browsers/chromium-1000/chrome-linux/chrome
# 装包
npm install
# 运行
# --- jenkins中参数
project=${project} #项目名称
tags=${tags}       #自定义标签
cookie=${cookie}   #cookie
# --- DONE jenkins中参数
# --- 获取命令行参数
while [ $# -gt 0 ]; do
  case "$1" in
  --id)
    id=$2
    shift
    break
    ;;
  esac
done
# --- DONE 获取命令行参数
# --- 处理参数
transformTags() {
  str=$*
  # -g 后面的的参数 自动帮忙加 -g
  if [ -z "$str" ]; then
    tags=""
  else
    tags=" -g "${str/ /|}
  fi
}
transformTags $tags
echo $tags
# --- DONE 处理参数
# --- 运行测试
PLAYWRIGHT_BROWSERS_PATH=browsers JENKINS_ID=$id JENKINS_COOKIE=$cookie npx playwright test tests/${project} ${tags} --config=playwright.jenkins.config.ts
# --- DONE 运行测试
