import React from 'react'

const layout = (props) => {
  return (
    <div className='px-8 py-6 lg:px-36 lg:py-10'>
      {props.children}
    </div>
  )
}

export default layout
