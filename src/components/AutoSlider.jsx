import { ICON } from "constant";
import React from "react";
import styled from "styled-components";

const AutoSlider = () => {
  const data = [
    {
      id: 1,
      img: ICON.PARTNER_LOGO_01,
    },
    {
      id: 2,
      img: ICON.PARTNER_LOGO_02,
    },
    {
      id: 3,
      img: ICON.PARTNER_LOGO_03,
    },
    {
      id: 4,
      img: ICON.PARTNER_LOGO_04,
    },
    {
      id: 5,
      img: ICON.PARTNER_LOGO_05,
    },
    {
      id: 6,
      img: ICON.PARTNER_LOGO_06,
    },
    {
      id: 7,
      img: ICON.PARTNER_LOGO_07,
    },
    {
      id: 8,
      img: ICON.PARTNER_LOGO_08,
    },
    {
      id: 9,
      img: ICON.PARTNER_LOGO_09,
    },
    {
      id: 10,
      img: ICON.PARTNER_LOGO_010,
    },
    {
      id: 11,
      img: ICON.PARTNER_LOGO_011,
    },
    {
      id: 12,
      img: ICON.PARTNER_LOGO_012,
    },
    {
      id: 13,
      img: ICON.PARTNER_LOGO_013,
    },
  ];

  return (
    <AutoSliderContainer className="auto-slider" slideItem={data}>
      <Track className="auto-slider__slide-track" slideItem={data}>
        {new Array(2).fill(undefined).map((_, idx) => {
          return (
            <React.Fragment key={idx}>
              {data.map((item) => {
                return (
                  <div className="auto-slider__slide" key={item.id}>
                    <img src={item.img} alt="ex logo" />
                  </div>
                );
              })}
              {/* <div className="auto-slider__slide">
                <img src={ICON.PARTNER_LOGO_02} alt="national logo" />
              </div>
              <div className="auto-slider__slide">
                <img src={ICON.PARTNER_LOGO_03} alt="im logo" />
              </div>
              <div className="auto-slider__slide">
                <img src={ICON.PARTNER_LOGO_04} alt="42dot logo" />
              </div>
              <div className="auto-slider__slide">
                <img src={ICON.PARTNER_LOGO_05} alt="molit logo" />
              </div>
              <div className="auto-slider__slide">
                <img src={ICON.PARTNER_LOGO_06} alt="ride logo" />
              </div>
              <div className="auto-slider__slide">
                <img src={ICON.PARTNER_LOGO_07} alt="mobility logo" />
              </div>
              <div className="auto-slider__slide">
                <img src={ICON.PARTNER_LOGO_08} alt="macaron logo" />
              </div>
              <div className="auto-slider__slide">
                <img src={ICON.PARTNER_LOGO_09} alt="thinkware logo" />
              </div>
              <div className="auto-slider__slide">
                <img src={ICON.PARTNER_LOGO_010} alt="sk logo" />
              </div>
              <div className="auto-slider__slide">
                <img src={ICON.PARTNER_LOGO_011} alt="sk logo" />
              </div>
              <div className="auto-slider__slide">
                <img src={ICON.PARTNER_LOGO_012} alt="sk logo" />
              </div>
              <div className="auto-slider__slide">
                <img src={ICON.PARTNER_LOGO_013} alt="sk logo" />
              </div> */}
            </React.Fragment>
          );
        })}
      </Track>
    </AutoSliderContainer>
  );
};

export default AutoSlider;

const AutoSliderContainer = styled.div`
  .auto-slide-area {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0px 0px 0px 0px;
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: ${(props) => (props.slideItem ? `translateX(-${props.slideItem.length * 180}px)` : "")};
    }
  }

  .auto-slider {
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 1920px;
  }

  .auto-slider__slide {
    width: auto;
    min-width: 180px;
    max-width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .auto-slider__slide img {
    width: 120px;
    height: auto;
  }
`;

const Track = styled.div`
  &.auto-slider__slide-track {
    /* animation: scroll 20s linear infinite; */
    animation: ${(props) => (props.slideItem ? `scroll ${props.slideItem.length * 2}s linear infinite` : "")};

    display: flex;
    width: ${(props) => (props.slideItem ? props.slideItem.length * 2 * 180 + "px" : "")};
  }
`;
