import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ICON, IMG } from "constant";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import AutoSlider from "components/AutoSlider";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  SwiperCore.use([Pagination, Autoplay]);
  return (
    <div id="main-page-wrapper">
      <main className="main">
        <article className="slide-area">
          <Swiper
            className="main-swiper"
            modules={[Pagination]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <img src={IMG.MAIN_BANNER_01} alt="" />
              <Link className="btn-common FT_BOLD float-btn" to="/intro-overview">
                Overview
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <img src={IMG.MAIN_BANNER_02} alt="" />
              <Link className="btn-common FT_BOLD float-btn" to="/map-guide">
                Maps
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <img src={IMG.MAIN_BANNER_03} alt="" />
              <Link className="btn-common FT_BOLD float-btn" to="/web-navigation">
                Web (rest)
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <img src={IMG.MAIN_BANNER_04} alt="" />
              <Link className="btn-common FT_BOLD float-btn" to="/billing-plan">
                요금제
              </Link>
            </SwiperSlide>
          </Swiper>
        </article>

        <section className="custom-api-section">
          <p className="title">커스터 마이징 API</p>
          <div className="flex-box">
            <div className="flex-box__item">
              <img src={IMG.MAIN_API_BANNER_01} alt="api ex img" />
              <div className="text-box">
                <p className="title">서비스별 맞춤형 경로탐색 API</p>
                <p className="sub-title">배달, 택시, 물류서비스 등 당사에서 업체 API를 맞춤형으로 제공합니다.</p>
                <Link className="link api-link" to="/web-route-normal">
                  경험하기
                  <img src={ICON.RIGHT_ARR} alt="right arrow" />
                </Link>
              </div>
            </div>
            <div className="flex-box__item">
              <img src={IMG.MAIN_API_BANNER_02} alt="api ex img" />
              <div className="text-box">
                <p className="title">커스텀 경로 탐색 API</p>
                <p className="sub-title">사용자가 지정한 특정 node 를 탐색하여 경로 정보를 반환합니다.</p>
                <Link className="link api-link" to="/web-route-custom-node">
                  경험하기
                  <img src={ICON.RIGHT_ARR} alt="right arrow" />
                </Link>
              </div>
            </div>
            <div className="flex-box__item">
              <img src={IMG.MAIN_API_BANNER_03} alt="api ex img" />
              <div className="text-box">
                <p className="title">다중 경유지 추가 API</p>
                <p className="sub-title">경로 탐색 중 경유지 최대 100개까지 설정 가능 API</p>
                <Link className="link api-link" to="/web-route-multiple">
                  경험하기
                  <img src={ICON.RIGHT_ARR} alt="right arrow" />
                </Link>
              </div>
            </div>
            <div className="flex-box__item">
              <img src={IMG.MAIN_API_BANNER_04} alt="api ex img" />
              <div className="text-box">
                <p className="title">공간검색 API</p>
                <p className="sub-title">입력된 행정코드 및 행정명칭을 폴리곤 좌표로 반환합니다.</p>
                <Link className="link api-link" to="/web-admin-to-polygon">
                  경험하기
                  <img src={ICON.RIGHT_ARR} alt="right arrow" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="primary-function-section">
          <p className="title">주요기능</p>
          <div className="flex-box">
            <div className="flex-box__item">
              <Link to="/map-guide">
                <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>지도</title>
                  <desc>자동차모양의 이미지</desc>

                  <path d="M61.4079 27.1252C61.4079 26.2965 61.4079 25.4678 61.3158 24.6391C60.0267 12.4844 49.3453 3 36.454 3C23.5626 3 12.8812 12.4844 11.5921 24.6391C11.5921 25.4678 11.5 26.2965 11.5 27.1252C11.5 31.5451 12.7891 35.6888 14.907 39.1878L15.0912 39.5562L35.349 67.4567C35.9936 68.4696 37.0065 68.5617 37.651 67.4567L58.093 39.1878L58.2772 38.9116C60.395 35.3204 61.5 31.5451 61.5 27.1252H61.4079Z" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M43.2655 9.53789H29.5454V14.1419H43.2655V9.53789Z" fill="#E7290F" className="point" />
                  <path d="M21.5354 23.35H51.6459C53.1192 23.35 54.2241 24.547 54.2241 25.9282V35.6888C54.2241 36.3334 53.6716 36.7938 53.1192 36.7938H19.97C19.3254 36.7938 18.7729 36.2413 18.7729 35.5967V26.0203C18.7729 24.4549 19.97 23.2579 21.5354 23.2579V23.35Z" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M18.5889 33.0185H54.0401" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M29.4541 29.0592H43.2663" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M48.422 23.3501H24.481L25.5859 15.6153C25.678 14.8786 26.3226 14.2341 27.1513 14.2341H45.6596C46.3962 14.2341 47.0408 14.7866 47.225 15.5232L48.422 23.258V23.3501Z" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M21.4448 36.886H27.5222V39.9247C27.5222 41.0297 26.6014 41.9505 25.4964 41.9505H23.3785C22.2736 41.9505 21.4448 41.1217 21.4448 40.0168V36.886Z" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M45.2002 36.886H51.2775V39.9247C51.2775 41.0297 50.3567 41.9505 49.2518 41.9505H47.1339C46.0289 41.9505 45.2002 41.1217 45.2002 40.0168V36.886Z" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M23.5621 29.9799C24.6301 29.9799 25.4958 29.1141 25.4958 28.0462C25.4958 26.9782 24.6301 26.1125 23.5621 26.1125C22.4942 26.1125 21.6284 26.9782 21.6284 28.0462C21.6284 29.1141 22.4942 29.9799 23.5621 29.9799Z" fill="#E7290F" className="point" />
                  <path d="M49.2516 29.9799C50.3195 29.9799 51.1853 29.1141 51.1853 28.0462C51.1853 26.9782 50.3195 26.1125 49.2516 26.1125C48.1836 26.1125 47.3179 26.9782 47.3179 28.0462C47.3179 29.1141 48.1836 29.9799 49.2516 29.9799Z" fill="#E7290F" className="point" />
                  <path d="M36.4541 47.7515V58.0646" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                </svg>

                <p className="title">지도</p>
              </Link>
            </div>
            <div className="flex-box__item">
              <Link to="/web-route-normal">
                <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>경로안내</title>
                  <desc>올바른 경로를 찾아가는 이미지</desc>
                  <path d="M18.4422 58.3426L6.5 58.4273L15.8166 50.8046L25.1333 43.2666L25.8109 55.0395L26.5731 66.897L18.4422 58.3426Z" stroke="#292C35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M25.1344 43.2665L18.4434 58.3426" stroke="#292C35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M25.6401 40.2176C25.8095 37.2532 25.7248 34.9664 25.6401 33.3571C25.5554 31.3244 25.386 30.1386 25.6401 28.1059C25.8941 25.9885 25.9788 24.718 26.9105 23.4476C28.9432 20.5679 33.0087 20.6526 33.3475 20.6526C36.3966 20.6526 39.3609 22.4312 40.6314 24.9721C41.309 26.2426 41.309 27.3436 41.3937 29.7999C41.3937 34.4582 41.3937 36.8297 41.3937 40.7258C41.2243 50.0424 41.7324 47.6709 41.3937 52.0751C41.2243 54.3619 41.0549 55.463 41.6478 57.0722C41.7324 57.411 43.4264 61.3918 47.5765 62.2387C51.3879 63.001 54.7758 60.6295 56.2156 58.1733C56.9779 56.8181 57.1473 55.463 57.4014 52.8374C57.7401 48.8566 57.4014 44.7912 57.4014 44.7912C57.4014 44.4524 57.4014 44.3677 57.4014 43.6054"
                    stroke="#292C35"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M54.0996 41.149L60.1978 38.0999" stroke="#E5290F" strokeWidth="2" strokeMiterlimit="10" className="point" strokeLinecap="round" />
                  <path d="M54.0996 38.0154L60.1131 41.2339" stroke="#E5290F" strokeWidth="2" strokeMiterlimit="10" className="point" strokeLinecap="round" />
                  <path d="M56.8939 23.9557C61.8522 23.9557 65.8717 19.9362 65.8717 14.9779C65.8717 10.0195 61.8522 6 56.8939 6C51.9355 6 47.916 10.0195 47.916 14.9779C47.916 19.9362 51.9355 23.9557 56.8939 23.9557Z" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M56.8926 36.4061V23.9557" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                  <path d="M56.3008 9.98085C56.6396 9.98085 58.5029 9.81145 60.1121 11.2513C61.8061 12.7758 61.7214 14.8933 61.7214 15.232" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                </svg>

                <p className="title">경로안내</p>
              </Link>
            </div>
            <div className="flex-box__item">
              <Link to="/web-integrated-search">
                <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>명칭검색</title>
                  <desc>POI 라는 텍스트가 있는 원형의 이미지</desc>
                  <circle cx="36.4987" cy="38.6196" r="27.7604" stroke="#292C35" strokeWidth="2" />
                  <path d="M62.0215 38.1666H68.5003" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                  <path d="M36.501 70.0797L36.501 63.601" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                  <path d="M4.5 38.1666H10.9788" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                  <path d="M36.5001 14.1801L28.6392 17.6355L32.6128 9.77454L36.5001 2L40.4737 9.77454L44.361 17.6355L36.5001 14.1801Z" fill="#EC342E" stroke="#EC342E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="point" />
                  <path d="M36.501 1.99997V14.1801" stroke="#EC342E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="point" />
                  <path d="M26.7817 33.9115H29.8916C31.9648 33.9115 33.6061 34.6026 33.6061 36.8486C33.6061 39.0946 31.9648 39.9584 29.9779 39.9584H28.6822V43.3274H26.7817V33.9115ZM29.8052 38.4899C31.1009 38.4899 31.7056 37.9716 31.7056 36.8486C31.7056 35.7256 31.0145 35.3801 29.7188 35.3801H28.6822V38.4899H29.8052Z" fill="#292C35" />
                  <path d="M34.3838 38.5766C34.3838 35.5531 36.1115 33.7391 38.6166 33.7391C41.1217 33.7391 42.8494 35.5531 42.8494 38.5766C42.8494 41.6 41.1217 43.5004 38.6166 43.5004C36.1115 43.5004 34.3838 41.6 34.3838 38.5766ZM40.8626 38.5766C40.8626 36.5897 39.9987 35.3804 38.6166 35.3804C37.2345 35.3804 36.3706 36.5897 36.3706 38.5766C36.3706 40.5634 37.2345 41.8591 38.6166 41.8591C39.9987 41.8591 40.8626 40.5634 40.8626 38.5766Z" fill="#292C35" />
                  <path d="M44.3164 33.9117H46.2168V43.3275H44.3164V33.9117Z" fill="#292C35" />
                </svg>

                <p className="title">명칭검색</p>
              </Link>
            </div>
            <div className="flex-box__item">
              <Link to="/web-geo-coding">
                <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>지오코딩</title>
                  <desc>레이더 모양의 이미지</desc>
                  <path d="M61.6944 5H11.0647C7.99141 5 5.5 7.49141 5.5 10.5647V61.1944C5.5 64.2677 7.99141 66.7592 11.0647 66.7592H61.6944C64.7677 66.7592 67.2592 64.2677 67.2592 61.1944V10.5647C67.2592 7.49141 64.7677 5 61.6944 5Z" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M16.3555 15.3994L33.9618 33.4619" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                  <path d="M36.4266 54.6261C25.9358 54.6261 17.4519 46.1422 17.4519 35.6514C17.4519 25.1605 19.5501 25.7079 23.0166 22.2413L18.729 17.8625C14.1678 22.4238 11.3398 28.7183 11.3398 35.6514C11.3398 49.5175 22.5605 60.6469 36.3354 60.6469C50.1104 60.6469 61.2398 49.6088 61.331 35.8338H55.2189C55.0365 46.1422 46.6438 54.5349 36.2442 54.5349L36.4266 54.6261Z" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M36.4238 42.5845C32.5924 42.5845 29.4907 39.4829 29.4907 35.6515C29.4907 31.82 30.2205 32.0937 31.4064 30.8165L27.3013 26.6202C25.0207 28.9008 23.6523 32.0937 23.6523 35.5602C23.6523 42.5845 29.3995 48.3317 36.4238 48.3317C43.4481 48.3317 49.0128 42.767 49.1953 35.8339H43.3569C43.1744 39.5741 40.164 42.4933 36.4238 42.4933V42.5845Z" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M63.7928 34.1005H41.3516V36.8372H63.7928V34.1005Z" fill="#292C35" />
                  <path d="M20.5518 43.0406L17.9062 44.2265L19.6395 47.693L21.7377 46.4159L20.5518 42.9493V43.0406Z" fill="#292C35" />
                  <path d="M19.614 44.3718C20.066 44.1493 20.2522 43.6025 20.0297 43.1505C19.8073 42.6984 19.2605 42.5123 18.8084 42.7347C18.3564 42.9572 18.1702 43.504 18.3927 43.956C18.6151 44.4081 19.1619 44.5942 19.614 44.3718Z" fill="#292C35" />
                  <path d="M23.1077 52.8017C24.9719 52.8017 26.4831 51.2905 26.4831 49.4263C26.4831 47.5622 24.9719 46.051 23.1077 46.051C21.2436 46.051 19.7324 47.5622 19.7324 49.4263C19.7324 51.2905 21.2436 52.8017 23.1077 52.8017Z" fill="#FAFAFA" stroke="#FAFAFA" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M23.1051 51.9807C24.5158 51.9807 25.6594 50.8371 25.6594 49.4264C25.6594 48.0157 24.5158 46.8721 23.1051 46.8721C21.6944 46.8721 20.5508 48.0157 20.5508 49.4264C20.5508 50.8371 21.6944 51.9807 23.1051 51.9807Z" stroke="#E5290F" strokeWidth="2" strokeMiterlimit="10" className="point" />
                  <path d="M36.7908 35.1038H35.9698C35.7179 35.1038 35.5137 35.308 35.5137 35.5599V36.3809C35.5137 36.6328 35.7179 36.837 35.9698 36.837H36.7908C37.0427 36.837 37.2469 36.6328 37.2469 36.3809V35.5599C37.2469 35.308 37.0427 35.1038 36.7908 35.1038Z" fill="#292C35" />
                  <path d="M36.8826 39.3917H35.9704C35.7688 39.3917 35.6055 39.5551 35.6055 39.7566V40.6688C35.6055 40.8704 35.7688 41.0337 35.9704 41.0337H36.8826C37.0841 41.0337 37.2475 40.8704 37.2475 40.6688V39.7566C37.2475 39.5551 37.0841 39.3917 36.8826 39.3917Z" fill="#292C35" />
                  <path d="M36.8826 63.1102H35.9704C35.7688 63.1102 35.6055 63.2736 35.6055 63.4751V64.3874C35.6055 64.5889 35.7688 64.7523 35.9704 64.7523H36.8826C37.0841 64.7523 37.2475 64.5889 37.2475 64.3874V63.4751C37.2475 63.2736 37.0841 63.1102 36.8826 63.1102Z" fill="#292C35" />
                  <path d="M36.8826 57.0893H35.9704C35.7688 57.0893 35.6055 57.2526 35.6055 57.4542V58.3664C35.6055 58.5679 35.7688 58.7313 35.9704 58.7313H36.8826C37.0841 58.7313 37.2475 58.5679 37.2475 58.3664V57.4542C37.2475 57.2526 37.0841 57.0893 36.8826 57.0893Z" fill="#292C35" />
                  <path d="M36.8826 44.9564H35.9704C35.7688 44.9564 35.6055 45.1198 35.6055 45.3213V46.2335C35.6055 46.4351 35.7688 46.5984 35.9704 46.5984H36.8826C37.0841 46.5984 37.2475 46.4351 37.2475 46.2335V45.3213C37.2475 45.1198 37.0841 44.9564 36.8826 44.9564Z" fill="#292C35" />
                  <path d="M36.8826 50.9771H35.9704C35.7688 50.9771 35.6055 51.1405 35.6055 51.342V52.2543C35.6055 52.4558 35.7688 52.6192 35.9704 52.6192H36.8826C37.0841 52.6192 37.2475 52.4558 37.2475 52.2543V51.342C37.2475 51.1405 37.0841 50.9771 36.8826 50.9771Z" fill="#292C35" />
                  <path d="M36.8826 7.18918H35.9704C35.7688 7.18918 35.6055 7.35256 35.6055 7.55409V8.46633C35.6055 8.66786 35.7688 8.83123 35.9704 8.83123H36.8826C37.0841 8.83123 37.2475 8.66786 37.2475 8.46633V7.55409C37.2475 7.35256 37.0841 7.18918 36.8826 7.18918Z" fill="#292C35" />
                  <path d="M36.8826 13.2099H35.9704C35.7688 13.2099 35.6055 13.3732 35.6055 13.5748V14.487C35.6055 14.6886 35.7688 14.8519 35.9704 14.8519H36.8826C37.0841 14.8519 37.2475 14.6886 37.2475 14.487V13.5748C37.2475 13.3732 37.0841 13.2099 36.8826 13.2099Z" fill="#292C35" />
                  <path d="M36.8826 25.343H35.9704C35.7688 25.343 35.6055 25.5063 35.6055 25.7079V26.6201C35.6055 26.8216 35.7688 26.985 35.9704 26.985H36.8826C37.0841 26.985 37.2475 26.8216 37.2475 26.6201V25.7079C37.2475 25.5063 37.0841 25.343 36.8826 25.343Z" fill="#292C35" />
                  <path d="M36.8826 30.999H35.9704C35.7688 30.999 35.6055 31.1623 35.6055 31.3639V32.2761C35.6055 32.4776 35.7688 32.641 35.9704 32.641H36.8826C37.0841 32.641 37.2475 32.4776 37.2475 32.2761V31.3639C37.2475 31.1623 37.0841 30.999 36.8826 30.999Z" fill="#292C35" />
                  <path d="M36.8826 19.3221H35.9704C35.7688 19.3221 35.6055 19.4855 35.6055 19.687V20.5993C35.6055 20.8008 35.7688 20.9642 35.9704 20.9642H36.8826C37.0841 20.9642 37.2475 20.8008 37.2475 20.5993V19.687C37.2475 19.4855 37.0841 19.3221 36.8826 19.3221Z" fill="#292C35" />
                  <path d="M47.0078 36.3811V35.4689C47.0078 35.2674 46.8444 35.104 46.6429 35.104H45.7307C45.5291 35.104 45.3658 35.2674 45.3658 35.4689V36.3811C45.3658 36.5827 45.5291 36.746 45.7307 36.746H46.6429C46.8444 36.746 47.0078 36.5827 47.0078 36.3811Z" fill="#292C35" />
                  <path d="M41.3516 36.29V35.3777C41.3516 35.1762 41.1882 35.0128 40.9867 35.0128H40.0744C39.8729 35.0128 39.7095 35.1762 39.7095 35.3777V36.29C39.7095 36.4915 39.8729 36.6549 40.0744 36.6549H40.9867C41.1882 36.6549 41.3516 36.4915 41.3516 36.29Z" fill="#292C35" />
                  <path d="M53.0273 36.3812V35.4689C53.0273 35.2674 52.864 35.104 52.6625 35.104H51.7502C51.5487 35.104 51.3853 35.2674 51.3853 35.4689V36.3812C51.3853 36.5827 51.5487 36.746 51.7502 36.746H52.6625C52.864 36.746 53.0273 36.5827 53.0273 36.3812Z" fill="#292C35" />
                  <path d="M15.1699 36.3811V35.4689C15.1699 35.2674 15.0066 35.104 14.805 35.104H13.8928C13.6913 35.104 13.5279 35.2674 13.5279 35.4689V36.3811C13.5279 36.5827 13.6913 36.746 13.8928 36.746H14.805C15.0066 36.746 15.1699 36.5827 15.1699 36.3811Z" fill="#292C35" />
                  <path d="M27.3008 36.3812V35.4689C27.3008 35.2674 27.1374 35.104 26.9359 35.104H26.0236C25.8221 35.104 25.6587 35.2674 25.6587 35.4689V36.3812C25.6587 36.5827 25.8221 36.7461 26.0236 36.7461H26.9359C27.1374 36.7461 27.3008 36.5827 27.3008 36.3812Z" fill="#292C35" />
                  <path d="M32.8691 36.29V35.3777C32.8691 35.1762 32.7058 35.0128 32.5042 35.0128H31.592C31.3905 35.0128 31.2271 35.1762 31.2271 35.3777V36.29C31.2271 36.4915 31.3905 36.6549 31.592 36.6549H32.5042C32.7058 36.6549 32.8691 36.4915 32.8691 36.29Z" fill="#292C35" />
                  <path d="M21.2812 36.3811V35.4689C21.2812 35.2674 21.1179 35.104 20.9164 35.104H20.0041C19.8026 35.104 19.6392 35.2674 19.6392 35.4689V36.3811C19.6392 36.5827 19.8026 36.746 20.0041 36.746H20.9164C21.1179 36.746 21.2812 36.5827 21.2812 36.3811Z" fill="#292C35" />
                </svg>

                <p className="title">지오코딩</p>
              </Link>
            </div>
            <div className="flex-box__item">
              <Link to="/web-static-maps">
                <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>Static Map</title>
                  <desc>지구본 모양에 지도 마커가 있는 이미지</desc>
                  <path d="M7.5 40.1486H62.0439" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M34.7715 67.3358V12.8766" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M48.069 40.1485C48.069 54.8008 34.7718 66.7429 34.7718 66.7429C34.7718 66.7429 21.4746 54.8855 21.4746 40.1485C21.4746 25.4115 34.7718 13.5541 34.7718 13.5541C34.7718 13.5541 48.069 25.4115 48.069 40.1485Z" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M54.168 21.8543C49.171 25.6656 42.3107 29.4769 34.8575 29.4769C27.4043 29.4769 20.5439 25.7503 15.5469 21.8543C20.6286 16.5185 27.4043 13.2153 34.8575 13.2153C42.3107 13.2153 49.0863 16.5185 54.168 21.8543Z" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M54.168 58.4429C49.171 54.6316 42.3107 50.8203 34.8575 50.8203C27.4043 50.8203 20.5439 54.5469 15.5469 58.4429C20.6286 63.7787 27.4043 67.0819 34.8575 67.0819C42.3107 67.0819 49.0863 63.7787 54.168 58.4429Z" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path d="M34.7711 67.0817C49.6458 67.0817 61.7042 55.0233 61.7042 40.1485C61.7042 25.2737 49.6458 13.2153 34.7711 13.2153C19.8963 13.2153 7.83789 25.2737 7.83789 40.1485C7.83789 55.0233 19.8963 67.0817 34.7711 67.0817Z" stroke="#292C35" strokeWidth="2" strokeMiterlimit="10" />
                  <path
                    d="M64.5004 14.9094C64.5004 14.5706 64.5004 14.2318 64.5004 13.893C63.9922 8.89599 59.7574 5 54.591 5C49.4246 5 45.1898 8.89599 44.6816 13.893C44.6816 14.2318 44.6816 14.5706 44.6816 14.9094C44.6816 16.688 45.1898 18.3819 46.0368 19.9064V20.0758L54.2522 33.5424C54.3369 33.7118 54.9298 33.7118 55.0992 33.2883L63.23 19.9064C64.0769 18.2972 64.5004 16.7727 64.5004 14.9094ZM54.591 19.9064C51.7961 19.9064 49.4246 17.6196 49.4246 14.74C49.4246 11.8603 51.7114 9.57356 54.591 9.57356C57.4707 9.57356 59.7574 11.8603 59.7574 14.74C59.7574 17.6196 57.4707 19.9064 54.591 19.9064Z"
                    fill="#EC342E"
                    stroke="#EC342E"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    className="point"
                  />
                </svg>

                <p className="title">Static Map</p>
              </Link>
            </div>

            <div className="flex-box__item sdk">
              <Link to="https://inavimaps-android.gitbook.io/sdkguide/" target="_blank" rel="noopener noreferrer">
                <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile SDK</title>
                  <desc>SDK가 쓰여진 정사각형 네모 3장이 겹친 이미지</desc>
                  <g clipPath="url(#clip0_18_816)">
                    <path d="M7.60478 48.5025C5.20257 46.4695 5.40561 42.7048 8.01256 40.9419L35.2032 22.5551C36.8669 21.4301 39.0582 21.473 40.6766 22.6622L65.0062 40.5393C67.5814 42.4315 67.591 46.2755 65.0254 48.1807L37.2624 68.7964C35.4908 70.1119 33.0465 70.0341 31.3621 68.6086L7.60478 48.5025Z" fill="white" stroke="#292C35" strokeWidth="2.5" />
                    <path d="M7.5092 39.434C5.12404 37.3956 5.33535 33.6458 7.93441 31.8882L35.1578 13.4793C36.8215 12.3543 39.0128 12.3972 40.6312 13.5864L65.0432 31.524C67.5989 33.402 67.6316 37.2092 65.1084 39.1308L37.5122 60.1464C35.7327 61.5015 33.2488 61.4316 31.5484 59.9784L7.5092 39.434Z" fill="white" stroke="#292C35" strokeWidth="2.5" />
                    <path d="M7.52622 31.8239C5.13527 29.7874 5.34378 26.0324 7.94551 24.2731L35.1578 5.87167C36.8215 4.74669 39.0128 4.78955 40.6312 5.97872L65.0537 23.9241C67.607 25.8002 67.6426 29.6028 65.1248 31.5263L37.6228 52.5383C35.8454 53.8962 33.3616 53.8302 31.6589 52.3799L7.52622 31.8239Z" fill="white" stroke="#292C35" strokeWidth="2.5" />
                    <g clipPath="url(#clip1_18_816)">
                      <path
                        className="point"
                        d="M29.1847 31.937L30.5873 30.7012C29.4693 29.4715 27.6779 29.5101 26.1146 30.8875C24.5707 32.2479 24.1918 34.0956 25.3252 35.3722C26.2349 36.4047 27.489 36.3552 28.9348 35.6004L29.8673 35.1075C30.8042 34.6194 31.4399 34.4572 31.8647 34.9394C32.3281 35.4653 32.1489 36.2635 31.3794 36.9415C30.6002 37.628 29.7177 37.7654 29.0425 37.0972L27.6204 38.3502C28.9988 39.8263 30.78 39.6584 32.4803 38.1515C34.2037 36.6417 34.4775 34.9298 33.3452 33.6349C32.3062 32.4654 30.8645 32.6456 29.4121 33.4323L28.6417 33.8343C27.9128 34.2343 27.1851 34.4688 26.7394 33.9532C26.3323 33.4813 26.4459 32.7757 27.1862 32.1234C27.9021 31.4926 28.6328 31.4284 29.1847 31.937Z"
                        fill="#EC342E"
                      />
                      <path className="point" d="M39.0648 32.5802C41.2174 30.6836 41.3463 28.2083 39.3975 26.0064C37.467 23.8056 35.0038 23.6315 32.8804 25.5024L30.3674 27.7167L36.5809 34.7687L39.0648 32.5802ZM36.9349 32.2248L32.9356 27.6859L33.9096 26.8276C35.2441 25.6519 36.5547 25.7255 37.9364 27.2937C39.331 28.8765 39.2434 30.1909 37.8992 31.3753L36.9349 32.2248Z" fill="#EC342E" />
                      <path className="point" d="M43.3235 28.6274L44.7846 27.34L43.008 25.3237L42.9587 23.7754L47.4827 24.9627L49.236 23.4179L43.144 21.8647L42.9932 16.3916L41.2302 17.945L41.4233 23.3288L41.326 23.4146L38.5711 20.2879L37.11 21.5753L43.3235 28.6274Z" fill="#EC342E" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_18_816">
                      <rect width="72" height="72" fill="white" transform="translate(0.5)" />
                    </clipPath>
                    <clipPath id="clip1_18_816">
                      <rect width="25.6258" height="22.4226" fill="white" transform="translate(22.9707 17.4116) rotate(-3.93642)" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="title">Mobile SDK</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="biz-section">
          <p className="title">Biz 파트너</p>
          <p className="sub-title">
            아이나비의 <strong>25년간의 자체 기술력과 노하우</strong>를 많은 기업에서 경험하고 있습니다.
            <br />
            모빌리티의 새로운 내일, 아이나비 MAPS API SDK와 함께 하세요.
          </p>
        </section>
        <div className="auto-slide-area" onClick={() => navigate("/biz-partner")}>
          <AutoSlider />
        </div>

        <div className="news-area">
          <section className="news-section">
            <article>
              <div className="head-box">
                <p className="head-box__title">공지사항</p>
                <Link className="head-box__link" to="/notice">
                  more +
                </Link>
              </div>
              <div className="news-link-wrap">
                <Link className="news-link-wrap__link" to="/notice/:idx">
                  <strong>[업데이트]</strong> 일부 기능의 사양 변경 및 종료 안내입니다.
                </Link>
                <Link className="news-link-wrap__link" to="/notice/:idx">
                  <strong>[업데이트]</strong> 일부 기능의 사양 변경 및 종료 안내입니다.
                </Link>
                <Link className="news-link-wrap__link" to="/notice/:idx">
                  <strong>[업데이트]</strong> 일부 기능의 사양 변경 및 종료 안내입니다.
                </Link>
                <Link className="news-link-wrap__link" to="/notice/:idx">
                  <strong>[업데이트]</strong> 일부 기능의 사양 변경 및 종료 안내입니다.
                </Link>
                <Link className="news-link-wrap__link" to="/notice/:idx">
                  <strong>[업데이트]</strong> 일부 기능의 사양 변경 및 종료 안내입니다.
                </Link>
                <Link className="news-link-wrap__link" to="/notice/:idx">
                  <strong>[업데이트]</strong> 일부 기능의 사양 변경 및 종료 안내입니다.
                </Link>
              </div>
            </article>

            <article>
              <div className="head-box">
                <p className="head-box__title">개발자포럼</p>
                <Link className="head-box__link" to="/community">
                  more +
                </Link>
              </div>
              <div className="news-link-wrap">
                <Link className="news-link-wrap__link" to="/community/:idx">
                  일부 기능의 사양 변경 및 종료 안내입니다.
                </Link>
                <Link className="news-link-wrap__link" to="/community/:idx">
                  일부 기능의 사양 변경 및 종료 안내입니다.
                </Link>
                <Link className="news-link-wrap__link" to="/community/:idx">
                  일부 기능의 사양 변경 및 종료 안내입니다.
                </Link>
                <Link className="news-link-wrap__link" to="/community/:idx">
                  일부 기능의 사양 변경 및 종료 안내입니다.
                </Link>
              </div>
            </article>

            <Link to="https://www.nhncloud.com/kr/service/application-service/maps" target="_blank" className="btn-common create-btn">
              Create APP KEY
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
