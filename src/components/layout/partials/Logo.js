import React from "react";
import classNames from "classnames";
import Image from "../../elements/Image";

const Logo = ({ className, size = 80, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div className={classes} {...props}>
      <h1 className="m-0">
        <Image
          src={require("./../../../assets/images/logo.png")}
          alt="Open"
          width={size}
          height={size}
        />
      </h1>
    </div>
  );
};

export default Logo;
