import { useState } from 'react'
import Add from '../../components/add/Add'
import DataTable from '../../components/dataTable/DataTable'
import './products.scss'
import { GridColDef } from '@mui/x-data-grid'
import { products } from '../../data'

const Products = () => {
  const [open, setOpen] = useState(false)

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt=''/>;
      },
    },
    { field: "title", headerName: "Title", width: 120, type:'string' },
    { field: "color", headerName: "Color", width: 120, type:'string' },
    {
      field: "price",
      headerName: "Price",
      type: "string",
      width: 200,
    },
    {
      field: "producer",
      headerName: "Producer",
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
      field: "inStock",
      headerName: "In Stock",
      width: 70,
      type: "boolean",
    },
  ];
  
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=>setOpen(true)}>Add new Product</button>
        
      </div>
      <DataTable columns={columns} rows={products} slug="products" />
      {open && <Add setOpen = {setOpen} slug="product" columns={columns}/>}
    </div>
  )
}

export default Products


