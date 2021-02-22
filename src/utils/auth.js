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


// 正则验证
/* 验证账号 */
export function validateUsername(rule, value, callback) {
  if (value.length < 6 || value.length > 20) {
    return callback(new Error('用户名不得小于6个或大于20个字符!'))
  } else {
    callback()
  }
}

/* 验证密码 */
export function validatePass(rule, value, callback) {
  if (value.length < 6) {
    return callback(new Error('密码不得小于6位'))
  } else {
    callback()
  }
}
