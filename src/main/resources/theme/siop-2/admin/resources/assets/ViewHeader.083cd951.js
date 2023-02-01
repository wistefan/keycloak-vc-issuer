import{_ as C,j as e,p as A,h as r,au as B,u as M,R as W,r as i,F as z,P as J,T as D,ah as Q,aB as X,am as L,ap as Y,aG as N,q as Z,G as y}from"./index.7cbfb18a.js";import{a as U,b as K,c as b,H as ee}from"./HelpItem.719382e8.js";import{T as O}from"./Text.28ece842.js";const I={level:"pf-l-level",modifiers:{gutter:"pf-m-gutter"}},h=n=>{var{hasGutter:a,className:s="",children:l=null}=n,p=C(n,["hasGutter","className","children"]);return e("div",{...Object.assign({},p,{className:A(I.level,a&&I.modifiers.gutter,s)}),children:l})};h.displayName="Level";const d=n=>{var{children:a=null}=n,s=C(n,["children"]);return e("div",{...Object.assign({},s),children:a})};d.displayName="LevelItem";const F=({title:n,href:a,isInline:s,...l})=>r("a",{href:a,target:"_blank",rel:"noreferrer noopener",className:s?"pf-m-link pf-m-inline":"",...l,children:[n||a," ",a?.startsWith("http")&&e(B,{})]}),re=()=>n=>n?e(F,{href:n.toString()}):void 0,ae=({actionsDropdownId:n,className:a,titleKey:s,badges:l,isDropdownDisabled:p,subKey:c,helpUrl:u,dropdownItems:f,lowerDropdownMenuTitle:_,lowerDropdownItems:g,lowerButton:m,isEnabled:j=!0,onToggle:v,divider:G=!0,helpTextKey:x,isReadOnly:H=!1})=>{const{t:o,i18n:S}=M(),{enabled:V}=W(),[w,E]=i.exports.useState(!1),[T,P]=i.exports.useState(!1),$=()=>{E(!w)},R=()=>{P(!T)},k=t=>t.replace(/\s/g,"-");return r(z,{children:[r(J,{variant:"light",children:[r(h,{hasGutter:!0,children:[e(d,{children:r(h,{children:[e(d,{children:e(D,{className:"pf-u-mr-sm",children:e(O,{className:a,component:"h1",children:S.exists(s)?o(s):s})})}),l&&e(d,{children:l.map((t,q)=>r(i.exports.Fragment,{children:[!i.exports.isValidElement(t.text)&&r(i.exports.Fragment,{children:[e(Q,{"data-testid":t.id,isRead:t.readonly,children:t.text})," "]},t.text),i.exports.isValidElement(t.text)&&t.text," "]},q))})]})}),e(d,{children:e(U,{className:"pf-u-p-0",children:r(K,{children:[v&&r(b,{children:[e(X,{id:`${k(s)}-switch`,"data-testid":`${s}-switch`,label:o("common:enabled"),labelOff:o("common:disabled"),className:"pf-u-mr-lg",isDisabled:H,isChecked:j,"aria-label":o("common:enabled"),onChange:t=>{v(t)}}),x&&e(ee,{helpText:o(x),fieldLabelId:`${k(s)}-switch`})]}),f&&e(b,{children:e(L,{position:Y.right,toggle:e(N,{isDisabled:p,id:n,onToggle:$,children:o("common:action")}),isOpen:w,dropdownItems:f,"data-testid":"action-dropdown"})})]})})})]}),V&&e(D,{id:"view-header-subkey",children:r(O,{children:[i.exports.isValidElement(c)?c:c?o(c):"",u&&e(F,{title:o("common:learnMore"),href:u,isInline:!0,className:"pf-u-ml-md"})]})}),g&&e(L,{className:"keycloak__user-federation__dropdown",toggle:e(N,{onToggle:()=>R(),isPrimary:!0,id:"ufToggleId",children:o(_)}),isOpen:T,dropdownItems:g}),m&&e(Z,{variant:m.variant,onClick:m.onClick,"data-testid":"viewHeader-lower-btn",children:m.lowerButtonTitle})]}),G&&e(y,{component:"div"})]})};export{F,ae as V,re as f};
//# sourceMappingURL=ViewHeader.083cd951.js.map