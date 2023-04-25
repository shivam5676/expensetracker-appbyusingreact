import React, { useState } from "react";

import Expenseitem from "./Expenseitem";
import "./Expenses.css";
import Card from "./Card";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  let expensecontent = <p>no content found</p>;
  if (filteredExpenses.length === 1) {
    expensecontent = filteredExpenses.map((expense) => {
      return (
        <div>
          <Expenseitem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
          <p>"Only single Expense here. Please add more..."</p>
        </div>
      );
    });
  }

  if (filteredExpenses.length > 1) {
    expensecontent = filteredExpenses.map((expense) => {
      return (
        <Expenseitem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      );
    });
  }
  return (
    <div>
      <Card>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        {expensecontent}
      </Card>
    </div>
  );
};

export default Expenses;
