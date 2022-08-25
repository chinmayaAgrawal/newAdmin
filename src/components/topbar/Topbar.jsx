import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";
import User from "../../pages/user/User";
import { issueRows,notifyRows } from "../../dummyData";
import QnA from "../qna/QnA";
import { useState } from "react";

export default function Topbar() {
  let countNotify=0;
  let countIssue=0;

  const [dat, setDat] = useState(notifyRows);
    notifyRows.map((item) => {
       countNotify =countNotify+1;
   })
  
  const [data, setData] = useState(issueRows);
  issueRows.map((item) => {
    
      countIssue =countIssue+1;
    
  })
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span  className="logo" >QNA_Admin 1.0</span>  
        </div>
        <div className="topRight">
        <Link to="/qna" className="link" >
          <div className="topbarIconContainer">
            <button class="test" >TEST</button>
          </div>
          </Link>
          <Link to="/newUser" className="link" >
          <div className="topbarIconContainer">
            <button class="test" >ADD</button>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
