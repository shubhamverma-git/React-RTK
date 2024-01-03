import React from "react";
import classes from "./Header.module.scss";

function Header() {
  return (
    <div className={classes.container}>
      <h1 className="text-3xl font-bold underline">Header</h1>
    </div>
  );
}

export default Header;
