import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline,HighlightOff,DoneAll} from "@material-ui/icons";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { dataRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
//import PropTypes from "prop-types";

export default function UserList() {
  const [data, setData] = useState(dataRows);
  const [pageSize, setPageSize] = useState(10);

  
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  let vari = 0; 
  const deleteNode=(vari)=>{
    const element = document.getElementById(vari);
  element.remove();
  }
const addNode =()=> 
     {
        var newP = document.createElement("p");
      //   var textNode = document.createElement("div");
        var httm = document.innerHTML(
          '<p id="vari">This is a new text node<button onclick="deleteNode(vari)">asdfgh</button></p>'   
        ); 
        document.getElementById(vari);
        vari++;
      //   textnode.appendChild(httm);
      //   newP.appendChild(textNode);
        newP.appendChild(httm);
        document.getElementById("firstP").appendChild(newP); 
     } 
  const columns = [
    { field: "id", headerName: "ID", width: 90,
    renderCell: (params) => {
      return (
        <>
        <div className="userListUser">
          {params.id}
        </div>
       
        </>
      );
    },
  },
    {
      field: "user",
      headerName: "Question",
      width: 500,
      renderCell: (params) => {
        return (
          <>
          <div className="userListUser">
            {params.row.username}
            
          </div>
          <hr></hr>
          <div><AddCircleIcon className= "add" /></div>
           </>
        );
      },
    },
    /*{ field: "email", headerName: "Email", width: 200,
    renderCell: (params) => {
      return (
        <div >
          {params.row.email}
        </div>
      );
    },
    },*/
  
    {
      field: "transaction",
      headerName: "Answer",
      width: 500,
      renderCell: (params) => {
        return (
          <>
            <div  className="userListUser">
              {params.row.transaction}
            </div>
            <>
          <div className="userListUser">
            {params.row.username}
            
          </div>
          <hr></hr>
          <div><AddCircleIcon className= "add" /></div>
           </>
          </>
        );
      },
      
    },
    
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        if (params.row.status === "inactive"){
        return (
          <div  className="userListUser">
              <button class="inactive" >inactive</button>
          </div>
        );       
      }
      else{
        return(
          <div className="userListUser">
              <button class="active" >active</button>
          </div>
        );
      }
  },
  },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div class="userListDelete2">
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid 
        rows={data}
        disableSelectionOnClick
        columns={columns}
        rowHeight={200}
        //pageSize={8}
        checkboxSelection 
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        {...data}
      />
    </div>
  );
}
/** align-items: center; */