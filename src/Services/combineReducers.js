import { combineReducers } from "redux";
import purchaseTicketId from "./reducers/ticketPurchaseId.reducer";

const allReducers = combineReducers({ticketId:purchaseTicketId})

export default allReducers;