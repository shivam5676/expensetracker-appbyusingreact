import "./Expenseitem.css"

function ExpenseDetails(props) {
 
  
  return (
    <div className="expense-item__price">
      <div className="expense-item__price">{props.amount}</div>
      <div className="expense-item__price">{props.location}</div>
      
    </div>
  );
}
export  default ExpenseDetails;
