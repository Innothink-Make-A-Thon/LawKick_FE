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
        {"kickId": "R2WK9C", "latitude": 37.45041, "longitude": 126.6155999, "brandId" : 1}, //우리꺼
        {"kickId": "J2WK9C", "latitude": 37.449485, "longitude": 126.656090, "brandId" : 2},
        {"kickId": "K2WK9C", "latitude": 37.449085, "longitude": 126.656058, "brandId" : 3},
        {"kickId": "L2WK9C", "latitude": 37.450686, "longitude": 126.656884, "brandId" : 4},
        {"kickId": "M2WK9C", "latitude": 37.449187, "longitude": 126.655704, "brandId" : 5},
        {"kickId": "N2WK9C", "latitude": 37.55002, "longitude": 126.626530, "brandId" : 3},
        {'kickId': 'UZWJ49', 'latitude': 37.45041, 'longitude': 126.656466, 'brandId': 5},
        {'kickId': '8I8OWY', 'latitude': 37.451898, 'longitude': 126.65711, 'brandId': 2},
        {'kickId': '42CSR4', 'latitude': 37.44932, 'longitude': 126.6541, 'brandId': 3},
        {'kickId': 'ZXN4QR', 'latitude': 37.449837, 'longitude': 126.653507, 'brandId': 2},
        {'kickId': 'GMP62V', 'latitude': 37.450972, 'longitude': 126.659496, 'brandId': 1},
        {'kickId': '5EVC0K', 'latitude': 37.449751, 'longitude': 126.65634, 'brandId': 2},
        {'kickId': 'DK42JG', 'latitude': 37.451807, 'longitude': 126.653856, 'brandId': 3},
        {'kickId': '3G1QQU', 'latitude': 37.449408, 'longitude': 126.657174, 'brandId': 6},
        {'kickId': 'DK9WB0', 'latitude': 37.449896, 'longitude': 126.656077, 'brandId': 1},
        {'kickId': 'HNBHGX', 'latitude': 37.45091, 'longitude': 126.650934, 'brandId': 3},
        {'kickId': 'YU4CZY', 'latitude': 37.451031, 'longitude': 126.650339, 'brandId': 5},
        {'kickId': '0EMD5L', 'latitude': 37.449699, 'longitude': 126.655243, 'brandId': 3},
        {'kickId': '604L4U', 'latitude': 37.451849, 'longitude': 126.655081, 'brandId': 6},
        {'kickId': '9030PP', 'latitude': 37.450101, 'longitude': 126.649888, 'brandId': 4},
        {'kickId': '8YFEIS', 'latitude': 37.451171, 'longitude': 126.659802, 'brandId': 3},
        {'kickId': 'M1QG8Z', 'latitude': 37.451238, 'longitude': 126.651292, 'brandId': 4},
        {'kickId': '07TXL9', 'latitude': 37.450611, 'longitude': 126.652207, 'brandId': 4},
        {'kickId': '1F5WA6', 'latitude': 37.450789, 'longitude': 126.655899, 'brandId': 5},
        {'kickId': 'SKAK4B', 'latitude': 37.449782, 'longitude': 126.650855, 'brandId': 1},
        {'kickId': 'WIUDE8', 'latitude': 37.450215, 'longitude': 126.658522, 'brandId': 5},
        {'kickId': '2ETPOP', 'latitude': 37.451899, 'longitude': 126.656189, 'brandId': 6},
        {'kickId': 'HWA4RW', 'latitude': 37.450098, 'longitude': 126.65765, 'brandId': 2},
        {'kickId': '57L5B2', 'latitude': 37.449238, 'longitude': 126.657766, 'brandId': 3},
        {'kickId': '056GSX', 'latitude': 37.451202, 'longitude': 126.652297, 'brandId': 3},
        {'kickId': 'A54Q5L', 'latitude': 37.450964, 'longitude': 126.659737, 'brandId': 6},
        {'kickId': 'Q5EIPT', 'latitude': 37.449866, 'longitude': 126.654052, 'brandId': 2},
        {'kickId': 'HNZANY', 'latitude': 37.450952, 'longitude': 126.657948, 'brandId': 2},
        {'kickId': 'U004N9', 'latitude': 37.450811, 'longitude': 126.656528, 'brandId': 4},
        {'kickId': 'T5UHD9', 'latitude': 37.449263, 'longitude': 126.652546, 'brandId': 5},

        
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

        naver.maps.Event.addListener(map, 'click', ()=>{
            setShowKickBox(false);
        })
    
    },[]);

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
        <MainContainer>
            <NaverMap id="map"></NaverMap>
            <MainBottomBar></MainBottomBar>
            { showKickBox && KickBoxInfo && <MainKickBox isVisible={showKickBox} KickInfo={KickBoxInfo}></MainKickBox>}
            {/* 각 마커 클릭 시에 MainKickBox가 활성화 되고 일련번호, 브랜드 번호를 전해줘야 함.. 이걸 어떻게 구현할것인가.. 낼 하자 */}
        </MainContainer>
    );
};

export default MainPage;