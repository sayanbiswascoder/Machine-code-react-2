 
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import chaiCode from '../assets/chaiCode.png'

const CatsListing = () => {
  const [cats, setCats] = useState([])
  const [page, setPage] = useState(1)

  const load = () => {
    axios.get(`https://api.freeapi.app/api/v1/public/cats?page=${page}&limit=4`).then(({ data }) => {
      setCats(data.data.data)
    })
  }
  useEffect(() => {
    load()
  }, [page])
  return (
    <div className='bg-background-image3 bg-cover bg-no-repeat bg-center bg-white flex flex-col p-6'>
      <div className='w-screen flex items-center justify-center'>
        <button onClick={()=> page - 1 >= 1 && setPage(page - 1)}>
          <svg className='w-10 h-10' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="m14 7-5 5 5 5V7z"></path><path fill="none" d="M24 0v24H0V0h24z"></path></svg>
        </button>&nbsp;{page}&nbsp;<button onClick={() => setPage(page + 1)}>
        <svg className='w-10 h-10 rotate-180' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="m14 7-5 5 5 5V7z"></path><path fill="none" d="M24 0v24H0V0h24z"></path></svg>
        </button>
      </div>
      <div className='flex overflow-scroll gap-4'>
        {
          cats && cats.map(cat => {
            return <div key={cat.id} className="bg-white rounded-lg shadow-md w-[30vw] h-auto flex flex-col">
              <img src={cat.image} alt={cat.name} className="rounded-t-lg w-full h-48 object-cover" />
              <div className='p-4'>
                <h2 className="text-xl font-bold mb-2">{cat.name}</h2>
                <p className="mb-4">{cat.description}</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="font-medium">Origin:</span>
                    <span className="ml-2">{cat.origin}</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-medium">Temperament:</span>
                    <span className="ml-2 flex flex-wrap">{cat.temperament.split(", ").map((elm, ind) => {
                      return <div key={ind} className='rounded-full text-[10px] m-1 p-1 bg-[#EFEFEF] hover:bg-[#D482DB] hover:cursor-pointer'>{elm}</div>
                    })}</span>
                  </li>
                  <li className="flex items-center">
                    <span className=" font-medium">Life Span:</span>
                    <span className="ml-2">{cat.life_span}</span>
                  </li>
                </ul>
                <span className="text-blue-500 hover:text-blue-700 font-bold py-2 mt-4 cursor-pointer">
                  Learn More
                </span>
              </div>
            </div>
          })
        }

      </div>
      <div className='w-screen flex items-center justify-center'>
        <button onClick={()=> page - 1 >= 1 && setPage(page - 1)}>
          <svg className='w-10 h-10' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="m14 7-5 5 5 5V7z"></path><path fill="none" d="M24 0v24H0V0h24z"></path></svg>
        </button>&nbsp;{page}&nbsp;<button onClick={() => setPage(page + 1)}>
        <svg className='w-10 h-10 rotate-180' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="m14 7-5 5 5 5V7z"></path><path fill="none" d="M24 0v24H0V0h24z"></path></svg>
        </button>
      </div>
      <div className='fixed top-4 right-4'>
        <a target='_blank' href='https://chaicode.com'><img src={chaiCode} className='w-[50px] rounded mt-2' alt="Chai Code" /></a>
      </div>
    </div>
  )
}

export default CatsListing