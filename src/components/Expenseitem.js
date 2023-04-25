import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./Expenseitem.css";
import "./Card.css";
import Card from "./Card";
function Expenseitem(props) {
  function onclickhandler() {
    console.log("clicked");
  }

  const [currentamount, updatedamount] = useState(props.amount);

  function onamounthandler() {
    updatedamount(currentamount + 100);
  }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          
          <ExpenseDetails
            amount={currentamount}
            location={props.location}
          ></ExpenseDetails>
        </div>
        <button onClick={onclickhandler}>Delete</button>
        <button onClick={onamounthandler}>Change Amount</button>
      </Card>
    </li>
  );
}
export default Expenseitem;
