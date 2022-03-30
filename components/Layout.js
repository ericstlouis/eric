import React from 'react'

const layout = (props) => {
  return (
    <div className='px-8 md: lg:px-36 lg:py-5'>
      {props.children}
    </div>
  )
}

export default layout
