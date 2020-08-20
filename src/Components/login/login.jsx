import React, {useState} from 'react';
import './login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase/firebase'; 



const Login = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = (event) => {
		event.preventDefault();

		auth.signInWithEmailAndPassword(email, password)
		.then((auth) => {
			//logged in, redirect to homepage
			history.push('/')
		}).catch((e) => alert(e.mesaage));
	};

	const register = (event) => {
		event.preventDefault();
		auth.createUserWithEmailAndPassword(email, password)
		.then((auth) => {
			history.push('/')
		}).catch((e) => alert(e.message));
	};


	

	return (
		<div className='login'>
			<Link to='/'>
			  <img className='login__logo'
			  src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
			  alt=''
			  />
			</Link>
			<div className='login__container'>
				<h1>Sign in</h1>
			<form>
			  <h5>E-mail</h5>
			  <input value={email} onChange={(event) => setEmail(event.target.value)} type='email'/>
			  <h5>Password</h5>
			  <input value={password} onChange={(event) => setPassword(event.target.value)} type='password'/>

			  <button onClick={login} className='login__signInButton' type='submit'>Sign In</button>
			</form>
				<p>By signing-in, you agree to Amazon's 
				Conditions of use sale. Please see our privacy		
				Notice, our cookies Notice and our 
				interest-Based Ads Notice. </p>

			<button onClick={register} className='login__registerButton'> Create your Amazon Account</button>

			</div>
			

		</div>
	)
}


export default Login;