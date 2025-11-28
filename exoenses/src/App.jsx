
import ExpenseContext from "./component/ExpenseContext"
import ExpenseData from "./component/ExpenseData"
import ExpenseForm from "./component/ExpenseForm"
import ExpenseList from "./component/ExpenseList"


const App = () => {

  return (
    <>

      <ExpenseContext>
        <ExpenseForm />
        <ExpenseData/>
        <ExpenseList />
      </ExpenseContext>
    </>
  )


}

export default App;