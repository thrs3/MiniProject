import Image from "next/image";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-[#131313] flex justify-center items-center'"> 
        <div className="flex flex-col w-lg">
          <Button color="#313131" textColor="#FFBD7F">x</Button>
        </div>
      </div>
    </>
  );
}
