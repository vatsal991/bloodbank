import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {BsBell} from 'react-icons/bs'
import {BsDropletHalf} from 'react-icons/bs'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const Buttons=()=> {

    const [donorcount,setdonorcount] = useState([])
    const [requestcount,setrequestcount] = useState([])
    const [bankcount,setbankcount] = useState([])


 const getDonor = async()=>{
   const res = await axios.get('http://onlinetoolscave.in/donorcount').then((resp)=>{
       setdonorcount(resp.data[0]['COUNT(id)'])
    })
 }  
 const getRequest = async()=>{
    const res = await axios.get('http://onlinetoolscave.in/requestcount').then((resp)=>{
        setrequestcount(resp.data[0]['COUNT(*)'])
     })
  }  
  const getBank = async()=>{
    const res = await axios.get('http://onlinetoolscave.in/bloodbankcount').then((resp)=>{
        setbankcount(resp.data[0]['COUNT(*)'])
     })
  }   

 useEffect(()=>{
     getDonor()
     getRequest()
     getBank()
 },[])

  return (
    <div className='ButtonContainer'>
        <div className="ButtonCard">
               <div className="ButtonContent">
                   <div className="IconContainer">
                   <BiSearchAlt2 color="#ffda80" size={25} />
                   </div>
                   <div className='ButtonText'>Donor</div>
                   <div className="ButtonGo">{donorcount}</div>
               </div>
        </div>
        <div className="ButtonCard">
               <div className="ButtonContent">
               <div style={{backgroundColor:'#FCDEE8'}} className="IconContainer">
                   <BsBell color="#ffbfd4" size={25} />
                   </div>
                   <div className='ButtonText'>Blood Request</div>
                   <div className="ButtonGo">{requestcount}</div>
               </div>
        </div>
        <div className="ButtonCard">
               <div className="ButtonContent">
               <div style={{backgroundColor:'#CAF4EA'}} className="IconContainer">
                   <BsDropletHalf color="#8cf5dc" size={25} />
                   </div>
                   <div className='ButtonText'>Blood Banks</div>
                   <div className="ButtonGo">{bankcount}</div>
               </div>
        </div>
    </div>
  )
}


