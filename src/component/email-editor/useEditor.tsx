import { useState, useRef } from "react";
import { applyStyle, IType } from "./appply-style";

export function useEditor() {
  const [text, setText] = useState("Enter email...");
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const textRef = useRef<HTMLTextAreaElement | null>(null);

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

  return { text, setText, textRef, updateSelection, getSelectionText };
}
