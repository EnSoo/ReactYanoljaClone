

const InfoWindow = ({item}) =>{

    return(
        <div style={{margin:'1rem'}}  >
            <h4>{item.title}</h4>
            <h5>{item.addr1}</h5>
        </div>
    )
}

export default InfoWindow