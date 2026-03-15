import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Bmi from "@/assets/bmi.png";
import bmr from "@/assets/bmr.png";
import car from "@/assets/car.png";
import Footer from "@/components/Footer";
export default function Page() {
  return (
    <>
      <div className="w-full mt-20 flex flex-col items-center">
        {/*Logo*/}
        <Image src={logo} alt="logo" width={100} height={100} />
        {/*ชื่อเว็บรายละเอียด*/}
        <h1 className="mt-5 text-5xl font-bold">เครื่องมือคำนวณออนไลน์</h1>
        <h3 className="mt-3 text-lg font-bold text-amber-600">
          เลือกการคำนวณที่คุณต้องการจากรายการด้านล่าง
        </h3>
        {/*ling to /bmi ,/bmr,/car */}
        <div className="w-full flex justify-center">
          <Link
            href="/bmi"
            className="p-3 border border-gray-200 rounded shadow-xl flex flex-col items-center"
          >
            <Image src={Bmi} alt="bmi" width={65} height={65} />
            <h1 className="text-xl mt-5">BMI</h1>
            <h5>คำนวณน้ำหนักของคุณเหมาะสมกับส่วนสูงหรือไม่</h5>
          </Link>
          <Link
            href="/bmr"
            className="p-3 border border-gray-200 rounded shadow-xl flex flex-col items-center"
          >
            <Image src={bmr} alt="bmi" width={65} height={65} />
            <h1 className="text-xl mt-5">BMR (อัตราการเผาผลาญ)</h1>
            <h5>คำนวณพลังงานขึ้นต่ำที่ร่างกายต้องการต่อวัน</h5>
          </Link>
          <Link
            href="/caar"
            className="p-3 border border-gray-200 rounded shadow-xl flex flex-col items-center"
          >
            <Image src={car} alt="bmi" width={65} height={65} />
            <h1 className="text-xl mt-5">การผ่อนชำระรถยนต์</h1>
            <h5>คำนวณพลังงานขึ้นต่ำที่ร่างกายต้องการต่อวัน</h5>
          </Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
