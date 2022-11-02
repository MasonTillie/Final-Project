import React, { useState } from 'react'
import './signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'


function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleSignUp = async (event) => {
    event.preventDefault()
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user)
      navigate('/')
    } catch {
      setError(true)
    }
  }
  return (
    <div><section className="vh-100 background" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create Your Account!</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSignUp}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" className="form-control" onChange={(event) => setEmail(event.target.value)} />
                          <label className="form-label" htmlFor="form3Example3c">Email</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" className="form-control" onChange={(event) => setPassword(event.target.value)} />
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4cd" className="form-control" onChange={(event) => setConfirmPassword(event.target.value)} />
                          <label className="form-label" htmlFor="form3Example4cd">Confrim Password</label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        {password !== confirmpassword ?
                          <button disabled type="submit" className="btn btn-danger btn-lg" style={{ color: 'white' }}>Register</button> : <button type="submit" className="btn btn-dark btn-lg" style={{ color: 'white' }}>Register</button>
                        }
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://cdn.vox-cdn.com/thumbor/ytC-ZCsT-G-M1Fscy7oZUeZE9X0=/1400x788/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19725578/TheRinger_Top25NBAPlayers_2.png" className="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></div>

  )
}

export default SignUp