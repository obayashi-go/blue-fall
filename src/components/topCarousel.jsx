import React from "react"
import Carousel from 'react-material-ui-carousel';
import { StaticImage } from "gatsby-plugin-image";

import "../customCommon.css";

export default function TopCarousel() {
    return(
        <>
            <Carousel autoPlay={true}
                      animation="slide"
                      indicators={true}
                      swipe={true}
                      cycleNavigation={true}
                      fullHeightHover={true}
                      duration={500}
                      navButtonsAlwaysVisible={true}
                      navButtonsProps={{
                          style: {
                              color: "#00bcd4",
                              background: "rgba(0, 0, 0, .5)",
                          }
                      }}
                      indicatorIconButtonProps={{
                          style: {
                              color: "rgba(0 188 212 / .3)",
                              background: "#fff",
                              border: "dotted 1px #00bcd4",
                              margin: "0 4px"
                          },
                      }}
                      activeIndicatorIconButtonProps={{
                          style: {
                              color: "#00bcd4",
                          }
                      }}
            >
                <div className="carousel-slide">
                    <StaticImage src="../../static/img/IMG_4489.JPG" />
                </div>
                <div>
                    <StaticImage src="../../static/img/IMG_4500.JPG" />
                </div>
                <div>
                    <StaticImage src="../../static/img/IMG_4504.JPG" />
                </div>
                <div>
                    <StaticImage src="../../static/img/IMG_4830.jpg" />
                </div>
                
            </Carousel>
        </>
    )
};