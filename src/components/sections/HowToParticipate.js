import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const Tokenomics = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const participationHeader = {
    id: "participate",
    title: "How to participate in 50/50 giveaways and contests",
    paragraph: (
      <>
        Giveaways and contests will be run out of the{" "}
        <a
          href="https://www.reddit.com/r/FiftyFiftyTokenBsc"
          target="_blank"
          rel="noopener noreferrer"
        >
          /r/FiftyFiftyTokenBsc subreddit
        </a>{" "}
        so be sure to join. Giveaways will all be free and eligibility to
        participate will be determined before the giveaway starts. Eligibility
        will be designed to reward hodlers. For example, you may need to be a
        hodler who doesn't have a sell transaction after a buy transaction that
        was made more than 24hrs ago. If you are eligible you will just make a
        comment on the giveaway post that includes your wallet address.
        <br />
        <br />
        Make sure to read the rules of the giveaway! If you don't follow them
        your entry will not be counted. In an effort to weed out bots there may
        be other things you need to add to your comment such as a favorite food
        or a quick story about something specific.
      </>
    ),
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={participationHeader}
            className="center-content"
          />
        </div>
      </div>
    </section>
  );
};

Tokenomics.propTypes = propTypes;
Tokenomics.defaultProps = defaultProps;

export default Tokenomics;
