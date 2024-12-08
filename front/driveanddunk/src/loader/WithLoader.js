import React from "react";
import Loader from "./loader.js";

const WithLoader = ({ isLoading, children }) => {
  return isLoading ? <Loader /> : children;
};

export default WithLoader;