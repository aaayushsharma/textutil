import React,{useState} from 'react'



export default function Textform(props) {
    const handleupclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        console.log('handleupclick was called');
        props.showAlert("Converted to Uppercase","Success");
    }
    const handleloclick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      console.log('handleupclick was called');
      props.showAlert("Converted to lowercase","Success");
  }
  const clearText=()=>{
    let newText="";
    setText(newText);
    console.log('handleupclick was called');
    props.showAlert("Clear Text","Success");
}
    const handleonchange=(event)=>{
        console.log('handleupclick was called');
        setText(event.target.value);
    }
    const handlecopy=()=>{
      console.log("Iam copy");
      var text=document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard","Success");
    }
    const handleextraspaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed Extra spaces","Success");
    }
    const [text,setText]=useState('Enter text here');
    return ( 
      <>
    
        
       <div class="mb-3" style={{color:props.mode==='light'?'black':'white'}}>
       <h1>{props.heading}</h1>
    <label htmlFor="mybox">Example textarea</label>
    <textarea class="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='light'?'black':'white'}} id="mybox" onChange={handleonchange} rows="8"></textarea>
    <button className="btn btn-primary " onClick={handleupclick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-3 my-3" onClick={handleloclick}>Convert to lowercase</button>
    <button className="btn btn-primary" onClick={clearText}>ClearText</button> 
    <button className="btn btn-primary mx-3" onClick={handlecopy}>CopyText</button> 
    <button className="btn btn-primary " onClick={handleextraspaces}>Remove extra spaces</button> 

  </div>
 <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
  <h1>YOUR TEXT SUMMARY</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something here to preview it"}</p>
 </div>
 
    </>
  )
}
