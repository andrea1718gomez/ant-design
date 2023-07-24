"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9377],{214252:function(u,i,n){n.r(i);var m=n(502143),h=n(968521),x=n(720719),j=n(28840),s=n(759907),c=n(828089),v=n(825673),g=n(902068),_=n(574399),A=n(863942),b=n(316073),E=n(24628),f=n(719260),k=n(956140),l=n(127179),a=n(905388),y=n(40428),w=n(606965),I=n(268696),P=n(587302),t=n(424128),Q=n(249706),C=n(795127),R=n(116846),B=n(212039),U=n(73024),D=n(553913),o=n(606641),T=n(667294),e=n(785893);function d(){var p=(0,o.eL)(),r=p.texts;return(0,e.jsx)(o.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:r[0].value}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:r[1].value}),(0,e.jsx)("li",{children:r[2].value})]}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(a.Z,{items:[{demo:{id:"components-image-demo-basic"},previewerProps:{title:"Basic Usage",filename:"components/image/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Image } from 'antd';
const App = () => (
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
);
export default App;
`,description:"<p>Click the image to zoom in.</p>"}},{demo:{id:"components-image-demo-fallback"},previewerProps:{title:"Fault tolerant",filename:"components/image/demo/fallback.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Image } from 'antd';
const App = () => (
  <Image
    width={200}
    height={200}
    src="error"
    fallback="data:image/png;base64,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"
  />
);
export default App;
`,description:"<p>Load failed to display image placeholder.</p>"}},{demo:{id:"components-image-demo-placeholder"},previewerProps:{title:"Progressive Loading",filename:"components/image/demo/placeholder.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Image, Space } from 'antd';
const App = () => {
  const [random, setRandom] = useState();
  return (
    <Space size={12}>
      <Image
        width={200}
        src={\`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?\${random}\`}
        placeholder={
          <Image
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={200}
          />
        }
      />
      <Button
        type="primary"
        onClick={() => {
          setRandom(Date.now());
        }}
      >
        Reload
      </Button>
    </Space>
  );
};
export default App;
`,description:"<p>Progressive when large image loading.</p>"}},{demo:{id:"components-image-demo-preview-group"},previewerProps:{title:"Multiple image preview",filename:"components/image/demo/preview-group.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Image } from 'antd';
const App = () => (
  <Image.PreviewGroup
    preview={{
      onChange: (current, prev) => console.log(\`current index: \${current}, prev index: \${prev}\`),
    }}
  >
    <Image width={200} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
    <Image
      width={200}
      src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
    />
  </Image.PreviewGroup>
);
export default App;
`,description:"<p>Click the left and right switch buttons to preview multiple images.</p>"}},{demo:{id:"components-image-demo-preview-group-visible"},previewerProps:{title:"Preview from one image",filename:"components/image/demo/preview-group-visible.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Image } from 'antd';
import React from 'react';
const App = () => (
  <Image.PreviewGroup
    items={[
      'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
      'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
      'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
    ]}
  >
    <Image
      width={200}
      src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
    />
  </Image.PreviewGroup>
);
export default App;
`,description:"<p>Preview a collection from one image.</p>"}},{demo:{id:"components-image-demo-previewsrc"},previewerProps:{title:"Custom preview image",filename:"components/image/demo/previewSrc.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Image } from 'antd';
const App = () => (
  <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
    preview={{
      src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }}
  />
);
export default App;
`,description:"<p>You can set different preview image.</p>"}},{demo:{id:"components-image-demo-controlled-preview"},previewerProps:{title:"Controlled Preview",filename:"components/image/demo/controlled-preview.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, InputNumber, Image } from 'antd';
const App = () => {
  const [visible, setVisible] = useState(false);
  const [scaleStep, setScaleStep] = useState(0.5);
  return (
    <>
      <div>
        scaleStep:{' '}
        <InputNumber
          min={0.1}
          max={5}
          defaultValue={0.5}
          step={0.1}
          onChange={(val) => setScaleStep(val)}
        />
      </div>
      <br />
      <Button type="primary" onClick={() => setVisible(true)}>
        show image preview
      </Button>
      <Image
        width={200}
        style={{
          display: 'none',
        }}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
        preview={{
          visible,
          scaleStep,
          src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          onVisibleChange: (value) => {
            setVisible(value);
          },
        }}
      />
    </>
  );
};
export default App;
`,description:"<p>You can make preview controlled.</p>"}},{demo:{id:"components-image-demo-toolbarrender"},previewerProps:{title:"Custom toolbar render",filename:"components/image/demo/toolbarRender.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import { Image, Space } from 'antd';
import React from 'react';
const src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
const App = () => {
  // or you can download flipped and rotated image
  // https://codesandbox.io/s/zi-ding-yi-gong-ju-lan-antd-5-7-0-forked-c9jvmp
  const onDownload = () => {
    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.download = 'image.png';
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        link.remove();
      });
  };
  return (
    <Image
      width={200}
      src={src}
      preview={{
        toolbarRender: (
          _,
          {
            transform: { scale },
            actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
          },
        ) => (
          <Space size={12} className="toolbar-wrapper">
            <DownloadOutlined onClick={onDownload} />
            <SwapOutlined rotate={90} onClick={onFlipY} />
            <SwapOutlined onClick={onFlipX} />
            <RotateLeftOutlined onClick={onRotateLeft} />
            <RotateRightOutlined onClick={onRotateRight} />
            <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
            <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
          </Space>
        ),
      }}
    />
  );
};
export default App;
`,description:"<p>You can customize the toolbar and add a button for downloading the original image or downloading the flipped and rotated image.</p>",style:`.toolbar-wrapper {
  position: fixed;
  bottom: 32px;
  left: 50%;
  padding: 0px 24px;
  color: #fff;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  transform: translateX(-50%);
}

.toolbar-wrapper .anticon {
  padding: 12px;
  cursor: pointer;
}

.toolbar-wrapper .anticon[disabled] {
  cursor: not-allowed;
  opacity: 0.3;
}

.toolbar-wrapper .anticon:hover {
  opacity: 0.3;
}`}},{demo:{id:"components-image-demo-imagerender"},previewerProps:{title:"Custom preview render",filename:"components/image/demo/imageRender.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Image } from 'antd';
import React from 'react';
const App = () => (
  <Image
    width={200}
    preview={{
      imageRender: () => (
        <video
          muted
          width="100%"
          controls
          src="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/file/A*uYT7SZwhJnUAAAAAAAAAAAAADgCCAQ"
        />
      ),
      toolbarRender: () => null,
    }}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
);
export default App;
`,description:"<p>You can customize the preview content.</p>"}},{demo:{id:"components-image-demo-preview-mask"},previewerProps:{debug:!0,title:"Custom preview mask",filename:"components/image/demo/preview-mask.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ZoomInOutlined } from '@ant-design/icons';
import { Image, Space } from 'antd';
const App = () => (
  <Image
    width={96}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    preview={{
      maskClassName: 'customize-mask',
      mask: (
        <Space direction="vertical" align="center">
          <ZoomInOutlined />
          \u793A\u4F8B
        </Space>
      ),
    }}
  />
);
export default App;
`,description:"<p>Custom preview mask.</p>",style:`.customize-mask {
  font-size: 20px;
  opacity: 1;
}
.customize-mask .anticon {
  font-size: 32px;
}`}},{demo:{id:"components-image-demo-preview-group-top-progress"},previewerProps:{debug:!0,title:"Top progress customization when previewing multiple images",filename:"components/image/demo/preview-group-top-progress.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Image } from 'antd';
import React from 'react';
const App = () => (
  <Image.PreviewGroup
    preview={{
      countRender: (current, total) => \`\u5F53\u524D \${current} / \u603B\u8BA1 \${total}\`,
    }}
  >
    <Image width={150} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
    <Image
      width={150}
      src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
    />
    <Image
      width={150}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  </Image.PreviewGroup>
);
export default App;
`,description:"<p>The progress is displayed at the top of the multi-image preview, and customization is supported</p>"}},{demo:{id:"components-image-demo-component-token"},previewerProps:{debug:!0,title:"Custom component token",filename:"components/image/demo/component-token.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { ConfigProvider, Image } from 'antd';
import React from 'react';
const App = () => (
  <ConfigProvider
    theme={{
      components: {
        Image: {
          previewOperationSize: 20,
          previewOperationColor: '#222',
          previewOperationColorDisabled: '#b20000',
        },
      },
    }}
  >
    <Image.PreviewGroup
      preview={{
        countRender: (current, total) => \`\u5F53\u524D \${current} / \u603B\u8BA1 \${total}\`,
      }}
    >
      <Image
        width={150}
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
      />
      <Image
        width={150}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    </Image.PreviewGroup>
  </ConfigProvider>
);
export default App;
`,description:"<p>Custom component token.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("h3",{id:"image",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#image",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Image"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[3].value}),(0,e.jsx)("th",{children:r[4].value}),(0,e.jsx)("th",{children:r[5].value}),(0,e.jsx)("th",{children:r[6].value}),(0,e.jsx)("th",{children:r[7].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[8].value}),(0,e.jsx)("td",{children:r[9].value}),(0,e.jsx)("td",{children:r[10].value}),(0,e.jsx)("td",{children:r[11].value}),(0,e.jsx)("td",{children:r[12].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[13].value}),(0,e.jsx)("td",{children:r[14].value}),(0,e.jsx)("td",{children:r[15].value}),(0,e.jsx)("td",{children:r[16].value}),(0,e.jsx)("td",{children:r[17].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[18].value}),(0,e.jsx)("td",{children:r[19].value}),(0,e.jsx)("td",{children:r[20].value}),(0,e.jsx)("td",{children:r[21].value}),(0,e.jsx)("td",{children:r[22].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[23].value}),(0,e.jsxs)("td",{children:[r[24].value,(0,e.jsx)("code",{children:r[25].value})]}),(0,e.jsx)("td",{children:r[26].value}),(0,e.jsx)("td",{children:r[27].value}),(0,e.jsx)("td",{children:r[28].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[29].value}),(0,e.jsxs)("td",{children:[r[30].value,(0,e.jsx)("code",{children:r[31].value})]}),(0,e.jsxs)("td",{children:[r[32].value,(0,e.jsx)(t.Z,{to:"#previewtype",sourceType:"Link",children:r[33].value})]}),(0,e.jsx)("td",{children:r[34].value}),(0,e.jsxs)("td",{children:[r[35].value,(0,e.jsx)(t.Z,{to:"#previewtype",sourceType:"Link",children:r[36].value}),r[37].value]})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[38].value}),(0,e.jsx)("td",{children:r[39].value}),(0,e.jsx)("td",{children:r[40].value}),(0,e.jsx)("td",{children:r[41].value}),(0,e.jsx)("td",{children:r[42].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[43].value}),(0,e.jsx)("td",{children:r[44].value}),(0,e.jsx)("td",{children:r[45].value}),(0,e.jsx)("td",{children:r[46].value}),(0,e.jsx)("td",{children:r[47].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[48].value}),(0,e.jsx)("td",{children:r[49].value}),(0,e.jsx)("td",{children:r[50].value}),(0,e.jsx)("td",{children:r[51].value}),(0,e.jsx)("td",{children:r[52].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[53].value}),(0,e.jsx)("td",{children:r[54].value}),(0,e.jsx)("td",{children:r[55].value}),(0,e.jsx)("td",{children:r[56].value}),(0,e.jsx)("td",{children:r[57].value})]})]})]}),(0,e.jsxs)("p",{children:[r[58].value,(0,e.jsx)(t.Z,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes",sourceType:"a",children:r[59].value})]}),(0,e.jsxs)("h3",{id:"previewtype",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#previewtype",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"PreviewType"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[60].value}),(0,e.jsx)("th",{children:r[61].value}),(0,e.jsx)("th",{children:r[62].value}),(0,e.jsx)("th",{children:r[63].value}),(0,e.jsx)("th",{children:r[64].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[65].value}),(0,e.jsx)("td",{children:r[66].value}),(0,e.jsx)("td",{children:r[67].value}),(0,e.jsx)("td",{children:r[68].value}),(0,e.jsx)("td",{children:r[69].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[70].value}),(0,e.jsx)("td",{children:r[71].value}),(0,e.jsx)("td",{children:r[72].value}),(0,e.jsx)("td",{children:r[73].value}),(0,e.jsx)("td",{children:r[74].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[75].value}),(0,e.jsx)("td",{children:r[76].value}),(0,e.jsx)("td",{children:r[77].value}),(0,e.jsx)("td",{children:r[78].value}),(0,e.jsx)("td",{children:r[79].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[80].value}),(0,e.jsx)("td",{children:r[81].value}),(0,e.jsx)("td",{children:r[82].value}),(0,e.jsx)("td",{children:r[83].value}),(0,e.jsx)("td",{children:r[84].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[85].value}),(0,e.jsx)("td",{children:r[86].value}),(0,e.jsx)("td",{children:r[87].value}),(0,e.jsx)("td",{children:r[88].value}),(0,e.jsx)("td",{children:r[89].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[90].value}),(0,e.jsx)("td",{children:r[91].value}),(0,e.jsx)("td",{children:r[92].value}),(0,e.jsx)("td",{children:r[93].value}),(0,e.jsx)("td",{children:r[94].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[95].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:r[96].value}),r[97].value]}),(0,e.jsx)("td",{children:r[98].value}),(0,e.jsx)("td",{children:r[99].value}),(0,e.jsx)("td",{children:r[100].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[101].value}),(0,e.jsx)("td",{children:r[102].value}),(0,e.jsx)("td",{children:r[103].value}),(0,e.jsx)("td",{children:r[104].value}),(0,e.jsx)("td",{children:r[105].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[106].value}),(0,e.jsx)("td",{children:r[107].value}),(0,e.jsx)("td",{children:r[108].value}),(0,e.jsx)("td",{children:r[109].value}),(0,e.jsx)("td",{children:r[110].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[111].value}),(0,e.jsx)("td",{children:r[112].value}),(0,e.jsx)("td",{children:r[113].value}),(0,e.jsx)("td",{children:r[114].value}),(0,e.jsx)("td",{children:r[115].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[116].value}),(0,e.jsx)("td",{children:r[117].value}),(0,e.jsx)("td",{children:r[118].value}),(0,e.jsx)("td",{children:r[119].value}),(0,e.jsx)("td",{children:r[120].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[121].value}),(0,e.jsx)("td",{children:r[122].value}),(0,e.jsxs)("td",{children:[r[123].value,(0,e.jsx)(t.Z,{to:"#toolbarrenderinfotype",sourceType:"Link",children:r[124].value}),r[125].value]}),(0,e.jsx)("td",{children:r[126].value}),(0,e.jsx)("td",{children:r[127].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[128].value}),(0,e.jsx)("td",{children:r[129].value}),(0,e.jsxs)("td",{children:[r[130].value,(0,e.jsx)(t.Z,{to:"#transformtype",sourceType:"Link",children:r[131].value}),r[132].value]}),(0,e.jsx)("td",{children:r[133].value}),(0,e.jsx)("td",{children:r[134].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[135].value}),(0,e.jsx)("td",{children:r[136].value}),(0,e.jsxs)("td",{children:[r[137].value,(0,e.jsx)(t.Z,{to:"#transformtype",sourceType:"Link",children:r[138].value}),r[139].value,(0,e.jsx)(t.Z,{to:"#transformaction",sourceType:"Link",children:r[140].value}),r[141].value]}),(0,e.jsx)("td",{children:r[142].value}),(0,e.jsx)("td",{children:r[143].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[144].value}),(0,e.jsxs)("td",{children:[r[145].value,(0,e.jsx)("code",{children:r[146].value}),r[147].value]}),(0,e.jsx)("td",{children:r[148].value}),(0,e.jsx)("td",{children:r[149].value}),(0,e.jsx)("td",{children:r[150].value})]})]})]}),(0,e.jsxs)("h2",{id:"previewgroup",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#previewgroup",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"PreviewGroup"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[151].value}),(0,e.jsx)("th",{children:r[152].value}),(0,e.jsx)("th",{children:r[153].value}),(0,e.jsx)("th",{children:r[154].value}),(0,e.jsx)("th",{children:r[155].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[156].value}),(0,e.jsxs)("td",{children:[r[157].value,(0,e.jsx)("code",{children:r[158].value}),r[159].value]}),(0,e.jsxs)("td",{children:[r[160].value,(0,e.jsx)(t.Z,{to:"#previewgrouptype",sourceType:"Link",children:r[161].value})]}),(0,e.jsx)("td",{children:r[162].value}),(0,e.jsxs)("td",{children:[r[163].value,(0,e.jsx)(t.Z,{to:"#previewgrouptype",sourceType:"Link",children:r[164].value}),r[165].value]})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[166].value}),(0,e.jsx)("td",{children:r[167].value}),(0,e.jsx)("td",{children:r[168].value}),(0,e.jsx)("td",{children:r[169].value}),(0,e.jsx)("td",{children:r[170].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[171].value}),(0,e.jsx)("td",{children:r[172].value}),(0,e.jsx)("td",{children:r[173].value}),(0,e.jsx)("td",{children:r[174].value}),(0,e.jsx)("td",{children:r[175].value})]})]})]}),(0,e.jsxs)("h3",{id:"previewgrouptype",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#previewgrouptype",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"PreviewGroupType"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[176].value}),(0,e.jsx)("th",{children:r[177].value}),(0,e.jsx)("th",{children:r[178].value}),(0,e.jsx)("th",{children:r[179].value}),(0,e.jsx)("th",{children:r[180].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[181].value}),(0,e.jsx)("td",{children:r[182].value}),(0,e.jsx)("td",{children:r[183].value}),(0,e.jsx)("td",{children:r[184].value}),(0,e.jsx)("td",{children:r[185].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[186].value}),(0,e.jsx)("td",{children:r[187].value}),(0,e.jsx)("td",{children:r[188].value}),(0,e.jsx)("td",{children:r[189].value}),(0,e.jsx)("td",{children:r[190].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[191].value}),(0,e.jsx)("td",{children:r[192].value}),(0,e.jsx)("td",{children:r[193].value}),(0,e.jsx)("td",{children:r[194].value}),(0,e.jsx)("td",{children:r[195].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[196].value}),(0,e.jsx)("td",{children:r[197].value}),(0,e.jsx)("td",{children:r[198].value}),(0,e.jsx)("td",{children:r[199].value}),(0,e.jsx)("td",{children:r[200].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[201].value}),(0,e.jsx)("td",{children:r[202].value}),(0,e.jsx)("td",{children:r[203].value}),(0,e.jsx)("td",{children:r[204].value}),(0,e.jsx)("td",{children:r[205].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[206].value}),(0,e.jsx)("td",{children:r[207].value}),(0,e.jsx)("td",{children:r[208].value}),(0,e.jsx)("td",{children:r[209].value}),(0,e.jsx)("td",{children:r[210].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[211].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:r[212].value}),r[213].value]}),(0,e.jsx)("td",{children:r[214].value}),(0,e.jsx)("td",{children:r[215].value}),(0,e.jsx)("td",{children:r[216].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[217].value}),(0,e.jsx)("td",{children:r[218].value}),(0,e.jsx)("td",{children:r[219].value}),(0,e.jsx)("td",{children:r[220].value}),(0,e.jsx)("td",{children:r[221].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[222].value}),(0,e.jsx)("td",{children:r[223].value}),(0,e.jsx)("td",{children:r[224].value}),(0,e.jsx)("td",{children:r[225].value}),(0,e.jsx)("td",{children:r[226].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[227].value}),(0,e.jsx)("td",{children:r[228].value}),(0,e.jsx)("td",{children:r[229].value}),(0,e.jsx)("td",{children:r[230].value}),(0,e.jsx)("td",{children:r[231].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[232].value}),(0,e.jsx)("td",{children:r[233].value}),(0,e.jsx)("td",{children:r[234].value}),(0,e.jsx)("td",{children:r[235].value}),(0,e.jsx)("td",{children:r[236].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[237].value}),(0,e.jsx)("td",{children:r[238].value}),(0,e.jsx)("td",{children:r[239].value}),(0,e.jsx)("td",{children:r[240].value}),(0,e.jsx)("td",{children:r[241].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[242].value}),(0,e.jsx)("td",{children:r[243].value}),(0,e.jsxs)("td",{children:[r[244].value,(0,e.jsx)(t.Z,{to:"#toolbarrenderinfotype",sourceType:"Link",children:r[245].value}),r[246].value]}),(0,e.jsx)("td",{children:r[247].value}),(0,e.jsx)("td",{children:r[248].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[249].value}),(0,e.jsx)("td",{children:r[250].value}),(0,e.jsxs)("td",{children:[r[251].value,(0,e.jsx)(t.Z,{to:"#transformtype",sourceType:"Link",children:r[252].value}),r[253].value]}),(0,e.jsx)("td",{children:r[254].value}),(0,e.jsx)("td",{children:r[255].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[256].value}),(0,e.jsx)("td",{children:r[257].value}),(0,e.jsxs)("td",{children:[r[258].value,(0,e.jsx)(t.Z,{to:"#transformtype",sourceType:"Link",children:r[259].value}),r[260].value,(0,e.jsx)(t.Z,{to:"#transformaction",sourceType:"Link",children:r[261].value}),r[262].value]}),(0,e.jsx)("td",{children:r[263].value}),(0,e.jsx)("td",{children:r[264].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[265].value}),(0,e.jsx)("td",{children:r[266].value}),(0,e.jsx)("td",{children:r[267].value}),(0,e.jsx)("td",{children:r[268].value}),(0,e.jsx)("td",{children:r[269].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[270].value}),(0,e.jsxs)("td",{children:[r[271].value,(0,e.jsx)("code",{children:r[272].value}),r[273].value]}),(0,e.jsx)("td",{children:r[274].value}),(0,e.jsx)("td",{children:r[275].value}),(0,e.jsx)("td",{children:r[276].value})]})]})]}),(0,e.jsxs)("h2",{id:"interface",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#interface",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Interface"]}),(0,e.jsxs)("h3",{id:"transformtype",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#transformtype",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"TransformType"]}),(0,e.jsx)(s.Z,{lang:"typescript",children:r[277].value}),(0,e.jsxs)("h3",{id:"transformaction",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#transformaction",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"TransformAction"]}),(0,e.jsx)(s.Z,{lang:"typescript",children:r[278].value}),(0,e.jsxs)("h3",{id:"toolbarrenderinfotype",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#toolbarrenderinfotype",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"ToolbarRenderInfoType"]}),(0,e.jsx)(s.Z,{lang:"typescript",children:r[279].value}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(l.Z,{component:"Image"})]})})}i.default=d}}]);
