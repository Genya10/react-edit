import { useState} from "react";
import cl from './EmailEditor.module.css';
import { Eraser,Bold, Italic, Underline } from "lucide-react";

function EmailEditor() {

  return (
    <div>
      <h1>Email editor</h1>
      <div className={cl.card}>
        <div className={cl.editor}>
         Hey!
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Animi, dolor? Saepe, cum repellat sequi voluptates fuga
          alias soluta voluptas maxime. Natus magnam,
          voluptate incidunt esse libero sit distinctio ut tempora.
        </div>
        <div className={cl.actions}>
          <div className={cl.tools}>
          <button><Eraser/></button>
          <button><Bold/></button>
          <button><Italic/></button>
          <button><Underline/></button>
          </div>
          <button>Send now</button>
        </div>
      </div>
    </div>
  );
}

export default EmailEditor;
