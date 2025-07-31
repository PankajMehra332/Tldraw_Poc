import {
  defaultAddFontsFromNode,
  DefaultRichTextToolbar,
  DefaultRichTextToolbarContent,
  stopEventPropagation,
  tipTapDefaultExtensions,
  useEditor,
  useValue,
} from "@tldraw/tldraw";
import { FontSize } from "./FontSizeExtension";
import FontFamily from "@tiptap/extension-font-family";
import { TextStyle } from "@tiptap/extension-text-style";
import { useEffect } from "react";
import extensionFontFamilies from "./fonts";

export const UiOverRides = {
  tools(editor, tools) {
    return {
      text: tools.text,
      select: tools.select,
    };
  },
  toolbar(editor, toolbar) {
    return {
      text: toolbar["text"],
      select: toolbar["select"],
    };
  },
  actionsMenu: () => null,
  helpMenu: () => null,
  mainMenu: () => null,
  pageMenu: () => null,
  navigationPanel: () => null,
  zoomMenu: () => null,
  quickActions: () => null,
};

export const fontOptions = [
  { label: "Default", value: "DEFAULT" },
  { label: "Inter", value: "Inter" },
  { label: "Comic Sans MS", value: "Comic Sans MS" },
  { label: "serif", value: "serif" },
  { label: "monospace", value: "monospace" },
  { label: "cursive", value: "cursive" },
  { label: "Exo 2 (Google Font)", value: "'Exo 2'" },
];

export const fontSizeOptions = [
  { label: "Small", value: "12px" },
  { label: "Normal", value: "16px" },
  { label: "Large", value: "20px" },
  { label: "X-Large", value: "24px" },
  { label: "XX-Large", value: "28px" },
  { label: "Huge", value: "32px" },
];

export const components = {
  RichTextToolbar: () => {
    const editor = useEditor();
    const textEditor = useValue(
      "textEditor",
      () => editor.getRichTextEditor(),
      [editor]
    );
    useEffect(() => {
      if (!textEditor) {
        return;
      }
      const handleTransaction = ({ editor: textEditor }) => {};
      textEditor.on("transaction", handleTransaction);
      return () => {
        textEditor.off("transaction", handleTransaction);
      };
    }, [textEditor]);

    if (!textEditor) return null;

    const currentFontFamily =
      textEditor?.getAttributes("textStyle").fontFamily ?? "DEFAULT";
    const currentFontSize = textEditor?.getAttributes("textStyle").fontSize;

    return (
      <DefaultRichTextToolbar>
        <select
          value={currentFontFamily}
          onPointerDown={stopEventPropagation}
          onChange={(e) => {
            textEditor
              ?.chain()
              .focus()
              .setMark("textStyle", { fontFamily: e.target.value })
              .run();
          }}
          style={{ marginLeft: "0.5rem", border:"none" }}
        >
          {fontOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          value={currentFontSize}
          onPointerDown={stopEventPropagation}
          onChange={(e) => {
            textEditor
              ?.chain()
              .focus()
              .setMark("textStyle", { fontSize: e.target.value })
              .run();
          }}
          style={{ marginLeft: "0.5rem", border:"none" }}
        >
          {fontSizeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <DefaultRichTextToolbarContent textEditor={textEditor} />
      </DefaultRichTextToolbar>
    );
  },
};

export const textOptions = {
  tipTapConfig: {
    extensions: [...tipTapDefaultExtensions, FontFamily, FontSize, TextStyle],
  },
  addFontsFromNode(node, state, addFont) {
    state = defaultAddFontsFromNode(node, state, addFont);
    for (const mark of node.marks) {
      if (
        mark.type.name === "textStyle" &&
        mark.attrs.fontFamily &&
        mark.attrs.fontFamily !== "DEFAULT" &&
        mark.attrs.fontFamily !== state.family
      ) {
        state = { ...state, family: mark.attrs.fontFamily };
      }
    }
    const font =
      extensionFontFamilies[state.family]?.[state.style]?.[state.weight];
    if (font) addFont(font);

    return state;
  },
};
