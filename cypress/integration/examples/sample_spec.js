/// <reference types="Cypress" />

describe('My First Test', function() {
  it('clicks the link tyo', function() {
    cy.visit('https://example.cypress.io')

    cy.pause()

    cy.contains('type').click()

    // 应该存在一个包含'/commands/actions'的新URL
    cy.url().should('include', '/commands/actions')

    // 获取一个输入, 输入进去并且验证文本值已经更新了
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})