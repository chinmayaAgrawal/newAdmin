import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline,HighlightOff,DoneAll, CropFree} from "@material-ui/icons";
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



  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };
  
  function addNode() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Hello");
    document.body.appendChild(x);
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
      editable:true,
      renderCell: (params) => {
        return (
          <>
          <div className="userListUser">
            {params.row.username}    
          </div>
          <div>
            <button className= "add" onClick={addNode()}></button></div>
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
          <div className="userListUser">
          <form className="App" autoComplete="off">
      <div className="form-field">
        {serviceList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <input
                name="service"
                type="text"
                id="service"
                value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
              {serviceList.length - 1 === index && serviceList.length < 4 && (
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  className="add-btn"
                >
                  <span>Add</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {serviceList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      </form>
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
        pagination
        experimentalFeatures={{ newEditingApi: true }}
        {...data}
      />
    </div>
  );
}
/** align-items: center; */