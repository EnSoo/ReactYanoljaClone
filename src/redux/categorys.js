//(1) state : 전역저장소 store에 저장할 number의 초기값
// const serivceKey='4xuodeRe%2F8pjCdslV6gYfzQaCeC49jPH%2FqUlsYhV7BgGD3o2Qu3grRwtOU8gP4DRKf9r5GaPxN45jGAbLdBoXA%3D%3D'
const serivceKey='22U2mNAkKslzaEsDcnkuzFR34dAEsJjPxgl1W8l8UPoSAQbBntmEeflqh2xKHpTXgq5x5vdsXy6OShRHmAS0kA%3D%3D'
const apiurl='http://apis.data.go.kr/B551011/KorService1/areaBasedList1'
const defaultParameter='&pageNo=1&numOfRows=100&MobileApp=AppTest&MobileOS=ETC&arrange=A&_type=json'
const initState={
    category:{
        main:'B02',
        middle:'B0201',
        sub:'B02010100',
        type: 'sub',
        url: apiurl+'?serviceKey='+
            serivceKey + defaultParameter + `&cat1=B02&cat2=B0201&cat3=B02010100`
    }
}

//(2) action : 어떻게 변경하고 싶은지.. 동작명(액션 타입)을 지정


// 액션객체를 리턴하는 함수
export const setCategory= (category) => {
    switch(category){
        case 'Hotel' :
            return { main:'B02', middle:'B0201', sub:'B02010100', type: 'sub'}
        case 'Pension':
            return {main:'B02', middle:'B0201', sub:'B02010700', type: 'sub'}
        case 'Residence':
            return {main:'B02', middle:'B0201', sub:'B02011300', type: 'sub'}
        case 'Motel':
            return {main:'B02', middle:'B0201', sub:'B02010900', type: 'sub'}
        case 'CulturalFacilities':
            return {main:'A02', middle:'A0206', sub:'', type: 'middle'}
        case 'PerformanceEvent':
            return {main:'A02', middle:'A0208', sub:'', type: 'middle'}
        case 'TourCourse':
            return {main:'C01', middle:'', sub:'', type: 'main'}
        case 'Leisure':
            return {main:'A03', middle:'', sub:'', type: 'main'}
        default :
            return {main:'B02', middle:'B0201', sub:'B02010100', type: 'sub'}
    }
} 

// type 뿐만 아니라 보내고 싶은 값도 넣을 수 있음

//(3) reducer : 기존 state값과 Action 객체를 파라미터로 전달받아 action의 type에 따라 state 값을 변경하여 새로운 state객체를 리턴해주는 함수
export default function categoryReducer(state= initState, action){
    switch(action.type){
        case 'sub':
            return {...state, category:{...action, url : apiurl+'?serviceKey='+ serivceKey + defaultParameter + `&cat1=${action.main}&cat2=${action.middle}&cat3=${action.sub}`}}
        case 'middle':
            return {...state, category:{...action, url : apiurl+'?serviceKey='+ serivceKey + defaultParameter + `&cat1=${action.main}&cat2=${action.middle}`}}
        case 'main':
            return {...state, category:{...action, url : apiurl+'?serviceKey='+ serivceKey + defaultParameter + `&cat1=${action.main}`}}
        default :
            return state
    }
}