import { ArrowRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    
      <div className='absolute top-0 left-0 p-8 flex flex-col justify-between h-full w-full'>
              <h2 className='bg-white text-xl rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
              <div>
                <p className='text-lg leading-normal mb-14 text-white'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium doloremque distinctio rerum tempora libero dignissimos.
                </p>
                <div className='flex justify-between'>
                  <button className='bg-blue-600 font-medium px-8 py-2 rounded-full text-lg '>{props.tag}</button>
                  <button className='bg-blue-600 font-medium px-4 py-2 rounded-full text-lg'><ArrowRight /></button>
                </div>
              </div>
      
            </div>
    
  )
}

export default RightCardContent
