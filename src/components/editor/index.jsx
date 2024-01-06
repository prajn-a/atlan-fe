"use client";

import { useCallback, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { bbedit } from "@uiw/codemirror-theme-bbedit";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";

import { useTheme } from "next-themes";
import EditorHeader from "./header";
import Output from "./output";

const Editor = ({ handleQueryRun, query, setQuery, output, loading }) => {
  const { theme } = useTheme();

  const onChange = useCallback(
    (value) => {
      setQuery(value);
    },
    [setQuery]
  );

  // debugging
  // console.log(query);

  return (
    <div className="w-1/2">
      {/* editor header  */}
      <EditorHeader handleQueryRun={handleQueryRun} query={query} />

      <CodeMirror
        theme={theme === "dark" ? tokyoNight : bbedit}
        value={query}
        height="280px"
        extensions={[sql()]}
        onChange={onChange}
      />

      <Output output={output} loading={loading} />
    </div>
  );
};

export default Editor;

// theme={isDark ? tokyoNight : bbedit}
