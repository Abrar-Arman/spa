
export default function About() {
  return (
    <div className="text-white container about py-5 mt-3 px-3">
        <h2 className="text-uppercase text-center mb-0" style={{fontSize:'35px'}}>About</h2>
        <div className=" divider d-flex justify-content-center align-items-center ">
                    <span className="line"></span>
                    <span className="star px-1">★</span>
                    <span className="line"></span>
              </div>
              <div className="d-flex align-items-start gap-3 mt-2">
                <div style={{width:'50%'}}>
                    <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div style={{width:'50%'}}><p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
              </div>
               <button className="btn text-white m-auto d-block mt-3 px-4">Free Download!</button>
    </div>
  )
}
