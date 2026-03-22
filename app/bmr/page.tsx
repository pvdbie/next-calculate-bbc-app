"use client";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import bmr from "@/assets/bmr.png";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useState } from "react";
import Swal from "sweetalert2";
export default function Page() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male"); // ค่าเริ่มต้นเป็น
  const [bmrValue, setBmr] = useState("10.00");

  //ฟังก์ชันการคำนวณ BMR
  const handleCalbmrClick = () => {
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

      //คำนวณ BMR และแสดงผล
    }
    if (gender === "male") {
      //สูตร BMR สำหรับผู้ชาย
      const w = parseFloat(weight);
      const h = parseFloat(height);
      const a = parseFloat(age);
      const bmr = 66 + 13.7 * w + 5 * h - 6.8 * a;
      setBmr(bmr.toFixed(2));
    } else {
      //สูตร BMR สำหรับผู้หญิง
      const w = parseFloat(weight);
      const h = parseFloat(height);
      const a = parseFloat(age);
      const bmr = 655 + 9.6 * w + 1.8 * h - 4.7 * a;
      setBmr(bmr.toFixed(2));
    }
  };

  const resetBmrClick = () => {
    //รีเซ็ตค่า state และผลลัพธ์ค่าเริ่มต้น
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
    setBmr("10.00");
  };

  return (
    <>
      {/*แสดง NavBar*/}
      <NavBar />

      {/*แสดงหน้าเนื้อหา ของหน้า BMI*/}
      <div className="w-3/5 flex flex-col items-center mx-auto mt-10 bg-gray-100 p-6 rounded-xl shadow-md border">
        <div className="w-3/5 flex flex-col items-center mx-auto mt-10">
          {/*แสดงหัวข้อการคำนวณและรูป*/}
          <h1 className="text-2xl">BMR Calculator</h1>
          <h3 className="text-gray-500">คำนวณ BMR</h3>
          <Image
            src={bmr}
            alt="bmrimg"
            width={95}
            height={95}
            className="my-5"
          />
          {/*ส่วนของการป้อนหรือเลือก*/}
          <div className="w-full flex flex-col">
            <h3 className="font-bold">ป้อนน้ำหนัก (กิโลกกรัม)</h3>
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="number"
              placeholder="เช่น 65.65"
              className="p-3 border-green-300 rounded mt-2"
            />
            <h3 className="font-bold">ป้อนส่วนสูง (เซ็นติเมตร)</h3>
            <input
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              type="number"
              placeholder="เช่น 170"
              className="p-3 border-green-300 rounded mt-2"
            />
            <h3 className="font-bold">ป้อนอายุ(0)</h3>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              placeholder="เช่น 25"
              className="p-3 border-green-300 rounded mt-2"
            />
            <h3>เพศ</h3>

            <label>
              <input
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "male"}
                type="radio"
                name="gender"
                value="male"
              />
              ชาย
            </label>

            <br />

            <label>
              <input
                onChange={(e) => setGender(e.target.value)}
                checked={gender === "female"}
                type="radio"
                name="gender"
                value="female"
              />
              หญิง
            </label>
          </div>
          <div className="flex gap-3 w-full  justify-center ">
            {/*ส่วนของปุ่ม คำนวณ*/}
            <button
              onClick={handleCalbmrClick}
              className=" mt-3 p-3 bg-amber-200 rounded hover:bg-fuchsia-500 cursor-pointer"
            >
              คำนวณ BMR
            </button>
            {/*ส่วนของปุ่ม รีเซ็ต*/}
            <button
              onClick={resetBmrClick}
              className=" mt-3 p-3 bg-amber-200 rounded hover:bg-fuchsia-500 cursor-pointer"
            >
              Reset
            </button>
          </div>

          {/*ส่วนของการแสดง BMR*/}
          <div className="w-full  flex flex-col justify-center items-center gap-3 mt-5">
            <h3>ค่า BMR ที่คำนวณได้</h3>
            <h3 className="font-bold text-blue-400 text-2xl">{bmrValue}</h3>
          </div>
          <div className="w-full ">
            <Link
              href="/bmr"
              className="p-3 border border-gray-200 rounded shadow-xl flex flex-col items-center"
            >
              <h3>กลับหน้าหลัก</h3>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
