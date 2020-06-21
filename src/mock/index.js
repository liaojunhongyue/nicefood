const Mock = require('mockjs')
const appData = require('../../data.json')

const menuData = appData.menuData
const hotData = appData.hotData
const currentSeasonData = appData.currentSeasonData
const foodCategoryData = appData.foodCategoryData
const findData = appData.findData
const challengeData = appData.challengeData
const userData = appData.userData

Mock.mock('/api/menuData', 'get', () => {
  return {
    code: 0,
    message: 'success',
    data: menuData
  }
})

Mock.mock('/api/hotData', 'get', () => {
  return {
    code: 0,
    message: 'success',
    data: hotData
  }
})

Mock.mock('/api/currentSeasonData', 'get', () => {
  return {
    code: 0,
    message: 'success',
    data: currentSeasonData
  }
})

Mock.mock('/api/foodCategoryData', 'get', () => {
  return {
    code: 0,
    message: 'success',
    data: foodCategoryData
  }
})

Mock.mock('/api/findData', 'get', () => {
  return {
    code: 0,
    message: 'success',
    data: findData
  }
})

Mock.mock('/api/challengeData', 'get', () => {
  return {
    code: 0,
    message: 'success',
    data: challengeData
  }
})

Mock.mock('/api/userData', 'get', () => {
  return {
    code: 0,
    message: 'success',
    data: userData
  }
})

Mock.mock('/api/login', 'post', () => {
  return {
    code: 0,
    message: 'success',
    data: 'testToken'
  }
})

Mock.mock('/api/logout', 'post', () => {
  return {
    code: 0,
    message: 'success',
    data: null
  }
})

export default Mock
