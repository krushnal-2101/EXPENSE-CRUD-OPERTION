import React, { useContext } from "react";
import { expense } from "./ExpenseContext";
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";


const ExpenseList = () => {
  const { list, update, deleteData } = useContext(expense)

  return (
    <>
     
     <Container className="bg-dark">
       <h1 className="text-center p-3 text-white">EXPENSE DATA</h1>
       <Table className="bg-dark">
        <thead>
          <tr>
            <th className="bg-dark text-white">TITLE</th>
            <th className="bg-dark text-white">AMOUNT</th>
            <th className="bg-dark text-white">TYPE</th>
            <th className="bg-dark text-white">CATEGORY</th>
            <th className="bg-dark text-white" colSpan={2}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {list.map((l) => {
            return (
              <tr key={l.id}>
                <td className="bg-dark text-white">{l.title}</td>
                <td className="bg-dark text-white">{l.amount}</td>
                <td className="bg-dark text-white">{l.type}</td>
                <td className="bg-dark text-white">{l.category}</td>
                <td className="bg-dark text-white">
                  <button onClick={() => update(l.id)}>EDIT</button>
                </td>
                <td className="bg-dark text-white">
                  <button onClick={() => deleteData(l.id)}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
     </Container>
    </>
  )
}

export default ExpenseList;



