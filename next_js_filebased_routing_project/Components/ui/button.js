import React from "react";
import button_style from "../../styles/Button.module.css";
import Link from "next/link";
const Button = (props) => {
  if (props.link) {
    return (
      <Link className={button_style.btn} href={props.link}>
        {props.children}
      </Link>
    );
  }

  return <Link className={button_style.btn}>{props.children}</Link>;
};

export default Button;
