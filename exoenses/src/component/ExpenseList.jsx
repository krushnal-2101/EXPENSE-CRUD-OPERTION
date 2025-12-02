import React, { useContext, useState } from "react";
import { expense } from "./ExpenseContext";
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';



const ExpenseList = () => {
  const { list, update, deleteData } = useContext(expense)


  const [expenseQuery, setExpenseQuery] = useState({
    search : "", 
    type:"all",
    category:"all",
    sortedBy:"latest"
  })

  return (
    <>

      <Container className="bg-dark">
        <h3 className="text-center p-1 mb-3 " style={{ color: "gray" }}>EXPENSE DATA</h3>
        <Row>
          <Col md={3}>
            <Form.Group className="" >
              <Form.Control type="text" placeholder="SEARCH DATA" />
            </Form.Group>
          </Col >
          <Col md={3}>
            <Form.Select aria-label="Default select example">
              <option>TYPE</option>
              <option value="credit">CREDIT</option>
              <option value="debit">DEBIT</option>
            </Form.Select>
          </Col>
          <Col md={3}>
             <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col md={3}>
              <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Row>
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



