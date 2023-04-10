import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {
	const onSaveExpenseHandler = (ExpenseFormData) => {
		props.addExpense(ExpenseFormData)
	}
	return(
		<div className='container'>
			<ExpenseForm onSaveExpense={onSaveExpenseHandler}></ExpenseForm>
		</div>
		);
};
export default NewExpense