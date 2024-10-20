import React from 'react'

export default function InlineCssExample() {
  return (
    <div>
      <h1 style={{backgroundColor: "yellow",color:"red"}}>Inline Css Example</h1>
      <nav 
      style={{
        height:"70x",
        width:"100%",
        backgroundColor:"aqua",
        display:"flex"

      }}
      
      >
        <aside style={{alignItems:"center"}}>logo</aside>
        <ul style={{display:"flex",gap:"20px"}}>
            <li>home</li>
            <li>about</li>
            <li>contacts</li>
        </ul>
      </nav>
    </div>
  )
}
