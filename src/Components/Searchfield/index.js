import { Input } from 'antd';
import "./searchField.css"

const { Search } = Input;

export default function SearchBar({callBackOnSearch,setSearchValue,error}){
    return (<div style={{textAlign:"center"}}><Search
        placeholder="Enter Your Ticket ID"
        allowClear
        enterButton="Search"
        size="large"
        status={error?'error':''}
        onSearch={callBackOnSearch}
        onChange={(e)=>setSearchValue(e.target.value)}
        style={{margin:"5rem 0 1rem",width:"50vw"}}
        testbutton="search_ticket"
      /></div>);
}
