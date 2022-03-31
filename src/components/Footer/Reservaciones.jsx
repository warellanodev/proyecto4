import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import SubHeading  from '../SubHeading/SubHeading';
import './Reservaciones.css';
import firebase from '../../config/firebase';

const Reservaciones= () => {

  const [state, setState] = useState({
    name: "",
    mail: "",
    phone: "",
    people: "",
    date: "",
    message: "",
  });
  const {name, mail, phone, people, date, message} = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !mail || !phone || !people || !date || !message) {
      toast.error('Por favor verifica todos los campos');
    } else {
      firebase.DB.child('contacts').push(state);
      setState({name: "", email: "", phone: "", people: "", date: "", message: "",});
      toast.success('Mensaje enviado correctamente');
    }
  };

    const handleInputChange = (e) => {
      let {name, value} = e.target;
      setState({...state, [name]: value});
    }
    
  return (
  <div className='app__reservations'>
    <div className='app__reservations-heading'>
      <SubHeading title="Haz tu reservacion" />
      <h1 className='headtext__oswald'>Reserva Ahora Aqui..</h1>
    </div>
    <form className='app__reservations-input flex__center' onSubmit={handleSubmit}>
      <input type="text" id='name' name='name' placeholder='Ingresa tu nombre completo' onChange={handleInputChange} value={name}/>
      <input type="email" id='mail' name='mail' placeholder='Ingresa tu correo electrónico' onChange={handleInputChange} value={mail}/>
      <input type="phone" id='phone' name='phone' placeholder='Ingresa tu whatsapp' onChange={handleInputChange} value={phone}/>
      <input type="number" id='people' name='people' placeholder='Numero de personas' onChange={handleInputChange} value={people}/>
      <input type="date" id='date' name='date' placeholder='Fecha' onChange={handleInputChange} value={date}/>
      <textarea id="message" name='message' cols="30" rows="10" placeholder='Comentarios adicionales' onChange={handleInputChange} value={message}></textarea>
      <input type='submit' className='custom__button' value='Enviar Mensaje'/>
    </form>
  </div>
  );
};

export default Reservaciones;
