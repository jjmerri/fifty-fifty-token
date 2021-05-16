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

const handleNotAvailable = () => {
  alert("Not yet available.");
};

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
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                {`Contract Address: ${contractAddress}`}
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
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
