import { Input } from 'antd';
import { useCookies } from 'react-cookie';
import translateWord from '../../utils/languageTranslation';
import "./searchField.css"

const { Search } = Input;

export default function SearchBar({callBackOnSearch,setSearchValue,setError,error}){
  const [cookie] = useCookies(["lang"])
  const changeValue = (value)=>{
    setError(false)
    setSearchValue(value)
  }
    return (<div style={{textAlign:"center"}}><Search
        placeholder={translateWord(cookie["lang"],"Enter Your Ticket ID")}
        allowClear
        enterButton={translateWord(cookie["lang"],"Search")}
        size="large"
        status={error?'error':''}
        onSearch={callBackOnSearch}
        onChange={(e)=>changeValue(e.target.value)}
        style={{margin:"5rem 0 1rem",width:"75vw"}}
        testbutton="search_ticket"
      /></div>);
}
