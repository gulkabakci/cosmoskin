import React, { useState } from 'react'
import "./auth.css"
import { initializeApp } from "firebase/app";
import { auth } from '../firebase';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { motion,useScroll,useSpring } from 'framer-motion'; 



const Register = ({ setUsers }) => {


    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleRegister = () => {
      // Kullanıcı bilgilerini bir dizi içinde depolayalım
      setUsers((prevUsers) => [...prevUsers, { username, password }]);
      console.log("Kayıt Başarılı!");
      console.log(username,password);
      toast.success("Kaydınız oluşturuldu.");
      navigate("/login");
    };
  

  return (

    <div className='containerDiv'>

      <motion.div initial={{opacity:0}} animate={{opacity:1}}  className="form-box">

        <div className="form-value">

          <form>

            <h3 style={{fontFamily: "'Raleway', Arial, sans-serif",color:"white",display:"flex",justifyContent:"center"
}}>{ " Cosmoskin'e Kaydol"}</h3>

            <div className="inputbox mb-5">

            <label className='label' htmlFor='email'>Email</label>

              <input  value={username}  onChange={(e) => setUsername(e.target.value)} className='log-input' style={{borderBottom:"2px solid #fff",}} name='email' type="email" required />
              
               <br/> <br/>
              <label className='label mt-4'  htmlFor='password'>Şifre</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} className='log-input' type="password" name='password' style={{borderBottom:"2px solid #fff",}}   required />


            </div>

            <button onClick={handleRegister} className='log-btn'  > {"Kaydol" }</button>

            <div className="register">

              <p >{ " Daha önceden kaydoldun mu? "}<a onClick={() => navigate(`/login`)} href="#">{ "Giriş Yap" }</a></p>

            </div>

          </form>

        </div>

      </motion.div>

    </div>


  )
}

export default Register