import{f as e,h as t,d as o}from"./index.7442e940.js";import{u as r}from"./useMenuSetting.c7217c66.js";import{c as g,u as a}from"./element-plus.3788f1c9.js";const{getMenuMode:S,getSplit:h,getIsSidebarType:s,getShowHeaderTrigger:i,getIsTopMenu:n}=r(),{getShowBreadCrumb:d,getShowLogo:c}=o(),u=g((()=>e.getProjectConfig.headerSetting)),w=g((()=>a(u).theme)),m=g((()=>a(u).show)),f=g((()=>a(u).fixed)),l=g((()=>a(u).bgColor)),T=g((()=>a(u).showSearch)),p=g((()=>a(u).showFullScreen)),H=g((()=>a(u).showNotice)),C=g((()=>a(S)!==t.HORIZONTAL&&a(d)&&!a(h))),M=g((()=>a(c)&&!a(s)));function I(t){e.COMMITPROJECTCONFIGSTATE({headerSetting:t})}function O(){return{setHeaderSetting:I,getHeaderSetting:u,getShowSearch:T,getHeaderTheme:w,getShowFullScreen:p,getShowNotice:H,getShowBread:C,getShowHeaderLogo:M,getShowHeader:m,getFixed:f,getHeaderBgColor:l}}export{O as u};
