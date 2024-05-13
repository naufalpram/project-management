import React from 'react'

const Main = ({ children }) => {
  return (
    <main className="h-screen my-8 flex gap-8">
        {children}
    </main>
  )
}

export default Main