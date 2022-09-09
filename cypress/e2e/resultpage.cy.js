
describe("Testing the result page",()=>{

    beforeEach(()=>{
        cy.visit("http://localhost:3000/searchResult?starting_place=Addis%20Ababa&destination=Bahir%20Dar&date=1661979600000")
    })

    it("setting leaving From to Addis Ababa",()=>{
        cy.get("div[aria-labelledby='Leaving From Leaving From_id']>div>div").should("have.text","Addis Ababa")
    })

    it("setting destination to Bahir Dar",()=>{
        cy.get("div[aria-labelledby='Destination Destination_id']>div>div").should("have.text","Bahir Dar")
    })

    it("setting date to the URL specified",()=>{
        cy.get("input[placeholder='mm/dd/yyyy']").should("have.value","09/01/2022")
    })

    it("Search result should be visible",()=>{
        cy.contains("Search Result").should("be.visible")
    })

    it("search card should be there",()=>{
        cy.get(`[testcomponent="resultcard"]`).contains("Addis Ababa").should("have.text","Addis Ababa")
        cy.get(`[testcomponent="resultcard"]`).contains("Bahir Dar").should("have.text","Bahir Dar")
        cy.get(`[testcomponent="bookticket"]`).should("be.visible")
    })

    it("should book ticket when clicked",()=>{
        cy.get("button[testbutton='bookticket']").click()
        cy.get("div[role='dialog']").should("be.visible")
    })
})