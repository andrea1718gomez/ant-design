"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[3061],{121494:function(_,c,r){r.r(c);var m=r(502143),u=r(968521),x=r(720719),g=r(28840),h=r(759907),s=r(828089),v=r(825673),i=r(902068),j=r(574399),f=r(863942),b=r(316073),E=r(24628),C=r(719260),P=r(956140),l=r(127179),a=r(905388),k=r(40428),D=r(606965),R=r(268696),y=r(587302),t=r(424128),M=r(249706),O=r(795127),U=r(116846),W=r(212039),T=r(73024),A=r(553913),o=r(606641),L=r(667294),e=r(785893);function d(){var p=(0,o.eL)(),n=p.texts;return(0,e.jsx)(o.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("p",{children:[n[0].value,(0,e.jsx)("code",{children:n[1].value}),n[2].value]})}),(0,e.jsx)(i.Z,{message:"If the QR code cannot be scanned for identification, it may be because the link address is too long, which leads to too dense pixels. You can configure the QR code to be larger through size, or shorten the link through short link services."}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsx)("p",{children:n[3].value}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(a.Z,{items:[{demo:{id:"components-qr-code-demo-base"},previewerProps:{title:"base",filename:"components/qr-code/demo/base.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Input, QRCode, Space } from 'antd';
import React from 'react';
const App = () => {
  const [text, setText] = React.useState('https://ant.design/');
  return (
    <Space direction="vertical" align="center">
      <QRCode value={text || '-'} />
      <Input
        placeholder="-"
        maxLength={60}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </Space>
  );
};
export default App;
`,description:"<p>Basic Usage.</p>"}},{demo:{id:"components-qr-code-demo-icon"},previewerProps:{title:"With Icon",filename:"components/qr-code/demo/icon.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { QRCode } from 'antd';
const App = () => (
  <QRCode
    errorLevel="H"
    value="https://ant.design/"
    icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
  />
);
export default App;
`,description:"<p>QRCode with Icon.</p>"}},{demo:{id:"components-qr-code-demo-status"},previewerProps:{title:"other status",filename:"components/qr-code/demo/status.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { QRCode, Space } from 'antd';
const App = () => (
  <Space wrap>
    <QRCode value="https://ant.design/" status="loading" />
    <QRCode value="https://ant.design/" status="expired" onRefresh={() => console.log('refresh')} />
  </Space>
);
export default App;
`,description:"<p>The status can be controlled by the value <code>status</code>.</p>"}},{demo:{id:"components-qr-code-demo-type"},previewerProps:{title:"Custom Render Type",filename:"components/qr-code/demo/type.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { QRCode, Space } from 'antd';
import React from 'react';
const App = () => (
  <Space>
    <QRCode type="canvas" value="https://ant.design/" />
    <QRCode type="svg" value="https://ant.design/" />
  </Space>
);
export default App;
`,description:"<p>Customize the rendering results by <code>type</code>, provide options <code>canvas</code> and <code>svg</code>.</p>"}},{demo:{id:"components-qr-code-demo-customsize"},previewerProps:{title:"Custom Size",filename:"components/qr-code/demo/customSize.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { QRCode, Button } from 'antd';
const App = () => {
  const [size, setSize] = useState(160);
  const increase = () => {
    setSize((prevSize) => {
      const newSize = prevSize + 10;
      if (newSize > 300) {
        return 300;
      }
      return newSize;
    });
  };
  const decline = () => {
    setSize((prevSize) => {
      const newSize = prevSize - 10;
      if (newSize < 48) {
        return 48;
      }
      return newSize;
    });
  };
  return (
    <>
      <Button.Group
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={decline} disabled={size <= 48} icon={<MinusOutlined />}>
          Smaller
        </Button>
        <Button onClick={increase} disabled={size >= 300} icon={<PlusOutlined />}>
          Larger
        </Button>
      </Button.Group>
      <QRCode
        errorLevel="H"
        size={size}
        iconSize={size / 4}
        value="https://ant.design/"
        icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
    </>
  );
};
export default App;
`,description:"<p>Custom Size.</p>"}},{demo:{id:"components-qr-code-demo-customcolor"},previewerProps:{title:"Custom Color",filename:"components/qr-code/demo/customColor.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { QRCode, Space, theme } from 'antd';
import React from 'react';
const { useToken } = theme;
const App = () => {
  const { token } = useToken();
  return (
    <Space>
      <QRCode value="https://ant.design/" color={token.colorSuccessText} />
      <QRCode
        value="https://ant.design/"
        color={token.colorInfoText}
        bgColor={token.colorBgLayout}
      />
    </Space>
  );
};
export default App;
`,description:"<p>Custom Color.</p>"}},{demo:{id:"components-qr-code-demo-download"},previewerProps:{title:"Download QRCode",filename:"components/qr-code/demo/download.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Button, QRCode } from 'antd';
import React from 'react';
const downloadQRCode = () => {
  const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
  if (canvas) {
    const url = canvas.toDataURL();
    const a = document.createElement('a');
    a.download = 'QRCode.png';
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};
const App = () => (
  <div id="myqrcode">
    <QRCode
      value="https://ant.design/"
      bgColor="#fff"
      style={{
        marginBottom: 16,
      }}
    />
    <Button type="primary" onClick={downloadQRCode}>
      Download
    </Button>
  </div>
);
export default App;
`,description:"<p>A way to download QRCode.</p>"}},{demo:{id:"components-qr-code-demo-errorlevel"},previewerProps:{title:"Error Level",filename:"components/qr-code/demo/errorlevel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Segmented, QRCode } from 'antd';
const App = () => {
  const [level, setLevel] = useState('L');
  return (
    <>
      <QRCode
        style={{
          marginBottom: 16,
        }}
        errorLevel={level}
        value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <Segmented options={['L', 'M', 'Q', 'H']} value={level} onChange={setLevel} />
    </>
  );
};
export default App;
`,description:"<p>set Error Level.</p>"}},{demo:{id:"components-qr-code-demo-popover"},previewerProps:{title:"Advanced Usage",filename:"components/qr-code/demo/Popover.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { QRCode, Popover } from 'antd';
const src = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
const App = () => (
  <Popover
    overlayInnerStyle={{
      padding: 0,
    }}
    content={<QRCode value={src} bordered={false} />}
  >
    <img width={100} height={100} src={src} alt="icon" />
  </Popover>
);
export default App;
`,description:"<p>With Popover.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[n[4].value,(0,e.jsx)("code",{children:n[5].value})]})}),(0,e.jsxs)(s.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{align:"left",children:n[6].value}),(0,e.jsx)("th",{align:"left",children:n[7].value}),(0,e.jsx)("th",{align:"left",children:n[8].value}),(0,e.jsx)("th",{align:"left",children:n[9].value}),(0,e.jsx)("th",{align:"left",children:n[10].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[11].value}),(0,e.jsx)("td",{align:"left",children:n[12].value}),(0,e.jsx)("td",{align:"left",children:n[13].value}),(0,e.jsx)("td",{align:"left",children:n[14].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[15].value}),(0,e.jsx)("td",{align:"left",children:n[16].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[17].value})}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[18].value})}),(0,e.jsx)("td",{align:"left",children:n[19].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[20].value}),(0,e.jsx)("td",{align:"left",children:n[21].value}),(0,e.jsx)("td",{align:"left",children:n[22].value}),(0,e.jsx)("td",{align:"left",children:n[23].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[24].value}),(0,e.jsx)("td",{align:"left",children:n[25].value}),(0,e.jsx)("td",{align:"left",children:n[26].value}),(0,e.jsx)("td",{align:"left",children:n[27].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[28].value}),(0,e.jsx)("td",{align:"left",children:n[29].value}),(0,e.jsx)("td",{align:"left",children:n[30].value}),(0,e.jsx)("td",{align:"left",children:n[31].value}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[32].value}),(0,e.jsx)("td",{align:"left",children:n[33].value}),(0,e.jsx)("td",{align:"left",children:n[34].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[35].value})}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[36].value}),(0,e.jsx)("td",{align:"left",children:n[37].value}),(0,e.jsx)("td",{align:"left",children:n[38].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[39].value})}),(0,e.jsx)("td",{align:"left",children:n[40].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[41].value}),(0,e.jsx)("td",{align:"left",children:n[42].value}),(0,e.jsx)("td",{align:"left",children:n[43].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[44].value})}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[45].value}),(0,e.jsx)("td",{align:"left",children:n[46].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[47].value})}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[48].value})}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[49].value}),(0,e.jsx)("td",{align:"left",children:n[50].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[51].value})}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[52].value})}),(0,e.jsx)("td",{align:"left"})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{align:"left",children:n[53].value}),(0,e.jsx)("td",{align:"left",children:n[54].value}),(0,e.jsx)("td",{align:"left",children:(0,e.jsx)("code",{children:n[55].value})}),(0,e.jsx)("td",{align:"left",children:n[56].value}),(0,e.jsx)("td",{align:"left"})]})]})]}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(l.Z,{component:"QRCode"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"about-qrcode-errorlevel",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#about-qrcode-errorlevel",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"About QRCode ErrorLevel"]}),(0,e.jsx)("p",{children:n[57].value}),(0,e.jsxs)("p",{children:[n[58].value,(0,e.jsx)("code",{children:n[59].value}),n[60].value,(0,e.jsx)("code",{children:n[61].value}),n[62].value,(0,e.jsx)("code",{children:n[63].value}),n[64].value,(0,e.jsx)("code",{children:n[65].value}),n[66].value,(0,e.jsx)("code",{children:n[67].value}),n[68].value,(0,e.jsx)("code",{children:n[69].value}),n[70].value,(0,e.jsx)("code",{children:n[71].value}),n[72].value,(0,e.jsx)("code",{children:n[73].value}),n[74].value]}),(0,e.jsx)("blockquote",{children:(0,e.jsxs)("p",{children:[n[75].value,(0,e.jsx)(t.Z,{href:"https://www.qrcode.com/en/about/error_correction.html",sourceType:"a",children:n[76].value})]})})]})]})})}c.default=d}}]);
