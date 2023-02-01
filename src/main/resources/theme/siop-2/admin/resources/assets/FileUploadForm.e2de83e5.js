import{u as v,r as L,h as U,F as D,j as l,q as u}from"./index.2ecf13ca.js";import{F as f}from"./FileUpload.005327fa.js";import{M as T,a as k}from"./Modal.2c72168d.js";import{a as R}from"./FormGroup.24d2e56a.js";import{C as b}from"./CodeEditor.0b7c4c70.js";const M=({id:o,onChange:s,helpText:g="common-help:helpFileUpload",unWrap:d=!1,language:C,extension:F,...t})=>{const{t:n}=v(),c={value:"",filename:"",isLoading:!1,modal:!1},[e,a]=L.exports.useState(c),m=()=>a({...e,modal:!1}),p=(r,x)=>{a({...e,filename:x.name})},i=r=>{a({...e,value:r}),s(r)},h=()=>{a({...e,modal:!0})};return U(D,{children:[e.modal&&l(T,{variant:k.small,title:n("clearFile"),isOpen:!0,onClose:m,actions:[l(u,{variant:"primary","data-testid":"clear-button",onClick:()=>{a(c),s("")},children:n("clear")},"confirm"),l(u,{"data-testid":"cancel",variant:"link",onClick:m,children:n("cancel")},"cancel")],children:n("clearFileExplain")}),d&&l(f,{id:o,...t,type:"text",value:e.value,filename:e.filename,onFileInputChange:p,onDataChange:i,onTextChange:i,onClearClick:h,onReadStarted:()=>a({...e,isLoading:!0}),onReadFinished:()=>a({...e,isLoading:!1}),isLoading:e.isLoading,dropzoneProps:{accept:{"application/text":[F]}}}),!d&&l(R,{label:n("resourceFile"),fieldId:o,helperText:n(g),children:l(f,{"data-testid":o,id:o,...t,type:"text",value:e.value,filename:e.filename,onFileInputChange:p,onDataChange:i,onTextChange:i,onClearClick:h,onReadStarted:()=>a({...e,isLoading:!0}),onReadFinished:()=>a({...e,isLoading:!1}),isLoading:e.isLoading,hideDefaultPreview:!0,children:!t.hideDefaultPreview&&l(b,{isLineNumbersVisible:!0,code:e.value,language:C,height:"128px",onChange:i,isReadOnly:!t.allowEditingUploadedText})})})]})};export{M as F};
//# sourceMappingURL=FileUploadForm.e2de83e5.js.map