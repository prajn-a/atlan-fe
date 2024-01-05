"use client";

import { useState, useCallback, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { bbedit } from "@uiw/codemirror-theme-bbedit";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";

import { useTheme } from "next-themes";
import EditorHeader from "./header";
import Output from "./output";

const Editor = () => {
  const { theme } = useTheme();

  const [value, setValue] = useState("console.log('hello world!');");

  const onChange = useCallback((val, viewUpdate) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  return (
    <div className="w-1/2">
      {/* editor header  */}
      <EditorHeader />

      <CodeMirror
        theme={theme === "dark" ? tokyoNight : bbedit}
        value={value}
        height="280px"
        extensions={[sql()]}
        onChange={onChange}
      />

      <Output />
    </div>
  );
};

export default Editor;

// theme={isDark ? tokyoNight : bbedit}
