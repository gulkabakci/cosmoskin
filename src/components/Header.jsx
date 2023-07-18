import React from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate()

    return (
        <div className='header-bg' >
        <div className='header-title pt-3' > <span style={{
            fontSize: "50px", fontFamily: "'Teko', sans-serif"

        }} >YENİ ÜRÜN</span>   <br /> Watermelon glow pha + bha pore tight toner <br /> <button onClick={()=> navigate(`products/19`)} className=' pb-3 px-3 mt-4 mx-4 bg-light border-0'
            style={{ fontSize: "17px", fontFamily: " 'Signika', sans-serif" }}>Hemen İncele
                <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
                <lord-icon
                    src="https://cdn.lordicon.com/zmkotitn.json"
                    trigger="loop"
                    colors="primary:#c85a96"
                    style={{ width: "30px", height: "30px", top: "10px" }}>
                </lord-icon></button>  </div>
                </div>
    )
}

export default Header