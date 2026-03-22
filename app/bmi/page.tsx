"use client";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Bmi from "@/assets/bmi.png";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";
export default function Page() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiValue, setBmi] = useState("0.00");
  const [resultValue, setResult] = useState("XXXXX");

  //ฟังก์ชันการคำนวณ BMI
  const handleCalbmiClick = () => {
    //validate input
    if (weight === "" || height === "") {
      // alert("กรุณาป้อนน้ำหนักและส่วนสูง");
      Swal.fire({
        title: "กรุณาป้อนน้ำหนักและส่วนสูง",
        icon: "warning",
        text: "โปรดกรอกข้อมูลให้ครบถ้วนก่อนทำการคำนวณ",
        confirmButtonText: "ตกลง",
      });
      return;
    }

    //คำนวณ BMI และแสดงผล
    //แปลง cm เป็น m
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const bmi = w / (h * h);
    setBmi(bmi.toFixed(2));

    //แปลผล BMI และแสดงผล
    if (bmi < 18.5) {
      setResult("น้ำหนักน้อย / ผอม");
    } else if (bmi >= 18.5 && bmi < 25) {
      setResult("น้ำหนักปกติ / สมส่วน");
    } else if (bmi >= 25 && bmi < 30) {
      setResult("น้ำหนักมาก / โรคอ้วนระดับ 1");
    } else if (bmi >= 30 && bmi < 35) {
      setResult("น้ำหนักมาก / โรคอ้วนระดับ 2");
    } else {
      setResult("น้ำหนักมาก / โรคอ้วนระดับ 3");
    }
  };
  //ฟังก์ชันการรีเซ็ตค่า
  const habdleResetClick = () => {
    //รีเซ็ตค่า state และผลลัพธ์
    setWeight("");
    setHeight("");
    setBmi("0.00");
    setResult("XXXXX");
  };

  return (
    <>
      {/*แสดง NavBar*/}
      <NavBar />
      {/*แสดงหน้าเนื้อหา ของหน้า BMI*/}
      <div className="w-3/5 flex flex-col items-center mx-auto mt-10 bg-gray-100 p-6 rounded-xl shadow-md border">
        {/*แสดงหัวข้อการคำนวณและรูป*/}
        <h1 className="text-2xl">BMI Calculator</h1>
        <h3 className="text-gray-500">คำนวณ BMI</h3>
        <Image src={Bmi} alt="bmiimg" width={95} height={95} className="my-5" />
        {/*ส่วนของการป้อนหรือเลือก*/}
        <div className="w-full flex flex-col">
          <h3 className="font-bold">ป้อนน้ำหนัก (กิโลกกรัม)</h3>
          <input
            value={weight}
            onChange={(s) => setWeight(s.target.value)}
            type="number"
            placeholder="เช่น 65.65"
            className="p-3 border-green-300 rounded mt-2"
          />
          <h3 className="font-bold">ป้อนส่วนสูง (เซ็นติเมตร)</h3>
          <input
            value={height}
            onChange={(s) => setHeight(s.target.value)}
            type="number"
            placeholder="เช่น 170"
            className="p-3 border-green-300 rounded mt-2"
          />
        </div>
        {/*ส่วนของปุ่ม คำนวณ*/}
        <button
          onClick={handleCalbmiClick}
          className="w-full mt-3 p-3 bg-amber-200 rounded hover:bg-fuchsia-500 cursor-pointer"
        >
          คำนวณ BMI
        </button>
        {/*ส่วนของปุ่ม รีเซ็ต*/}
        <button
          onClick={habdleResetClick}
          className="w-full mt-3 p-3 bg-amber-200 rounded hover:bg-fuchsia-500 cursor-pointer"
        >
          Reset
        </button>
        {/*ส่วนของการแสดง BMI*/}
        <div className="w-full flex justify-center gap-3 mt-5">
          <h3>ค่า BMI ที่คำนวณได้</h3>
          <h3 className="font-bold text-blue-400 text-2xl">{bmiValue}</h3>
        </div>
        {/*ส่วนของการแปลผล BMI*/}
        <div className="w-full flex justify-center gap-3 mt-5">
          <h3>การแปลผล</h3>
          <h3 className="font-bold text-blue-400 text-2xl">{resultValue}</h3>
        </div>

        {/*ส่วนของการแสดงผล*/}
        {/*ส่วนของปุ่ม กลับหน้าหลัก*/}
      </div>
      <div className="w-full ">
        <Link
          href="/bmr"
          className="p-3 border border-gray-200 rounded shadow-xl flex flex-col items-center"
        >
          <h3>กลับหน้าหลัก</h3>
        </Link>
      </div>
      <Footer />
    </>
  );
}
