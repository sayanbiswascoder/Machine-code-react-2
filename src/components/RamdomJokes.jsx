// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import elon from "../assets/elon.png"
import chaiCode from '../assets/chaiCode.png'
import axios from 'axios'

const RamdomJokes = () => {
  const [joke, setJoke] = useState("")

  const randomInt = (min, max) => {
    let num = Math.floor(Math.random() * (max - min + 1)) + min
    return num
  }

  const randomFloat = (min, max) => {
    let num = Math.random() * (max - min) + min
    return num.toFixed(1)
  }

  useEffect(()=>{
    axios.get("https://api.freeapi.app/api/v1/public/randomjokes/joke/random").then(({ data }) => {
      setJoke(data.data.content)
    })
  }, [])
  return (
    <div className='bg-background-image2 h-screen w-screen bg-cover bg-no-repeat bg-center bg-slate-900 flex items-center justify-center'>
      <div className="flex flex-col items-start p-4 bg-black border rounded-lg shadow-md w-[350px] md:w-[450px]">
        <div className='flex gap-2 items-center'>
          <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7713 5.63915L1.32133 5.63915M1.32133 5.63915L5.99008 10.3539M1.32133 5.63915L5.99008 0.924416" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className='text-white'>Post</span>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-2" src={elon} alt="Elon Musk" />
          <div className="flex flex-col items-start justify-start">
            <span className="font-bold text-white">Elon Musk</span>
            <span className="text-gray-500 text-sm">@elonmusk</span>
          </div>
        </div>
        <p className="mt-4 text-white">
          {joke}
        </p>
        <span className='text-[#71767B] mt-4 text-sm mb-2'>
          {randomInt(1, 12)}:{randomInt(10, 60)} {["AM", "PM"][randomInt(0,1)]} . {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][randomInt(0,11)]} {randomInt(1, 28)}, 2024 . <span className='text-white'>{randomFloat(50, 70)}M</span> Views
        </span>
        <div className="flex justify-between border-t-2 border-b-2 border-solid border-[#71767B] w-full p-2">
          <div className='flex items-center'>
            <svg className='w-4 h-4' width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4.09653C0 1.83319 1.79873 0 4.01753 0H6.20873C8.46216 0 10.2885 1.86392 10.2885 4.16309C10.2885 5.67881 9.48198 7.07163 8.18262 7.80388L4.14049 10.0877V8.19817H4.10687C1.85344 8.24938 0 6.40082 0 4.09653ZM4.01753 1.02413C2.3528 1.02413 1.00376 2.40159 1.00376 4.09653C1.00376 5.82219 2.39396 7.20988 4.08428 7.17404L4.26044 7.16892H5.14425V8.34667L7.6973 6.90777C8.67647 6.35473 9.28474 5.305 9.28474 4.16309C9.28474 2.42719 7.90759 1.02413 6.20873 1.02413H4.01753Z" fill="#71767B" />
            </svg>
            <span className='text-[#71767B]'>{randomFloat(3, 7)}k</span>
          </div>
          <div className='flex items-center'>
            <svg className='w-4 h-4' width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.93171 0L4.99998 2.10842L4.36344 2.85197L3.39837 1.86906V6.17249C3.39837 6.7327 3.81651 7.19105 4.33171 7.19105H6.89838V8.20961H4.33171C3.30084 8.20961 2.46504 7.298 2.46504 6.17249V1.86906L1.49997 2.85197L0.863434 2.10842L2.93171 0ZM8.53172 1.07968H5.96505V0.0611137H8.53172C9.56259 0.0611137 10.3984 0.972727 10.3984 2.09824V6.40166L11.3635 5.41875L12 6.1623L9.93172 8.27073L7.86345 6.1623L8.49999 5.41875L9.46505 6.40166V2.09824C9.46505 1.53803 9.04692 1.07968 8.53172 1.07968Z" fill="#71767B" />
            </svg>
            <span className='text-[#71767B]'>{randomFloat(3, 7)}k</span>
          </div>
          <div className='flex items-center'>
            <svg className='w-4 h-4' width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.81811 1.15068C8.08494 1.11613 7.21076 1.44437 6.48419 2.39453L6.0012 3.02222L5.51762 2.39453C4.79044 1.44437 3.91566 1.11613 3.18249 1.15068C2.43671 1.19099 1.77313 1.59985 1.43654 2.25057C1.10535 2.89553 1.05675 3.85146 1.72393 5.02621C2.36831 6.16065 3.67807 7.48512 6.0012 8.83263C8.32313 7.48512 9.63229 6.16065 10.2767 5.02621C10.9432 3.85146 10.8946 2.89553 10.5629 2.25057C10.2263 1.59985 9.56329 1.19099 8.81811 1.15068ZM11.3302 5.57903C10.5197 7.00716 8.92971 8.52743 6.30299 9.99587L6.0012 10.1686L5.69881 9.99587C3.07149 8.52743 1.48154 7.00716 0.669765 5.57903C-0.14621 4.13938 -0.176209 2.78036 0.361374 1.73805C0.893558 0.707267 1.94953 0.0623056 3.12189 0.00471975C4.11246 -0.0471075 5.14263 0.327201 6.0006 1.1622C6.85797 0.327201 7.88814 -0.0471075 8.87811 0.00471975C10.0505 0.0623056 11.1064 0.707267 11.6386 1.73805C12.1762 2.78036 12.1462 4.13938 11.3302 5.57903Z" fill="#71767B" />
            </svg>
            <span className='text-[#71767B]'>{randomInt(30, 60)}k</span>
          </div>
          <div className='flex items-center'>
            <svg className='w-4 h-4' width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.14032 1.33006C0.14032 0.595869 0.661894 0 1.30559 0H6.43277C7.07647 0 7.59804 0.595869 7.59804 1.33006V11.1406L3.86918 8.10275L0.14032 11.1406V1.33006ZM1.30559 1.06405C1.17694 1.06405 1.07253 1.1811 1.07253 1.33006V9.07636L3.86918 6.79397L6.66583 9.07636V1.33006C6.66583 1.1811 6.56142 1.06405 6.43277 1.06405H1.30559Z" fill="#71767B" />
            </svg>
            <span className='text-[#71767B]'>{randomFloat(0, 2)}k</span>
          </div>
          <div>
            <svg className='w-4 h-4' width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.58829 0L7.49421 2.78653L6.77538 3.48072L5.0981 1.86746V6.55568H4.07848V1.86746L2.39611 3.48072L1.67727 2.78653L4.58829 0ZM9.17658 6.06681L9.16638 7.78273C9.16638 8.45736 8.5954 9 7.89186 9H1.27453C0.565889 9 0 8.45247 0 7.77784V6.06681H1.01962V7.77784C1.01962 7.91472 1.13178 8.02227 1.27453 8.02227H7.89186C8.03461 8.02227 8.14676 7.91472 8.14676 7.77784L8.15696 6.06681H9.17658Z" fill="#71767B" />
            </svg>

          </div>
        </div>
        <div className='w-full flex items-center justify-center mt-2'>
          <span className='text-[#71767B]'>© chai aur code</span>
        </div>
      </div>
      <div className='absolute bottom-4 right-4'>
      <a target='_blank' href='https://chaicode.com'><img src={chaiCode} className='w-[50px] rounded mt-2' alt="Chai Code" /></a>
      </div>
    </div>
  )
}

export default RamdomJokes