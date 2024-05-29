import styled from "styled-components"

const Review = ({reivew}) => {
    return(
        <Content>
            <hr/>
            <div className="nickname">{reivew.nickname}</div>
            <div className="message">{reivew.message}</div>
            <br/>
        </Content>
    )
}

export default Review

const Content = styled.div`
    text-align: left;
    .nickname{
        font-weight: bold;
        margin-left: 1rem;
        margin-bottom: 1rem;
    }
    .message{
        margin-left: 2rem;
    }
`