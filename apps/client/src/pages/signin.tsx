import React from "react";
import { Signin } from "@repo/ui/index";
import exp from "constants";
import Box from "@repo/ui/Box";

const SigninPage = () => {
  return (
    <div className="">
      <Signin
        onClick={(email: string, password: string) => {
          alert(`Email - ${email} and Password - ${password}`);
        }}
      />
      <Box />
    </div>
  );
};
export default SigninPage;
