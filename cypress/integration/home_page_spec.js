describe('login component', function() {

  it('could login successfully', function() {
    // cypress.json下配置的baseUrl为http://localhost:8080
    // 这一步就直接跳转首页了
    cy.visit('/') 

    // 断言当前的登陆状态是否为flase
    // 首先找到class为mr-md-3的三个a标签
    // 然后判断第三个a标签的text是否为false
    cy.get('[data-cy=jglogin]')
      .should(($torf) => {
        expect($torf).to.contain('false')
      })

    // 判断log in按钮是否可见，然后点击跳转至登陆页
    cy.get('[data-cy=loginbtn]')
      .contains('log in')
      .should('be.visible')
      .click()

    // 直接点击登陆按钮
    cy.get('[data-cy=logbtn]').click()

    // 期望能弹出来警告框
    cy.get('.el-message-box__title > span')
      .should(($warn) => {
        expect($warn).to.contain('账号/密码错误')
      })
    
    // 点击确认按钮
    cy.get('.el-message-box__btns > .el-button > span').click()

    // 账号输入admin，密码输入password
    cy.get('input[name=login]').type('admin')
    cy.get('input[name=password]').type('password')

    // 获取验证码按钮上的内容并输入到验证码输入框中
    cy.get('[data-cy=checkbtn]').invoke('text').then((checkcode) => {
      cy.get('input[name=checkcode]').type(checkcode)
    })

    // 点击登陆按钮
    cy.get('[data-cy=logbtn]').click()

    // 点击跳转成功提示上的确认按钮
    cy.get('.el-button--small').click()

    // 断言当前的url是否包含/firstpage，即是否跳回到主页
    cy.url().should('include', '/firstpage')

    // 断言当前登陆状态是否为true
    cy.get('[data-cy=jglogin]')
      .should(($as) => {
        expect($as).to.contain('true')
      })
  })

})
