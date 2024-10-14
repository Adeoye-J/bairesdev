import Image from "next/image"
import Link from "next/link"

const PostCard = () => {
  return (
    <div className="flex flex-col gap-[20px] mb-[20px]">
        <div className="flex">
            <div className="w-[90%] h-[400px] relative">
                <Image src={"/home3.png"} alt="" fill className="object-cover" />
            </div>
            <span className="text-sm rotate-270 m-auto">14.10.2024</span>
        </div>
        <div className="">
            <h1 className="text-[24px] mb-5 w-[90%]">Title</h1>
            <p className="mb-5 font-light text-gray-500 w-[90%]">Description</p>
            <Link className="underline" href={"/blog/post"}>READ MORE</Link>
        </div>
    </div>
  )
}

export default PostCard