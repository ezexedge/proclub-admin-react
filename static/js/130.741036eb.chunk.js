(this["webpackJsonptokyo-react-admin-dashboard"]=this["webpackJsonptokyo-react-admin-dashboard"]||[]).push([[130],{2130:function(e,t,n){"use strict";n.r(t);var a=n(742),o=n(823),r=n(438),s=n(302),i=n(887),c=n(2184),h=n(1116),d=n.n(h),u=n(0);t.default=function(){return Object(u.jsx)(s.a,{title:"Authentication - Tokyo React Admin Dashboard",children:Object(u.jsx)(a.a,{maxWidth:!1,children:Object(u.jsxs)(o.a,{container:!0,spacing:3,children:[Object(u.jsx)(o.a,{item:!0,xs:12,children:Object(u.jsx)(i.a,{heading:"Authentication",subheading:""})}),Object(u.jsxs)(o.a,{item:!0,xs:12,children:[Object(u.jsxs)(r.a,{paragraph:!0,children:["This release of Tokyo React Admin Dashboard includes three separate authentication methods, that are basic examples to give you a starting point. The included auth methotds are:"," ",Object(u.jsx)("b",{children:"JWT Web Tokens"}),", ",Object(u.jsx)("b",{children:"Firebase"})," and ",Object(u.jsx)("b",{children:"Auth0"})]}),Object(u.jsx)("br",{}),Object(u.jsx)(r.a,{sx:{mb:2},variant:"h2",children:"Switching between auth methods"}),Object(u.jsx)(r.a,{paragraph:!0,children:"Switching to a different auth method is easy. You just have to change an import to point to your designed auth method. By default, Tokyo React Admin Dashboard comes with JWT Web Tokens enabled."}),Object(u.jsxs)(r.a,{paragraph:!0,children:["To switch to a different auth method you need to open"," ",Object(u.jsx)("code",{children:"\\src\\hooks\\useAuth.ts"})," and import the"," ",Object(u.jsx)("code",{children:"AuthContext"})," from a different provider, like in the example below."]}),Object(u.jsx)(c.a,{showLineNumbers:!0,wrapLines:!0,language:"javascript",style:d.a,children:"// use this for JWT Web Tokens\n\nimport AuthContext from 'src/contexts/JWTAuthContext';\n\n// use this for Firebase\n\nimport AuthContext from 'src/contexts/FirebaseAuthContext';\n\n// use this for Auth0\n\nimport AuthContext from 'src/contexts/Auth0Context';"}),Object(u.jsx)("br",{}),Object(u.jsxs)(r.a,{paragraph:!0,children:["Based on the auth method chosen above, you need to also modify"," ",Object(u.jsx)("code",{children:"src\\App.tsx"})," to point to the new auth method. You need to import the chosen auth provider just like in the example below."]}),Object(u.jsx)(c.a,{showLineNumbers:!0,wrapLines:!0,language:"javascript",style:d.a,children:"// use this for JWT Web Tokens\n  \nimport { AuthProvider } from './contexts/JWTAuthContext';\n\n// use this for Firebase\n\nimport { AuthProvider } from './contexts/FirebaseAuthContext';\n\n// use this for Auth0\n\nimport { AuthProvider } from './contexts/Auth0Context';"}),Object(u.jsx)("br",{}),Object(u.jsx)(r.a,{sx:{mb:2},variant:"h2",children:"Retrieving user data & auth actions"}),Object(u.jsxs)(r.a,{paragraph:!0,children:["Inspect the following file to see how you can retrieve user data based on auth method:"," ",Object(u.jsx)("code",{children:"src\\layouts\\SidebarLayout\\Header\\Userbox\\index.tsx"}),"."]}),Object(u.jsx)(r.a,{paragraph:!0,children:"We extracted, in the example below, only the auth related part from the Userbox\\index.tsx file:"}),Object(u.jsx)(c.a,{showLineNumbers:!0,wrapLines:!0,language:"javascript",style:d.a,children:"import useAuth from 'src/hooks/useAuth';\nimport { useHistory } from 'react-router-dom';\n\nfunction HeaderUserbox() {\n  const { user, logout } = useAuth();\n  const history = useHistory();\n\n  const handleLogout = async () => {\n    try {\n      await logout();\n      history.push('/');\n    } catch (error) {\n      console.error(error);\n    }\n  };\n\n  return (\n    <>\n      My name is: {user.name}\n\n      My avatar is: <img src={user.avatar} alt={user.name} />\n\n      <Button color=\"primary\" onClick={handleLogout}>\n        Sign out\n      </Button>\n    </>\n  )\n}"}),Object(u.jsx)("br",{}),Object(u.jsx)(r.a,{sx:{mb:2},variant:"h2",children:"Firebase"}),Object(u.jsx)(r.a,{paragraph:!0,children:"Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more."}),Object(u.jsxs)(r.a,{paragraph:!0,children:["In order to use the Firebase auth method you will need a Firebase account and configuration. You can edit the configuration inside"," ",Object(u.jsx)("code",{children:"src\\config.ts"})," which pulls it's variables from"," ",Object(u.jsx)("code",{children:"/.env"}),". There is a sample .env file available at"," ",Object(u.jsx)("code",{children:"/env.example"}),". You'll need to populate it with your account settings and rename it to .env"]}),Object(u.jsx)("br",{}),Object(u.jsx)(r.a,{sx:{mb:2},variant:"h2",children:"Auth0"}),Object(u.jsx)(r.a,{paragraph:!0,children:"Auth0 is an easy to implement, adaptable authentication and authorization platform."}),Object(u.jsxs)(r.a,{paragraph:!0,children:["In order to use the Auth0 auth method you will need a Auth0 account and configuration. You can edit the configuration inside"," ",Object(u.jsx)("code",{children:"src\\config.ts"})," which pulls it's variables from"," ",Object(u.jsx)("code",{children:"/.env"}),". There is a sample .env file available at"," ",Object(u.jsx)("code",{children:"/env.example"}),". You'll need to populate it with your account settings and rename it to .env"]}),Object(u.jsx)("br",{}),Object(u.jsx)(r.a,{sx:{mb:2},variant:"h2",children:"JWT Web Tokens"}),Object(u.jsx)(r.a,{paragraph:!0,children:"JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties. JWT.IO allows you to decode, verify and generate JWT."}),Object(u.jsx)(r.a,{paragraph:!0,children:"Please note that you will need to integrate a backend service in order to use these auth methods in a live production application, as encoding/decoding the auth tokens needs to happen on server side."})]})]})})})}},887:function(e,t,n){"use strict";var a=n(25),o=n(101),r=n(743),s=n(6),i=n(70),c=n(438),h=n(809),d=n(0),u=Object(s.a)(i.a)((function(e){var t=e.theme;return"\n        margin-top: ".concat(t.spacing(5),";\n")}));t.a=function(e){var t=e.heading,n=e.subheading,s=Object(o.a)(e,["heading","subheading"]),i=Object(r.a)().t;return Object(d.jsxs)(u,Object(a.a)(Object(a.a)({},s),{},{children:[t&&Object(d.jsx)(c.a,{variant:"h1",children:i(t)}),n&&Object(d.jsx)(c.a,{variant:"subtitle2",children:i(n)}),Object(d.jsx)(h.a,{sx:{mt:5}})]}))}}}]);
//# sourceMappingURL=130.741036eb.chunk.js.map