import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Logo from "../layout/partials/Logo";
import Button from "../elements/Button";
import ButtonGroup from "../elements/ButtonGroup";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const contractAddress = "0x34D266A0cd7298A28D664F3FF9e16ccCa53F06f2";

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  // const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // };

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Logo style={{ display: "inline-block", marginRight: "1rem" }} />{" "}
              Fifty Fifty Token
              <Logo style={{ display: "inline-block", marginLeft: "1rem" }} />
            </h1>
            <div
              className="container-xs"
              style={{ marginTop: "-1rem", marginBottom: "80px" }}
            >
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                {`50/50 Token is a charity token that rewards hodlers with reflection and free 50/50 giveaways.`}
              </p>
              <h4>
                $2000 already raffled with <br />
                <a
                  href="https://www.reddit.com/r/FiftyFiftyToken/comments/njmdda/the_first_5050_donation_made_to_eves_place_and/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>$1150 going to charity!</u>
                </a>{" "}
              </h4>
              <p>
                Check out{" "}
                <a
                  href="https://www.reddit.com/r/FiftyFiftyToken"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /r/FiftyFiftyToken subreddit
                </a>{" "}
                for the most up to date info on whats going on.
              </p>
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
                style={{ overflowWrap: "anywhere" }}
              >
                <h4 style={{ marginBottom: 0 }}>Contract Address:</h4>{" "}
                <div
                  style={{
                    lineHeight: 2,
                  }}
                >
                  {" "}
                  {`${contractAddress}`}
                </div>
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href={
                      "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x34D266A0cd7298A28D664F3FF9e16ccCa53F06f2"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Now (11% slippage)
                  </Button>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href={"https://t.me/fiftyfiftytoken"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join the Discussion
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href={
                      "https://charts.bogged.finance/?token=0x34D266A0cd7298A28D664F3FF9e16ccCa53F06f2"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Price Chart
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href={`https://bscscan.com/token/${contractAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    50/50 Token on BscScan
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href={`https://bscscan.com/address/${contractAddress}#code`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contract Code on BscScan
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <h2
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Our Mission is Philanthropy
            </h2>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                A 2% tax on all transactions funds the charity wallet that will
                change lives. When it is time to donate, the wallet's funds are
                split 50/50 where half goes to charity and the other half goes
                to a Fifty Fifty Token hodler via a random draw giveaway or
                contest.
              </p>
              {/* <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://cruip.com/"
                  >
                    Get started
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://github.com/cruip/open-react-template/"
                  >
                    View on Github
                  </Button>
                </ButtonGroup>
              </div> */}
            </div>
          </div>
          {/* <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/video-placeholder.jpg")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          /> */}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
