import{cW as v,az as S,l as p,aA as A,u as U,r,aZ as h,j as y,aX as R,cX as j}from"./index.2ecf13ca.js";const u=v("UserProfileContext",void 0),K=({children:c})=>{const{adminClient:t}=S(),{realm:a}=p(),{addAlert:i,addError:l}=A(),{t:f}=U(),[d,P]=r.exports.useState(null),[o,g]=r.exports.useState(0),[m,e]=r.exports.useState(!1);h(()=>t.users.getProfile({realm:a}),s=>P(s),[o]);const x=async(s,n)=>{e(!0);try{return await t.users.updateProfile({...s,realm:a}),e(!1),g(o+1),i(f(n?.successMessageKey??"realm-settings:userProfileSuccess"),R.success),!0}catch(C){return e(!1),l(n?.errorMessageKey??"realm-settings:userProfileError",C),!1}};return y(u.Provider,{value:{config:d,save:x,isSaving:m},children:c})},M=()=>j(u);export{K as U,M as u};
//# sourceMappingURL=UserProfileContext.1a5ea02c.js.map