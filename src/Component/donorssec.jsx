import React from "react";
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";

export default function DonorSec() {

    const [data,setdata] = useState([])

    const getdata = async()=>{
        const res = await axios.get('https://onlinetoolscave.in/donordata').then((result,err)=>{
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
      <div className="title">Donors</div>
      <div className="cards_container">
      {data.map((k)=>{
          const {name,address,bloodgroup,phonenumber}=k
          return(
          <div class="cardcontainer">
          <div class="card">
            <div class="card__header">
              <div className="Donorcard__bloodgroup">{bloodgroup}</div>
            </div>
            <div class="card__body">
              <div class="card__footer">
                <div class="user">
                  <div class="user__info">
                    <h5>Name :</h5>
                    <small>{name}</small>
                  </div>
                </div>
              </div>
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
