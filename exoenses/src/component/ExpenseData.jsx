import React, { useContext } from "react";
import { expense } from "./ExpenseContext";

const ExpenseData = () => {
  const { credit, debit, balance } = useContext(expense);

  return (
    <>
      <div style={{color:"white"}} className=" text-center ">
        <h1 className="p-3 " style={{color:"gray"}}>EXPENSE BALANCE</h1>
        <h1 className="p-2 m-4 bg-secondary  border">CREDIT: {credit}</h1>
        <h1 className="p-2 m-4 bg-secondary border">DEBIT: {debit}</h1>
        <h1 className="p-2 m-4 bg-secondary border">TOTAL: {balance}</h1>
      </div>
    </>
  );
};

export default ExpenseData;