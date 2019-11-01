import React from 'react';

var CloseIcon = function () {
    return (React.createElement("svg", { width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("g", null,
            React.createElement("g", { id: "svg_1" },
                React.createElement("path", { fill: "#fff", stroke: "#2e2e2e", strokeWidth: "2", strokeOpacity: "null", fillOpacity: "null", d: "m0.1848,0.22795l15.48877,15.536l-15.48877,-15.536z", id: "svg_11" }),
                React.createElement("path", { fill: "#fff", stroke: "#2e2e2e", strokeWidth: "2", strokeOpacity: "null", fillOpacity: "null", d: "m0.14162,15.81517l15.57513,-15.63844l-15.57513,15.63844z", id: "svg_12" })))));
};

var UploadIcon = function () {
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 20 20" },
        React.createElement("title", null, "upload"),
        React.createElement("path", { d: "M17 12v5H3v-5H1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5z" }),
        React.createElement("path", { d: "M15 7l-5-6-5 6h4v8h2V7h4z" })));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".index_file-input-module__3nOtM {\n  width: 300px;\n  height: 200px; }\n\n.index_btn-wrapper__1FdIL {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #2e2e2e;\n  border-radius: 15px;\n  padding: 5px; }\n  .index_btn-wrapper__1FdIL[data-disable='true'] {\n    background: #cfcfcf;\n    border-color: #adadad; }\n    .index_btn-wrapper__1FdIL[data-disable='true'] svg path {\n      stroke: #adadad; }\n  .index_btn-wrapper__1FdIL[data-disable='false'] {\n    cursor: pointer; }\n    .index_btn-wrapper__1FdIL[data-disable='false']:hover {\n      background: #e0e0e0; }\n\n.index_file-input-wrapper__2dqqC {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  border: 2px solid grey;\n  border-radius: 3px;\n  border-style: dashed; }\n\n.index_file-input-wrapper__2dqqC > input[type=\"file\"] {\n  font-size: 200px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  opacity: 0; }\n\n.index_file-input-wrapper__2dqqC > .index_btn-file-input__C9iEi {\n  display: inline-block;\n  width: inherit;\n  height: inherit;\n  background: #BBDEFB; }\n\n.index_upload-hint___R5bH div {\n  font-size: 2em;\n  margin: 0 0 0.5em 0; }\n\n.index_upload-hint___R5bH svg {\n  height: 3em;\n  width: 3em; }\n\n.index_button-row__2F2L2 {\n  display: -webkit-box;\n  display: flex;\n  overflow-x: hidden;\n  position: relative;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  width: calc(16px + 3 * 16px);\n  left: calc(300px/2 - 2 * 16px);\n  top: calc(-1 * 200px/3 + 16px/2); }\n  .index_button-row__2F2L2[data-closed='true'] {\n    width: 0px; }\n";
var style = {"file-input-module":"index_file-input-module__3nOtM","btn-wrapper":"index_btn-wrapper__1FdIL","file-input-wrapper":"index_file-input-wrapper__2dqqC","btn-file-input":"index_btn-file-input__C9iEi","upload-hint":"index_upload-hint___R5bH","button-row":"index_button-row__2F2L2","fileInputModule":"index_file-input-module__3nOtM","btnWrapper":"index_btn-wrapper__1FdIL","fileInputWrapper":"index_file-input-wrapper__2dqqC","btnFileInput":"index_btn-file-input__C9iEi","uploadHint":"index_upload-hint___R5bH","buttonRow":"index_button-row__2F2L2"};
styleInject(css);

var SimpleFileUpload = function (props) {
    var fileInput = React.useRef(null);
    var _a = React.useState(undefined), file = _a[0], setFile = _a[1];
    var handleNewFile = function (fileList) {
        var file = fileList[0];
        setFile(file);
        props.onChange(file);
    };
    var handleChange = function (event) {
        event.target.files ? handleNewFile(event.target.files) : null;
    };
    var cancelSelection = function () {
        console.log(fileInput.current);
        if (fileInput.current) {
            setFile(undefined);
            fileInput.current.value = "";
        }
    };
    return (React.createElement("div", { className: style.fileInputModule },
        React.createElement("div", { className: style.fileInputWrapper },
            React.createElement("button", { className: style.btnFileInput, disabled: !!file }, file
                ? React.createElement("div", { className: style.uploadHint },
                    React.createElement("div", null, file.name))
                : React.createElement("div", { className: style.uploadHint },
                    React.createElement("div", null, "Upload File"),
                    " ",
                    React.createElement(UploadIcon, null))),
            React.createElement("input", { ref: fileInput, type: "file", accept: props.accept ? props.accept.join(",") : "*", name: props.name || "file", multiple: props.multiple || false, disabled: !!file, onChange: handleChange })),
        React.createElement("div", { className: style.buttonRow, "data-closed": !file },
            React.createElement("div", { id: "cancel-btn" },
                React.createElement("div", { className: style.btnWrapper, "data-disable": !file, onClick: cancelSelection },
                    React.createElement(CloseIcon, null))))));
};

export default SimpleFileUpload;
//# sourceMappingURL=index.js.map
