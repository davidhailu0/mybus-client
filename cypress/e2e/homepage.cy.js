
describe("Testing the Homepage",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/")
    })
    it("displays the Web App Logo",()=>{
        cy.get("img[alt='My Bus Logo']").should("be.visible")
    })

    it("displays the Web app header",()=>{
        cy.contains("MY BUS").should("be.visible")
    })

    it("select places from leaving drop down",()=>{
        cy.get("div[aria-labelledby='Leaving From Leaving From_id']").click()
        cy.get(`li[data-value="Addis Ababa"]`).click()
        cy.get("div[aria-labelledby='Leaving From Leaving From_id']>div>div").should("have.text","Addis Ababa")
    })

    it("select place from destination drop down",()=>{
        cy.get("div[aria-labelledby='Destination Destination_id']").click()
        cy.get('li[data-value="Bahir Dar"]').click()
        cy.get("div[aria-labelledby='Destination Destination_id']>div>div").should("have.text","Bahir Dar")
    })

    it("Navigates to Homepage on For Passengers button clicked",()=>{
        cy.contains("MY BUS").click().then(()=>{
            cy.url().should("eq","http://localhost:3000/")
        })
    })

    it("navigates to Homepage on For Passengers button clicked",()=>{
        cy.get(`.For_Passengers`).should("be.visible").click().then(()=>{
            cy.url().should("eq","http://localhost:3000/")
        })
    })

    it("enter date to the date picker",()=>{
        cy.get("input[placeholder='mm/dd/yyyy']").type("08/13/1999{enter}").should("have.value","08/13/1999")
    })

    it("pick date from the available dates",()=>{
        cy.get(`svg[data-testid="CalendarIcon"]`).parent().click()
        cy.get("button[role='gridcell'][aria-current='date']").click()
        cy.get("input[placeholder='mm/dd/yyyy']").should("not.be.null")
    })

    it("pick date from the available buttons",()=>{
        const todayDate = new Date()
        cy.get(`button>p`).contains(todayDate.getUTCDate().toString()).click()
        const todayDateFormatted = todayDate.getUTCDate().toString().length==2?todayDate.getUTCDate().toString():`0${todayDate.getUTCDate().toString()}`
        const todayMonthFormatted = (todayDate.getUTCMonth()+1).toString().length==2?(todayDate.getUTCMonth()+1).toString():`0${(todayDate.getUTCMonth()+1).toString()}`
        cy.get("input[placeholder='mm/dd/yyyy']").should("have.value",`${todayMonthFormatted}/${todayDateFormatted}/${todayDate.getUTCFullYear()}`)
    })

    it("navigates to Bus Page",()=>{
        cy.get(`.For_Buses`).should("be.visible").click().then(()=>{
            cy.url().should("eq","http://localhost:3000/forBus")
        })
    })

    it("search for available trips",()=>{
        cy.get("div[aria-labelledby='Leaving From Leaving From_id']").click()
        cy.get(`li[data-value="Addis Ababa"]`).click()
        cy.get("div[aria-labelledby='Destination Destination_id']").click()
        cy.get('li[data-value="Bahir Dar"]').click()
        cy.get(`svg[data-testid="CalendarIcon"]`).parent().click()
        cy.get("button[role='gridcell'][aria-current='date']").click()
        cy.get(`button[testbutton="search_button"]`).should("be.visible").click()
        cy.url().should("include","starting_place=Addis%20Ababa&destination=Bahir%20Dar")
    })
})