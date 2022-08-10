import './Login.scss';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [userLogin, setUserLogin] = useState({
    username: '',
    password: ''
  });

  const users = [
    {
      username: 'admin',
      password: '123456'
    },
  ];

  const handleChange = (event) => {
    setUserLogin({...userLogin, [event.target.name]: event.target.value})
  };

  const loginValidation = () => {
    const loginCheck = users.find(user => (user.username === userLogin.username && user.password === userLogin.password));
    if(loginCheck) {
      alert('Login Successfully')
    } else {
      alert('invalid password or username')
      console.log('invalid password or username');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userLogin)
    // preventDefault ไม่ให้ browser reload
    loginValidation();
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
      <h1>FitFriends</h1>
       <div className='contentLogin'>
         <div className='listContentLogin'>
           <img src='src/images/username.png'/>
           <input 
             type='text'
             name='username' 
             value={userLogin.username}
             onChange={handleChange}
             placeholder='USERNAME' 
             required/> 
         </div>
         <div className='listContentLogin'>
           <img src='src/images/password.png'/>
           <input 
            type='password' 
            name='password'
            value={userLogin.password}
            onChange={handleChange}
            placeholder='PASSWORD'
            required/>
            {/* placeholder คือ ตำที่จะแสดงภายในกล่องข้อความ */}
            {/* required คือต้องใส่ ไม่ใส่ไม่ได้และจะต้องถูกต้องตามรูปแบบของอีเมลที่กำหนด */}
         </div>
         </div>

        <button type='submit'>Login</button>

        <div className='underButton'>
          <h3><Link to='/MainPage'><span>May be Later</span></Link></h3>
          <h3><Link to='/Register'><span>Register</span></Link></h3>
        </div>
       </form>
    </div>
  );
}

export default Login