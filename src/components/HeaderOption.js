import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./HeaderOption.css";
export default function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div className="HeaderOption">
      {Icon && <Icon className="HeaderOption__icon" />}
      {avatar && (
        <Avatar
          onClick={onClick}
          className="HeaderOption__icon"
          src={user?.photoURL}
        >
          {user?.email[0]}{" "}
        </Avatar>
      )}
      <h3 className="HeaderOption__title">{title}</h3>
    </div>
  );
}
