import React, { DetailedHTMLProps, FormEventHandler, FormHTMLAttributes, useState } from "react";

const Home = () => {



  return (
    <>
      <div style={ContainerStyle}>
        <div style={InnerContainer}>
          <p>home</p>
        </div>
      </div>
      
    </>
  );
}

const ContainerStyle = {
  border: "1px solid black",
  alignItems: 'center',
  justifyContent: 'center',
  margin: "25px"
}
const InnerContainer = {
  padding: "25px"
}
const Padding = {
  padding: "10px"
}

export default Home;