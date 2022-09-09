describe("Ticket detail Page Test",()=>{

    it("Valid Ticket id Detail is shown",()=>{
        cy.visit("http://localhost:3000/ticketSearch/2pzzkx7s1xdq2cja").then(()=>{
            cy.contains("ID")
            cy.contains("2pzzkx7s1xdq2cja")
            cy.contains("From")
            cy.contains("Addis Ababa")
            cy.contains("To")
            cy.contains("Bahir Dar")
            cy.contains("Date")
            cy.contains("Wed Aug 10 2022")
            cy.contains("Price")
            cy.contains("1200")
        })
    })

    it("Invalid ticket detail page",()=>{
        cy.visit("http://localhost:3000/ticketSearch/invalidTicketID").then(()=>{
            cy.contains("There is no trip with this ID")
        })
    })
})