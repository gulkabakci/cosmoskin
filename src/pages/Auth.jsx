import React, { useState } from 'react'
import "./auth.css"
import { initializeApp } from "firebase/app";
import { auth } from '../firebase';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';




const Auth = () => {
  <script src="/__/firebase/7.17.1/firebase-auth.js"></script>

  const [signUp, setSignUp] = useState(true);
  const [authDatas, setauthDatas] = useState({ email:null, password:null });

  const onChangeAuth = (e) => {

    setauthDatas({ ...authDatas, [e.target.name]: e.target.value })

  }

  const authFunc = async() => {

    
      if(signUp){ //reg
    
        try {
          const data = await createUserWithEmailAndPassword(auth, authDatas.email, authDatas.password)
          const user = data.user;
    
          if(user){
            window.location = "/dashboard"; 
          }
        } catch (error) {
          console.log(error.message)
        }
       }

    else{  //login

      try {
        const data = await signInWithEmailAndPassword (auth, authDatas.email, authDatas.password)
        const user = data.user;
  
        if(user){
          window.location = "/dashboard";
          console.log("hosgeldiniz")
        }
      } catch (error) {
        console.log(error.message)
      }
    }
  }

<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>


  return (

    <section>

      <div className="form-box">

        <div className="form-value">

          <form>

            <h2>{signUp ? "Kaydol" : "Giriş"}</h2>

            <div className="inputbox">

              <ion-icon name="mail-outline"></ion-icon>

              <input name='email' value={authDatas.email} onChange={onChangeAuth} type="email" required />

              <label>Email</label>

            </div>

            <div className="inputbox">

              <ion-icon name="lock-closed-outline"></ion-icon>

              <input type="password" name='password' value={authDatas.password} onChange={onChangeAuth} required />

              <label>Şifre</label>

            </div>

            <div className="forget">

              <label><input type="checkbox" />Beni Hatırla</label>

              <a href="#">Şifreni mi unuttun?</a>

            </div>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

            <button className='log-btn'  onClick={authFunc}  > {signUp ? "Kaydol" : "Giriş Yap "}</button>

            <div className="register">

              <p onClick={() => setSignUp(!signUp)} >{signUp ? " Daha önceden kaydoldun mu? " : " Bir hesabın yok mu? "}<a href="#">{signUp ? "Giriş Yap" : "Kaydol"}</a></p>

            </div>

          </form>

        </div>

      </div>

    </section>


  )
}

export default Auth