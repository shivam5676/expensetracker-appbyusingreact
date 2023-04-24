import Expenseitem from "./components/Expenseitem";
import Expenseform from "./components/Expenseform";
import NewExpense from "./components/NewExpense";
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
      <Expenseitem
        location={expenses[0].location}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></Expenseitem>
      <Expenseitem
        location={expenses[1].location}
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></Expenseitem>
      <Expenseitem
        location={expenses[2].location}
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></Expenseitem>
      
      <NewExpense onAddExpense={addExpensehandler}></NewExpense>
      
    </div>
  );
}

export default App;
