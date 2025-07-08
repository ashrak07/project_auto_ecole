import { Box, Button } from "@mui/material";
import React from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import { useSelector } from "react-redux";

const UserComponent = () => {
  const listSelected = useSelector((state) => state.clients.selectedList);

  return (
    <div className="p-2">{listSelected ? <UserList /> : <CreateUser />}</div>
  );
};

export default UserComponent;
