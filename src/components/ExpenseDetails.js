function ExpenseDetails(props) {
 
  
  return (
    <div>
      <div className="expense-item__price">{props.amount}</div>
      <div className="expense-item__price">{props.location}</div>
      
    </div>
  );
}
export  default ExpenseDetails;
