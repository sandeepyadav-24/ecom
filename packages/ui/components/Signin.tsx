import React, { useState } from "react";
import { Card, Typography, Button, TextField } from "@mui/material";

export const Signin = () => {
  const [email, setEmail] = useState("");

  const [passcode, setPassword] = useState("");

  return (
    // MAIN DIV
    <div style={{ paddingTop: "150px" }}>
      <center>
        <div style={{}}>
          <Typography>Welcome back! Login Here</Typography>
        </div>
        <br />
        <div style={{ width: "400px" }}>
          <Card>
            <div style={{}}>
              <div style={{ padding: "50px" }}>
                <TextField
                  fullWidth={true}
                  id="username"
                  label="Username"
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
                <Button onClick={clickHandler} variant="contained">
                  Login In
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </center>
    </div>
  );
};
