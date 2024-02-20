import { TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";

export const Signin = (props: {
  onClick: (useranme: string, password: string) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    // MAIN DIV
    <div style={{ paddingTop: "150px" }} className="bg-black">
      <center>
        <div style={{}}>
          <Typography>Welcome to Coursera. Sign up below</Typography>
        </div>
        <br />
        <div style={{ width: "400px" }}>
          <div style={{}}>
            <div style={{ padding: "50px" }}>
              <TextField
                fullWidth={true}
                id="email"
                label="Email"
                variant="outlined"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <br />

              <TextField
                fullWidth={true}
                id="password"
                label="Password"
                variant="outlined"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <br />
              <Button
                onClick={() => {
                  props.onClick(email, password);
                }}
                variant="contained"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};
