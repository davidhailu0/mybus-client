
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
        cy.get('li[data-value="Bahir Dar"]').click().then(()=>{
            cy.get("div[aria-labelledby='Destination Destination_id']>div>div").should("have.text","Bahir Dar")
        })
    })

    it("Navigates to Homepage on For Passengers button clicked",()=>{
        cy.contains("MY BUS").click().then(()=>{
            cy.url().should("eq","http://localhost:3000/")
        })
    })

    it("Navigates to Homepage on For Passengers button clicked",()=>{
        cy.get(`.For_Passengers`).should("be.visible").click().then(()=>{
            cy.url().should("eq","http://localhost:3000/")
        })
    })

    it("search field should type",()=>{
        cy.get("input[placeholder='Enter Your Ticket ID']").click().type("2pzzkx7s1xdq2cja").should("have.value","2pzzkx7s1xdq2cja")
    })
    
    it("should go to search ticket page on click",()=>{
        cy.get("input[placeholder='Enter Your Ticket ID']").click().type("2pzzkx7s1xdq2cja")
        cy.get(".ant-input-search-button").click()
        cy.url().should("include","/ticketSearch/2pzzkx7s1xdq2cja")
    })

    it("search button should be visible",()=>{
        cy.get(".ant-input-search-button").should("be.visible")
    })

    it("date should have default value",()=>{
        // cy.get("input[placeholder='mm/dd/yyyy']").type("08/13/1999{enter}").should("have.value","08/13/1999")
        const tomorrowDate = new Date()
        tomorrowDate.setDate(tomorrowDate.getDate()+1)
        cy.get(`button>p`).contains(tomorrowDate.getUTCDate().toString()).click()
        const tomorrowDateFormatted = tomorrowDate.getUTCDate().toString().length==2?tomorrowDate.getUTCDate().toString():`0${tomorrowDate.getUTCDate().toString()}`
        const tomorrowMonthFormatted = (tomorrowDate.getUTCMonth()+1).toString().length==2?(tomorrowDate.getUTCMonth()+1).toString():`0${(tomorrowDate.getUTCMonth()+1).toString()}`
        cy.get("input[placeholder='mm/dd/yyyy']").should("have.value",`${tomorrowMonthFormatted}/${tomorrowDateFormatted}/${tomorrowDate.getUTCFullYear()}`)
    })

    it("pick date from the available dates",()=>{
        cy.get(`svg[data-testid="CalendarIcon"]`).parent().click()
        cy.get("button[role='gridcell'][aria-selected='true']").click()
        cy.get("input[placeholder='mm/dd/yyyy']").should("not.be.null")
    })

    it("pick date from the available buttons",()=>{
        const tomorrowDate = new Date()
        tomorrowDate.setDate(tomorrowDate.getDate()+1)
        cy.get(`button>p`).contains(tomorrowDate.getUTCDate().toString()).click()
        const tomorrowDateFormatted = tomorrowDate.getUTCDate().toString().length==2?tomorrowDate.getUTCDate().toString():`0${tomorrowDate.getUTCDate().toString()}`
        const tomorrowMonthFormatted = (tomorrowDate.getUTCMonth()+1).toString().length==2?(tomorrowDate.getUTCMonth()+1).toString():`0${(tomorrowDate.getUTCMonth()+1).toString()}`
        cy.get("input[placeholder='mm/dd/yyyy']").should("have.value",`${tomorrowMonthFormatted}/${tomorrowDateFormatted}/${tomorrowDate.getUTCFullYear()}`)
    })

    it("navigates to Bus Page",()=>{
        cy.get(`.For_Buses`).should("be.visible").click().then(()=>{
            cy.url().should("eq","http://localhost:3000/forBus")
        })
    })

    it("search for available trips",()=>{
        cy.wait(3000).then(()=>{
            cy.get("div[aria-labelledby='Leaving From Leaving From_id']").click()
            cy.get(`li[data-value="Addis Ababa"]`).click()
            cy.get("div[aria-labelledby='Destination Destination_id']").click()
            cy.get('li[data-value="Bahir Dar"]').click()
            cy.get(`svg[data-testid="CalendarIcon"]`).parent().click()
            cy.get("button[role='gridcell'][aria-selected='true']").click()
            cy.get(`button[testbutton="search_button"]`).should("be.visible").click()
            cy.url().should("include","starting_place=Addis%20Ababa&destination=Bahir%20Dar")
        })
    })
})