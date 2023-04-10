import React, {useState} from 'react';
const ExpenseDate = (props) => {
	const date= props.date;

	const monthName = date.toLocaleString('default', { month: 'long' });
	const weekName = date.toLocaleString('default', { weekday: 'long' });
	const yearName = date.getFullYear();

	const [getMonthName, setMonthName] = useState(monthName);



	const clickHandler = () => {
		let currentMonth = 'June';
		setMonthName(currentMonth);
	}
	return(
		<div onClick={clickHandler} className="card-date">
    	<p>{getMonthName} {weekName} {yearName}</p>
    </div>
		);
}
export default ExpenseDate