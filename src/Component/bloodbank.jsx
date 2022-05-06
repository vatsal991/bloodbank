import React from "react";
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";

export default function BankSec() {

    const [data,setdata] = useState([])

    const getdata = async()=>{
        const res = await axios.get('https://onlinetoolscave.in/bankdata').then((result,err)=>{
              if(err){
                  console.log(err)
              }
              else{
                  setdata(result.data)
                  console.log(result.data)
              }
        })
    }

    useEffect(()=>{
        getdata()
    },[])

  return (
    <div className="container">
      <div className="title">Blood Banks</div>
      <div className="cards_container">
      {data.map((k)=>{
          const {name,address,bloodgroup,phonenumber}=k
          return(
          <div class="cardcontainer">
          <div class="card">
            <div class="card__header">
              <div className="Bankcard__bloodgroup">{name}</div>
            </div>
            <div class="card__body">
              <div class="card__footer">
                  <div class="user">
                    <div class="user__info">
                      <h5>Phone :</h5>
                      <small>{phonenumber}</small>
                    </div>
                  </div>
                </div>
              <h4>Address :</h4>
              <p>
                {address}
              </p>
            </div>
          </div>
        </div>
          )
      })}
      </div>
    </div>
  );
}
