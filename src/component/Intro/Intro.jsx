import avatar from '../../assets/img/avataaars.svg'

export default function Intro() {
  return (
    <div className='py-5 d-flex justify-content-center align-items-center intro  text-center text-white '>
        <div className='p-3'>
            <img src={avatar} style={{width:'180px',height:'180px'}} />
            <h1 className='text-uppercase my-2'>start bootstrap</h1>
            <div className=" divider d-flex justify-content-center align-items-center ">
                    <span className="line"></span>
                    <span className="star px-1">★</span>
                    <span className="line"></span>
              </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
         </div>
    </div>
  )
}
