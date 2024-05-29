import styled from "styled-components"
import Review from "./Review"

const ReviewList = ({reviewList}) => {

    return(
        <List>
            {
                reviewList.map((review,index)=>{
                    return <Review reivew={review} key={index}/>
                })
            }
        </List>
    )
}

export default ReviewList

const List=styled.div`
    margin-bottom: 4rem;
`