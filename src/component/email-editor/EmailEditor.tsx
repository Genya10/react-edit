import { useState, useRef} from "react";
import cl from './EmailEditor.module.scss';
import { Eraser,Bold, Italic, Underline } from "lucide-react";

function EmailEditor() {
  const [text, setText] = useState(`Hey!
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Animi, dolor? Saepe, cum repellat sequi voluptates fuga
      alias soluta voluptas maxime. Natus magnam,
      voluptate incidunt esse libero sit distinctio ut tempora.`)

      const textRef = useRef<HTMLTextAreaElement | null>(null)

      const getSelectionText=()=>{
        if(!textRef.current) return
       
        const cursorStart = textRef.current?.selectionStart
        const cursorEnd = textRef.current?.selectionEnd
        const selectText = text.substring(cursorStart,cursorEnd)
        console.log(selectText);

        if(!selectText) return
      }

  return (
    <div>
      <h1>Email editor</h1>
      <div className={cl.card}>
        <textarea 
          className={cl.editor}
          spellCheck='false'
          ref={textRef}
          onClick={getSelectionText}
          value={text}
          onChange={e=> setText(e.target.value)}
        />
        <div className={cl.actions}>
          <div className={cl.tools}>
          <button><Eraser size={16}/></button>
          <button><Bold size={16}/></button>
          <button><Italic size={16}/></button>
          <button><Underline size={16}/></button>
          </div>
          <button>Send now</button>
        </div>
      </div>
    </div>
  );
}

export default EmailEditor;
