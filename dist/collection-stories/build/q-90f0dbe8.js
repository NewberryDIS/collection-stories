import{j as _,g as e}from"./q-a7fc02df.js";import{b as d}from"./q-75b3b209.js";import"./q-e2e295ef.js";const g=a=>{const r=a.data.view.startsWith("http")?a.data.view:"https://collections.newberry.org/"+a.data.view,l=a.idx>3?"midnight":"rgb(var(--splash-color))";return _("div",null,{class:"pos_relative top_10px d_flex items_center justify_center flex-wrap_wrap gap_32px [&_.card]:pos_relative [&_.card]:self_flex-start [&_.card]:backdrop_blur(16px)_saturate(180%) [&_.card]:bg_rgba(17,_25,_40,_0.25) [&_.card]:rounded_12px [&_.card]:border_1px_solid_rgba(255,_255,_255,_0.125) [&_.card]:p_32px [&_.card]:filter_drop-shadow(0_30px_10px_rgba(0,0,0,0.125)) [&_.card]:d_flex [&_.card]:flex_column [&_.card]:items_stretch [&_.card]:justify_center [&_.card]:gap_16px [&_.card]:text_center [&_.card]:max-w_min(464px,_100%) [&_img]:m_auto [&_h2]:min-w_0 [&_h2]:fs_3rem [&_h2]:leading_3rem [&_h2]:text_rgb(var(--midnight)) [&_h2]:font_900 [&_h2]:text-shadow_0_0_10px_rgb(var(--splash-color)),_0_0_20px_rgb(var(--splash-color)),_0_0_40px_rgb(var(--splash-color)),_0_0_80px_rgb(var(--splash-color)) [&_h2]:[&.flame]:text_rgb(var(--flame)) [&_p]:fs_lg [&_p]:min-w_0 [&_p]:w_100% [&_p]:text_center [&_p]:tracking_2px [&_.btn-group]:w_100% [&_.btn-group]:d_flex [&_.btn-group]:items_center [&_.btn-group]:gap_8px [&_.btn-group]:[&_a]:rounded_4px [&_.btn-group]:[&_a]:flex_1 [&_.btn-group]:[&_a]:font_styrene [&_.btn-group]:[&_a]:bg_rgb(var(--bg-color-1)) [&_.btn-group]:[&_a]:text_rgb(var(--fg-color-1)) [&_.btn-group]:[&_a]:border_1px_solid_rgba(var(--fg-color-1),_0.4) [&_.btn-group]:[&_a]:transition_200ms [&_.btn-group]:[&_a:hover]:border_1px_solid_rgb(var(--fg-color-1)) [&_.disabled]:cursor_not-allowed [&_.disabled]:opacity_0.5 [&_.disabled]:bg_rgba(var(--bg-color-1),_0.5) [&_.text-section]:max-w_100% [&_.text-section]:d_flex [&_.text-section]:flex_column [&_.text-section]:items_center [&_.text-section]:justify_center [&_.text-section]:gap_16px"},_("div",null,{class:"card"},[_("img",{src:a.data.image.altfn?d+a.data.image.altfn:`https://collections.newberry.org/IIIF3/Image/${a.data.image.ctxid}/full/,400/0/default.jpg`},{height:"400",style:e(t=>`width: ${t.data.image.height===400?t.data.image.width:Math.round(t.data.image.width/t.data.image.height*400)}px`,[a]),width:e(t=>t.data.image.height===400?t.data.image.width:Math.round(t.data.image.width/t.data.image.height*400),[a])},null,3,null),_("div",null,{class:"text-section"},[_("h2",{class:l},null,e(t=>t.data.title,[a]),3,null),_("p",null,{dangerouslySetInnerHTML:e(t=>t.data.blurb,[a])},null,3,null),_("div",null,{class:"btn-group"},[_("a",{href:r},{target:"_blank"},["View"," "],3,null),_("a",null,{class:e(t=>t.data.about.endsWith("]")?"disabled":"",[a]),href:e(t=>t.data.about.endsWith("]")?"#":t.data.about,[a]),target:"_blank"},"About",3,null)],1,null)],1,null)],1,null),1,"gl_0")};export{g as s_EKMoyOV0OMA};