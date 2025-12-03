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
    search: "",
    type: "all",
    category: "all",
    sortedBy: "latest"
  })


  const handleSelect = (identifier, e) => {
    setExpenseQuery((prev) => {
      return {
        ...prev,
        [identifier]: e.target.value
      }
    })
  }

  const filterList = list.filter((l) => (
    l.title.toLowerCase().includes(expenseQuery.search.toLocaleLowerCase())
  )).filter((l) => (
    expenseQuery.type === "all" ? true : l.type === expenseQuery.type
  )).filter((l) => (
    expenseQuery.category === "all" ? true : l.category === expenseQuery.category
  ))

  const sortedList = [...filterList].sort((a, b) => {


    if (expenseQuery.sortedBy === "latest") {

      return a.id - b.id
    }

    if (expenseQuery.sortedBy === "oldest") {

      return b.id - a.id
    }


    if (expenseQuery.sortedBy === "ascending") {

      return Number(a.amount) - (b.amount)
    }

    if (expenseQuery.sortedBy === "descending") {

      return Number(b.amount) - (a.amount)
    }


  })

  return (
    <>

      <Container className=" rounded-3 p-2" style={{backgroundColor:"rgb(0 66 79)"}}>
        <h3 className="text-center p-1 mb-1 " style={{ color: "gray" }}>EXPENSE DATA</h3>
        <Row>
          <Col md={3}>  
            <Form.Group className="" onChange={((e) => handleSelect("search", e))} value={expenseQuery.search}>
              <Form.Control type="text" placeholder="SEARCH DATA" style={{ backgroundColor: "#c1c1c1"  }} className="mb-3" />
            </Form.Group>
          </Col >
          <Col md={3}>
            <Form.Select onChange={((e) => handleSelect("type", e))} value={expenseQuery.type}  style={{ backgroundColor: "#c1c1c1"  }} className="mb-3">
              <option>TYPE</option>
              <option value="credit">CREDIT</option>
              <option value="debit">DEBIT</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select onChange={((e) => handleSelect("category", e))} value={expenseQuery.category}  style={{ backgroundColor: "#c1c1c1"  }} className="mb-3">
              <option>CATEGORY</option>
              <option value="general">GENERAL</option>
              <option value="travel">TRAVEL</option>
              <option value="food">FOOD</option>
              <option value="shopping">SHOPPING</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select onChange={((e) => handleSelect("sortedBy", e))} value={expenseQuery.sortedBy}  style={{ backgroundColor: "#c1c1c1"  }} className="mb-3">
              <option>SHORTED-BY</option>
              <option value="latest">LATEST</option>
              <option value="oldest">OLDEST</option>
              <option value="ascending">MONEY-ASCENDING</option>
              <option value="descending">MONEY-DESCENDING</option>
            </Form.Select>
          </Col>
        </Row>
        <Table className="bg-dark">
          <thead>
            <tr>
              <th className=" text-white" style={{backgroundColor:"rgb(0 34 41)"}}>TITLE</th>
              <th className=" text-white" style={{backgroundColor:"rgb(0 34 41)"}}>AMOUNT</th>
              <th className=" text-white" style={{backgroundColor:"rgb(0 34 41)"}}>TYPE</th>
              <th className=" text-white" style={{backgroundColor:"rgb(0 34 41)"}}>CATEGORY</th>
              <th className=" text-white"style={{backgroundColor:"rgb(0 34 41)"}} colSpan={2}>ACTION</th>
            </tr>
          </thead>
          <tbody>

             {sortedList.length > 0 ? (
              sortedList.map((l) => (
               <tr key={l.id}>
                  <td className=" text-white pe-5 " style={{backgroundColor:"rgb(0 34 41)"}}>{l.title}</td>
                  <td className=" text-white pe-2" style={{backgroundColor:"rgb(0 34 41)"}}>{l.amount}</td>
                  <td className=" text-white pe-2" style={{backgroundColor:"rgb(0 34 41)"}}>{l.type}</td>
                  <td className=" text-white pe-2" style={{backgroundColor:"rgb(0 34 41)"}}>{l.category}</td>
                  <td className=" text-white" style={{backgroundColor:"rgb(0 34 41)"}}>
                    <button onClick={() => update(l.id)} className="bg-danger text-white" >EDIT</button>
                  </td>
                  <td className=" text-white" style={{backgroundColor:"rgb(0 34 41)"}}>
                    <button onClick={() => deleteData(l.id)} className="bg-warning text-dark">DELETE</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr  ><p style={{backgroundColor:"rgb(0 34 41)"}} className=" text-white fs-5 m-3 p-2" >NO DATA FOUND</p></tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default ExpenseList;



