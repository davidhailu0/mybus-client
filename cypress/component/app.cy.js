import App from '../../src/App'
import {mount} from '@cypress/react18'

describe('Frontpage Test', () => {
  it('renders the frontpage', () => {
    mount(<App/>)
    cy.contains("Hello From Docker").should("be.visible")
  })
})
