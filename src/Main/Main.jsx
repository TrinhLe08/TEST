
import SubApp from '../SubTodo/subApp'
import SubTodo from '../SubTodo/subTodo'
import { useState, useEffect, useRef } from 'react'

import { ThemeContext, VipContext } from '../Context/ThemContext';
import { useContext } from 'react';

export default function Main(){


    const Vip = useContext(VipContext)

     
    
  

    const Todo = useRef(null)

    useEffect(() => {
        Todo.current = document.querySelector('.todo')
    },[])

    const [bAll,setBAll] = useState(1)

    const allB = () => {
        setBAll(1)
        Todo.current.style = ' transform : translate(0px);'
    }
    const activeB = () => {
        setBAll(2)
        Todo.current.style = ' transform : translateX(-500px);'
    }
    const cumB = () => {
        setBAll(3)
        Todo.current.style = ' transform : translateX(-1000px);'
    }


    return(
        <div className="Main">
            <h1>#Todo</h1>

            <div className="menu">
                <button className="button" onClick = {allB} style = { bAll == 1 ? {borderBottom : '4px solid blue'}: {}}>All</button>
                <button className="button" onClick = {activeB} style = { bAll == 2 ? {borderBottom : '4px solid blue'}: {}}>Active</button>
                <button className="button" onClick = {cumB} style = { bAll == 3 ? {borderBottom : '4px solid blue'}: {}}>Completed</button>
            </div>


            <div className="BigBoss">
           <div className='Boss'>
            <div className="todo">
                <div className="all">
            <div className="search">
                <input type="text" className="text"/>
                <button className="add" onClick = {Vip.ADD}> Add</button>
            </div>
                      {
                        Vip.all.map((arr,index) => (
                            <SubApp Todo = {arr} name = 'all' checkAll = {Vip.checkAll } key = {index}/>
                        ))
                      }
                </div>

                <div className="active">

                <div className="search1">
                <input type="text" className="text1"/>
                <button className="add1" onClick = {Vip.ADD2}> Add</button>
            </div>
                {
                        Vip.active.map((arr,index) => (
                            <SubApp Todo = {arr} name = 'active'  checkAll = {Vip.checkActive } key = {index}/>
                        ))
                      }
                </div>


                <div className="com">
                {
                        Vip.com.map((arr,index) => (
                            <SubTodo Todo = {arr} index = {index}/>
                        ))
                      }
                         <button className="deleteButton"
                          onClick = {Vip.DeleteChecked}
                          >Delete All</button>
                </div>
            </div>
           </div>

            </div>

        </div>
    )
}