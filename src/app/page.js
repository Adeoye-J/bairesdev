import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex gap-[100px]">
      <div className="flex-1 flex flex-col gap-[50px]">
        <h1 className="text-[86px]">Nearshore Tech Talent</h1>
        <p className="text-[20px]">
        Access 4,000+ timezone aligned software engineers with experience in 100+ technologies.
        </p>
        <div className="flex gap-[20px]">
          <button className="p-[20px] min-w-[120px] cursor-pointer border-none rounded-md bg-[#003140] text-text">Learn More</button>
          <button className="p-[20px] min-w-[120px] cursor-pointer border-none rounded-md">Contact</button>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image className="heroImg" src={"/home.png"} alt="" fill/>
      </div>
    </div>
  );
}

export default HomePage