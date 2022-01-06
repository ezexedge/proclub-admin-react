(this["webpackJsonptokyo-react-admin-dashboard"]=this["webpackJsonptokyo-react-admin-dashboard"]||[]).push([[141],{2140:function(e,t,o){"use strict";o.r(t);var n=o(742),r=o(822),a=o(438),s=o(302),c=o(887),i=o(2183),h=o(1116),l=o.n(h),d=o(0);t.default=function(){return Object(d.jsx)(s.a,{title:"Themes Customization - Tokyo React Admin Dashboard",children:Object(d.jsx)(n.a,{maxWidth:!1,children:Object(d.jsxs)(r.a,{container:!0,spacing:3,children:[Object(d.jsx)(r.a,{item:!0,xs:12,children:Object(d.jsx)(c.a,{heading:"Themes Customization",subheading:""})}),Object(d.jsxs)(r.a,{item:!0,xs:12,children:[Object(d.jsx)(a.a,{paragraph:!0,children:"Tokyo React Admin Dashboard come with 5 predefined color schemes."}),Object(d.jsxs)(a.a,{paragraph:!0,children:["Three of them are 'light' color schemes: ",Object(d.jsx)("code",{children:"Pure Light"}),","," ",Object(d.jsx)("code",{children:"Light Bloom"})," and ",Object(d.jsx)("code",{children:"Grey Goose"}),". The other two are 'dark' color schemes: ",Object(d.jsx)("code",{children:"Nebula Fighter"})," and"," ",Object(d.jsx)("code",{children:"Dark Spaces"}),"."]}),Object(d.jsx)(a.a,{paragraph:!0,children:"If you're looking to use only a single color scheme, then take a look at the starter kit we've bundled with the downloaded zip archive."}),Object(d.jsx)("br",{}),Object(d.jsxs)(a.a,{paragraph:!0,children:["You can find all the theme logic inside the"," ",Object(d.jsx)("code",{children:"/src/theme/"})," folder. Switch between themes using the top right 'cog' menu."]}),Object(d.jsx)(i.a,{showLineNumbers:!0,wrapLines:!0,language:"javascript",style:l.a,children:"\ud83d\udce6theme\n  \u2523 \ud83d\udcc2schemes\n  \u2503 \u2523 \ud83d\udcdcDarkSpacesTheme.ts\n  \u2503 \u2523 \ud83d\udcdcGreyGooseTheme.ts\n  \u2503 \u2523 \ud83d\udcdcLightBloomTheme.ts\n  \u2503 \u2523 \ud83d\udcdcNebulaFighterTheme.ts\n  \u2503 \u2517 \ud83d\udcdcPureLightTheme.ts\n  \u2523 \ud83d\udcdcbase.ts\n  \u2517 \ud83d\udcdcThemeProvider.tsx"}),Object(d.jsx)("br",{}),Object(d.jsx)(a.a,{variant:"h2",sx:{mb:2},children:"Custom Schemes"}),Object(d.jsx)(a.a,{paragraph:!0,children:"Each color scheme has it's individual file making it easy to create new ones or modify existing."}),Object(d.jsxs)(a.a,{paragraph:!0,children:["For example, if you were to modify the sidebar style for the"," ",Object(d.jsx)("code",{children:"Light Bloom"})," theme you would have to edit sidebar colors section inside"," ",Object(d.jsx)("code",{children:"src\\theme\\schemes\\LightBloomTheme.ts"}),":"]}),Object(d.jsx)(i.a,{showLineNumbers:!0,wrapLines:!0,language:"javascript",style:l.a,children:"const themeColors = {\n    primary: '#1975FF',\n    secondary: '#6E759F',\n    success: '#44D600',\n    warning: '#FFA319',\n    error: '#FF1943',\n    info: '#33C2FF',\n    black: '#223354',\n    white: '#ffffff',\n    primaryAlt: '#000C57'\n  };\n  \n  const colors = {\n    layout: {\n      sidebar: {\n        background: themeColors.primaryAlt,\n        textColor: themeColors.secondary,\n        dividerBg: '#353E7A',\n        menuItemColor: '#CCCEDD',\n        menuItemColorActive: '#ffffff',\n        menuItemBg: 'transparent',\n        menuItemBgActive: '#242E6F',\n        menuItemIconColor: themeColors.secondary,\n        menuItemIconColorActive: '#ffffff',\n        menuItemHeadingColor: themeColors.secondary\n      }\n    }\n  };\n  \n  export const LightBloomTheme = createMuiTheme({\n    direction: i18n.dir(),\n    colors: {\n    sidebar: {\n      background: colors.layout.sidebar.background,\n      textColor: colors.layout.sidebar.textColor,\n      dividerBg: colors.layout.sidebar.dividerBg,\n      menuItemColor: colors.layout.sidebar.menuItemColor,\n      menuItemColorActive: colors.layout.sidebar.menuItemColorActive,\n      menuItemBg: colors.layout.sidebar.menuItemBg,\n      menuItemBgActive: colors.layout.sidebar.menuItemBgActive,\n      menuItemIconColor: colors.layout.sidebar.menuItemIconColor,\n      menuItemIconColorActive: colors.layout.sidebar.menuItemIconColorActive,\n      menuItemHeadingColor: colors.layout.sidebar.menuItemHeadingColor,\n      boxShadow: 'none',\n      width: '280px'\n    },"})]})]})})})}},887:function(e,t,o){"use strict";var n=o(25),r=o(100),a=o(823),s=o(6),c=o(142),i=o(438),h=o(808),l=o(0),d=Object(s.a)(c.a)((function(e){var t=e.theme;return"\n        margin-top: ".concat(t.spacing(5),";\n")}));t.a=function(e){var t=e.heading,o=e.subheading,s=Object(r.a)(e,["heading","subheading"]),c=Object(a.a)().t;return Object(l.jsxs)(d,Object(n.a)(Object(n.a)({},s),{},{children:[t&&Object(l.jsx)(i.a,{variant:"h1",children:c(t)}),o&&Object(l.jsx)(i.a,{variant:"subtitle2",children:c(o)}),Object(l.jsx)(h.a,{sx:{mt:5}})]}))}}}]);
//# sourceMappingURL=141.fce8dc69.chunk.js.map