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

// 验证邮箱
export function validateEmail(rule, value, callback) {
  const emailReg = /^\w+[-+.]*\w*@([a-z0-9A-Z\u2E80-\u9FFF]-?)+(\.\w{2,6})+/
  if (!value) {
    return callback(new Error('邮箱不能为空!!'))
  }
  setTimeout(() => {
    if (!emailReg.test(value)) {
      return callback(new Error('邮箱格式错误'))
    } else {
      callback()
    }
  }, 100)
}

// 验证手机号
export function validatePhone(rule, value, callback) {
  const phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
  if (!value) {
    return callback(new Error('手机号码不能为空!!'))
  }
  setTimeout(() => {
    if (!phoneReg.test(value)) {
      return callback(new Error('手机号码格式错误'))
    } else {
      callback()
    }
  }, 100)
}
