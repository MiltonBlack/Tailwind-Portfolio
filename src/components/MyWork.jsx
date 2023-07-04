import React from 'react'
import Images from './Images';
import { ImageData } from './ImageData';

const MyWork = () => {
  console.log(ImageData);
  return (
    <div className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-screen'>
      <section className="w-full relative">
        <h2 id='work' className='secondary-title'>My Work</h2>
        <p>I've Had the pleasure of working on different projects where i<br />
          implemented the Frontend Web and Mobile development technologies with Javascript, React.js, React Native, Next.js, Redux Toolkit, Postman, Tailwindcss, Express.js, Firebase, PostGreSql and MongoDB. 
          <br />
        </p>
          <em className=' text-secondary p-2 leading-4 text-center'>Click on an Image to see more.</em>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {
            ImageData.map((data, idx)=> {
              return (
                <Images image={data.image} about={data.about} head={data.head} key={idx}/>
                )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default MyWork