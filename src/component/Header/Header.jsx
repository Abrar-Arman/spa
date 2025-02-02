import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [active,setActive]=useState(1)
  return (
    <header >
        <nav className="navbar py-4 px-3 navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand text-white text-uppercase" href="#">start bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link  onClick={()=>setActive(1)} className={`nav-link text-white text-uppercase ${active==1?'active':''}`} aria-current="page" to="/">portfolio</Link>
                        </li>
                        <li className="nav-item">
                        <Link  onClick={()=>setActive(2)} className={`nav-link text-white text-uppercase ${active==2?'active':''}`} to="about">about</Link>
                        </li>
                        <li className="nav-item">
                        <Link   onClick={()=>setActive(3)} className={`nav-link text-white text-uppercase ${active==3?'active':''}`} to='contact'>contact</Link>
                        </li>
                    </ul>
                    </div>
        </div>
        </nav>

    </header>
  )
}
