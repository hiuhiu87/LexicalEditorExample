import { $generateNodesFromDOM } from "@lexical/html";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  // $getRoot,
  $getSelection,
  $insertNodes,
  $isRangeSelection,
  COMMAND_PRIORITY_LOW,
  KEY_DOWN_COMMAND,
} from "lexical";
import { useEffect, useRef, useState } from "react";
import { htmlTemplate, suggestionsTree } from "../template/htmlTemplate";

const AtSymbolPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState<string | null>(null);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const removeListener = editor.registerCommand(
      KEY_DOWN_COMMAND,
      (event) => {
        if (event.key === "#") {
          const selection = $getSelection();
          if ($isRangeSelection(selection)) {
            const nativeSelection = window.getSelection();
            if (nativeSelection && nativeSelection.rangeCount > 0) {
              const range = nativeSelection.getRangeAt(0);
              const rect = range.getBoundingClientRect();
              // Adjust position to avoid overlapping the #
              setPosition({
                top: rect.bottom + window.scrollY + 5,
                left: rect.left + window.scrollX + 20,
              });
            }
            setSuggestions(Object.keys(suggestionsTree));
            setShowSuggestions(true);
          }
        } else {
          setShowSuggestions(false);
        }
        return false;
      },
      COMMAND_PRIORITY_LOW
    );

    return () => {
      removeListener();
      setPosition(null);
    };
  }, [editor]);

  const insertTemplate = (template: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const anchor = selection.anchor;
        //@ts-ignore
        const focus = selection.focus;
        const textNode = anchor.getNode();
        const textContent = textNode.getTextContent();
        const offset = anchor.offset - 1;
        const newTextContent =
          textContent.substring(0, offset) + textContent.substring(offset + 1);
        textNode.setTextContent(newTextContent);
        selection.setTextNodeRange(textNode, offset, textNode, offset);

        const parser = new DOMParser();
        // @ts-ignore
        const doc = parser.parseFromString(htmlTemplate[template], "text/html");
        const nodes = $generateNodesFromDOM(editor, doc);
        $insertNodes(nodes);
      }
    });
    setShowSuggestions(false);
    setPosition(null);
    setActiveSuggestion(null);
  };

  const handleMouseEnter = (suggestion: string) => {
    setActiveSuggestion(suggestion);
  };

  return (
    <>
      {showSuggestions && position && (
        <ul
          ref={suggestionsRef}
          className='suggestions'
          style={{
            top: position.top + "px",
            left: position.left + "px",
            position: "absolute",
          }}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(suggestion)}
              onClick={() => insertTemplate(suggestion)}
            >
              {suggestion}
              {activeSuggestion === suggestion &&
                //@ts-ignore
                suggestionsTree[suggestion].length > 0 && (
                  <ul className='sub-suggestions'>
                    {/* @ts-ignore */}
                    {suggestionsTree[suggestion].map(
                      //@ts-ignore
                      (subSuggestion, subIndex) => (
                        <li
                          key={subIndex}
                          onClick={() => insertTemplate(subSuggestion)}
                        >
                          {subSuggestion}
                        </li>
                      )
                    )}
                  </ul>
                )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default AtSymbolPlugin;
