import { useState } from "react";
import "./Expenseitem.css";
function Expenseform(props) {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredLocation, setEnteredLocation] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");

  function titlehandler(event) {
    setEnteredTitle(event.target.value);
  }
  function amounthandler(event) {
    setEnteredAmount(event.target.value);
  }

  function locationhandler(event) {
    setEnteredLocation(event.target.value);
  }
  function datehandler(event) {
    setEnteredDate(event.target.value);
  }
  function onsubmitdatahandler(event) {
    event.preventDefault();
    const storeddata = {
      
      title: EnteredTitle,
      amount: EnteredAmount,
      location: EnteredLocation,
      date: new Date(EnteredDate),
    };
    props.onSaveExpenseData(storeddata);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredLocation("");
  }
  
  return (
    <form onSubmit={onsubmitdatahandler}>
      <div className="expense-item h2">
        <label>expense title</label>
        <input
          type="text"
          value={EnteredTitle}
          onChange={titlehandler}
          required
        ></input>
        <label>expense amount</label>

        <input
          type="number"
          value={EnteredAmount}
          onChange={amounthandler}
          required
        ></input>
        <label>location</label>
        <input
          type="text"
          value={EnteredLocation}
          onChange={locationhandler}
          required
        ></input>
        <label>expense date</label>
        <input
          type="date"
          
          value={EnteredDate}
          onChange={datehandler}
          required
        ></input>
        <button type="button" onClick={props.onCancel}>CANCEL</button>
        <button>ADD EXPENSE</button>
      </div>
    </form>
  );
}
export default Expenseform;
