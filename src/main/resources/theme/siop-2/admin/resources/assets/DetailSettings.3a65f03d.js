import{u as I,r as y,h as m,F as x,j as e,az as U,aZ as q,aA as be,ax as Ce,l as xe,g as Se,ad as Z,aX as E,cw as Ie,cx as X,K as Te,G as we,q as K,P as ke,cy as Q,b3 as W,n as Me,ao as Re,cz as Fe}from"./index.7cbfb18a.js";import{a as F,C as S,u as De,F as Le}from"./index.esm.1e7ace95.js";import{u as _}from"./ConfirmDialog.4dc691c5.js";import{F as V}from"./FormAccess.3a7ea209.js";import{L as Oe}from"./ListEmptyState.fef0510e.js";import{P as Pe}from"./PermissionTab.418d47cd.js";import{R as Ae,u as Ne}from"./RoutableTabs.58e36a71.js";import{S as Ee}from"./ScrollForm.9cb55091.js";import{K as Ke}from"./KeycloakDataTable.ae870e97.js";import{V as Ve}from"./ViewHeader.083cd951.js";import{u as ne}from"./useParams.3f76335e.js";import{G as He,E as Be}from"./GeneralSettings.3b431b74.js";import{H as b,c as _e}from"./HelpItem.719382e8.js";import{T as G,S as u,F as Ge}from"./discovery-settings.6bf57500.js";import{a as C,F as ie,A as Ue}from"./FormGroup.60c77f60.js";import{S as D,b as L,a as k}from"./Select.fbe867d5.js";import{S as qe,D as ze}from"./SamlGeneralSettings.25e6527b.js";import{O as je,D as $e,a as Je}from"./OIDCGeneralSettings.2c10f679.js";import{E as Ze}from"./ExpandableSection.0b0d95f4.js";import{N as Xe}from"./NumberInput.619d2bbb.js";import{M as Y}from"./MultiLineInput.091fd21a.js";import{T as H,a as B}from"./Tabs.fae3d04f.js";import"./Modal.11970fe7.js";import"./copy-icon.dbf95270.js";import"./GridItem.63e5e367.js";import"./TableToolbar.51ae2a5f.js";import"./EmptyStateSecondaryActions.511adeb0.js";import"./EmptyStateBody.1533f3a6.js";import"./plus-circle-icon.aa8a939a.js";import"./useLocaleSort.b8a659bb.js";import"./Trans.a8d0351e.js";import"./Card.37028a42.js";import"./CardTitle.d8222cf8.js";import"./CardBody.4fff68f7.js";import"./Td.1e0c90e7.js";import"./star-icon.a6efdd26.js";import"./check.51c67984.js";import"./grip-vertical-icon.7e109111.js";import"./Checkbox.7d63c785.js";import"./FormPanel.95e4e303.js";import"./CardHeader.b7b31472.js";import"./Text.28ece842.js";import"./KeycloakTextInput.9afb01cd.js";import"./DisplayOrder.b6d3afed.js";import"./ClientIdSecret.07ccc601.js";import"./PasswordInput.aa539188.js";import"./plus-icon.f70ae4c8.js";import"./minus-circle-icon.c093f419.js";import"./MenuList.22670a64.js";const ee=({field:t,label:o,defaultValue:l})=>{const{t:d}=I("identity-providers"),{control:c}=F(),{adminClient:r}=U(),[a,n]=y.exports.useState(),[p,g]=y.exports.useState(!1);return q(()=>r.authenticationManagement.getFlows(),h=>n(h.filter(s=>s.providerId==="basic-flow")),[]),e(C,{label:d(o),labelIcon:e(b,{helpText:`identity-providers-help:${o}`,fieldLabelId:`identity-providers:${o}`}),fieldId:o,children:e(S,{name:t,defaultValue:l,control:c,render:({field:h})=>e(D,{toggleId:o,required:!0,onToggle:()=>g(!p),onSelect:(s,T)=>{h.onChange(T),g(!1)},selections:h.value||d("common:none"),variant:L.single,"aria-label":d(o),isOpen:p,children:[...l===""?[e(k,{value:"",children:d("common:none")},"empty")]:[],...a?.map(s=>e(k,{selected:s.alias===h.value,value:s.alias,children:s.alias},s.id))||[]]})})})},te=["import","legacy","force"],Qe=({isOIDC:t,isSAML:o})=>{const{t:l}=I("identity-providers"),{control:d}=F(),[c,r]=y.exports.useState(!1);return m(x,{children:[!t&&!o&&e(G,{field:"config.defaultScope",label:"scopes"}),e(u,{field:"storeToken",label:"storeTokens",fieldType:"boolean"}),(o||t)&&e(u,{field:"addReadTokenRoleOnCreate",label:"storedTokensReadable",fieldType:"boolean"}),!t&&!o&&m(x,{children:[e(u,{field:"config.acceptsPromptNoneForwardFromClient",label:"acceptsPromptNone"}),e(u,{field:"config.disableUserInfo",label:"disableUserInfo"})]}),e(u,{field:"trustEmail",label:"trustEmail",fieldType:"boolean"}),e(u,{field:"linkOnly",label:"accountLinkingOnly",fieldType:"boolean"}),e(u,{field:"config.hideOnLoginPage",label:"hideOnLoginPage"}),e(ee,{field:"firstBrokerLoginFlowAlias",label:"firstBrokerLoginFlowAlias",defaultValue:"fist broker login"}),e(ee,{field:"postBrokerLoginFlowAlias",label:"postBrokerLoginFlowAlias",defaultValue:""}),e(C,{className:"pf-u-pb-3xl",label:l("syncMode"),labelIcon:e(b,{helpText:"identity-providers-help:syncMode",fieldLabelId:"identity-providers:syncMode"}),fieldId:"syncMode",children:e(S,{name:"config.syncMode",defaultValue:te[0].toUpperCase(),control:d,render:({field:a})=>e(D,{toggleId:"syncMode",required:!0,direction:"up",onToggle:()=>r(!c),onSelect:(n,p)=>{a.onChange(p),r(!1)},selections:l(`syncModes.${a.value.toLowerCase()}`),variant:L.single,"aria-label":l("syncMode"),isOpen:c,children:te.map(n=>e(k,{selected:n===a.value,value:n.toUpperCase(),children:l(`syncModes.${n}`)},n))})})})]})},We={unspecified:"",none:"none",consent:"consent",login:"login",select_account:"select_account"},Ye=()=>{const{t}=I("identity-providers"),{control:o}=F(),[l,d]=y.exports.useState(!1),[c,r]=y.exports.useState(!1);return e(Ze,{toggleText:t("advanced"),onToggle:()=>d(!l),isExpanded:l,children:m(ie,{isHorizontal:!0,children:[e(u,{label:"passLoginHint",field:"config.loginHint"}),e(u,{label:"passMaxAge",field:"config.passMaxAge"}),e(u,{label:"passCurrentLocale",field:"config.uiLocales"}),e(u,{field:"config.backchannelSupported",label:"backchannelLogout"}),e(u,{field:"config.disableUserInfo",label:"disableUserInfo"}),e(G,{field:"config.defaultScope",label:"scopes"}),e(Ge,{label:"prompt",children:e(S,{name:"config.prompt",defaultValue:"",control:o,render:({field:a})=>e(D,{toggleId:"prompt",required:!0,onToggle:()=>r(!c),onSelect:(n,p)=>{a.onChange(p),r(!1)},selections:a.value||t("prompts.unspecified"),variant:L.single,"aria-label":t("prompt"),isOpen:c,children:Object.entries(We).map(([n,p])=>e(k,{selected:p===a.value,value:p,children:t(`prompts.${n}`)},n))})})}),e(u,{field:"config.acceptsPromptNoneForwardFromClient",label:"acceptsPromptNone"}),e(C,{label:t("allowedClockSkew"),labelIcon:e(b,{helpText:"identity-providers-help:allowedClockSkew",fieldLabelId:"identity-providers:allowedClockSkew"}),fieldId:"allowedClockSkew",children:e(S,{name:"config.allowedClockSkew",defaultValue:0,control:o,render:({field:a})=>{const n=Number(a.value);return e(Xe,{"data-testid":"allowedClockSkew",inputName:"allowedClockSkew",min:0,max:2147483,value:n,readOnly:!0,onPlus:()=>a.onChange(n+1),onMinus:()=>a.onChange(n-1),onChange:p=>{const g=Number(p.target.value);a.onChange(g<0?0:g)}})}})}),e(G,{field:"config.forwardParameters",label:"forwardParameters"})]})})},oe=["exact","minimum","maximum","better"],et=()=>{const{t}=I("identity-providers"),{control:o}=F(),[l,d]=y.exports.useState(!1);return m(x,{children:[e(C,{label:t("comparison"),labelIcon:e(b,{helpText:"identity-providers-help:comparison",fieldLabelId:"identity-providers:comparison"}),fieldId:"comparison",children:e(S,{name:"config.authnContextComparisonType",defaultValue:oe[0],control:o,render:({field:c})=>e(D,{toggleId:"comparison",required:!0,direction:"up",onToggle:r=>d(r),onSelect:(r,a)=>{c.onChange(a.toString()),d(!1)},selections:c.value,variant:L.single,"aria-label":t("comparison"),isOpen:l,children:oe.map(r=>e(k,{selected:r===c.value,value:r,children:t(r)},r))})})}),e(C,{label:t("authnContextClassRefs"),fieldId:"kc-authnContextClassRefs",labelIcon:e(b,{helpText:"identity-providers-help:authnContextClassRefs",fieldLabelId:"authnContextClassRefs"}),children:e(Y,{name:"config.authnContextClassRefs","aria-label":t("identify-providers:authnContextClassRefs"),addButtonLabel:"identity-providers:addAuthnContextClassRef","data-testid":"classref-field"})}),e(C,{label:t("authnContextDeclRefs"),fieldId:"kc-authnContextDeclRefs",labelIcon:e(b,{helpText:"identity-providers-help:authnContextDeclRefs",fieldLabelId:"authnContextDeclRefs"}),children:e(Y,{name:"config.authnContextDeclRefs","aria-label":t("identify-providers:authnContextDeclRefs"),addButtonLabel:"identity-providers:addAuthnContextDeclRef","data-testid":"declref-field"})})]})},tt=({onChange:t,value:o,save:l,toggleDeleteDialog:d})=>{const{t:c}=I("identity-providers"),{alias:r}=ne(),{adminClient:a}=U(),[n,p]=y.exports.useState();q(()=>a.identityProviders.findOne({alias:r}),s=>{if(!s)throw new Error(c("common:notFound"));p(s)},[]);const[g,h]=_({titleKey:"identity-providers:disableProvider",messageKey:c("disableConfirm",{provider:r}),continueButtonLabel:"common:disable",onConfirm:()=>{t(!o),l()}});return m(x,{children:[e(h,{}),e(Ve,{titleKey:Me(n?n.displayName?n.displayName:n.providerId:""),divider:!1,dropdownItems:[e(Re,{onClick:()=>d(),children:c("common:delete")},"delete")],isEnabled:o,onToggle:s=>{s?(t(s),l()):g()}})]})};function Wt(){const{t}=I("identity-providers"),{alias:o,providerId:l}=ne(),d=De(),{handleSubmit:c,getValues:r,reset:a}=d,[n,p]=y.exports.useState(),[g,h]=y.exports.useState(),{adminClient:s}=U(),{addAlert:T,addError:O}=be(),P=Ce(),{realm:v}=xe(),[z,ae]=y.exports.useState(0),{profileInfo:re}=Se(),se=()=>ae(z+1),le=({name:i,mapperId:f})=>e(W,{to:Fe({realm:v,alias:o,providerId:n?.providerId,id:f}),children:i});q(()=>s.identityProviders.findOne({alias:o}),i=>{if(!i)throw new Error(t("common:notFound"));a(i),p(i),i.config.authnContextClassRefs&&d.setValue("config.authnContextClassRefs",JSON.parse(i.config?.authnContextClassRefs)),i.config.authnContextDeclRefs&&d.setValue("config.authnContextDeclRefs",JSON.parse(i.config?.authnContextDeclRefs))},[]);const j=i=>X({realm:v,alias:o,providerId:l,tab:i}),A=i=>Ne(j(i)),de=A("settings"),ce=A("mappers"),pe=A("permissions"),M=async i=>{const f=i||r();f.config?.authnContextClassRefs&&(f.config.authnContextClassRefs=JSON.stringify(f.config.authnContextClassRefs)),f.config?.authnContextDeclRefs&&(f.config.authnContextDeclRefs=JSON.stringify(f.config.authnContextDeclRefs));try{await s.identityProviders.update({alias:o},{...f,config:{...n?.config,...f.config},alias:o,providerId:l}),T(t("updateSuccess"),E.success)}catch($){O("identity-providers:updateError",$)}},[me,ue]=_({titleKey:"identity-providers:deleteProvider",messageKey:t("identity-providers:deleteConfirm",{provider:o}),continueButtonLabel:"common:delete",continueButtonVariant:Z.danger,onConfirm:async()=>{try{await s.identityProviders.del({alias:o}),T(t("deletedSuccess"),E.success),P(Ie({realm:v}))}catch(i){O("identity-providers:deleteErrorError",i)}}}),[fe,ge]=_({titleKey:"identity-providers:deleteProviderMapper",messageKey:t("identity-providers:deleteMapperConfirm",{mapper:g?.name}),continueButtonLabel:"common:delete",continueButtonVariant:Z.danger,onConfirm:async()=>{try{await s.identityProviders.delMapper({alias:o,id:g?.mapperId}),T(t("deleteMapperSuccess"),E.success),se(),P(X({providerId:l,alias:o,tab:"mappers",realm:v}))}catch(i){O("identity-providers:deleteErrorError",i)}}});if(!n)return e(Te,{});const R=n.providerId.includes("oidc"),w=n.providerId.includes("saml"),ye=async()=>{const[i,f]=await Promise.all([s.identityProviders.findMappers({alias:o}),s.identityProviders.findMapperTypes({alias:o})]);return i.map(N=>{const J=Object.values(f).find(ve=>N.identityProviderMapper===ve.id);return{...J,name:N.name,type:J?.name,mapperId:N.id}})},he=[{title:t("generalSettings"),panel:m(V,{role:"manage-identity-providers",isHorizontal:!0,onSubmit:c(M),children:[!R&&!w&&m(x,{children:[e(He,{create:!1,id:o}),e(Be,{providerId:o})]}),R&&e(je,{id:o}),w&&e(qe,{id:o,isAliasReadonly:!0})]})},{title:t("oidcSettings"),isHidden:!R,panel:m(x,{children:[e($e,{readOnly:!1}),m(ie,{isHorizontal:!0,className:"pf-u-py-lg",children:[e(we,{}),e(Je,{create:!1})]}),e(Ye,{})]})},{title:t("samlSettings"),isHidden:!w,panel:e(ze,{readOnly:!1})},{title:t("reqAuthnConstraints"),isHidden:!w,panel:e(V,{role:"manage-identity-providers",isHorizontal:!0,onSubmit:c(M),children:e(et,{})})},{title:t("advancedSettings"),panel:m(V,{role:"manage-identity-providers",isHorizontal:!0,onSubmit:c(M),children:[e(Qe,{isOIDC:R,isSAML:w}),m(Ue,{className:"keycloak__form_actions",children:[e(K,{"data-testid":"save",type:"submit",children:t("common:save")}),e(K,{"data-testid":"revert",variant:"link",onClick:()=>{a()},children:t("common:revert")})]})]})}];return m(Le,{...d,children:[e(ue,{}),e(ge,{}),e(S,{name:"enabled",control:d.control,defaultValue:!0,render:({field:i})=>e(tt,{value:i.value||!1,onChange:i.onChange,save:M,toggleDeleteDialog:me})}),e(ke,{variant:"light",className:"pf-u-p-0",children:m(Ae,{isBox:!0,defaultLocation:j("settings"),children:[e(H,{id:"settings",title:e(B,{children:t("common:settings")}),...de,children:e(Ee,{className:"pf-u-px-lg",sections:he})}),e(H,{id:"mappers","data-testid":"mappers-tab",title:e(B,{children:t("common:mappers")}),...ce,children:e(Ke,{emptyState:e(Oe,{message:t("identity-providers:noMappers"),instructions:t("identity-providers:noMappersInstructions"),primaryActionText:t("identity-providers:addMapper"),onPrimaryAction:()=>P(Q({realm:v,alias:o,providerId:n.providerId,tab:"mappers"}))}),loader:ye,ariaLabelKey:"identity-providers:mappersList",searchPlaceholderKey:"identity-providers:searchForMapper",toolbarItem:e(_e,{children:e(K,{id:"add-mapper-button",component:i=>e(W,{...i,to:Q({realm:v,alias:o,providerId:n.providerId,tab:"mappers"})}),"data-testid":"addMapper",children:t("addMapper")})}),columns:[{name:"name",displayKey:"common:name",cellRenderer:le},{name:"category",displayKey:"common:category"},{name:"type",displayKey:"common:type"}],actions:[{title:t("common:delete"),onRowClick:i=>{h(i),fe()}}]},z)}),!re?.disabledFeatures?.includes("ADMIN_FINE_GRAINED_AUTHZ")&&e(H,{id:"permissions","data-testid":"permissionsTab",title:e(B,{children:t("common:permissions")}),...pe,children:e(Pe,{id:o,type:"identityProviders"})})]})})]})}export{Wt as default};
//# sourceMappingURL=DetailSettings.3a65f03d.js.map