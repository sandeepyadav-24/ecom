import React from "react";
import { Signin } from "@repo/ui/index";
import exp from "constants";

const SigninPage = () => {
  return (
    <div className="h-screen">
      <Signin
        onClick={(email: string, password: string) => {
          alert(`Email - ${email} and Password - ${password}`);
        }}
      />
    </div>
  );
};
export default SigninPage;
