import { useState } from "react";
import Expenseform from "./Expenseform";
import "./NewExpense.css";

const NewExpense=(props)=>{

    const[isEditing,setIsEditing]=useState(false)
    const saveExpenseDataHandler=(enteredExpenseData)=>
    {
        const storeddata={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
       props.onAddExpense(storeddata);
    }
    const startEditingHandler=()=>{
        setIsEditing(true);
    }
const stopEditingHandler=()=>{
    setIsEditing(false)
}

    let handles=<button onClick={startEditingHandler}>ADD NEW EXPENSE</button>
    if(isEditing)
    {
        handles= <Expenseform onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></Expenseform>
    }
    return(
        <div className="new-expense">     
        
        {handles}
        
           </div>
    )
}
export default NewExpense;