import React, { useEffect, useState } from 'react'
import { auth, provider} from './config'
import { signInWithPopup } from 'firebase/auth'

import './signup.css'
import Home from '../Home/Home'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerInitiate } from '../../redux/action'

const Signup = () => {
	const [state,setState] = useState({
		displayName:"",
		email:"",
		password:"",
		passwordConfirm:"",
	})
	const {displayName,email,password,passwordConfirm} = state;
	const [value, setValue ] = useState('');

	const {currentUser} = useSelector((state)=> state.user)

	const navigate = useNavigate();

	useEffect(()=>{
		if(currentUser){
			navigate('/');
		}
	},[currentUser])

	const dispatch = useDispatch();

	const handleChange =(e)=>{
		let {name,value} = e.target;
		setState({...state,[name]:value})
	}

	const handleSubmit =(e)=> {
		e.preventDefault();
		if(password !== passwordConfirm){
			return ;
		}
		dispatch(registerInitiate(email,password,displayName))
		if(currentUser){
			setValue(currentUser.email)
			localStorage.setItem('email', currentUser.email)
			navigate('/');
		}
		setState({email:"",displayName:"",password:"",passwordConfirm:""})
	}

	const handleClick = () => {
		signInWithPopup(auth, provider).then((data) => {
			setValue(data.user.email)
			localStorage.setItem('email', data.user.email)
			console.log(data)
		})
	}

	useEffect(() => {
		setValue(localStorage.getItem('email'))
	},[])

	return (
		<>
			{value ? <Home /> :
				<section className="containe forms">
					<div className="form signup">
						<div className="form-content">
							<header>Signup</header>
							<form action="#" onSubmit={handleSubmit}>
								<div className="field input-field">
									<input type="text" placeholder="Name" className="input" name='displayName' value={displayName}  onChange={handleChange}/>
								</div>
								<div className="field input-field">
									<input type="email" placeholder="Email" className="input" name='email' value={email} onChange={handleChange}/>
								</div>

								<div className="field input-field">
									<input type="password" placeholder="Create password" className="password" name='password' value={password} onChange={handleChange}/>
								</div>

								<div className="field input-field">
									<input type="password" placeholder="Confirm password" className="password" name='passwordConfirm' value={passwordConfirm} onChange={handleChange}/>
									<i className='bx bx-hide eye-icon'></i>
								</div>

								<div className="field button-field">
									<button>Signup</button>
								</div>
							</form>

							<div className="form-link">
								<span>Already have an account? <Link to="/signin" className="link login-link" style={{display:"inline"}}>Login</Link></span>
							</div>
						</div>

						<div className="line"></div>

						<div className="media-options">
							<a href="#" className="field facebook">
								<img src="./img/f-logo.png" alt="" className="google-img" />
								<span>Login with Facebook</span>
							</a>
						</div>

						{/* <div className="media-options">
							<a href="#" className="field google">
								<img src="./img/google-logo.png" alt="" className="google-img" />
								<span>Login with Google</span>
							</a>
						</div> */}
						<div className="media-options">
							<button className="field google" style={{ border: "1.7px solid black" }} onClick={handleClick}>
								<img src="./img/google-logo.png" alt="" className="google-img" />
								<span >Login with Google</span>
							</button>
						</div>

					</div>
				</section>
			}
		</>
	)
}

export default Signup
