import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here ..");

  //Definitions

  const changeText = (event) =>{
    setText(event.target.value);
  }

  const handleUpperCase = () =>{
      setText(text.toUpperCase());
  }

  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
  }

  const handleExtraSpaces = ()=>{
    let newVal = text.split(/[ ]+/);
    setText(newVal.join(" "));
  }

  return (
    <>
      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h3 className='my-4'>{props.heading}</h3>
        <div className="mb-3 my-3">
            <label htmlFor="myText" className="form-label">Enter the text to analyze</label>
            <textarea className="form-control" id="myText" rows="5" style={{backgroundColor:props.mode==='light'?'white':'#0d0d0d',color:props.mode==='light'?'black':'white'}} value={text} onChange={changeText}></textarea>
        </div>
        <button disabled={text.length === 0} className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleUpperCase}>Upper Case</button>
        <button disabled={text.length === 0} className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-2`} onClick={()=>{setText(text.toLowerCase())}}>Lower Case</button>
        <button disabled={text.length === 0} className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-2`} onClick={()=>{setText("")}}>Reset</button>
        <button disabled={text.length === 0} className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className={`btn btn-${props.mode==='light'?'primary':'secondary'} mx-2 my-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-5" style={{color:props.mode==='light'?'black':'white'}}>
      <h3 className='my-4'>Text summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length } minutes read</p>
    </div>
    </>
  )
}
