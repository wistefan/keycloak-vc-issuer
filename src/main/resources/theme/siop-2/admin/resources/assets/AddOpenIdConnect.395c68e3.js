import{a as S,u as k,F as A}from"./index.esm.68aaf060.js";import{u as h,az as g,l as I,h as m,F as b,j as e,b5 as C,b6 as E,ax as x,V as D,aA as O,P,q as v,b3 as T,cw as w,aX as V,cx as j}from"./index.2ecf13ca.js";import{F as H}from"./FormAccess.7ed5d8eb.js";import{V as U}from"./ViewHeader.67577dd4.js";import{D as z,O as L,a as $}from"./OIDCGeneralSettings.d4eb7881.js";import{T as G,H as J}from"./HelpItem.49be9c4e.js";import{J as K}from"./JsonFileUpload.060aa7cc.js";import{D as N}from"./DiscoveryEndpointField.efc7fb86.js";import{a as B,A as _}from"./FormGroup.24d2e56a.js";import"./copy-icon.06155c15.js";import"./GridItem.a22d8cac.js";import"./Text.441b2f8e.js";import"./KeycloakTextInput.97e36976.js";import"./discovery-settings.c3dba4a4.js";import"./ExpandableSection.5fb39a3c.js";import"./Select.5d6f6214.js";import"./check.51c67984.js";import"./star-icon.648ddb2a.js";import"./ClientIdSecret.8c418c24.js";import"./PasswordInput.4caf2dff.js";import"./DisplayOrder.787c02d9.js";import"./FileUploadForm.e2de83e5.js";import"./FileUpload.005327fa.js";import"./CodeEditor.0b7c4c70.js";import"./EmptyStateBody.25bf6e38.js";import"./EmptyStateSecondaryActions.3ed74a6a.js";import"./Modal.2c72168d.js";const q=()=>{const{t:i}=h("identity-providers"),p="oidc",{adminClient:c}=g(),{realm:l}=I(),{setValue:s,setError:n,clearErrors:u,formState:{errors:d}}=S(),y=r=>{Object.keys(r).map(t=>s(`config.${t}`,r[t]))},f=async r=>{if(u("discoveryError"),!r)return;const t=new FormData;t.append("providerId",p),t.append("file",new Blob([JSON.stringify(r)]));try{const o=await fetch(`${C(c.baseUrl)}admin/realms/${l}/identity-provider/import-config`,{method:"POST",body:t,headers:E(await c.getAccessToken())});if(o.ok){const a=await o.json();y(a)}else n("discoveryError",{type:"manual",message:o.statusText})}catch(o){n("discoveryError",{type:"manual",message:o.message})}};return m(b,{children:[e(G,{headingLevel:"h4",size:"xl",className:"kc-form-panel__title",children:i("oidcSettings")}),e(N,{id:"oidc",fileUpload:e(B,{label:i("importConfig"),fieldId:"kc-import-config",labelIcon:e(J,{helpText:"identity-providers-help:importConfig",fieldLabelId:"identity-providers:importConfig"}),validated:d.discoveryError?"error":"default",helperTextInvalid:d.discoveryError?.message,children:e(K,{id:"kc-import-config",helpText:"identity=providers-help:jsonFileUpload",hideDefaultPreview:!0,unWrap:!0,validated:d.discoveryError?"error":"default",onChange:r=>f(r)})}),children:r=>e(z,{readOnly:r})})]})};function be(){const{t:i}=h("identity-providers"),p=x(),{pathname:c}=D(),l=c.includes("keycloak-oidc"),s=`${l?"keycloak-":""}oidc`,n=k({defaultValues:{alias:s}}),{handleSubmit:u,formState:{isDirty:d}}=n,{adminClient:y}=g(),{addAlert:f,addError:r}=O(),{realm:t}=I(),o=async a=>{delete a.discoveryEndpoint;try{await y.identityProviders.create({...a,providerId:s}),f(i("createSuccess"),V.success),p(j({realm:t,providerId:s,alias:a.alias,tab:"settings"}))}catch(F){r("identity-providers:createError",F)}};return m(b,{children:[e(U,{titleKey:i(l?"addKeycloakOpenIdProvider":"addOpenIdProvider")}),e(P,{variant:"light",children:e(A,{...n,children:m(H,{role:"manage-identity-providers",isHorizontal:!0,onSubmit:u(o),children:[e(L,{id:s}),e(q,{}),e($,{}),m(_,{children:[e(v,{isDisabled:!d,variant:"primary",type:"submit","data-testid":"createProvider",children:i("common:add")}),e(v,{variant:"link","data-testid":"cancel",component:a=>e(T,{...a,to:w({realm:t})}),children:i("common:cancel")})]})]})})})]})}export{be as default};
//# sourceMappingURL=AddOpenIdConnect.395c68e3.js.map