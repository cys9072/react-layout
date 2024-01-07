import { IMG } from "constant";
import React from "react";
import styled from "styled-components";

const AutoSlider = () => {
  const data = [
    {
      id: 1,
      img: IMG.PARTNER_IMG,
    },
    {
      id: 2,
      img: IMG.PARTNER_IMG,
    },
    {
      id: 3,
      img: IMG.PARTNER_IMG,
    },
    {
      id: 4,
      img: IMG.PARTNER_IMG,
    },
    {
      id: 5,
      img: IMG.PARTNER_IMG,
    },
    {
      id: 6,
      img: IMG.PARTNER_IMG,
    },
    {
      id: 7,
      img: IMG.PARTNER_IMG,
    },
    {
      id: 8,
      img: IMG.PARTNER_IMG,
    },
    {
      id: 9,
      img: IMG.PARTNER_IMG,
    },
    {
      id: 10,
      img: IMG.PARTNER_IMG,
    },
    {
      id: 11,
      img: IMG.PARTNER_IMG,
    },
    {
      id: 12,
      img: IMG.PARTNER_IMG,
    },
    {
      id: 13,
      img: IMG.PARTNER_IMG,
    },
  ];

  return (
    <AutoSliderContainer className="auto-slider" slideItem={data}>
      <Tracks className="auto-slider__slide-track" slideItem={data}>
        {new Array(2).fill(undefined).map((_, idx) => {
          return (
            <React.Fragment key={idx}>
              {data.map((item) => {
                return (
                  <div className="auto-slider__slide review" key={item.id}>
                    <img src={item.img} alt="ex logo" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </Tracks>
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
  @keyframes scrollReverse {
    0% {
      transform: ${(props) => (props.slideItem ? `translateX(-${props.slideItem.length * 450 + props.slideItem.length * 10}px)` : "")};
    }
    100% {
      transform: translateX(0);
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
    min-width: 450px;
    max-width: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .auto-slider__slide img {
    aspect-ratio: 1.6 / 1;
  }
  .auto-slider__slide.review {
    border: 1px solid #e9e9e9;
    border-radius: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background: #fbfbfb; */
    /* padding: 8px 28px 48px 11px; */
  }
  .review--title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .review--contents {
    font-size: 14px;
  }
  .auto-slider__slide.review img {
    width: 100%;
  }
`;

const Tracks = styled.div`
  &.auto-slider__slide-track {
    /* animation: scroll 20s linear infinite; */
    animation: ${(props) => (props.slideItem ? `scrollReverse ${props.slideItem.length * 7.5}s linear infinite` : "")};

    display: flex;
    width: ${(props) => (props.slideItem ? props.slideItem.length * 2 * 450 + "px" : "")};
    gap: 10px;
    margin-bottom: 50px;
  }
`;
