import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const HowToBuy = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    id: "howToBuy",
    title: "How to buy $50/50",
    paragraph: "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
                // style={{ marginTop: "1rem" }}
              >
                <h3 className="mt-0 mb-12">
                  1. Install a wallet (e.g. Metamask or Trust Wallet)
                </h3>
                <p className="m-0">
                  Install from their website or the app store.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/home_trustwallet_app.png")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">2. Fund the wallet</h3>
                <p className="m-0">
                  Send crypto to your wallet or purchase it within the wallet if
                  available. Make sure your wallet has some BNB on the smart
                  chain to cover blockchain fees. Detailed instructions{" "}
                  <a
                    href="https://www.binance.com/en/blog/421499824684901157/How-to-Set-Up-and-Use-Trust-Wallet-for-Binance-Smart-Chain"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here.
                  </a>
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/trust_wallet_fund.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">3. Connect your wallet</h3>
                <p className="m-0">
                  Open{" "}
                  <a
                    href="https://exchange.pancakeswap.finance/#/swap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PancakeSwap
                  </a>{" "}
                  in your wallet app or with your browser if you are using a
                  Chrome extenesion. Click connect in the top right and select
                  your wallet to connect it to PancakeSwap.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/connect_wallet.png")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">
                  4. Go to the exchange screen and select 50/50 Token
                </h3>
                <p className="m-0">
                  Navigate to the exchange screen from the left sidebar under
                  "trade". Click "Select a Currency" and enter the 50/50 token
                  contract address: TBD
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/pancake_swap_exchange.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="mt-0 mb-12">
                  5. Adjust your slippage greater than 10%
                </h3>
                <p className="m-0">
                  Click the icon in the top right to set the slippage amount.
                  Make sure it is greater than 10%. Set the amount you want to
                  swap and if you see "INSUFFICIENT_OUTPUT_AMOUNT" after trying
                  to execute the trade then you should adjust the slippage
                  higher.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/slippage.png")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HowToBuy.propTypes = propTypes;
HowToBuy.defaultProps = defaultProps;

export default HowToBuy;
