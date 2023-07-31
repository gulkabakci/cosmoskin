import React, { useState, useEffect, useRef } from 'react';
import "./manage.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import product from '../data/Productdata';
import { useDispatch,useSelector } from 'react-redux';
import { DELETE_USER } from '../usersSlice';

const Manager = () => {

    const [modalShow, setModalShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
   

    const usersCopy = useSelector((state) => state.users.value || []); 

    console.log('usersCopy:', usersCopy); 
    const dispatch = useDispatch();

    const handleDeleteUser = (username) => {
        dispatch(DELETE_USER(username));
        console.log('Kullanıcı silindi:', username);
      };
    
    

   return (
        <div class="tabs">
            <div class="tab-2">
                <label style={{ color: "rgb(43, 87, 135)", fontFamily: " 'Raleway', Arial, sans-serif", fontWeight: "600" }} for="tab2-1">Ürünler</label>
                <input id="tab2-1" name="tabs-two" type="radio" checked="checked" />
                <div className='d-flex'>
                    <div className='container ' >
                        {product.map((product, i) =>
                            <div> <li id="offcanvasli" key={i}>
                                <div className='d-flex' >
                                    <img id='offcanvasimage' src={product.image} />
                                    <p style={{ textTransform: "lowercase", color: "#393939", fontFamily: " 'Roboto Slab', serif", marginLeft: "15px" }} >{product.title}  <span style={{ position: "absolute", top: "13px", right: "15px" }}>
                                    </span> <br /> <span style={{ fontFamily: "'Shadows Into Light', cursive" }} >{product.brand}</span>
                                        <span>  <br /> <br />  {product.price} tl </span>
                                    </p>
                                    <Button variant="success" style={{ position: "absolute", top: "50px", right: "90px", }} onClick={() => {
                                        setSelectedProduct(product);
                                        setModalShow(true);
                                    }}
                                    >Düzenle</Button>
                                    <button type="button" class="btn btn-danger"   
                                         style={{ position: "absolute", top: "50px", right: "30px", }}>Sil</button>
                                </div>
                            </li>
                            </div>)}
                            {selectedProduct && (
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                selectedProduct={selectedProduct}
              />
            )}


                    </div>
                </div>
            </div>
            <div class="tab-2">
                <label style={{ color: "rgb(43, 87, 135)", fontFamily: "'Raleway', Arial, sans-serif", fontWeight: "600" }} for="tab2-2">Kullanıcılar</label>
                <input id="tab2-2" name="tabs-two" type="radio" />
                <div id="updateusers">

                {usersCopy && Array.isArray(usersCopy) && usersCopy.length > 0 ? (
                usersCopy.map((users, index) => ( 
            <div  key={index} className="user-item container ">
             <li id="offcanvasli">
                <span style={{marginRight:"70px"}}>Kullanıcı bilgisi </span> 
              <span style={{marginRight:"30px"}}>mail: {users.username}</span>
              <span>şifre: {users.password}</span>
              <Button variant="danger"         onClick={() => handleDeleteUser(users.username)}
 style={{position:"absolute",right:"0",top:"3px" }}>Kullanıcıyı sil</Button>
              </li>
            </div>
          ))): (
            <div style={{ color: "rgb(29, 63, 99)", fontFamily: "'Raleway', Arial, sans-serif", fontWeight: "500",display:"flex",justifyContent:"center" }} >Henüz kullanıcı yok.</div>
          )}

                </div>
            </div>
        </div>
    )
}

export default Manager




function MyVerticallyCenteredModal(props) {

    const { selectedProduct } = props;

    const inputRef = useRef(null);

    useEffect(() => {
      // Inputun yüksekliğini içerisindeki yazıya göre dinamik olarak ayarlamak için pure JavaScript kullanın
      if (inputRef.current) {
        inputRef.current.style.height = 'auto';
        inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
      }
    }, [selectedProduct.exp]); // useEffect'i input değeri değiştiğinde tetiklemek için kullanıyoruz
  
  


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Ürün Detayları
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div className='d-flex ' style={{position:"relative"}}>
               <div className='m-4'> <img id='update-img' src={selectedProduct.image} /></div>
               <div className='m-4 mb-5'>
               <div className='update-txt'> Adı : <input className="uk-input"  type="text" defaultValue= {selectedProduct.title}></input></div>
               <div className='update-txt'> Markası : <input className="uk-input"  type="text" defaultValue= {selectedProduct.brand}></input></div>
               <div className='update-txt'> Fiyatı : <input className="uk-input"  type="number" defaultValue= {selectedProduct.price}></input></div>
               <div className='update-txt'> Açıklaması : <input className="uk-input resize-input"   type="text" ref={inputRef} defaultValue= {selectedProduct.exp}></input></div>
               <div className='update-txt'> Kullanımı : <input className="uk-input" type="text" defaultValue= {selectedProduct.use}></input></div>
               <div className='update-txt'> Hacmi : <input className="uk-input" type="text" defaultValue= {selectedProduct.volume}></input></div>
               </div>
               </div>
            </Modal.Body>
            <Button variant="success" style={{borderRadius:"0px"}} >Değişiklikleri Kaydet</Button>
        </Modal>
    );
}
