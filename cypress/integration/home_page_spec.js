describe('login component', function() {

  it('could login successfully', function() {
    // cypress.json下配置的baseUrl为http://localhost:8080
    // 这一步就直接跳转首页了
    cy.visit('/') 

    // 断言当前的登陆状态是否为flase
    // 首先找到class为mr-md-3的三个a标签
    // 然后判断第三个a标签的text是否为false
    cy.get('.mr-md-3 > a')
      .should(($as) => {
        expect($as.eq(2)).to.contain('false')
      })

    // 判断log in按钮是否可见，然后点击跳转至登陆页
    cy.get('.btn-outline-primary')
      .contains('log in')
      .should('be.visible')
      .click()

    // 账号输入admin，密码输入password
    cy.get('input[name=login]').type('admin')
    cy.get('input[name=password]').type('password')

    // 获取验证码按钮上的内容并输入到验证码输入框中
    cy.get('#checkbutton').invoke('text').then((checkcode) => {
      cy.get('input[name=checkcode]').type(checkcode)
    })

    // 点击登陆按钮
    cy.get('#loginbutton').click()

    // 点击跳转成功提示上的确认按钮
    cy.get('.el-button--small').click()

    // 断言当前的url是否包含/firstpage，即是否跳回到主页
    cy.url().should('include', '/firstpage')

    // 断言当前登陆状态是否为true
    cy.get('.mr-md-3 > a')
      .should(($as) => {
        expect($as.eq(2)).to.contain('true')
      })
  })

})
