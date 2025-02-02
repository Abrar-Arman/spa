

export default function Footer() {
  return (
    <footer className="mt-5  pt-4 text-white ">
        <div className='d-flex justify-content-center px-3 text-center'>

            <div style={{width:'30%'}}>
            <h3 className="text-uppercase">Location</h3>
            <p className="mb-0">2215 John Daniel Drive</p>
            <span>Clark, MO 65243</span>
            </div>
        <div style={{width:'30%'}} >
            <h3 className="text-uppercase">About website</h3>
             <div className="icon d-flex gap-3 align-items-center mt-2 justify-content-center ">
             <i className="fa-brands fa-facebook"></i>
             <i className="fa-brands fa-twitter"></i>
             <i className="fa-brands fa-linkedin"></i>
             </div>
        </div>
        <div style={{width:'30%'}} className="text-center">
            <h3 className="text-uppercase">About Freelancer</h3>
            <p >Freelance is a free to use, MIT licensed Bootstrap theme created by <span> Start Bootstrap</span> .</p>
       </div>

        </div>
       
    <div className="right py-3 text-center mt-4">
    Copyright © Your Website 2023
    </div>
    </footer>
     
  )
}
