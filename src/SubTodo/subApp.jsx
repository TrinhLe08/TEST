import { ThemeContext, VipContext } from '../Context/ThemContext';
import { useContext } from 'react';

export default function SubTodo({Todo,name,checkAll}){
    const Vip = useContext(VipContext)

    function Click(){
        checkAll()
    }
    return(
        <div className="Sub">
            <input type="checkbox" className= {`check${name}`} id="check" onClick = {Click} />
            <p className={`work${name}`}>{Todo.work}</p>
        </div>
    )
}