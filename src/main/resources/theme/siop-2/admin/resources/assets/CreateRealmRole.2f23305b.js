import{u as c}from"./index.esm.68aaf060.js";import{u as d,ax as u,az as p,l as R,aA as f,j as C,cg as g,aX as A,cj as b}from"./index.2ecf13ca.js";import{R as w}from"./RoleForm.3f8b0de9.js";import"./FormAccess.7ed5d8eb.js";import"./copy-icon.06155c15.js";import"./FormGroup.24d2e56a.js";import"./HelpItem.49be9c4e.js";import"./GridItem.a22d8cac.js";import"./KeycloakTextArea.2947a089.js";import"./KeycloakTextInput.97e36976.js";import"./ViewHeader.67577dd4.js";import"./Text.441b2f8e.js";function M(){const{t}=d("roles"),s=c({mode:"onChange"}),n=u(),{adminClient:a}=p(),{realm:r}=R(),{addAlert:m,addError:i}=f();return C(w,{form:s,onSubmit:async o=>{const l={...o,name:o.name?.trim(),attributes:{}};try{await a.roles.create(l);const e=await a.roles.findOneByName({name:o.name});if(!e)throw new Error(t("common:notFound"));m(t("roleCreated"),A.success),n(b({realm:r,id:e.id,tab:"details"}))}catch(e){i("roles:roleCreateError",e)}},cancelLink:g({realm:r}),role:"manage-realm",editMode:!1})}export{M as default};
//# sourceMappingURL=CreateRealmRole.2f23305b.js.map