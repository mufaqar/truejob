import React from 'react'

function Layout({children}:any) {
  return (
    <section className='container px-4 md:px-0 mx-auto'>
     {children}
    </section>
  )
}

export default Layout