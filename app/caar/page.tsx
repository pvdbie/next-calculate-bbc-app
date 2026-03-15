import NavBar from "@/components/NavBar";
import Image from "next/image";
import car from "@/assets/car.png";
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
        <h1 className="text-2xl">Car Installment Calculator</h1>
        <h3 className="text-gray-500">คำนวณ Car installment</h3>
        <Image src={car} alt="bmiimg" width={95} height={95} className="my-5" />
        {/*ส่วนของการป้อนหรือเลือก*/}
        <div className="w-full flex flex-col">
          <h3 className="font-bold">ชื่อผู้คำนวน</h3>
          <input
            type="number"
            placeholder="เช่น 65.65"
            className="p-3 border-green-300 rounded mt-2"
          />
          <h3 className="font-bold">ราคารถ (บาท)</h3>
          <input
            type="number"
            placeholder="เช่น 170"
            className="p-3 border-green-300 rounded mt-2"
          />
          <h3 className="font-bold">ดอกเบี้ยต่อปี (%)</h3>
          <input
            type="number"
            placeholder="เช่น 170"
            className="p-3 border-green-300 rounded mt-2"
          />
        </div>
        <div className="w-full flex justify-center">
          <h3>เงินดาวน์ (%)</h3>

          <label>
            <input type="radio" name="downpayment" value="15" />
            15%
          </label>

          <label>
            <input type="radio" name="downpayment" value="20" />
            20%
          </label>

          <label>
            <input type="radio" name="downpayment" value="30" />
            30%
          </label>
          <label>
            <input type="radio" name="downpayment" value="35" />
            35%
          </label>
        </div>
        <div>
          <h3 className="flex justify-center">จำนวนเดือนผ่อน</h3>

          <select className="border p-2 rounded">
            <option value="">-- เลือกจำนวนเดือน --</option>
            <option value="12">12 เดือน</option>
            <option value="24">24 เดือน</option>
            <option value="36">36 เดือน</option>
            <option value="48">48 เดือน</option>
            <option value="60">60 เดือน</option>
            <option value="72">72 เดือน</option>
          </select>
        </div>
        <div className="flex gap-3 w-full  justify-center ">
          {/*ส่วนของปุ่ม คำนวณ*/}
          <button className="w-full mt-3 p-3 bg-amber-200 rounded hover:bg-fuchsia-500 cursor-pointer">
            คำนวณ
          </button>
          {/*ส่วนของปุ่ม รีเซ็ต*/}
          <button className="w-full mt-3 p-3 bg-amber-200 rounded hover:bg-fuchsia-500 cursor-pointer">
            ล้างข้อมูล
          </button>
        </div>
        {/*ส่วนของการแสดง BMI*/}
        <div className="w-full flex justify-center gap-3 mt-5">
          <h3>ผ่อนชำระต่อเดือน</h3>
          <h3 className="font-bold text-blue-400 text-2xl">0.00</h3>
        </div>
        <div className="w-full ">
          <Link
            href="/"
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
