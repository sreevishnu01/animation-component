import Follow from "@/components/Follow";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="">
        <div className="flex flex-col items-center justify-between p-24">
          <h1 className="text-9xl">Code component</h1>
          <h1 className="text-9xl">POs</h1>
        </div>

        <input
          name="rember"
          id="ss"
          type="checkbox"
          className=" p-2 bg-black accent-transparent appearance-none"
        />
      </div>
      <div className="w-full h-96 bg-white mt-10">
        <Follow />
      </div>
      <div className="section2 h-screen bg-white"></div>
    </main>
  );
}
