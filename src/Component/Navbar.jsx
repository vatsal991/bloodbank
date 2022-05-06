import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import {AiFillCloseCircle} from 'react-icons/ai'
import Cookies from 'js-cookie'

export default function Navbar() {

  const[ShowDonate,SetShowDonate] = useState(false)
  const[ShowRequest,SetShowRequest] = useState(false)
  const[ShowBank,SetShowBank] = useState(false)

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     {ShowDonate ? <DonateForm /> : null}
     {ShowRequest ? <RequestForm /> : null}
     {ShowBank ? <AddBankForm /> : null}
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <button className='btn mx-1' onClick={()=>{SetShowDonate(true)}}>Donate</button>
        </li>
        <li class="nav-item">
          <button className='btn mx-1' onClick={()=>{SetShowRequest(true)}}>Request</button>
        </li>
        <li class="nav-item">
          <button className='btn mx-1' onClick={()=>{SetShowBank(true)}}>Add BloodBank</button>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export const DonateForm = () => {

  const [name, setname] = useState("");
  const [bloodgroup, setbloodgroup] = useState("");
  const [address, setaddress] = useState("");
  const [phonenumber, setphonenumber] = useState("");

  const id = Cookies.get('id')

  const handleSubmit = async (e) => {
    e.preventDefault()
     console.log({name,bloodgroup,address,phonenumber,id})

    if(name && bloodgroup && address && phonenumber){
     const res = await fetch('https://onlinetoolscave.in/donor',{
       method:'POST',
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify({
         name,
         bloodgroup,
         address,
         phonenumber,
         id
       })
     })
     const data = await res.json();

       if(res.status === 400 || !data){
           window.alert("Somthing Wrong !")
       }
       else{
         window.alert("Added Successful !")
       }
      }
      else{
        window.alert("Please Fill The Data !")
      }
  };

  return (
    <div className='DonateForm'>
       <div class="contact-form-wrapper d-flex justify-content-center">
    <form action="#" class="contact-form">
      <h5 class="title">Donor Form</h5>
      <p class="description">Please provide the following details and carefully input proper details.
      </p>
      <div>
        <input type="text" onChange={(e) => {
                setname(e.target.value);
              }}
              value={name} class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required />
      </div>
      <div>
      <select onChange={(e) => {
                setbloodgroup(e.target.value);
              }}
              value={bloodgroup} placeholder="BloodGroup" class="form-control rounded border-white mb-3 form-input">
         <option label='BloodGroup'></option>
         <option value="A+">A+</option>
         <option value="B+">B+</option>
         <option value="AB+">AB+</option>
         <option value="A-">A-</option>
         <option value="B-">B-</option>
         <option value="AB-">AB-</option>
         <option value="O-">O-</option>
         <option value="O+">O+</option>
      </select>      
     </div>
      <div>
        <input type="number" onChange={(e) => {
                setphonenumber(e.target.value);
              }}
              value={phonenumber}  class="form-control rounded border-white mb-3 form-input" placeholder="Number" required />
      </div>
      <div>
        <input type="text" onChange={(e) => {
                setaddress(e.target.value);
              }}
              value={address} class="form-control rounded border-white mb-3 form-input" placeholder="Address" required />
      </div>
      <div class="submit-button-wrapper">
        <input onClick={handleSubmit} type="submit" value="Send" />
      </div>
      <div class="submit-button-wrapper">
        <a className='CloseButton' href='/'>
          <AiFillCloseCircle color='#f23292' size={25}/>
        </a>
      </div>
    </form>
  </div>
    </div>
  )
}

export function RequestForm (){

  const [name, setname] = useState("");
  const [bloodgroup, setbloodgroup] = useState("");
  const [address, setaddress] = useState("");
  const [phonenumber, setphonenumber] = useState("");

  const id = Cookies.get('id')

  const handleSubmit = async (e) => {
    e.preventDefault()
     console.log({name,bloodgroup,address,phonenumber,id})

     if(name && bloodgroup && address && phonenumber){
     const res = await fetch('https://onlinetoolscave.in/request',{
       method:'POST',
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify({
         name,
         bloodgroup,
         address,
         phonenumber,
         id
       })
     })
     const data = await res.json();

       if(res.status === 400 || !data){
           window.alert("Invalid Credentials !")
       }
       else{
         window.alert("Added Successful !")
       }
      }
      else{
        window.alert("Please Fill The Data !")
      }
  };

  return (
    <div className='DonateForm'>
       <div class="contact-form-wrapper d-flex justify-content-center">
    <form action="#" class="contact-form">
      <h5 class="title">Blood Request Form</h5>
      <p class="description">Please provide the following details and carefully input proper details.
      </p>
      <div>
        <input type="text" onChange={(e) => {
                setname(e.target.value);
              }}
              value={name} class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required />
      </div>
      <div>
      <select onChange={(e) => {
                setbloodgroup(e.target.value);
              }}
              value={bloodgroup} class="form-control rounded border-white mb-3 form-input">
                         <option label='BloodGroup'></option>
         <option value="A+">A+</option>
         <option value="B+">B+</option>
         <option value="AB+">AB+</option>
         <option value="A-">A-</option>
         <option value="B-">B-</option>
         <option value="AB-">AB-</option>
         <option value="O-">O-</option>
         <option value="O+">O+</option>
      </select>      
     </div>
      <div>
        <input type="number" onChange={(e) => {
                setphonenumber(e.target.value);
              }}
              value={phonenumber}  class="form-control rounded border-white mb-3 form-input" placeholder="Number" required />
      </div>
      <div>
        <input type="text" onChange={(e) => {
                setaddress(e.target.value);
              }}
              value={address} class="form-control rounded border-white mb-3 form-input" placeholder="Address" required />
      </div>
      <div class="submit-button-wrapper">
        <input onClick={handleSubmit} type="submit" value="Send" />
      </div>
      <div class="submit-button-wrapper">
        <a className='CloseButton' href='/'>
          <AiFillCloseCircle color='#f23292' size={25}/>
        </a>
      </div>
    </form>
  </div>
    </div>
  )
}

export const AddBankForm = () => {

  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [address, setaddress] = useState("");
  const [phonenumber, setphonenumber] = useState("");

  const id = Cookies.get('id')

  const handleSubmit = async (e) => {
    e.preventDefault()
     console.log({name,description,address,phonenumber,id})

     if(name && address && phonenumber){
     const res = await fetch('https://onlinetoolscave.in/bloodbank',{
       method:'POST',
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify({
         name,
         description,
         address,
         phonenumber,
         id
       })
     })
     const data = await res.json();

       if(res.status === 400 || !data){
           window.alert("Somthing Error !")
       }
       else{
         window.alert("Added Successful !")
         
       }
      }
      else{
        window.alert("Please Fill The Data !")
      }
  }


  return (
    <div className='DonateForm'>
       <div class="contact-form-wrapper d-flex justify-content-center">
    <form action="#" class="contact-form">
      <h5 class="title">Add Blood Bank</h5>
      <p class="description">Please provide the following details and carefully input proper details.
      </p>
      <div>
        <input type="text" onChange={(e) => {
                setname(e.target.value);
              }}
              value={name} class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Bank Name" required />
      </div>
      <div>
        <input type="number" onChange={(e) => {
                setphonenumber(e.target.value);
              }}
              value={phonenumber} maxLength={10} class="form-control rounded border-white mb-3 form-input" placeholder="Number" required />
      </div>
      <div>
        <input type="text" onChange={(e) => {
                setaddress(e.target.value);
              }}
              value={address} class="form-control rounded border-white mb-3 form-input" placeholder="Address" required />
      </div>
      <div>
        <textarea id="message" onChange={(e) => {
                setdescription(e.target.value);
              }}
              value={description} class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="BloodBank Description" required></textarea>
      </div>
      <div class="submit-button-wrapper">
        <input onClick={handleSubmit} type="submit" value="Send" />
      </div>
      <div class="submit-button-wrapper">
        <a className='CloseButton' href='/'>
          <AiFillCloseCircle color='#f23292' size={25}/>
        </a>
      </div>
    </form>
  </div>
    </div>
  )
}

