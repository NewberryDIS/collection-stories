import{j as t,g as l}from"./q-a9dc43ae.js";import{b as n}from"./q-5cdc7a24.js";import"./q-e2e295ef.js";const s=_=>{const e=_.data.view.startsWith("http")?_.data.view:"https://collections.newberry.org/"+_.data.view,i=_.idx>3?"midnight":"rgb(var(--splash-color))";return t("div",null,{class:"pos_relative top_10px d_flex items_center justify_center flex-wrap_wrap gap_32px [&_.card]:pos_relative [&_.card]:self_flex-start [&_.card]:backdrop_blur(16px)_saturate(180%) [&_.card]:bg_rgba(17,_25,_40,_0.25) [&_.card]:rounded_12px [&_.card]:border_1px_solid_rgba(255,_255,_255,_0.125) [&_.card]:p_32px [&_.card]:filter_drop-shadow(0_30px_10px_rgba(0,0,0,0.125)) [&_.card]:d_flex [&_.card]:flex_column [&_.card]:items_stretch [&_.card]:justify_center [&_.card]:gap_16px [&_.card]:text_center [&_.card]:max-w_min(464px,_100%) [&_img]:m_auto [&_h2]:min-w_0 [&_h2]:fs_3rem [&_h2]:leading_3rem [&_h2]:text_rgb(var(--midnight)) [&_h2]:font_900 [&_h2]:text-shadow_0_0_10px_rgb(var(--splash-color)),_0_0_20px_rgb(var(--splash-color)),_0_0_40px_rgb(var(--splash-color)),_0_0_80px_rgb(var(--splash-color)) [&_h2]:[&.flame]:text_rgb(var(--flame)) [&_p]:fs_lg [&_p]:min-w_0 [&_p]:w_100% [&_p]:text_center [&_p]:tracking_2px [&_.btn-group]:w_100% [&_.btn-group]:d_flex [&_.btn-group]:items_center [&_.btn-group]:gap_8px [&_.btn-group]:[&_a,_.disabled]:rounded_4px [&_.btn-group]:[&_a,_.disabled]:flex_1 [&_.btn-group]:[&_a,_.disabled]:font_styrene [&_.btn-group]:[&_a,_.disabled]:bg_rgb(var(--bg-color-1)) [&_.btn-group]:[&_a,_.disabled]:text_rgb(var(--fg-color-1)) [&_.btn-group]:[&_a,_.disabled]:border_1px_solid_rgba(var(--fg-color-1),_0.4) [&_.btn-group]:[&_a,_.disabled]:transition_200ms [&_.btn-group]:[&_a:hover]:border_1px_solid_rgb(var(--fg-color-1)) [&_.disabled]:cursor_default [&_.disabled]:opacity_0.5 [&_.disabled]:pos_relative [&_.disabled]:bg_rgba(var(--bg-color-1),_0.5) [&_.disabled]:[&:hover_.about-link]:opacity_0.0001 [&_.disabled]:[&:hover_.coming-soon-link]:opacity_0.9999 [&_.coming-soon-link]:pos_absolute [&_.coming-soon-link]:left_0 [&_.coming-soon-link]:top_0 [&_.coming-soon-link]:right_0 [&_.coming-soon-link]:bottom_0 [&_.coming-soon-link]:opacity_0.0001 [&_.coming-soon-link,_.about-link]:transition_200ms [&_.text-section]:max-w_100% [&_.text-section]:d_flex [&_.text-section]:flex_column [&_.text-section]:items_center [&_.text-section]:justify_center [&_.text-section]:gap_16px"},t("div",null,{class:"card"},[t("img",{src:_.data.image.altfn?n+_.data.image.altfn:`https://collections.newberry.org/IIIF3/Image/${_.data.image.ctxid}/full/,400/0/default.jpg`},{height:"400",style:l(a=>`width: ${a.data.image.height===400?a.data.image.width:Math.round(a.data.image.width/a.data.image.height*400)}px`,[_]),width:l(a=>a.data.image.height===400?a.data.image.width:Math.round(a.data.image.width/a.data.image.height*400),[_])},null,3,null),t("div",null,{class:"text-section",id:"card-title"},[t("h2",{class:i},null,l(a=>a.data.title,[_]),3,null),t("p",null,{dangerouslySetInnerHTML:l(a=>a.data.blurb,[_])},null,3,null),t("div",null,{class:"btn-group"},[t("a",{href:e},{"aria-label":l(a=>`View the ${a.data.title}`,[_]),target:"_blank"},["View"," "],3,null),_.data.about.endsWith("]")?t("div",null,{class:"disabled"},[t("span",null,{class:"about-link"},"About",3,null),t("span",null,{class:"coming-soon-link"},"Coming soon!",3,null)],3,"gl_0"):t("a",null,{"aria-label":l(a=>`More about the ${a.data.title}`,[_]),href:l(a=>a.data.about,[_]),target:"_blank"},t("span",null,{class:"about-link"},"About",3,null),3,null)],1,null)],1,null)],1,null),1,"gl_1")};export{s as s_EKMoyOV0OMA};