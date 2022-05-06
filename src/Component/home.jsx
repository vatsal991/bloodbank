import React from "react";
import SliderComp from "./slider";
import Navbar from "./Navbar";
import {Buttons} from "./Buttons";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import DonorSec from "./donorssec";
import Request from "./request";
import BankSec from "./bloodbank";
import Footer from "./footer";

export default function Home() {
  const GetId = Cookies.get("id");

  return (
    <>
      <Navbar />
      <SliderComp />
      <Buttons />
      <Request />
      <DonorSec />
      <BankSec />
      <Footer />
    </>
  );
}
