import { $generateNodesFromDOM } from "@lexical/html";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getRoot,
  $getSelection,
  $insertNodes,
  $isRangeSelection,
  COMMAND_PRIORITY_LOW,
  KEY_DOWN_COMMAND,
} from "lexical";
import { useEffect, useRef, useState } from "react";
import { htmlTemplate } from "../template/htmlTemplate";

const suggestionsTree = {
  Header: ["Header H1", "Header H2"],
  Footer: [],
  Sidebar: [],
  "Main Content": [],
  "Default": [],
};

const AtSymbolPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState<string | null>(null);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
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
              setPosition({ top: rect.bottom + window.scrollY + 5, left: rect.left + window.scrollX + 5 });
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
    };
  }, [editor]);

  const insertTemplate = (template: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        // Xóa dấu "#" khỏi vị trí hiện tại
        selection.deleteCharacter();

        // Chèn template
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlTemplate[template], "text/html");
        const nodes = $generateNodesFromDOM(editor, doc);
        $insertNodes(nodes);
      }
    });
    setShowSuggestions(false);
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
          className="suggestions"
          style={{ top: position.top, left: position.left, position: 'absolute' }}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(suggestion)}
              onClick={() => insertTemplate(suggestion)}
            >
              {suggestion}
              {activeSuggestion === suggestion && suggestionsTree[suggestion].length > 0 && (
                <ul className="sub-suggestions">
                  {suggestionsTree[suggestion].map((subSuggestion, subIndex) => (
                    <li key={subIndex} onClick={() => insertTemplate(subSuggestion)}>
                      {subSuggestion}
                    </li>
                  ))}
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
