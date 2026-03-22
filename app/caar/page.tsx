"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import carImg from "@/assets/car.png";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useState } from "react";
import Swal from "sweetalert2";
export default function Page() {
  //สร้าง state สำหรับเก็บข้อมูลที่ผู้ใช้ป้อนเข้ามา
  const [carName, setCarName] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [downPayment, setDownPayment] = useState("15");
  const [loanTerm, setLoanTerm] = useState("24");
  const [carInstallment, setCarInstallment] = useState("0.00");

  //สร้างฟังก์ชันสำหรับคำนวณ Car Installment
  const handleCalCarClick = () => {
    //validation input data
    if (carName === "" || carPrice === "" || interestRate === "") {
      //alert("กรุณาป้อนชื่อ ราคารถ และดอกเบี้ยให้ครบถ้วน");
      Swal.fire({
        icon: "warning",
        title: "คำเตือน",
        text: "กรุณาป้อนชื่อ ราคารถ และดอกเบี้ยให้ครบถ้วน",
        confirmButtonText: "ตกลง",
      });
      return;
    }
    //คำนวณ Car Installment และแสดงผลลัพธ์
    const cp = parseFloat(carPrice);
    const ir = parseFloat(interestRate);
    const dp = parseInt(downPayment);
    const lt = parseInt(loanTerm);

    //เงินดาวน์
    const dpVale = (cp * dp) / 100;
    //ยอดจัด
    const cpJud = cp - dpVale;
    //ตำนวณดอกเบี้ยรวม
    const irValue = ((cpJud * ir) / 100) * (lt / 12);
    //คำนวณยอดรวมที่ต้องผ่อน
    const totalPay = cpJud + irValue;
    //คำนวณผ่อนชำระต่อเดือน
    const result = totalPay / lt;
    //แสดงผลลัพธ์ โดยจำกัดทศนิยม 2 ตำแหน่ง
    setCarInstallment(result.toFixed(2));
  };
  //ฟังก์ชันสำหรับรีเซ็ตค่า
  const handleResetClick = () => {
    //รีเซ็ตค่าใน state ให้เป็นค่าเริ่มต้น
    setCarName("");
    setCarPrice("");
    setInterestRate("");
    setDownPayment("15");
    setLoanTerm("24");
    setCarInstallment("0.00");
  };

  return (
    <>
      {/* แสดง NavBer */}
      <NavBar />

      {/* แสดงเนื้อหา ของหน้า BMI */}
      <div
        className="w-3/5 flex flex-col items-center
                            mx-auto mt-15 shadow-xl p-10 rounded-lg
                            border border-gray-200"
      >
        {/* แสดงหัวข้อการคำนวณ และ รูป */}
        <h1 className="text-2xl font-bold">Car Installment Calculator</h1>
        <h3 className="text-gray-500">คำนวณ Car Installment</h3>
        <Image
          src={carImg}
          alt="carImg"
          width={95}
          height={95}
          className="my-5"
        />

        {/* ส่วนของการป้อนหรือเลือก */}
        <div className="w-full flex flex-col">
          <h3 className="font-bold">ชื่อผู้คำนวณ</h3>
          <input
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            type="text"
            className="p-3 border border-gray-200 rounded mt-2"
          />
          <h3 className="font-bold mt-4">ราคารถ (บาท)</h3>
          <input
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
            type="number"
            className="p-3 border border-gray-200 rounded mt-2"
          />
          <h3 className="font-bold mt-4">ดอกเบี้ยต่อปี (%)</h3>
          <input
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            type="number"
            className="p-3 border border-gray-200 rounded mt-2"
          />
          <h3 className="font-bold mt-4">เงินดาวน์ (%)</h3>
          <div className="w-full flex mt-1 items-center ">
            <input
              value="15"
              onChange={(e) => setDownPayment(e.target.value)}
              checked={downPayment === "15"}
              type="radio"
              name="downPayment"
              className="w-3 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label className="ml-2 text-bold font-medium text-gray-900">
              15%
            </label>

            <input
              value="20"
              onChange={(e) => setDownPayment(e.target.value)}
              checked={downPayment === "20"}
              type="radio"
              name="downPayment"
              className="w-3 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label className="ml-2 text-bold font-medium text-gray-900">
              20%
            </label>

            <input
              value="25"
              onChange={(e) => setDownPayment(e.target.value)}
              checked={downPayment === "25"}
              type="radio"
              name="downPayment"
              className="w-3 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label className="ml-2 text-bold font-medium text-gray-900">
              25%
            </label>

            <input
              value="30"
              onChange={(e) => setDownPayment(e.target.value)}
              checked={downPayment === "30"}
              type="radio"
              name="downPayment"
              className="w-3 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label className="ml-2 text-bold font-medium text-gray-900">
              30%
            </label>

            <input
              value="35"
              onChange={(e) => setDownPayment(e.target.value)}
              checked={downPayment === "35"}
              type="radio"
              name="downPayment"
              className="w-3 h-4 ml-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label className="ml-2 text-bold font-medium text-gray-900">
              35%
            </label>
          </div>
          <h3 className="font-bold mt-4">จำนวนเดือนที่ผ่อน</h3>
          <div className="dropdown-container">
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="24">24 เดือน</option>
              <option value="36">36 เดือน</option>
              <option value="48">48 เดือน</option>
              <option value="60">60 เดือน</option>
              <option value="72">72 เดือน</option>
              <option value="84">84 เดือน</option>
            </select>
          </div>
        </div>

        {/* ส่วนของปุ่ม คำนวณ */}
        <div className="w-full flex ">
          <button
            onClick={handleCalCarClick}
            className="w-full mt-5 py-3 bg-blue-500 rounded-xl text-white
                                    hover:bg-blue-700  cursor-pointer"
          >
            คำนวณ
          </button>

          {/* ส่วนของปุ่ม รีเซ็ต */}
          <button
            onClick={handleResetClick}
            className="w-full mt-5 ml-2 py-3 bg-gray-500 rounded-xl text-white
                                    hover:bg-gray-700  cursor-pointer"
          >
            ล้างข้อมูล
          </button>
        </div>

        {/* ส่วนของการแสดงผล BMI */}
        <div className="w-full font-bold flex justify-center items-center gap-1 mt-4">
          <h5>ผ่อนชำระต่อเดือน</h5>
          <h5 className="font-bold text-3xl ">{carInstallment} บาท</h5>
        </div>

        {/* ส่วนของปุ่ม กลับหน้าหลัก ซึ่งเป็น Link */}
        <Link
          href="/"
          className="w-full mt-5 py-3 bg-gray-500 rounded
                                        hover:bg-gray-700 text-center text-white"
        >
          กลับไปหน้าหลัก
        </Link>
      </div>
      {/* แสดง Footer */}
      <Footer />
    </>
  );
}
