import { useState} from "react";
import cl from './EmailEditor.module.css';

function EmailEditor() {

  return (
    <>
      <h1>Email editor</h1>
      <div className={cl.card}></div>
    </>
  );
}

export default EmailEditor;
