export default function purchaseTicketId(state="",action){
    if(action.type==="TICKET PURCHASE"){
        if(action.setModalOpen){
            action.setModalOpen()
        }
        return action.payload
    }
    return state
}