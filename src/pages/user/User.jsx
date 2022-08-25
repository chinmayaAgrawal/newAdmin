import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Data</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="userShowTopTitle">
              <span className="userShowUsername">Data Cell</span>
              <span className="userShowUserTitle">QnA</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Data Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Question 1</span>
            </div>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Answer 1</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">24.10.3333</span>
            </div>
            <div className="userShowInfo">
              <Publish className="userShowIcon" />
              <span className="userShowInfoTitle">id:123</span>
              <div><span className="userShowInfoTitle">recid:027793a882e148f9acafeb016ad6b30b</span></div>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Active</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Question</label>
                <input
                  type="text"
                  placeholder="Edit here"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Answer</label>
                <input
                  type="text"
                  placeholder="Answer here"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>MetaData Tag</label>
                <input
                  type="text"
                  placeholder="id:123"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Status</label>
                <input
                  type="text"
                  placeholder="Active/Inactive"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
