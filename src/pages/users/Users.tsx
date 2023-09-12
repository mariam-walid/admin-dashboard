import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import { userRows } from "../../data";
import { useState } from 'react';
import Add from "../../components/add/Add";

const Users = () => {
  const [open, setOpen] = useState(false)

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    { field: "firstName", headerName: "First name", width: 120, type:'string' },
    { field: "lastName", headerName: "Last name", width: 120, type:'string' },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      width: 200,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "string",
      width: 120,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 120,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 70,
      type: "boolean",
    },
  ];

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add new User</button>
        
      </div>
      <DataTable columns={columns} rows={userRows} slug="users" />
      {open && <Add setOpen = {setOpen} slug="user" columns={columns}/>}
    </div>
  );
};

export default Users;
