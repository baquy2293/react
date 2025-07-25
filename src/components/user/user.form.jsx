import React from "react";
import { Input, Button } from "antd"; // Import Button from antd
const UserForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [age, setAge] = React.useState("");
  // const handleNameChange = (e) => setName(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  // Add more state and handlers as needed
  return (
    <div>
      <div>
        <span>nhập tên</span>
        <Input
          value={name}
          placeholder="Enter your name"
          onChange={handleNameChange}
        />
      </div>
      <div>
        <span>nhập email</span>
        <Input
          value={email}
          placeholder="Enter your email"
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <span>nhập password</span>
        <Input.Password
          value={password}
          placeholder="Enter your password"
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <span>nhập tuổi</span>
        <Input
          value={age}
          placeholder="Enter your age"
          onChange={handleAgeChange}
        />
      </div>
      <Button
        onClick={() => {
          console.log("Submitted:", { name, email, password, age });
          // Handle form submission logic here
        }}
        type="primary"
      >
        Submit
      </Button>
    </div>
  );
};

export default UserForm;
