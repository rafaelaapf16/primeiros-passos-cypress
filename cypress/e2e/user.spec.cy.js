import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Test', () => {


  
  it('User Infor Update - Sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), 'MiddleNameTest',chance.last())
    myInfoPage.fillEmployeeDetails('EmployeeId', 'OtherIdTest', 'DrivesLicenseTest', '2026-01-02')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()


  })


    it('Login Fail', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
      loginPage.checkAccessInvalid()
  })
})