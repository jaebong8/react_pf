import React, { useEffect, useRef, useState } from "react";
import Layout from "../common/Layout";

function Contact() {
  const path = process.env.PUBLIC_URL;
  //윈도우 전역객체 안에서 kakao라는 객체를 찾은 다음에 비구조화 할당
  const { kakao } = window;
  const info = [
    {
      title: "SEOUL",
      latlng: new kakao.maps.LatLng(37.554740104452726, 126.9705978395484),
      imgSrc: `${path}/img/marker1.webp`,
      imgSize: new kakao.maps.Size(100, 100),
      imgPos: { offset: new kakao.maps.Point(50, 50) },
    },
    {
      title: "GANGNAM",
      latlng: new kakao.maps.LatLng(37.49794136528692, 127.02761572713291),
      imgSrc: `${path}/img/marker1.webp`,
      imgSize: new kakao.maps.Size(100, 100),
      imgPos: { offset: new kakao.maps.Point(50, 100) },
    },
    {
      title: "YEOUIDO",
      latlng: new kakao.maps.LatLng(37.52162568481091, 126.92417415925405),
      imgSrc: `${path}/img/marker1.webp`,
      imgSize: new kakao.maps.Size(100, 100),
      imgPos: { offset: new kakao.maps.Point(50, 100) },
    },
  ];
  const container = useRef(null);
  const [Map, setMap] = useState();

  // 트래픽 토글 버튼
  const [Traffic, setTraffic] = useState(false);

  const [mapInfo, setmapInfo] = useState(info);

  //branch index 관리
  const [Index, setIndex] = useState(0);

  useEffect(() => {
    //기존 지도 안쪽의 컨텐츠를 비워서 초기화

    container.current.innerHTML = "";
    // 지도를 표시할 div
    const mapOption = {
      center: mapInfo[Index].latlng, // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    const mapInstance = new kakao.maps.Map(container.current, mapOption);
    setMap(mapInstance);

    const markerPosition = mapInfo[Index].latlng;

    //마커 이미지
    const imgSrc = mapInfo[Index].imgSrc;
    const imgSize = mapInfo[Index].imgSize;
    const imgPos = mapInfo[Index].imgPos;
    const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    // 지도 control
    const mapTypeControl = new kakao.maps.MapTypeControl();
    mapInstance.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    const zoomControl = new kakao.maps.ZoomControl();
    mapInstance.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const mapInit = () => {
      mapInstance.setCenter(mapInfo[Index].latlng);
    };
    window.addEventListener("resize", mapInit);

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(mapInstance);

    return () => {
      window.removeEventListener("resize", mapInit);
    };
  }, [Index]);
  useEffect(() => {
    handleTraffic();
  }, [Traffic]);

  const handleTraffic = () => {
    if (Map) {
      Traffic
        ? Map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
        : Map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    }
  };

  return (
    <Layout name={"Contact"}>
      <div className="touch">
        <div className="pic">
          <img src={`${path}/img/contact2.jpg`} />
        </div>
        <div className="text">
          <h2>GET IN TOUCH</h2>
          <p>
            Our Beige' customer service is always prepared to support you. How
            can we help you today?
          </p>
          <div className="email">
            <div className="tit">
              <p>Support</p>
              <p>Partnership</p>
              <p>Jobs opportunities</p>
              <p>Return & Issues</p>
              <p>Special Requires</p>
            </div>
            <div className="address">
              <p>support@solace-store.com</p>
              <p>partnership@solace-store.com</p>
              <p>jobs@solace-store.com</p>
              <p>returns@solace-store.com</p>
              <p>requires@solace-store.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button
          onClick={() => {
            setTraffic(!Traffic);
          }}
        >
          {Traffic ? " Traffic OFF" : "Traffic ON"}
        </button>
        <div className="wrapper">
          <div id="map" ref={container}></div>
        </div>

        <ul className="branch">
          {mapInfo.map((info, idx) => {
            return (
              <li
                key={idx}
                onClick={() => {
                  setIndex(idx);
                }}
                style={{
                  background: `url(${path}/img/map${idx}.jpg) no-repeat bottom/cover`,
                }}
              >
                {info.title}
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export default Contact;
