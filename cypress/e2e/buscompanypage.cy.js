
describe("Testing the bus company page",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/forBus")
    })
    it("displays the Web App Logo",()=>{
        cy.get("img[alt='My Bus Logo']").should("be.visible")
    })

    it("displays the Web app header",()=>{
        cy.contains("MY BUS").should("be.visible")
    })

    it("Navigates to Homepage on For Passengers button clicked",()=>{
        cy.contains("MY BUS").click().then(()=>{
            cy.url().should("eq","http://localhost:3000/")
        })
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

    it("pick the current date",()=>{
        cy.get(`.rangePicker_class`).click()
        const todayDate = new Date()
        const todayDayaddedZero = todayDate.getUTCDate().toString().length===2?todayDate.getUTCDate():`0${todayDate.getUTCDate()}`
        const todayMonthAddedZero = (todayDate.getUTCMonth()+1).toString().length===2?todayDate.getUTCMonth()+1:`0${(todayDate.getUTCMonth()+1)}`
        const todayDateFormatted = `${todayDate.getFullYear()}-${todayMonthAddedZero}-${todayDayaddedZero}`
        const tomorrowDate = new Date()
        tomorrowDate.setDate(todayDate.getDate()+1)
        const tomorrowDayAddedZero = tomorrowDate.getUTCDate().toString().length===2?tomorrowDate.getUTCDate():`0${tomorrowDate.getUTCDate()}`
        const tomorrowMonthAddedZero = (tomorrowDate.getUTCMonth()+1).toString().length===2?tomorrowDate.getUTCMonth()+1:`0${(tomorrowDate.getUTCMonth()+1)}`
        const tomorrowDateFormatted = `${tomorrowDate.getFullYear()}-${tomorrowMonthAddedZero}-${tomorrowDayAddedZero}`
        cy.get(`td[title="${todayDateFormatted}"]`).click()
        cy.get(`td[title="${tomorrowDateFormatted}"]`).click()
    })

    it("enter the ticket price",()=>{
        cy.get(`input[type="number"]`).click().type("700")
        cy.get("body").click()
        cy.get(`input[type="number"]`).should("have.value","700")
        cy.get(`input[type="number"]`).click().type("{uparrow}{uparrow}").should("have.value","702")
    })    

    it("add trip to the database",()=>{
        cy.get(`[testbutton="addtrip"]`).should("be.visible")
    })
})