import { Link, Outlet } from "react-router-dom"

const Main = () =>{
    return(
        <div>
            <main style={{flex:1, flexDirection:'column', height:'100%'}}>
                <Outlet/>
                1
            </main>
            <footer style={{display:'flex', justifyContent:'space-around', backgroundColor:'gray'}}>
                <Link to='area' style={bnv}>지역</Link>
                <Link to='Around' style={bnv}>내주변</Link>
                <Link to="home" style={bnv}>홈</Link>
                <Link to='wishlist' style={bnv}>찜</Link>
                <Link to='mypage' style={bnv}>마이</Link>
            </footer>
        </div>
    )
}

export default Main 

const bnv={
    backgroundColor:'green',
    color:'white',
    fontWeight:'bold',
    flex: 1,
    textAlign:'center',
    border:'1px solid gray',
    padding: '1rem 0'
}