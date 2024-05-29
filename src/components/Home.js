import { Link, Outlet, useNavigate } from "react-router-dom"
import logo from '../yanolja_logo.png'
import styled from 'styled-components'
import { MdMenu } from "react-icons/md";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { MdOutlineSearch } from "react-icons/md";
import React, { Suspense, lazy, useEffect, useState } from "react";
import LodgmentList from "./LodgmentList";
import { useDispatch, useSelector } from "react-redux";
import { Classification, setCategory } from "../redux/categorys";


const Home = () => {
    const dispatch=useDispatch()
    const category=useSelector(state=>state.categoryReducer.category)
    const navigate = useNavigate()

    //숙박업소 정보를 저장하는 state 변수
    const [items, setItems]=useState([])
    
    // 현재 클릭한 카테고리 저장 state 변수
    const [currentCategory, setCurrentCategory]=useState() 

    useEffect(()=>{
        dispatch(setCategory(currentCategory))
        const apiUrl=category.url
        fetch(apiUrl).then(res=>res.json()).then(json=>setItems(json.response.body.items.item)).catch(e=>console.log(e.message))
    },[currentCategory])

    return (
        <Container>
            <main>
                <section>
                    <MdMenu/>
                    <img src={logo}/>
                    <LiaShoppingCartSolid />
                </section>
                <div className="SearchBoxBorder" onClick={()=>navigate('/search')}>
                    <div className="SearchBox">
                        <MdOutlineSearch className="SearchIcon"/>
                        <span className="SearchText">무엇을 하고 놀까요?</span>
                    </div>
                </div>
                <div className="QuickCategory">
                    <label onClick={()=>setCurrentCategory('Hotel')}> {/*소분류 B02	B0201	B02010100 */}
                        <img src={require('../image/hotel.png')} alt="hotel"/>
                        <p>호텔/리조트</p>
                    </label>
                    <label onClick={()=>setCurrentCategory('Pension')}> {/*소분류 B02	B0201	B02010700 */}
                        <img src={require('../image/pension.png')} alt="pension"/>
                        <p>펜션/풀빌라</p>
                    </label>
                    <label onClick={()=>setCurrentCategory('Residence')}> {/*소분류 B02	B0201	B02011300 */}
                        <img src={require('../image/residence.png')} alt="residence"/>
                        <p>서비스드레지던스</p>
                    </label>
                    <label onClick={()=>setCurrentCategory('Motel')}> {/* 소분류 B02	B0201	B02010900*/}
                        <img src={require('../image/motel.png')} alt="motel"/>
                        <p>모텔</p>
                    </label>
                    <label onClick={()=>setCurrentCategory('CulturalFacilities')}> {/* 중분류 A02	A0206*/}
                        <img src={require('../image/cultural-facilities.png')} alt="cultural-facilities"/>
                        <p>문화시설</p>
                    </label>
                    <label onClick={()=>setCurrentCategory('PerformanceEvent')}> {/* 중분류 A02	A0208*/}
                        <img src={require('../image/performance-event.png')} alt="performance-event"/>
                        <p>공연/행사</p>
                    </label>
                    <label onClick={()=>setCurrentCategory('TourCourse')}> {/* 대분류 C01 코스*/}
                        <img src={require('../image/tour-course.png')} alt="tour-course"/>
                        <p>관광코스</p>
                    </label>
                    <label onClick={()=>setCurrentCategory('Leisure')}> {/* 대분류 A03 */}
                        <img src={require('../image/leisure.png')} alt="leisure"/>
                        <p>레포츠</p>
                    </label>
                </div>
                <div style={{margin: '0 auto', textAlign: 'center'}}>
                    <LodgmentList items={items}/>
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
    height: 100%;
    margin: 1rem auto;
    /* 상단 */
    section {
        font-size: 1.5rem;
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
        justify-content: space-between;
        font-size: .7rem;
        text-align: center;
        margin: 0 6rem;
        img{
            width: 50px;
            height: 50px;
        }
        label{
            cursor: pointer;
        }
    }
    footer{
        display: flex;
        justify-content: space-around;
        
    }
`