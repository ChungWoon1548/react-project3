import React, { useState } from "react";
import "./App.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseList from "./ExpenseList/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <div className="App">
      <h1>가계부 웹 어플리케이션</h1>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
