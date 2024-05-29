import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import {Helmet} from 'react-helmet'
import ReviewList from "../components/ReviewList"
const LodgmentDetail = () => {

    const location=useLocation()
    const item=location.state

    // 리뷰 작성
    // 1) 보낼 데이터
    const [nickname, setNickname]=useState('')
    const [message, setMessage]=useState('')
    // 2) 서버 전송
    const SubmitReview= (e) =>{
        e.preventDefault()
        fetch('./backend/review_write.php',{
            method:'POST',
            headers:{"Content-Type" : "application/json"},
            body:JSON.stringify({contentid: item.contentid, title: item.title, nickname, message})
        })
        .then(res=>res.text( ))
        .then(text=>alert(text))
    }

    // 리뷰 리스트
    // 1) 보낼 데이터
    // 리뷰페이지
    const [page, setPage]=useState(1)
    // const [reviewList, setReviewList]=useState([])
    const [reviewList, setReviewList]=useState([
        {no:1, nickname:'이름1', message:'메시지1'},
        {no:2, nickname:'이름2', message:'메시지2'},
    ])
    useEffect(()=>{
        fetch(`./backend/review_list.php?page=${page}&contentid=${item.contentid}`)
        .then(res=>res.json())
        .then(json=>setReviewList(json.reviewList))
    },[page, item.contentid, reviewList])

    return(
        <div style={{backgroundColor:'#F2F2F2', height:'100lh'}}>
            <Container>
                {/* 타이틀 변경 기법 */}
                <Helmet>
                    <title>{item.title}</title>
                </Helmet>
                <img src={item.firstimage} />
                <h2>{item.title}</h2>
                <hr></hr>
                <div className="info">
                    <strong>위치</strong> : <Link to={`https://map.naver.com/p/search/${item.addr1}`}>{item.addr2} {item.addr1}</Link><br/><br/>
                    <strong>연락처</strong> : <Link to={"tel:"+item.tel}>{item.tel}</Link>
                </div>
                <hr></hr>
                <h2>후기</h2>
                <div className="reviewList">
                    <ReviewList reviewList={reviewList}/>
                    <hr/>
                    <form onSubmit={SubmitReview}>
                        <input placeholder="닉네임" style={{width:'20%', height:'20px'}} onChange={(e)=>setNickname(e.target.value)} value={nickname}></input>
                        <input placeholder="내용 입력" style={{width:'60%', height:'20px'}} onChange={(e)=>setMessage(e.target.value)} value={message}></input>
                        <button style={{width:'13%', height:'26px'}}>후기 작성</button>
                    </form>
                </div>
                {/* 컨텐츠 정보 {item.contentid} */}
                {/* <h2>경도 :  {item.mapx}</h2>
                <h2>위도 : {item.mapy}</h2>*/}
            </Container>
        </div>
    )
}

export default LodgmentDetail

const Container=styled.div`
    max-width: 760px;
    height: 100lh;
    margin: 2rem auto;
    background-color: white;
    img{width: 100%;}
    text-align: center;
    box-shadow: 0 0 15px gray;
    .info{
        text-align: left;
        margin-left: 5rem;
        margin-bottom: 2rem;
        a{text-decoration: none;}
    }
    .reviewList{
        margin-left: 5rem;
        margin-right: 5rem;
        margin-top: 3rem;
        border: 1px solid lightgray;
        form{
            display: flex;
            justify-content: center;
            input, button{
                border-radius: 5px;
            }
            button{
                &:hover{background-color: #F0F0FF;}
                &:active{background-color: #F000FF;}
            }
        }
        padding: 1rem;
    }
`