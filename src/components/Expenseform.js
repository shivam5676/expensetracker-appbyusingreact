import { useState } from "react";
import Expenseitem from "./Expenseitem";

import "./Expenseitem.css";
import NewExpense from "./NewExpense";
function Expenseform(props) {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");

  function titlehandler(event) {
    setEnteredTitle(event.target.value);
  }
  function amounthandler(event) {
    setEnteredAmount(event.target.value);
  }
  function datehandler(event) {
    setEnteredDate(event.target.value);
  }
  function onsubmitdatahandler(event) {
    event.preventDefault();
    const storeddata = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };
props.onSaveExpenseData(storeddata);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }
  return (
    <form onSubmit={onsubmitdatahandler}>
      <div className="expense-item h2">
        <label>expense title</label>
        <input type="text" value={EnteredTitle} onChange={titlehandler}></input>
        <label>expense amount</label>
   
        <input type="number" value={EnteredAmount} onChange={amounthandler}></input>
        <label>expense date</label>
    
        <input type="date" value={EnteredDate} onChange={datehandler}></input>
        <button>submit</button>
      </div>
      
    </form>
  );
}
export default Expenseform;
