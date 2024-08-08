import React from 'react'

 const Name = ({children}) => {
  return (
    <div>
         <p className='text-4xl font-bold border-b-4 border-gray-500 p-2  inline'>
            {children}
         </p>
    </div>
  )
}

export default Name

