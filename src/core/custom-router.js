import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./auth.provider";

export const CustomRouter = ({ xComponent: Component, ...xProps }) => {
  const token = useContext(AuthContext)
  console.log(token)
  return (
    <Route
      {...xProps}

      render={props => {
        let xParams = {};

        // if (
        //   !token &&

        // ) {
        //   return <Redirect to="/login" />;
        // } else if (pathName === "/login" && token) {
        //   return <Redirect to="/default" />;
        // } else if (pathName === "/" && token) {
        //   return <Redirect to="/default" />;
        // }
        return (
          <Component
            {...props}
            {...xParams}
          />
        );
      }}
    />
  );
};
