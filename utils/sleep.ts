/**
 * 等待多少毫秒
 * @param time 毫秒
 */
function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}
export default sleep;
