import { useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react"
import { Classification } from "../redux/categorys"
import Lodgment from "./Lodgment"
import styled from "styled-components"
const LodgmentList = ({items}) => {
    return(
        <Items>
           {
                items.map((item,index)=>{
                    return <Lodgment item={item} key={index}/>
                })
           }
        </Items>
    )
}

export default LodgmentList

const Items=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`