import React from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/user/user.form";
import Button from "../components/Button";

const User = () => {
  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <UserTable />
      <UserForm />
      
    </div>
  );
};

export default User;
