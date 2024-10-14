import Image from "next/image"

const ContactPage = () => {
  return (
    <div className="flex gap-[100px]">
      <div className="flex-1 items-center relative">
        <Image src={"/home2.png"} alt="Contact Image" fill className="" />
      </div>
      <div className="flex-1">
        <form action="" className="flex flex-col gap-[20px]">
          <input className="p-[20px] rounded-md border-none outline-none bg-bgsoft text-text" type="text" placeholder="Name and Surname" />
          <input className="p-[20px] rounded-md border-none outline-none bg-bgsoft text-text" type="text" placeholder="Email Address" />
          <input className="p-[20px] rounded-md border-none outline-none bg-bgsoft text-text" type="text" placeholder="Phone Number (Optional)" />
          <textarea 
            className="p-[20px] rounded-md border-none outline-none bg-bgsoft text-text" 
            name="" 
            id=""
            cols={"30"}
            rows={"10"}
            placeholder="Message"
          ></textarea>
          <button className="p-[20px] bg-[#1e29a9] text-text text-[20px] font-bold border-none rounded-md cursor-pointer">send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage