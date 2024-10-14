import Image from "next/image"

const SinglePostPage = () => {
  return (
    <div className="flex gap-[100px]">
      {/* <div className="flex-1 relative h-[calc(100vh-200px)]"> */}
      <div className="relative w-1/3 h-[calc(100vh-200px)]">
        <Image src={"/home3.png"} alt="Blog Image" fill className="object-cover"/>
      </div>
      <div className="w-2/3 flex flex-col gap-[50px]">
        <h1 className="text-[64px]">Title</h1>
        <div className="flex gap-[20px]">
          <Image src={"/home3.png"} alt="Profile Image" width={50} height={50} className="object-cover rounded-[50%] w-[50px] h-[50px]" />
          <div className="flex flex-col gap-[10px]">
            <span className="text-gray-600 font-bold">Author</span>
            <span className="font-[500]">Jeremiah Bankole</span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-gray-600 font-bold">Published</span>
            <span className="font-[500]">14.10.2024</span>
          </div>
        </div>
        <div className="text-[20px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, nihil illo? Ea voluptate, ipsa enim id delectus quasi cupiditate, optio placeat illum assumenda impedit unde dicta! Culpa dolorum voluptatibus maxime.
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage