import Appbar from '../../src/Layouts/appbar'
import {mount} from '@cypress/react18'

describe('Appbar Test', () => {
    
  it('Appbar should have logo', () => {
    mount(<Appbar/>)
    cy.get("img[alt='For Bus Logo']").should("be.visible")
  })

  it("Checks the App logo Text",()=>{
    mount(<Appbar/>)
    cy.contains("MY BUS").should("be.visible")
  })

  it("Navigates to Homepage",()=>{
    mount(<Appbar/>)
    cy.contains("FOR PASSENGERS").click().then(()=>{
      cy.url().should("have.text","http://localhost:3000/")
    })
  })

  it("Naviagtes to Bus Company",()=>{
    mount(<Appbar/>)
    cy.contains("FOR BUSES").click().then(()=>{
      cy.url().should("have.text","http://localhost:3000/forBus")
    })
  })
})
