import NavBar from "@/components/NavBar";
import Image from "next/image";
import bmr from "@/assets/bmr.png";
import Link from "next/link";
import Footer from "@/components/Footer";
export default function Page() {
  return (
    <>
      {/*แสดง NavBar*/}
      <NavBar />
      {/*แสดงหน้าเนื้อหา ของหน้า BMI*/}
      <div className="w-3/5 flex flex-col items-center mx-auto mt-10">
        {/*แสดงหัวข้อการคำนวณและรูป*/}
        <h1 className="text-2xl">BMR Calculator</h1>
        <h3 className="text-gray-500">คำนวณ BMR</h3>
        <Image src={bmr} alt="bmrimg" width={95} height={95} className="my-5" />
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
          <h3 className="font-bold">ป้อนอายุ(0)</h3>
          <input
            type="number"
            placeholder="เช่น 25"
            className="p-3 border-green-300 rounded mt-2"
          />
          <h3>เพศ</h3>

          <label>
            <input type="radio" name="gender" value="male" />
            ชาย
          </label>

          <br />

          <label>
            <input type="radio" name="gender" value="female" />
            หญิง
          </label>
        </div>
        <div className="flex gap-3 w-full  justify-center ">
          {/*ส่วนของปุ่ม คำนวณ*/}
          <button className=" mt-3 p-3 bg-amber-200 rounded hover:bg-fuchsia-500 cursor-pointer">
            คำนวณ BMR
          </button>
          {/*ส่วนของปุ่ม รีเซ็ต*/}
          <button className=" mt-3 p-3 bg-amber-200 rounded hover:bg-fuchsia-500 cursor-pointer">
            Reset
          </button>
        </div>

        {/*ส่วนของการแสดง BMI*/}
        <div className="w-full flex justify-center gap-3 mt-5">
          <h3>ค่า BMR ที่คำนวณได้</h3>
          <h3 className="font-bold text-blue-400 text-2xl">0.00</h3>
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
    </>
  );
}
