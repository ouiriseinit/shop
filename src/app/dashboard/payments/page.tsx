'use client'

import { Payment,columns } from "./columns";
import { DataTable } from "./data-table";
import { useState, useEffect } from 'react'

const PaymentsPage = () => {
  const [transactions, setTransactions] = useState<Payment[]>([
        {
      id: "728ed52y",
      amount: 173,
      status: "success",
      name: "Raymond Murray",
      user_id:"55",
      email: "raymondmurray@gmail.com",
    },
    {
      id: "728ed52z",
      amount: 843,
      status: "success",
      name: "Adam Sherman",
      user_id:"32",
      email: "adamsherman@gmail.com",
    },
    {
      id: "728ed521f",
      amount: 914,
      status: "pending",
      name: "Anne Cruz",
      user_id:"19",
      email: "annecruz@gmail.com",
    },
  ])
    
    useEffect(() => {
      setTransactions(t => [...t, {
        id: "728ed525f",
        amount: 3300,
        user_id: "728ed522",
        status: "success",
        name: "ok",
        email: "ok@gmail.com",
      }])
    }, []) 

  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={transactions} />
    </div>
  );
};

export default PaymentsPage;
