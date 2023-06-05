import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    const handleUpClick = () => {
        console.log('upperclick was clicked')
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Text converted to upper case','info')
    }
    const handleClear = () => {
        console.log('clear was clicked')
        setText('')
        props.showAlert('Text Cleared','info')
    }
    const textToSpeech =() =>{
        const Speech= new SpeechSynthesisUtterance();
        const message= document.getElementById("myBox").value;
        Speech.lang='eng';
        Speech.text= message;
        window.speechSynthesis.speak(Speech);
        props.showAlert('Text to speech converted','info')
}

    const handleOnChange = (event) => {
        console.log('onchange was clicked')
        setText(event.target.value)
    }


    const handleExtraspace = () => {        
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra Space Removed','info')
    }
    

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied','info')
    }
    
    const handleLowClick = () => {
        console.log('upperclick was clicked')
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Text converted to lower case','info')
    }

    return (
        <>
        <div className='container' style={{color:props.mode === 'dark' ?  "white" : props.mode   === 'warning' ? "white" : '#042743'}}>
            <h1>{props.heading}s</h1>
            <div className="mb-3">       
            <textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? '#042743' : 'white', color:props.mode === 'dark' ? 'white' : '#042743'}} value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
                <button className={`btn btn-${props.mode} mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.mode} mx-2`} onClick={handleLowClick}>Convert to LowerCase</button>
                <button className={`btn btn-${props.mode} mx-2`} onClick={handleClear}>Clear Text</button>
                <button className={`btn btn-${props.mode} mx-2`} onClick={textToSpeech}>Text To Speech</button>
                <button className={`btn btn-${props.mode} mx-2`} onClick={handleCopy}>Copy Text</button>
                <button className={`btn btn-${props.mode} mx-2`} onClick={handleExtraspace}>Remove Extra Space</button>
      
            </div>
            
        <div className='container my-3' style={{color:props.mode === 'dark' ?  "white" : props.mode   === 'warning' ? "white" : '#042743'}}>
            <h2>your Text Summary</h2>
                <p>{text.split(" ").length} Word and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{ text.length > 0 ? text : 'Enter text for preview'}</p>

        </div>


            



        </>
    )
}
