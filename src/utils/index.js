/* eslint-disable */

/**
 * 更新浏览器标题
 * @param {string} title 标题
 */
export function updateTitle (title = '自然资源App') {
  window.document.title = title
}

/**
 * 判断是否为空
 * @param {string} string 字符串
 */
export function isEmpty (string) {
  return string === '' || string === null || string === undefined
}

/**
 * 判断对象是否为空
 * @param {object} obj 对象
 */
export function isEmptyObject (obj) {
  return Object.keys(obj).length === 0
}

/**
 * localstorage写入本地缓存
 *
 * @param {*} key key名
 * @param {*} value 值
 */
export function setLocalS(key, value) {
  localStorage.setItem(key, value)
}

/**
 * localstorage获取本地缓存
 *
 * @param {*} key key名
 */
export function getLocalS(key) {
  const res = localStorage.getItem(key)
  if (res && res !== 'null') return res
  else return false
}

/**
 * localstorage删除本地储存
 *
 * @param {*} key key名
 */
export function delLocalS(key) {
  localStorage.removeItem(key)
}

/**
 * localstorage清空所有本地储存
 */
export function clearLocalS() {
  localStorage.clear()
}