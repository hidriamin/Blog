import React from "react"
import profilePhoto from "./assets/Photo_De_Profil.jpg"

function Header() {
  return (
    <div className="border-b">
      <h1 className="text-black text-3xl p-3">Welcome to my blog!</h1>
      <div className="flex flex-row items-center">
        {" "}
        <img className="object-cover h-48 w-48 py-3 pr-3" src={profilePhoto} />
        <div className="text-start">
          <h2 className="text-black text-2xl pt-5 ">Who am i?</h2>

          <p className="text-black py-2 w-1/3">
            I'm a Marketing graduate who discovered he's into programming.
            Basically, i do web development. This website is part of my work.
            You can find my main website{" "}
            <a
              href="https://hidriamin.github.io/aminhidri.com"
              target="_blank"
              className="text-sky-600 underline"
            >
              here
            </a>{" "}
            .
          </p>
        </div>
      </div>
    </div>
  )
}
export default Header
