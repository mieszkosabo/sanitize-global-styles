import { Styles } from "./types";

export const sanitize: Array<Styles> = [{
  "*,\n::before,\n::after": {
    boxSizing: "border-box",
    backgroundRepeat: "no-repeat"
  },
  "::before,\n::after": { textDecoration: "inherit", verticalAlign: "inherit" },
  html: {
    cursor: "default",
    lineHeight: 1.5,
    MozTabSize: "4",
    tabSize: 4,
    WebkitTapHighlightColor: "transparent ",
    msTextSizeAdjust: "100%",
    WebkitTextSizeAdjust: "100%",
    wordBreak: "break-word"
  },
  body: { margin: "0" },
  h1: { fontSize: "2em", margin: "0.67em 0" },
  "dl dl,\ndl ol,\ndl ul,\nol dl,\nul dl": { margin: "0" },
  "ol ol,\nol ul,\nul ol,\nul ul": { margin: "0" },
  hr: { color: "inherit", height: "0", overflow: "visible" },
  main: { display: "block" },
  "nav ol,\nnav ul": { listStyle: "none", padding: "0" },
  "nav li::before": { content: '"\\200B"' },
  pre: {
    fontFamily: "monospace, monospace",
    fontSize: "1em",
    overflow: "auto",
    msOverflowStyle: "scrollbar"
  },
  a: { backgroundColor: "transparent" },
  "abbr[title]": { textDecoration: "underline dotted" },
  "b,\nstrong": { fontWeight: "bolder" },
  "code,\nkbd,\nsamp": { fontFamily: "monospace, monospace", fontSize: "1em" },
  small: { fontSize: "80%" },
  "audio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo": { verticalAlign: "middle" },
  "audio,\nvideo": { display: "inline-block" },
  "audio:not([controls])": { display: "none", height: "0" },
  iframe: { borderStyle: "none" },
  img: { borderStyle: "none" },
  "svg:not([fill])": { fill: "currentColor" },
  "svg:not(:root)": { overflow: "hidden" },
  table: {
    borderCollapse: "collapse",
    borderColor: "inherit",
    textIndent: "0"
  },
  "button,\ninput,\nselect": { margin: "0" },
  button: { overflow: "visible", textTransform: "none" },
  'button,\n[type="button"],\n[type="reset"],\n[type="submit"]': {
    WebkitAppearance: "button"
  },
  fieldset: { border: "1px solid #a0a0a0", padding: "0.35em 0.75em 0.625em" },
  input: { overflow: "visible" },
  legend: {
    color: "inherit",
    display: "table",
    maxWidth: "100%",
    whiteSpace: "normal"
  },
  progress: { display: "inline-block", verticalAlign: "baseline" },
  select: { textTransform: "none" },
  textarea: { margin: "0", overflow: "auto", resize: "block" },
  '[type="checkbox"],\n[type="radio"]': { padding: "0" },
  '[type="search"]': { WebkitAppearance: "textfield", outlineOffset: "-2px" },
  "::-webkit-inner-spin-button,\n::-webkit-outer-spin-button": {
    height: "auto"
  },
  "::-webkit-input-placeholder": { color: "inherit", opacity: 0.54 },
  "::-webkit-search-decoration": { WebkitAppearance: "none" },
  "::-webkit-file-upload-button": {
    WebkitAppearance: "button",
    font: "inherit"
  },
  "::-moz-focus-inner": { borderStyle: "none", padding: "0" },
  ":-moz-focusring": { outline: "1px dotted ButtonText" },
  ":-moz-ui-invalid": { boxShadow: "none" },
  details: { display: "block" },
  dialog: {
    backgroundColor: "white",
    border: "solid",
    color: "black",
    display: "block",
    height: "fit-content",
    left: "0",
    margin: "auto",
    padding: "1em",
    position: "absolute",
    right: "0",
    width: "fit-content"
  },
  "dialog:not([open])": { display: "none" },
  summary: { display: "list-item" },
  canvas: { display: "inline-block" },
  template: { display: "none" },
  "a,\narea,\nbutton,\ninput,\nlabel,\nselect,\nsummary,\ntextarea,\n[tabindex]": {
    msTouchAction: "manipulation"
  },
  "[hidden]": { display: "none" },
  '[aria-busy="true"]': { cursor: "progress" },
  "[aria-controls]": { cursor: "pointer" },
  '[aria-disabled="true"],\n[disabled]': { cursor: "not-allowed" },
  '[aria-hidden="false"][hidden]': { display: "initial" },
  '[aria-hidden="false"][hidden]:not(:focus)': {
    clip: "rect(0, 0, 0, 0)",
    position: "absolute"
  }
}];
