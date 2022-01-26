(this["webpackJsonptokyo-react-admin-dashboard"]=this["webpackJsonptokyo-react-admin-dashboard"]||[]).push([[142],{2193:function(e,r,n){"use strict";n.r(r);var t=n(743),a=n(823),s=n(439),c=n(303),o=n(888),i=n(2238),d=n(1130),u=n.n(d),p=n(0);r.default=function(){return Object(p.jsx)(c.a,{title:"Server Requests - Tokyo React Admin Dashboard",children:Object(p.jsx)(t.a,{maxWidth:!1,children:Object(p.jsxs)(a.a,{container:!0,spacing:3,children:[Object(p.jsx)(a.a,{item:!0,xs:12,children:Object(p.jsx)(o.a,{heading:"Server Requests",subheading:""})}),Object(p.jsxs)(a.a,{item:!0,xs:12,children:[Object(p.jsx)(s.a,{paragraph:!0,children:"Throughout Tokyo React Admin Dashboard you will find a few examples of API calls, mocked using Axios."}),Object(p.jsx)(s.a,{paragraph:!0,children:"Below is a simple example of an API call implementation."}),Object(p.jsx)(i.a,{showLineNumbers:!0,wrapLines:!0,language:"javascript",style:u.a,children:"import { useState, useEffect, useCallback } from 'react';\n\n  import { Card } from '@material-ui/core';\n  import axios from 'src/utils/axios';\n  import useRefMounted from 'src/hooks/useRefMounted';\n  import RecentOrdersTable from './RecentOrdersTable';\n  \n  function RecentOrders() {\n    const isMountedRef = useRefMounted();\n    const [cryptoOrders, setCryptoOrders] = useState([]);\n  \n    const getCryptoOrders = useCallback(async () => {\n      try {\n        const response = await axios.get('/api/crypto-orders');\n  \n        if (isMountedRef.current) {\n          setCryptoOrders(response.data.cryptoOrders);\n        }\n      } catch (err) {\n        console.error(err);\n      }\n    }, [isMountedRef]);\n  \n    useEffect(() => {\n      getCryptoOrders();\n    }, [getCryptoOrders]);\n  \n    return (\n      <Card>\n        <RecentOrdersTable cryptoOrders={cryptoOrders} />\n      </Card>\n    );\n  }\n  \n  export default RecentOrders;\n  "}),Object(p.jsx)("br",{}),Object(p.jsx)(s.a,{paragraph:!0,children:"Using Axios Mock Adapter you can simulate request calls. Check out the example below:"}),Object(p.jsx)(i.a,{showLineNumbers:!0,wrapLines:!0,language:"javascript",style:u.a,children:"import mock from 'src/utils/mock';\n\nmock.onGet('/api/crypto-orders').reply(() => {\n  const cryptoOrders = [\n    {\n      id: '1',\n      orderDetails: 'Fiat Deposit',\n      orderDate: new Date().getTime(),\n      status: 'completed',\n      orderID: 'VUVX709ET7BY',\n      sourceName: 'Bank Account',\n      sourceDesc: '*** 1111',\n      amountCrypto: 34.4565,\n      amount: 56787,\n      cryptoCurrency: 'ETH',\n      currency: '$'\n    },\n  ];\n\n  return [200, { cryptoOrders }];\n});"})]})]})})})}},888:function(e,r,n){"use strict";var t=n(25),a=n(100),s=n(824),c=n(6),o=n(143),i=n(439),d=n(809),u=n(0),p=Object(c.a)(o.a)((function(e){var r=e.theme;return"\n        margin-top: ".concat(r.spacing(5),";\n")}));r.a=function(e){var r=e.heading,n=e.subheading,c=Object(a.a)(e,["heading","subheading"]),o=Object(s.a)().t;return Object(u.jsxs)(p,Object(t.a)(Object(t.a)({},c),{},{children:[r&&Object(u.jsx)(i.a,{variant:"h1",children:o(r)}),n&&Object(u.jsx)(i.a,{variant:"subtitle2",children:o(n)}),Object(u.jsx)(d.a,{sx:{mt:5}})]}))}}}]);
//# sourceMappingURL=142.da6db8d8.chunk.js.map