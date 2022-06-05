import React from 'react'

export default function About(props) {
  return (

    <div className='container mt-20' style={{backgroundColor:props.mode==='light'?'white':'#0d0d0d',color:props.mode==='light'?'black':'white'}}>
    <h2>About Us</h2>
      <p className='my-10'>The following are the functions of this text utility:</p>
        <ul>
          <li>Render the text entirely capital letters.</li>
          <li>Lower the case of the text.</li>
          <li>The text is made clear.</li>
          <li>To save the text, copy it to the clipboard.</li>
          <li>Extra spaces should be removed</li>
          <li>The summary of the number of words and characters is provided.</li>
          <li>The number of minutes required to read the information is shown.</li>
        </ul>
    </div>

  )
}
