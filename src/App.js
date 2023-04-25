import Expenseitem from "./components/Expenseitem";
import Expenseform from "./components/Expenseform";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      title: "food",
      amount: 10,
      location: "america",
      date: new Date(2021, 5, 14),
    },
    {
      title: "movie",
      amount: 20,
      location: "russia",
      date: new Date(2022, 3, 19),
    },
    {
      title: "PETROL",
      amount: 20,
      location: "japan",
      date: new Date(2022, 3, 19),
    },
  ];

  const addExpensehandler=(expense)=>{
console.log(expense)
  }
  return (
    <div>
      <Expenses items={expenses}></Expenses>
      
      <NewExpense onAddExpense={addExpensehandler}></NewExpense>
      
    </div>
  );
}

export default App;
