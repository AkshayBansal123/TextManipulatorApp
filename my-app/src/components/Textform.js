
import React, { useState,useEffect,useRef } from 'react';
import copy from './copy.png';
import download from './download.png';
import speak from './speak.jpg';
export default function Textform(props) {
  const [text, setText] = useState('');
  const [history, setHistory] = useState(['']);
  const [showInput,setShowInput]=useState(false);
  const [findWord,setFindWord]=useState(null);
  const [replaceWord,setReplaceWord]=useState(null);
  const typingTimeoutRef = useRef(null);

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success")
    }
    const handleLoClick=()=>{
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("converted to uppercase","success")
  }
    // const handleOnChange=(event)=>{
    //     setHistory([...history,text])
    //     setText(event.target.value)
    // }

 
    const handleOnChange = (e) => {
      const newText = e.target.value;
      setText(newText);
  
      // Clear previous timeout
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
  
      // Wait for 2s pause before saving to history
      typingTimeoutRef.current = setTimeout(() => {
        setHistory((prev) => [...prev, newText]);
      }, 1000);
    };
    const clearAll=()=>{
      let newText=' '
      setText(newText)
    }
    const handleUndo = () => {
      if (history.length > 0) {
        const previousText = history[history.length - 1];
        setText(previousText); 
        setHistory(history.slice(0, history.length - 1)); 
      }
    };
  
    const handleCopy=()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("copied to clipboard","success");
    }

    const handleExtraSpaces=()=>{
      const newText = text.replace(/\s+/g, ' ').trim();
      setText(newText);
  props.showAlert("Extra spaces removed!", "success");
    }

    const handleReplace=()=>{
      if (showInput && findWord && replaceWord) {
        const newText = text.replaceAll(findWord, replaceWord);
        setText(newText);
        props.showAlert("Text replaced!", "success");
    
        // Reset
        setShowInput(false);
        setFindWord('');
        setReplaceWord('');
      } else {
        // Show input fields on first click
        setShowInput(true);
      }
     }
    

     const handleDownload = () => {
      const element = document.createElement("a");
      const file = new Blob([text], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = "TextUtilsOutput.txt";
      element.click();
      props.showAlert("Download started!", "success");
    };

    const handleSpeak = () => {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
      props.showAlert("Speaking...", "success");
    };

    const handleCapitalize=()=>{
      const capitalized=text.toLowerCase().split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
      setText(capitalized);
      props.showAlert("First letter capitalized!", "success");
    }

  return (
    <>
    <div className='container' style=
      {
        {
          color:props.mode==='dark'? 'white':'black',
          backgroundColor:props.mode==='dark'? 'grey':'white'
        }
      }>


<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <h1 style={{ margin: 0 }}>{props.heading}</h1>

    {showInput && (
      <>
        <input
          type="text"
          value={findWord}
          onChange={(e) => setFindWord(e.target.value)}
          style={{ width: '100px' }}
        />
        <input
          type="text"
          value={replaceWord}
          onChange={(e) => setReplaceWord(e.target.value)}
          style={{ width: '100px' }}
        />
      </>
    )}
  </div>
  <img
    src={speak}
    style={{ height: '30px', width: '30px', cursor: 'pointer' ,marginLeft:'650px'}}
    onClick={handleSpeak}
    alt="speak"
  />
  <img
    src={download}
    style={{ height: '30px', width: '30px', cursor: 'pointer' , marginLeft:'20px'}}
    onClick={handleDownload}
    alt="downlaod"
  />
  <img
    src={copy}
    style={{ height: '20px', width: '20px', cursor: 'pointer' }}
    onClick={handleCopy}
    alt="copy"
  />
</div>

      
      <div className="mb-3" >
        <textarea className="form-control" 
        style=
        {
          {
            color:props.mode==='dark'? 'white':'black',
            backgroundColor:props.mode==='dark'? 'grey':'white'
          }
        }
        id="my-box" rows="8"value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-3 " onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-3" onClick={clearAll}>Clear Text</button>
      <button className="btn btn-primary mx-3" onClick={handleUndo}>Undo text</button>

      <div  style={{marginTop:'20px'}}>
    <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove extra spaces</button>
    <button className="btn btn-primary mx-3" onClick={handleReplace}>Find and replace</button>
    <button className="btn btn-primary mx-3" onClick={handleCapitalize}>Capitalize first word</button>
    </div>
    </div>
   
    <div style={{marginTop:'20px'}}>
      <p style={{fontSize:'22px'}}>{text.length==0 ? 0:text.split(" ").length} words and {text.length} characters</p>
      <p style={{fontSize:'22px'}}>
  {(0.008 * text.split(" ").length).toFixed(2)} minutes read
</p>

      <h2>{text.length>0? 'Preview':'Enter the text to preview it here'}</h2>
      <p>{text}</p>
    </div>
    </>
  )
}


