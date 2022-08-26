import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline,HighlightOff,DoneAll, CropFree, DeleteOutlineRounded} from "@material-ui/icons";
import {GridCellEditStopReasons} from "@material-ui/core";
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
const confirmDelete=(id)=>
{
  var con=window.confirm("Are you sure you want to delete?");
  if(con){
    handleDelete(id);
  }else{
    return false;
  }
}

const [page, setPage] = useState(2);
const [rowsPerPage, setRowsPerPage] = useState(10);

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};

var btnpa =document.getElementById('remove');

let vari = 0;
function addNode(){
  document.getElementById("l1").innerHTML += `<div>${vari}<button id ="var${vari} onclick="
  deleteNode(var${vari});">Delete</button></div>`;
  vari++;
  if(vari ===1000)
    vari=0;
}

function deleteNode(id){
   var del=id.parentElement;
   del.remove();
   var u =0;
}
  // const [serviceList, setServiceList] = useState([{ service: "" }]);

  // const handleServiceChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...serviceList];
  //   list[index][name] = value;
  //   setServiceList(list);
  // };

  // const handleServiceRemove = (index) => {
  //   const list = [...serviceList];
  //   list.splice(index, 1);
  //   setServiceList(list);
  // };

  // const handleServiceAdd = () => {
  //   setServiceList([...serviceList, { service: "" }]);
  // };
  
  /*function addNode() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Hello");
    document.body.appendChild(x);
}*/
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
      editable:true,
      renderCell: (params) => {
        return (
          <>
          <div className="userListUser">
            {params.row.username}    
          </div>
          <AddCircleIcon onClick="addNode();"/><span> Add follow up</span>
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
      editable:true,
      renderCell: (params) => {
        return (
          <>
            <div  className="userListUser">
              {params.row.transaction}
            </div>
            <div class="userListUser">
            <div id="list">
            </div>
            </div>
            <AddCircleIcon id="l1" onClick="addNode();"/><span> Add follow up</span>
            </>
        );
      },
      
    },
    {
      field: "metaData",
      headerName: "MetaData",
      width: 200,
      renderCell: (params) => {
        return (
          <>
          <div class="userListUser">
            {params.row.metaData.uid}
          </div>
          <div class="userListUser">
          {params.row.metaData.recid}
        </div>
         </>          
        );
      },
    },
    
    {
      field: "status",
      headerName: "Status",
      width: 120,
      //editable:true,
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
              
              onClick={() => confirmDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid width
        rows={data}
        disableSelectionOnClick
        columns={columns}
        rowHeight={200}
        //pageSize={8}
        checkboxSelection 
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        //page={page}
        pagination
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}
/** align-items: center; */