import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import FooterSocial from "./partials/FooterSocial";
import { HashLink } from "react-router-hash-link";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <footer {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top space-between  text-xxs">
            <div>
              <HashLink
                smooth
                to="#tokenomics"
                scroll={(el) => scrollWithOffset(el)}
              >
                Tokenomics
              </HashLink>
              {" | "}
              <HashLink
                smooth
                to="#taxBreakdown"
                scroll={(el) => scrollWithOffset(el)}
              >
                Tax Breakdown
              </HashLink>
              {" | "}
              <HashLink
                smooth
                to="#howToBuy"
                scroll={(el) => scrollWithOffset(el)}
              >
                How To Buy
              </HashLink>
            </div>
            <FooterSocial />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
