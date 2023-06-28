
import { useState, useEffect, useRef } from 'react'

import { useContext, createContext } from "react"
        


const VipContext = createContext()

function ThemeContext({children}) {

    const [all,setAll] = useState([
        {
           work : ' Do code challenges',
           id: 0
        }, {
            work : ' Do code challenges'
            ,id : 1
         }, {
            work : ' Do code challenges'
            ,id : 2
         }
    ])

    const [active,setActive] = useState([
        {
           work : ' Do code challenges',
           id: 0
        }, {
            work : ' Do code challenges'
            ,id : 1
         }
    ])

    const [com,setCom] = useState([
        {
           work : ' Task Done',
           id: 0,
           checked: false
        }, {
            work : ' Task Done'
            ,id : 1,
            checked: false
         }, {
            work : ' Task Done'
            ,id : 2,
            checked: false
         }
    ])

  
    let CheckAll = useRef(null)
    let CheckActive = useRef(null)
    let CheckCom = useRef(null)
    let Text = useRef(null)
    let Text1 = useRef(null)
    let WorkAll = useRef(null)
    let WorkActive = useRef(null)
    let WorkCom = useRef(null)
    let Delete = useRef(null)
    let Array = useRef(null)

    useEffect(() => {
          Text.current = document.querySelector('.text')
          Text1.current = document.querySelector('.text1')
          CheckCom.current = document.querySelectorAll('.check')
          CheckAll.current = document.querySelectorAll('.checkall')
          CheckActive.current = document.querySelectorAll('.checkactive')
          WorkAll.current = document.querySelectorAll('.workall')
          WorkActive.current = document.querySelectorAll('.workactive')
          WorkCom.current = document.querySelectorAll('.work')

          Delete.current = document.querySelectorAll('.delete')
    },[all,active,com])



//Add All-->
    function ADD(){
        if (Text.current.value != '') {
            const newWork = { work: Text.current.value };
            setAll([...all, newWork]);
            console.log(WorkAll.current);
        }
    }
//Add Active-->
    function ADD2(){
        if (Text1.current.value != '') {
            const newWork = { work: Text1.current.value };
            setActive([...active, newWork]);
            console.log(WorkAll.current);
        }
    }


    function checkAll(){
                   
        CheckAll.current.forEach( (check,index) => {
         
            if (check.checked) {  
                console.log(WorkAll.current[index]);
                    WorkAll.current[index].style = 'text-decoration: line-through';                  
                  }else{
                    WorkAll.current[index].style = 'text-decoration: none';
                  }
    
          })
    }

    function checkActive(){
                   
              CheckActive.current.forEach( (check,index) => {

                if (check.checked) {
                WorkActive.current[index].style = 'text-decoration: line-through'
               
               }else{
                 WorkActive.current[index].style = 'text-decoration: none';
               }
             
        })
    }

    //--> Completed


    const [delet,setDelet] = useState([])
   

    function checkCom(value){

        setDelet(
            [...delet,value]
        );
       
        
        CheckCom.current.forEach( (check,index) => {
           
               
                        if (check.checked) {
                        WorkCom.current[index].style = 'text-decoration: line-through'
                          }else{
                        WorkCom.current[index].style = 'text-decoration: none';
                          }
                      
         
                })
    }


    function ClickDelete(index, number){

        CheckCom.current.forEach( (check) => {
            if (check.checked) {
                const newItems = [...index]; 
                console.log(newItems);
                newItems.splice(number, 1); 
                CheckCom.current[number].checked = false
                WorkCom.current[number].style = 'text-decoration: none'
                setCom(newItems); 
                console.log(number);

            }
        })

        
    }


    function DeleteChecked() {

        CheckCom.current.forEach( (check,index) => {
            if (check.checked) {
                CheckCom.current[index].checked = false
                WorkCom.current[index].style = 'text-decoration: none'
            }
        })
        
        let subArray = com.filter(item => !delet.includes(item));
      
        setCom(subArray)
      }

    const Value = {
        all,
        active,
        com,
        setCom,
        ADD,
        ADD2,
        checkAll,
        checkActive,
        checkCom,
        ClickDelete,
        DeleteChecked,
        
    }

    return (
        <VipContext.Provider value = {Value}>
          {children}
        </VipContext.Provider>
      )
    }
    
    export { ThemeContext, VipContext };
