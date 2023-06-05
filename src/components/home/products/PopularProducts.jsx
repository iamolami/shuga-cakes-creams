import React from "react";
import products from "../../../data/content";

const PopularProducts = () => {
  return (
    <div className="mkdf-product">
      <div className="mkdf-product__grid">
        <div className="mkdf-product__grid-section">
          <div className="v-column mkdf-product__grid-column">
            <div className="v-column-container">
              <div className="v-column-inner">
                <div className="mkdf-product__elementholder">
                  <div className="mkdf-product__elementholder-item">
                    <div className="mkdf-product__elementholder-inner"></div>
                  </div>
                </div>
                <div className="mkdf-product__sectionholder">
                  <h1 className="mkdf-product__sectionholder-title">
                    Popular Products
                  </h1>
                  <span className="mkdf-product__sectionholder-text">
                    Lorem ipsum dolor sit amet, reque adipisci at vix. Vim tale
                    hinc.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="v-column mkdf-product__grid-column-v">
            <div className="v-column-container">
              <div className="v-column-inner">
                <div className="mkdf-product__panelholder">
                  <div className="mkdf-product__panelholder-outerspace">
                    {products.map((item) => (
                      <div className="mkdf-product__panelholder-itemspace">
                        <div className="mkdf-product__panelholder-inner">
                          <div className="mkdf-product__panelholder-imageholder">
                            <span className="mkdf-product__panelholder-imageholder-onsale">
                              {item.tag}
                            </span>
                            <img src={item.imgeURL} alt="p1" />
                          </div>
                          <div className="mkdf-product__panelholder-textholder">
                            <div className="mkdf-product__panelholder-textholder-outer">
                              <div className="mkdf-product__panelholder-textholder-inner">
                                <div className="mkdf-product__panelholder-textholder-addtocart">
                                  <a
                                    href="/"
                                    className="mkdf-product__panelholder-textholder-addtocart-button"
                                  >
                                    Add to cart
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/"
                            className="mkdf-product__panelholder-link"
                          >
                            {/* &nsbp; */}
                          </a>
                        </div>
                        <div className="mkdf-product__panelholder-text-wrapper">
                          <div className="mkdf-product__panelholder-ratingholder">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </div>
                          <h4 className="mkdf-product__panelholder-text-wrapper-main">
                            <a href="/">{item.main}</a>
                          </h4>
                          <div className="mkdf-product__panelholder-text-wrapper-price">
                            <del>{item.delprice}</del>
                            <span>{item.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
