import React, { useContext } from "react";
import { expense } from "./ExpenseContext";

const ExpenseData = () => {
  const { credit, debit, balance } = useContext(expense);

  return (
    <>

      <div style={{color:"white"}} className=" text-center ">
        <h1 className="p-3 ">EXPENSE BALANCE</h1>
        <h1>CREDIT: {credit}</h1>
        <h1 >DEBIT: {debit}</h1>
        <h1 >TOTAL: {balance}</h1>
      </div>

    </>
  );
};

export default ExpenseData;