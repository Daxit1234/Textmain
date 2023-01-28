import React,{useState} from 'react'
export default function Textform(props) {
    const[text,settext]=useState("");
    let handleupclick=()=>{
        let uptext= text.toUpperCase();
        settext(uptext)
        props.showAlert("convert to Uppercase","success");
    }
    let handlelowclick=()=>{
        let lower= text.toLowerCase();
        settext(lower)
        props.showAlert("convert to Lowercase","success");
    }
    let handleclearclick=()=>{
        let clear= "";
        settext(clear)
        props.showAlert("clear text","success");
    }
    let handlerepeatclick=()=>{
        let no=prompt("enter no you want to repeat text")
        let repeat=text.repeat(no)
        settext(repeat)
    }
    let handleextraclick=()=>{
        let extraspace=text.split(/[ ]+/);
        settext(extraspace.join(" "))
    }
    let handleonchange=(event)=>{
        settext(event.target.value)
    }
  return (
    <>
    <div className='container'style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label for="mybox" className="form-label"></label>
       <textarea className='form-control' style={{backgroundColor:props.mode==="dark"?"black":"white",color: props.mode==="dark"?"white":"black" }} onChange={handleonchange} value={text} id='mybox' rows="9" placeholder='Eneter text hear'></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleupclick}>convert to Uppercase</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handlelowclick}>convert to lowercase</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handlerepeatclick}>repeat</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleextraclick}>Extra space</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleclearclick}>clear</button>
    </div>
    <div className='container'style={{color: props.mode==="dark"?"white":"black"}}>
      <h1>Your Text Summary</h1>
      <h5>{text.split(/\s+/).filter((el)=>el.length!==0).length} words and {text.length} character</h5>
      <h5>{0.2*text.split(" ").filter((el)=>el.length!==0).length} secoundd readtime</h5>
      <h2>preview</h2>
      <p>{text.length>0?text:"enter something preview it hear"}</p>
    </div>
    </>
 
  )
}
