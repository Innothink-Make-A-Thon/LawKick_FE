import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainBottomBar from "./main_component/MainBottomBar";
import GPSButton from './main_img/GPS_button.png';
import RotationButton from './main_img/rotation_button.png';
import SsingMarker from './main_img/씽씽_Marker.png';
import BeamMarker from './main_img/Beam_Marker.png';
import DeerMarker from './main_img/deer_Marker.png';
import GcooMarker from './main_img/Gcooter_Marker.png';
import KickMarker from './main_img/Kickhoing_Marker.png';
import SwingMarker from './main_img/Swing_Marker.png';
import MainKickBox from "./main_component/MainKickBox";

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

const NaverMap = styled.div`
    width: 100%;
    height: 100vh;
`;

let trigger = 0;

const getBrandMarker = (brandId) => {
    const brandMarkers = {
      1: SsingMarker,
      2: BeamMarker,
      3: DeerMarker,
      4: GcooMarker,
      5: KickMarker,
      6: SwingMarker,
    };
    return brandMarkers[brandId];
  };

const dummy = {
    "kickboardList" : [
        {"kickId": "R2WK9C", "latitude": 37.450757, "longitude": 126.657565, "brandId" : 1}, //우리꺼
        {"kickId": "J2WK9C", "latitude": 37.449485, "longitude": 126.656090, "brandId" : 2},
        {"kickId": "K2WK9C", "latitude": 37.449085, "longitude": 126.656058, "brandId" : 3},
        {"kickId": "L2WK9C", "latitude": 37.450686, "longitude": 126.656884, "brandId" : 4},
        {"kickId": "M2WK9C", "latitude": 37.449187, "longitude": 126.655704, "brandId" : 5},
        {"kickId": "N2WK9C", "latitude": 37.451002, "longitude": 126.656530, "brandId" : 6},
    ]
};

const MainPage = () => {

    const [showKickBox, setShowKickBox] = useState(false);
    const [KickBoxInfo, setKickBoxInfo] = useState({});
    // const [myLocation, setMyLocation] = useState({});
    let markers = [];

    // useEffect(()=>{
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(locationSuccess,locationError);
    //       }
    // },[]); //현재 위도 경도 받기 너무 구림.. 하나도 안 맞아요
    //navigator.geolocation 은 Chrome 50 버젼 이후로 HTTP 환경에서 사용이 Deprecate 되어 HTTPS 환경에서만 ... -> 어쩐지 안되더라

    useEffect(()=>{
        const {naver} = window;
        if (!naver) return;

        //지도에 삽입할 버튼 (html 태그 string 타입으로 전달해야 함)
        let locationBtnHtml = `<img src=${GPSButton} alt= "my location btn" style="cursor: pointer; margin-left: 0.7rem; margin-bottom: ${showKickBox ? '26vh' : '15vh'}"/>`;
        let rotationBtnHtml = `<img src=${RotationButton} alt="rotate btn" style="cursor: pointer; margin-left: 0.7rem; margin-bottom: 0.3rem"/>`

        let mapOptions = { //지도 옵션
            // center: new naver.maps.LatLng(myLocation.latitude, myLocation.longitude),
            center: new naver.maps.LatLng(37.449657, 126.656565),
            zoom: 18,
            // zoomControl: true, //늘였다 줄였다 컨트롤
            // zoomControlOptions: {
            //     style: naver.maps.ZoomControlStyle.SMALL,
            //     position: naver.maps.Position.LEFT_BOTTOM
            // },
        };
    
        let map = new naver.maps.Map('map', 
            mapOptions); //지도 생성 + 옵션 추가

        // let markerOptions = {
        //     position: new naver.maps.LatLng(37.450757, 126.657565),
        //     map: map,
        //     icon: {
        //         url: SsingMarker,
        //         // size: new naver.maps.Size(50, 52),
        //         origin: new naver.maps.Point(0, 0),
        //         anchor: new naver.maps.Point(25, 26),
        //     }
        // };

        // let marker = new naver.maps.Marker(markerOptions);

        dummy.kickboardList.forEach((kickboard) => {
            let markerOptions = {
                position: new naver.maps.LatLng(kickboard.latitude, kickboard.longitude),
                map: map,
                icon: {
                    url: getBrandMarker(kickboard.brandId),
                    // size: new naver.maps.Size(50, 52),
                    origin: new naver.maps.Point(0, 0),
                    anchor: new naver.maps.Point(25, 26),
                },
                animation: naver.maps.Animation.DROP,
            };
    
            let marker = new naver.maps.Marker(markerOptions);
            marker.setClickable(true);
            markers.push(marker);
        });

        naver.maps.Event.once(map, 'init', () => { //왼쪽 하단 버튼 클릭 시 생기는 이벤트 처리
            let customControl = new naver.maps.CustomControl(locationBtnHtml, {
                position: naver.maps.Position.LEFT_BOTTOM
            });

            let customControl2 = new naver.maps.CustomControl(rotationBtnHtml, {
                position: naver.maps.Position.LEFT_BOTTOM
            });

            customControl.setMap(map);
            customControl2.setMap(map);

            naver.maps.Event.addDOMListener(customControl.getElement(), 'click', function() {
                map.setCenter(new naver.maps.LatLng(37.449657, 126.656565));
            })

            naver.maps.Event.addDOMListener(customControl2.getElement(), 'click', function() {
                window.location.reload();
            })
        });

        console.log(markers);
        for (let i=0; i<markers.length; i++){
            naver.maps.Event.addListener(markers[i], 'click', ()=>{
                setShowKickBox(true);
                setKickBoxInfo(
                    getKickId(markers[i], dummy.kickboardList)
                );
            });
        }
    
    },[trigger]);

    // function locationSuccess(position){
    //     setMyLocation({
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //     });
    //     console.log(myLocation);
    // }

    // function locationError(){
    //     setMyLocation({
    //         latitude: 37.450664,
    //         longitude: 126.657079,
    //     });
    //     alert('오류');
    // }

    function getKickId(marker, kickboardList){
        const kickboard = kickboardList.find((kick) => marker.icon.url === getBrandMarker(kick.brandId));

        return kickboard ? {"kickId" : kickboard.kickId, "brandId" : kickboard.brandId} : null;
    }
 
    return (
        <MainContainer onClick={() => trigger++}>
            <NaverMap id="map"></NaverMap>
            <MainBottomBar></MainBottomBar>
            { showKickBox && KickBoxInfo && <MainKickBox KickInfo={KickBoxInfo}></MainKickBox>}
            {/* 각 마커 클릭 시에 MainKickBox가 활성화 되고 일련번호, 브랜드 번호를 전해줘야 함.. 이걸 어떻게 구현할것인가.. 낼 하자 */}
        </MainContainer>
    );
};

export default MainPage;