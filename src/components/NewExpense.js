import Expenseform from "./Expenseform";

const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>
    {
        const storeddata={
            ...enteredExpenseData
        }
       props.onAddExpense(storeddata);
    }
    return(
        <div className="new-expense">     
        
        <Expenseform onSaveExpenseData={saveExpenseDataHandler}></Expenseform>
        
           </div>
    )
}
export default NewExpense;