import { useDispatch, useSelector} from "react-redux"
import { useEffect } from "react"
import { Classification } from "../redux/categorys"
const LodgmentList = () => {
    const dispatch=useDispatch()
    const category=useSelector(state=>state.categoryReducer.category)

    useEffect(()=>{
        {dispatch(Classification())}
    },[])

    return(
        <div>
            <h2>{category.url}</h2>
        </div>
    )
}

export default LodgmentList