
import Form from './Form.jsx'
export default function Contact() {
  return (
    <div className="container contact mt-5">
      <h2 className="text-uppercase text-center mb-0"> Contact me</h2>
      <div className=" divider d-flex justify-content-center align-items-center ">
                    <span className="line"></span>
                    <span className="star px-1">★</span>
                    <span className="line"></span>
              </div>
              <Form />
              <button className='btn text-white px-3 d-block  mt-3'>Send</button>
    </div>
  )
}
