//HOC(Higher Order Components): It transforms component into another component
//adding additional functionalities to existing Components

import React from "react";
import {Route} from "react-router-dom";

import DefaultLayout from "../layouts/Default.layout";
const DefaultHOC =({component:Component,...rest})=>{
  return (
    <>
    <Route {...rest}
    component={(props)=>(
      <DefaultLayout>
      <Component {...props}/>
      </DefaultLayout>
    )

    }
    />
    </>
  );
};

export default DefaultHOC;
