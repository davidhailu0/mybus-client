import { DatePicker} from 'antd';
import React from 'react';
import "./ranger.css"
const { RangePicker } = DatePicker;

export default function DateRangePicker({handleChange,error}){
    return (<RangePicker testbutton={"range_picker"} placeholder={["From","Upto"]} disabledDate={(currentDate)=>Date.now()-currentDate.valueOf()>86400000} style={{width:"96%",height:"3.5rem",color:"grey",borderRadius:"5px",marginLeft:"7px",background:"#f5f5f5",borderColor:error?"red":"#b5b5b5"}} className="rangePicker_class" onChange={handleChange}/>);
}