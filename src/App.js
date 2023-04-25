import React,{useState} from "react";
import NewExpense from "./components/NewExpense";
import Expenses from "./components/Expenses";


const dummydata=[
  {
    id:"e1",
    title: "food",
    amount: 10,
    location: "america",
    date: new Date(2021, 5, 14),
  },
  {
    id:"e2",
    title: "movie",
    amount: 20,
    location: "russia",
    date: new Date(2022, 3, 19),
  },
  {
    id:"e3",
    title: "PETROL",
    amount: 20,
    location: "japan",
    date: new Date(2022, 3, 19),
  },
];



function App() {
 const[expenses,setexpenses] =useState(dummydata);
  

  const addExpensehandler=(expense)=>{
setexpenses((prevxepense)=>{
  return[expense,...prevxepense]
})
  }
  return (
    <div>
      <Expenses items={expenses}></Expenses>
      
      <NewExpense onAddExpense={addExpensehandler}></NewExpense>
      
    </div>
  );
}

export default App;
