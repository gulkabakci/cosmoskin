import React, { useState } from 'react'
import "./auth.css"
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion,useScroll,useSpring } from 'framer-motion'; 
import { useDispatch,useSelector } from 'react-redux'; // useDispatch ekledik


const Login = ({ setIsLoggedIn, users }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const usersCopy = useSelector((state) => state.users?.value || []);

  const handleLogin = (event) => {
    // Kullanıcı girişi kontrolü
    const user = usersCopy.find((user) => user.username === username && user.password === password);

    event.preventDefault(); // Sayfa yenilenmesini engelle

    if (user) {
      console.log("Giriş Başarılı!");
      setIsLoggedIn(true);
      toast.success("Hoşgeldiniz.");
      navigate("/");
    } else {
      setError("Kullanıcı adı veya şifre hatalı");
      toast.error("Kullanıcı adı veya şifre hatalı")
    }
  };
 
  return (

    <div className='containerDiv'>

      <motion.div initial={{opacity:0}} animate={{opacity:1}}  className="form-box">

        <div className="form-value">

          <form>

            <h3 style={{fontFamily: "'Raleway', Arial, sans-serif",color:"white",display:"flex",justifyContent:"center"
}}>{"Cosmoskin'e Giriş Yap"}</h3>

            <div className="inputbox mb-5">

            <label className='label' htmlFor='email'>Email</label>

              <input   value={username}   onChange={(e) => setUsername(e.target.value)}  className='log-input' style={{borderBottom:"2px solid #fff",}} name='email' type="email" required />
              
               <br/> <br/>
              <label className='label mt-4'  htmlFor='password'>Şifre</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)}  className='log-input' type="password" name='password' style={{borderBottom:"2px solid #fff",}}   required />


            </div>

            <button onClick={handleLogin} className='log-btn'  > { "Giriş Yap "}</button>
            <div className="register">

              <p><a href="#" onClick={() => navigate(`/manage`)}>{" Yönetici olarak giriş yap" }</a></p>

            </div>

          </form>

        </div>

      </motion.div>
      < ToastContainer /> 
    </div>


  )
}

export default Login