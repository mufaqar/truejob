import React from 'react'

function Layout({children}:any) {
  return (
    <section className='container px-4 md:px-10 mx-auto'>
     {children}
    </section>
  )
}

export default Layout