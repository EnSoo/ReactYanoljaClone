import { Link, Outlet, useLocation } from "react-router-dom"
import Home from "./components/Home"
import styled from "styled-components"

const Main = () =>{

    //현재 사이트의 위치
    const location = useLocation()

    return(
        <Container>
            {/* [1] 공통사용 영역 - 앱 제목줄 header 영역 */}

            {/* [3] 콘텐츠영역 - 여기는 페이지가 변경되어야 함. <Outlet> */}
            <main style={{flex:1}}>
                {/* 중첩된 자식 컴포넌트들을 이곳에 그려내기 */}
                {location.pathname !== '/' ? <Outlet/> : <Home/>}
            </main>
            {/* [2] 공통사용 영역 - footer영역 [탭버튼] */}
            <Bnv>
                <div>
                    <span><Link to='area'>지역</Link></span>
                    <span><Link to='Around'>내주변</Link></span>
                    <span><Link to="/">홈</Link></span>
                    <span><Link to='wishlist' >찜</Link></span>
                    <span><Link to='mypage'>마이</Link></span>
                </div>
            </Bnv>
        </Container>
    )
}

export default Main
const Container=styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 750px;
    padding: 0;
    margin: 0 auto;
`   

const Bnv=styled.div`
    display: flex;
    border-top: 1px solid black;
    padding: 1rem 0rem;
    position: fixed;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #F6F5F5;
    align-items: center;
    div{
        display: flex;
        flex: 1;
        max-width: 750px;
        flex-direction: row;
        margin: 0 auto;
        justify-content: space-around;
        span{
            display: flex;
            flex: 1;
            justify-content: center;
        }
    }
`

