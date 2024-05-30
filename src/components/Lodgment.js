import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Lodgment = ({item}) => {
    const navigate = useNavigate()

    return(
        <Item onClick={()=> navigate('/lodgment', {state:item})}>
                <Image><img src={item.firstimage}/></Image>
                <h3>{item.title}</h3>
        </Item>
    )
}

export default Lodgment

const Item=styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    margin-bottom: 1rem;
    border: 1px solid gray;
    border-radius: 10px;
    overflow: hidden;
    width: 180px;
    h3{
        font-size: .8rem;
        margin-left: 20px;
        margin-right: 20px;
        white-space: nowrap;
        text-overflow: ellipsis; /* Add ellipsis if truncated */
    }

    &:hover{
        cursor: pointer;
        transform: scale(1.05, 1.05);
        background-color: #FE7EA9;
    }
    &:active{
        background-color: #FC4482;
    }

    transition: transform .5s background-color .5s;
`

const Image=styled.div`
    width: 180px;
    height: 120px;
    border-radius: 5px;
    overflow: hidden;
`