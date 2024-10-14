import Image from "next/image"


const AboutPage = () => {
  return (
    <div className="flex gap-[100px]">
      <div className="flex-1 flex flex-col gap-[50px]">
        <h2 className="text-[#d61e73] text-[20px]">About Bairesdev</h2>
        <h1 className="text-[54px]">Rapidly scale teams and meet business challenges.</h1>
        <p className="text-[20px] font-[300]">For over a decade we’ve partnered with technology leaders to rapidly scale their teams and meet their business challenges.</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[#d61e73] text-[20px]">10 +</h1>
            <p>Years of experience</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[#d61e73] text-[20px]">1,200 +</h1>
            <p>Projects delivered</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[#d61e73] text-[20px]">500 +</h1>
            <p>Countries worked with</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image className="object-contain" src={"/home1.jpg"} alt="About image" fill/>
      </div>
    </div>
  )
}

export default AboutPage