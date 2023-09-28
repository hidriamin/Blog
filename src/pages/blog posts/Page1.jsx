import React from "react"
import photo1 from "../../assets/photo1.jpg"
import { Outlet, Link } from "react-router-dom"

const post = {
  title: "Blog post 1",
  content:
    "The content of this blog post consists of text, letters, words, phrases. It's written in the english language. This is the content of this blog post. This is used as a placeholder.",
  date: "18/11/2023",
  image: photo1,
  id: 1,
}
function Page1() {
  return (
    <div className="flex flex-col flex-wrap items-center">
      <div key={post.id} className="w-100 m-5 flex items-center flex-col">
        <img
          src={post.image}
          alt="Image"
          className="object-cover h-48 w-1/2 py-3"
        />
        <div className="w-1/2 pb-3 text-gray-400 flex justify-between items-center">
          <Link
            to="/"
            className=" text-black border hover:border-sky-500 rounded-lg p-1"
          >
            Back
          </Link>
          <h2 className="text-black text-2xl">{post.title}</h2>

          <div>{post.date}</div>
        </div>
        <p className="text-black p-2 w-1/2">{post.content}</p>
      </div>
    </div>
  )
}
export default Page1
