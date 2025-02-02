
export default function Form() {
  return (
    <form className="d-flex flex-column align-items-center gap-3">
      <input type='text' placeholder="Full name"/>
      <input type='email' placeholder="Email address"/>
      <input type='tel' placeholder="Phone number"/>
      <textarea placeholder="Message"></textarea>
      

    </form>
  )
}
