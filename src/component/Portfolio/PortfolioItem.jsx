
export default function PortfolioItem({img}) {
  return (
    <div className="col-md-4 mb-3 img">
        <div className="layer d-flex justify-content-center align-items-center text-white">
            <span style={{fontSize:'35px',display:'none'}}>+</span>
        </div>
      <img style={{width:'100%',borderRadius:'8px'}} src={img}/>
    </div>
  )
}
