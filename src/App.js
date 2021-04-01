import {React, useState } from 'react'
import marked from 'marked'




function Markdown(props) {
    return <div id="markdown" dangerouslySetInnerHTML={{ __html: props.text }}></div> 
}

function App(){
  const [text, setText]=useState('')
    return (         
    <div>
       <textarea onChange={e=>setText(marked(e.target.value)) }></textarea>
        <Markdown className="card-text" text={ marked (text) }/>           
    </div>
      
    )
  
  

}

export default App;

