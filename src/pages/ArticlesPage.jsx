import React from 'react'
import Button from '../components/button/Button'
import { FaEdit } from "react-icons/fa";
import { articles } from '../data/Articles';

export default function ArticlesPage() {
  return (
    <div className="px-20">
      <div className="w-full h-[80vh] flex items-center justify-center flex-col">
        <div className='bg-primaryBlueColor w-full rounded-xl text-center p-4 flex flex-col items-center'>
          <h1 className="font-bold text-2xl md:text-6xl text-primaryWhiteColor capitalize text-center">
            Share your story to inspire students to learn!
          </h1>
          <p className="text-md md:text-xl text-primaryWhiteColor mt-2">
          Read and also share a brief article about your schooling experience which you feel can be of help to foster learning
          </p>
          <Button title="Write An Article" border="border" icon={<FaEdit />}/>
        </div>
      </div>
       <div>
       <h1 className='text-primaryBlackColor font-bold text-center md:text-start text-2xl md:text-4xl'>Articles Written</h1>
       {articles.map((article, i)=>(
        <div className='border shadow-xl rounded-xl mt-4 p-4'>
          <h1 className='font-semibold text-secondaryBlackColor uppercase'><span className='text-primaryBlueColor'>Title: </span>{article.title}</h1>
          <p className='my-2'>{article.article}</p>
          <p className='text-right font-medium text-secondaryBlackColor'><span className='text-primaryBlueColor uppercase font-semibold'>Writer: </span>{article.writer}</p>
        </div>
       ))}
       </div>

    </div>
  )
}
