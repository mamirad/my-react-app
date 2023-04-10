import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');
	const changeTitle = (event) => {
		setTitle(event.target.value);
	}
	const changeAmount = (event) => {
		setAmount(event.target.value);
	}
	const changeDate = (event) => {
		setDate(event.target.value);
	}
	const submitHandler = (event) => {
		event.preventDefault();
		const formData = {
			title: title,
			amount: amount,
			date: new Date(date)
		}
		setTitle('');
		setAmount('');
		setDate('');
		props.onSaveExpense(formData);
		console.log(formData);
	}
	return(
		<form onSubmit={submitHandler}>
			<label>Expense Title</label>
			<input type='text' value={title} onChange={changeTitle}/>
			<label>Expense Amount</label>
			<input type='number' value={amount}  onChange={changeAmount}/>
			<label>Expense Date</label>
			<input type='date' value={date} onChange={changeDate}/>
			<input type='submit'/>

		</form>
		);
};
export default ExpenseForm