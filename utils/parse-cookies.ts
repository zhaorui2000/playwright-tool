/**
 * 转换document.cookie
 * @param str
 */
export interface ParseCookiesOption {
  url?: string,
  domain?: string,
  path?: string,
  expires?: number,
  httpOnly?: boolean,
  secure?: boolean,
  sameSite?: "Strict" | "Lax" | "None"
}

function parseCookies(str: string = "", option: ParseCookiesOption = {}) {
  let result = []
  str.split(";")?.forEach((item) => {
    const [key, value] = item.split("=")
    result.push({
      name: key.trim(),
      value,
      path: "/",
      sameSite: "Lax",
      "httpOnly": false,
      "secure": false,
      ...option
    })
  })
  return result;
}

export default parseCookies;
