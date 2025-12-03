import React, { useContext } from "react";
import { expense } from "./ExpenseContext";

const ExpenseData = () => {
  const { credit, debit, balance } = useContext(expense);

  return (
    <>
      <div style={{color:"white"}} className=" text-center ">
        <h1 className="p-3 " style={{color:"gray"}}>EXPENSE BALANCE</h1>
        <h1 className="p-2 m-4  border rounded "  style={{backgroundColor:"rgb(0 34 41)"}}>CREDIT: {credit}</h1>
        <h1 className="p-2 m-4 border rounded"  style={{backgroundColor:"rgb(0 34 41)"}}>DEBIT: {debit}</h1>
        <h1 className="p-2 m-4  border rounded "  style={{backgroundColor:"rgb(75 123 133)"}}>TOTAL: {balance}</h1>
      </div>
    </>
  );
};

export default ExpenseData;