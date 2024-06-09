import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import ExampleTheme from "./ExampleTheme";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import AtSymbolPlugin from "./plugins/AtSymbolPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import TreeViewPlugin from "./plugins/TreeViewPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import { TRANSFORMERS } from "@lexical/markdown";

function Placeholder() {
  return <div className='editor-placeholder'>Enter somethings</div>;
}

const editorConfig: InitialConfigType = {
  namespace: "Demo",
  theme: ExampleTheme,
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
  ],
  onError(error: Error) {
    throw error;
  },
};

export default function App() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className='editor-container'>
        <ToolbarPlugin />
        <div className='editor-inner'>
        <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <TreeViewPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          {/* <BeautifulMentionsPlugin items={mentionItems} /> */}
          <AtSymbolPlugin />
          <HistoryPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}
