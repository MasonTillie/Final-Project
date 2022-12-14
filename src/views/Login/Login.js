import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleLogin = (event) => {
    event.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <div><section className="vh-100 background">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src="data:image/png;base64,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" alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleLogin}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }} />
                        <span className="h1 fw-bold mb-0">NBA REFERENCE</span>
                      </div>
                      <h4 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Login Here!</h4>
                      <div className="form-outline mb-4">
                        <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder='Email Address' onChange = {(event) => {setEmail(event.target.value)}} />
                        <label className="form-label" htmlFor="form2Example17"></label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder='Password'onChange = {(event) => {setPassword(event.target.value)}} />
                        <label className="form-label" htmlFor="form2Example27"></label>
                      </div>
                      {error && (<span className='wrong-cred'>
                        wrong email or password!
                      </span>)}
                      <div className="pt-1 mb-4">
                        <button className="btn btn-danger btn-lg btn-block" type="submit">Login</button>
                      </div>
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>No Account? Register Here <Link to="/signup" style={{ color: '#393f81' }}>Register here</Link></p>
                      <p href="#!" className="small text-muted">Terms of use.</p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Login