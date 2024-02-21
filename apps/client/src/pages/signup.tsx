import React from "react";
import { Signup } from "@repo/ui/index";

import Box from "@repo/ui/Box";

const SignupPage = () => {
  return (
    <div className="">
      <Signup
        onClick={(email: string, password: string) => {
          alert(`Email - ${email} and Password - ${password}`);
        }}
      />
      <Box />
    </div>
  );
};
export default SignupPage;
