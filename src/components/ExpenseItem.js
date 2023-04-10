import '../css/ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js'
import ExpenseCard from './ExpenseCard.js'
const ExpenseItem = (props) => {
	const title = props.title;
	const amount = props.amount;
	return(
		<ExpenseCard>
		  <div className="column">
		    <div className="card">
		      <h3>{title}</h3>
		      <p>Rs: {amount}</p>
		      <ExpenseDate date={props.date}></ExpenseDate>
		    </div>
		  </div>
		</ExpenseCard>
	);
}
export default ExpenseItem;