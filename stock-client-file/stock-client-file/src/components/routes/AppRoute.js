import React from "react";
import { Route } from "react-router-dom";
const AppRoute = ({ component: Component, layout: Layout, ...restProps }) => {
  return (
    <>
      <Route
        {...restProps}
        render={(props) => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    </>
  );
};

export default AppRoute;
