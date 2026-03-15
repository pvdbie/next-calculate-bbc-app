import NavBar from "@/components/NavBar";
import Image from "next/image";
import Bmi from "@/assets/bmi.png";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function Page() {
  return (
    <>
      {/*แสดง NavBar*/}
      <NavBar />
      {/*แสดงหน้าเนื้อหา ของหน้า BMI*/}
      <div className="w-3/5 flex flex-col items-center mx-auto mt-10">
        {/*แสดงหัวข้อการคำนวณและรูป*/}
        <h1 className="text-2xl">BMI Calculator</h1>
        <h3 className="text-gray-500">คำนวณ BMI</h3>
        <Image src={Bmi} alt="bmiimg" width={95} height={95} className="my-5" />
        {/*ส่วนของการป้อนหรือเลือก*/}
        <div className="w-full flex flex-col">
          <h3 className="font-bold">ป้อนน้ำหนัก (กิโลกกรัม)</h3>
          <input
            type="number"
            placeholder="เช่น 65.65"
            className="p-3 border-green-300 rounded mt-2"
          />
          <h3 className="font-bold">ป้อนส่วนสูง (เซ็นติเมตร)</h3>
          <input
            type="number"
            placeholder="เช่น 170"
            className="p-3 border-green-300 rounded mt-2"
          />
        </div>
        {/*ส่วนของปุ่ม คำนวณ*/}
        <button className="w-full mt-3 p-3 bg-amber-200 rounded hover:bg-fuchsia-500 cursor-pointer">
          คำนวณ BMI
        </button>
        {/*ส่วนของปุ่ม รีเซ็ต*/}
        <button className="w-full mt-3 p-3 bg-amber-200 rounded hover:bg-fuchsia-500 cursor-pointer">
          Reset
        </button>
        {/*ส่วนของการแสดง BMI*/}
        <div className="w-full flex justify-center gap-3 mt-5">
          <h3>ค่า BMI ที่คำนวณได้</h3>
          <h3 className="font-bold text-blue-400 text-2xl">0.00</h3>
        </div>
        {/*ส่วนของการแปลผล BMI*/}
        <div className="w-full flex justify-center gap-3 mt-5">
          <h3>การแปลผล</h3>
          <h3 className="font-bold text-blue-400 text-2xl">XXXXX</h3>
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
