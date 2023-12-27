import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import React from "react";

const UserDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state: any) => {
    return state.userData;
  });

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  console.log(data);
  return (
    <div className="user-detail">
      <h1>User profile</h1>
      <p>Name:{data.name}</p>
      <p>Email:{data.email}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserDashboard;
