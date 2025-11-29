import React, { useContext, useEffect, useState } from "react";
import { expense } from "./ExpenseContext";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ExpenseData from "./ExpenseData";


const ExpenseForm = () => {
  const [input, setInput] = useState({
    title: "",
    amount: 0,
    type: "debit",
    category: "",
  });

  const { add, editValue } = useContext(expense);

  useEffect(() => {
    if (editValue) {
      setInput(editValue);
    }
  }, [editValue]);

  const handleInput = (identifier, e) => {
    setInput((prev) => ({
      ...prev,
      [identifier]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add(input);
    setInput({ title: "", amount: 0, type: "debit", category: "" });
  };

  return (
    <>
      <Container className="mt-3 border p-3 mb-5 bg-dark">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}  >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-white fw-bold">Title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="Enter Title"
                  className="w-75"
                  onChange={(e) => handleInput("title", e)}
                  value={input.title}
                />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label className="text-white fw-bold">Amount</Form.Label>
                <Form.Control
                  name="amount"
                  type="number"
                  placeholder="Enter Amount"
                  className="w-75"
                  onChange={(e) => handleInput("amount", e)}
                  value={input.amount}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <span className="text-white me-2 fw-bold">Credit</span>
                <input
                  id="credit"
                  type="radio"
                  name="type"
                  value="credit"
                  checked={input.type === "credit"}
                  onChange={(e) => handleInput("type", e)}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <span className="text-white me-2 fw-bold">Debit</span>  
                <input
                  id="debit"
                  type="radio"
                  name="type"
                  value="debit"
                  checked={input.type === "debit"}
                  onChange={(e) => handleInput("type", e)}
                />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlInput5"
              >
                <span className="text-white me-2 fw-bold">Category</span>
                <select
                  name="category"
                  id="category"
                  className="p-1 rounded text-center"
                  onChange={(e) => handleInput("category", e)}
                  value={input.category}
                >
                  <option value="">Select Category</option>
                  <option value="general">General</option>
                  <option value="travel">Travel</option>
                  <option value="food">Food</option>
                  <option value="shopping">Shopping</option>
                </select>
              </Form.Group>
              <button className="px-5 rounded py-2 m-3">Add</button>
            </Col>
            <Col md={6}>
              <ExpenseData/>  
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default ExpenseForm;

