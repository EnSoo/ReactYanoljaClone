// 카카오 개발자 사이트에서 카카오 MAP API 튜토리얼 따라하기
import { useEffect, useState } from 'react'
import InfoWindow from './Infowindow'
import { renderToString } from 'react-dom/server';
import { useNavigate } from 'react-router-dom';

//window최상위 객체안에 등록된 kakao map api를 뽑아서 사용해야 함
const { kakao } = window

const KaoMap= ({item})=>{

    const [ infoDisplay, setInfoDisplay ] =useState(true)

    const navigate = useNavigate()

    //화면이 그려진 후 발동하는 라이프사이클 역할의 HOOK
    useEffect(()=>{
        
        const latlng= new kakao.maps.LatLng(item.mapy, item.mapx) //마커 표시 좌표

        const container= document.getElementById('map')
        const options= {
            center: latlng,
            draggable: false,
            level: 3, 
        }
        let map= new kakao.maps.Map( container, options )

        //alert(items.length)
        //마커객체 만들기
        const marker= new kakao.maps.Marker({
            position: latlng,
            title: item.title  //마커에 마우스를 올리면 보이는 글씨
            //마커이미지
        })

        //지도에 마커를 표시하기
        marker.setMap(map)

        //마커 클릭 리스너..
        kakao.maps.event.addListener(marker,'click', ()=>{ setInfoDisplay(!infoDisplay) })

        const iwContent = renderToString(<InfoWindow item={item}/>), // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(latlng.getLat(), latlng.getLng()) //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성하고 지도에 표시합니다
        const infowindow = new kakao.maps.InfoWindow({
            map: map, // 인포윈도우가 표시될 지도
            position : iwPosition, 
            content : iwContent
        })
        
        infoDisplay ? infowindow.open(map, marker) : infowindow.close()
    },[infoDisplay])    

    return (
        // 카카오지도가 그려질 영역
        <div id='map' style={{width:'100%', height:'70vh'}}></div>
    )
}
export default KaoMap