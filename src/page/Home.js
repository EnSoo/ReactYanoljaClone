import { Link } from "react-router-dom"
import logo from '../yanolja_logo.png'
import styled from 'styled-components'
import { MdMenu } from "react-icons/md";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { MdOutlineSearch } from "react-icons/md";

const Home = () => {
    return (
        <Container>
            <main>
                <section>
                    <MdMenu/>
                    <img src={logo}/>
                    <LiaShoppingCartSolid />
                </section>
                <div className="SearchBoxBorder">
                    <div className="SearchBox">
                        <MdOutlineSearch className="SearchIcon"/>
                        <span className="SearchText">무엇을 하고 놀까요?</span>
                    </div>
                </div>
                <div className="QuickCategory">
                    <Link to='hotel'>호텔/리조트</Link><br/>
                    <Link to='pension'>펜션/풀빌라</Link><br/>
                    <Link to='residence'>서비스드레지던스</Link><br/>
                    <Link to='motel'>모텔</Link><br/>
                    <Link to='cultural-facilities'>문화시설</Link><br/>
                    <Link to='performance-event'>공연/행사</Link><br/>
                    <Link to='tour-course'>관광코스</Link><br/>
                    <Link to='leisure'>레포츠</Link><br/>
                </div>
                <div className="eventList">
                    
                </div>
                <div className="BenefitQuickCategory">
                    매일랜덤뽑기, 항공권래플딜, 쿠폰혜택모음, 이벤트더보기
                </div>
                <div className="BenefitBanner">
                    지금 야놀자에 가입하세요
                </div>
                <div>

                </div>
            </main>
            <footer>

            </footer>
        </Container>
        
    )
}

export default Home

const Container=styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 100%;
    margin: 1rem auto;
    /* 상단 */
    section {
        font-size: 1.8rem;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }
    .SearchBoxBorder{
        background: linear-gradient(90deg, #5177f0, #a46dc5 33.5%, #fb5a90 67.5%, #ff3478);
        border-radius: 2rem;
        padding: .2rem;
        width: 80%;
        margin: .2rem auto;
        padding: 1px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .SearchBox{
            background: white;
            width: calc(100% - .001rem);
            height: calc(100% - .001rem);
            border-radius: 10rem;
            overflow: hidden;
            display: flex;
            justify-content: left;
            align-items: center;
            color: gray;
            font-size: 1.5rem;
            padding: .5rem;
            .SearchIcon{
                margin-left: 1rem;
            }
            .SearchText{
                font-size: .8rem;
            }
        }
        margin-bottom: 1rem;
    }
    
    .QuickCategory{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    footer{
        display: flex;
        justify-content: space-around;
        
    }
`

