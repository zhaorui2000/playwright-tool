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
  OLD_IFS="$IFS"
  IFS=" "
  array=($*)
  IFS="$OLD_IFS"
  str=""
  for ((i = 0; i < ${#array[@]}; i++)); do
    if (($i == 0)); then
      str=${array[0]}
    else
      str=$str"|"${array[$i]}
    fi
  done
  tags=$str
  return 0
}
transformTags $tags
echo $tags
# --- DONE 处理参数
# --- 运行测试
PLAYWRIGHT_BROWSERS_PATH=browsers JENKINS_ID=$id npx playwright test ${project} -g ${tags}
# --- DONE 运行测试
