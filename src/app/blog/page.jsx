import PostCard from "@/components/postCard/PostCard"


const BlogPage = () => {
  return (
    <div className="flex flex-wrap gap-[20px]">
      <div className="w-full md:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-full md:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-full md:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-full md:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-full md:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>
    </div>
  )
}

export default BlogPage