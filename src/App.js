import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

import ExpenseItem from './components/ExpenseItem'
import NewExpense from './components/Expense/NewExpense'

function App() {
  const demo_expenses = [
      { title: 'title1', amount: 100, date: new Date()},
      { title: 'title2', amount: 100, date: new Date()},
      { title: 'title3', amount: 100, date: new Date()}
    ];
  const [expenses, setExpenses] = useState(demo_expenses);
  const expenseItem = (expense) => {
    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
  }
  const AddExpenseHandler = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  }
  return (
    <div>
      <NewExpense addExpense={AddExpenseHandler}></NewExpense>
      {expenses.map(expense => ExpenseItem(expense))}
    </div>
  );
}

export default App;
