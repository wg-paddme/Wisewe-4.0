import{b as e,d as a}from"./index.2cb29b3d.js";import{g as t,u as s,a as r,w as o}from"./index.211e66a5.js";import{b as l}from"./index.f117b0eb.js";import{d as n,a as p,r as d,c as m,f as i,j as u,k as c,l as f,C as h}from"./element-plus.34e177e2.js";import"./useMenuSetting.36e44d26.js";import"./useAppInject.a386e3a4.js";import"./useAttrs.9d9d6b47.js";import"./isEqual.bd391a24.js";import"./_baseIsEqual.945998d2.js";import"./isObject.356ba3ed.js";import"./useHeaderSetting.7dec9ecb.js";var g=n({name:"AppTheme",props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}}},setup(n){const i=p(null),u=p(""),{getIndexStyle:c,getSeparatedStyles:f}=s(),{prefixCls:h}=e("app-theme"),{getThemeColor:g}=a(),j=d({primary:g.value}),b=m((()=>document.styleSheets.length||-1));return c().then((e=>{u.value=t(e)})),f().then((e=>{i.value=e.map((e=>({name:e.url,data:t(e.data)})))})),{prefixCls:h,getThemeColor:g,handleChange:function(e){n.event&&l(n.event,e),j.primary=e,Object.assign(j,r(e)),o(b.value,u.value,j)}}}});const j=h()(((e,a,t,s,r,o)=>{const l=i("el-color-picker");return u(),c("div",{class:`${e.prefixCls}`},[f(l,{modelValue:e.getThemeColor,"onUpdate:modelValue":a[1]||(a[1]=a=>e.getThemeColor=a),predefine:e.colorList,onChange:e.handleChange},null,8,["modelValue","predefine","onChange"])],2)}));g.render=j,g.__scopeId="data-v-4e8753fd";export default g;