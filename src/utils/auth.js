import Cookies from 'js-cookie'  // 引入cookie
// 先定义一个常量，这样的话方便于后续操作
const TokenKey = 'Admin-Token'
// 设置cookie
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
// 获取cookie
export function getToken() {
  return Cookies.get(TokenKey)
}
// 销毁cookie
export function removeToken() {
  return Cookies.remove(TokenKey)
}