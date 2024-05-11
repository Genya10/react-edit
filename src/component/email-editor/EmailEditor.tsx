import { useState, useRef } from "react";
import cl from "./EmailEditor.module.scss";
import { Eraser, Bold, Italic, Underline } from "lucide-react";
import { applyStyle, IType } from "./appply-style";
import parse from "html-react-parser";
import {useMutation, useQueryClient} from '@tanstack/react-query';
import { emailService } from "../../services/email.service";

function EmailEditor() {

  const [text, setText] = useState('Enter email...');

  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationKey:['create email'],
    mutationFn:() => emailService.sendEmail(text),
    onSuccess(){
      setText('')
      queryClient.refetchQueries({queryKey:['email list']})
    },
  })

  const updateSelection = () => {
    if (!textRef.current) return;
    setSelectionStart(textRef.current.selectionStart);
    setSelectionEnd(textRef.current.selectionEnd);
  };

  const getSelectionText = (type: IType) => {
    const selectedText = text.substring(selectionStart, selectionEnd); //выделенный текст
    if (!selectedText) return;

    const before = text.substring(0, selectionStart); //текс до выделенного фрагмента
    const after = text.substring(selectionEnd); //текст после выделенного фрагмента

    setText(before + applyStyle(type, selectedText) + after);
    console.log(selectedText);
  };

  return (
    <div>
      <h1>Email editor</h1>
      {text && <div className={cl.preview}>{parse(text)}</div>}      
      <div className={cl.card}>
        <textarea
          className={cl.editor}
          spellCheck="false"
          ref={textRef}
          onSelect={updateSelection}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className={cl.actions}>
          <div className={cl.tools}>
            <button onClick={() => setText("")}>
              <Eraser size={16} />
            </button>
            <button onClick={() => getSelectionText("bold")}>
              <Bold size={16} />
            </button>
            <button onClick={() => getSelectionText("italic")}>
              <Italic size={16} />
            </button>
            <button onClick={() => getSelectionText("underline")}>
              <Underline size={16} />
            </button>
          </div>
          <button disabled={isPending} onClick={() => mutate()}
            >Send now</button>
        </div>
      </div>
    </div>
  );
}

export default EmailEditor;
