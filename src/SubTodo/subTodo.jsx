import { GoTrash } from "react-icons/go";

import { ThemeContext, VipContext } from '../Context/ThemContext';
import { useContext } from 'react';

export default function SubTodo({Todo,index}){

    const Vip = useContext(VipContext)

    const Click = () => {
        Vip.checkCom(Todo)
    }

    const ClickDelete = () => {
        Vip.ClickDelete(Vip.com,index)
    }

    return(
        <div className="Sub">
            <input type="checkbox" className="check" id = 'check' onClick = {Click}/>
            <p className="work" >{Todo.work}</p>
            
                < GoTrash className="delete" onClick = {ClickDelete}/>

             
            
        </div>
    )
}