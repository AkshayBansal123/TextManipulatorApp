import React from 'react'
import { useState } from 'react'
export default function About() {
  const [btnText,setbtnText]=useState("Enable dark mode")
  const [myStyle,setmyStyle]=useState(
{backgroundColor:'white',
    color:'black'}
  )
  const toggleStyle =()=>{
    if(myStyle.color==='black')
    {
      setmyStyle(
        {
          backgroundColor:'black',
          color:'white'
        }
      )
      setbtnText('Enable light mode')
    }
    else{
      setmyStyle(
        {
          backgroundColor:'white',
    color:'black'
        }
      )
      setbtnText("Enable dark mode ")
    }
  }
  return (
    <div className='container' style={myStyle}>
    <h2 className="my-3">About TextUtils</h2>
    <div className="accordion" id="accordionExample">

      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
            What is TextUtils?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
          <div className="accordion-body">
            <strong>TextUtils</strong> is a versatile text manipulation utility built with React. It allows users to perform common text editing tasks quickly and efficiently. Whether you're a writer, student, or developer, TextUtils helps improve productivity by offering simple yet powerful tools.
          </div>
        </div>
      </div>
  
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
            Key Features
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
          <div className="accordion-body">
            <ul>
              <li>Convert text to <strong>UPPERCASE</strong> or <strong>lowercase</strong></li>
              <li><strong>Clear</strong> the entire text with one click</li>
              <li><strong>Undo</strong> the last change</li>
              <li>Toggle between <strong>Dark</strong> and <strong>Light</strong> modes</li>
              <li>View <strong>word and character count</strong> in real-time</li>
              <li>Live <strong>text preview</strong> and summary</li>
            </ul>
          </div>
        </div>
      </div>
  
      <div className="accordion-item" style={myStyle}>
  <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
      How to Use TextUtils
    </button>
  </h2>
  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
    <div className="accordion-body">
      <p>
        TextUtils is a simple and efficient text manipulation tool designed to help users modify and analyze their text quickly. Here’s how you can use it:
      </p>
      <ul>
        <li>✍️ <strong>Type or paste your text</strong> in the input box.</li>
        <li>🔠 <strong>Convert text to uppercase or lowercase</strong> using the respective buttons.</li>
        <li>🧹 <strong>Clear the entire text</strong> with a single click.</li>
        <li>↩️ <strong>Undo recent changes</strong> made to your text.</li>
        <li>👁️ <strong>Preview the modified text</strong> below the editor in real-time.</li>
        <li>🌙 <strong>Switch between dark and light modes</strong> for comfortable viewing.</li>
      </ul>
      <p>
        <strong>Use Cases:</strong>
      </p>
      <ul>
        <li>✅ Preparing content for social media posts or blogs</li>
        <li>✅ Formatting assignments or documents</li>
        <li>✅ Quickly checking word or character counts</li>
        <li>✅ Removing unwanted formatting</li>
      </ul>
    </div>
  </div>
</div>

    </div>
  </div>
    
  )
}
