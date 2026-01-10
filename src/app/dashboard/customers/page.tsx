'use client'

import { useEffect, useState } from "react";
import { User, columns } from "./columns";
import { DataTable } from "./data-table";

const UsersPage = () => {
  const data = [
    {
      id: "728ed521",
      name: "Harry",
      email: "harry@gmail.com",
      phone: "9804867595",
      organization: ''
    },
    {
      id: "728ed522",
      name: "ok",
      email: "ok@gmail.com",
      phone: '1213435567',
      organization: 'OuiRise'
    },
  ];

  

  return (
    <div className="px-4">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Customers</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default UsersPage;
