
import ExpenseContext from "./component/ExpenseContext"
import ExpenseForm from "./component/ExpenseForm"
import ExpenseList from "./component/ExpenseList"

const App = () => {

  return (
    <>

      <ExpenseContext>
        <ExpenseForm />
        <ExpenseList />
      </ExpenseContext>
    </>
  )


}

export default App;