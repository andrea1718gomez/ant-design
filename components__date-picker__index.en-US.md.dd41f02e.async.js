"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8182],{296347:function(u,a,t){t.r(a);var p=t(502143),x=t(968521),j=t(720719),m=t(28840),s=t(759907),c=t(828089),v=t(825673),g=t(902068),k=t(574399),f=t(863942),_=t(316073),y=t(24628),b=t(719260),P=t(956140),i=t(127179),l=t(905388),D=t(40428),w=t(606965),T=t(268696),C=t(587302),n=t(424128),R=t(249706),M=t(795127),O=t(116846),E=t(212039),S=t(73024),Z=t(553913),d=t(606641),L=t(667294),e=t(785893);function o(){var h=(0,d.eL)(),r=h.texts;return(0,e.jsx)(d.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsx)("p",{children:r[0].value}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(l.Z,{items:[{demo:{id:"components-date-picker-demo-basic"},previewerProps:{title:"Basic",filename:"components/date-picker/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { DatePicker, Space } from 'antd';
import React from 'react';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const App = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
    <DatePicker onChange={onChange} picker="week" />
    <DatePicker onChange={onChange} picker="month" />
    <DatePicker onChange={onChange} picker="quarter" />
    <DatePicker onChange={onChange} picker="year" />
  </Space>
);
export default App;
`,description:"<p>Basic use case. Users can select or input a date in panel.</p>"}},{demo:{id:"components-date-picker-demo-range-picker"},previewerProps:{title:"Range Picker",filename:"components/date-picker/demo/range-picker.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const App = () => (
  <Space direction="vertical" size={12}>
    <RangePicker />
    <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="quarter" />
    <RangePicker picker="year" />
  </Space>
);
export default App;
`,description:"<p>Set range picker type by <code>picker</code> prop.</p>"}},{demo:{id:"components-date-picker-demo-switchable"},previewerProps:{title:"Switchable picker",filename:"components/date-picker/demo/switchable.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { DatePicker, Select, Space, TimePicker } from 'antd';
const { Option } = Select;
const PickerWithType = ({ type, onChange }) => {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};
const App = () => {
  const [type, setType] = useState('time');
  return (
    <Space>
      <Select value={type} onChange={setType}>
        <Option value="time">Time</Option>
        <Option value="date">Date</Option>
        <Option value="week">Week</Option>
        <Option value="month">Month</Option>
        <Option value="quarter">Quarter</Option>
        <Option value="year">Year</Option>
      </Select>
      <PickerWithType type={type} onChange={(value) => console.log(value)} />
    </Space>
  );
};
export default App;
`,description:"<p>Switch in different types of pickers by Select.</p>"}},{demo:{id:"components-date-picker-demo-format"},previewerProps:{title:"Date Format",filename:"components/date-picker/demo/format.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const customFormat = (value) => \`custom format: \${value.format(dateFormat)}\`;
const customWeekStartEndFormat = (value) =>
  \`\${dayjs(value).startOf('week').format(weekFormat)} ~ \${dayjs(value)
    .endOf('week')
    .format(weekFormat)}\`;
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
    <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
    <DatePicker defaultValue={dayjs('2015/01', monthFormat)} format={monthFormat} picker="month" />
    <DatePicker defaultValue={dayjs()} format={customWeekStartEndFormat} picker="week" />
    <RangePicker
      defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
    <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={customFormat} />
  </Space>
);
export default App;
`,description:"<p>We can set the date format by <code>format</code>. When <code>format</code> is an array, the input box can be entered in any of the valid formats of the array.</p>"}},{demo:{id:"components-date-picker-demo-time"},previewerProps:{title:"Choose Time",filename:"components/date-picker/demo/time.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const onChange = (value, dateString) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};
const onOk = (value) => {
  console.log('onOk: ', value);
};
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker showTime onChange={onChange} onOk={onOk} />
    <RangePicker
      showTime={{
        format: 'HH:mm',
      }}
      format="YYYY-MM-DD HH:mm"
      onChange={onChange}
      onOk={onOk}
    />
  </Space>
);
export default App;
`,description:"<p>This property provide an additional time selection. When <code>showTime</code> is an Object, its properties will be passed on to built-in <code>TimePicker</code>.</p>"}},{demo:{id:"components-date-picker-demo-disabled"},previewerProps:{title:"Disabled",filename:"components/date-picker/demo/disabled.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker defaultValue={dayjs('2015-06-06', dateFormat)} disabled />
    <DatePicker picker="month" defaultValue={dayjs('2015-06', 'YYYY-MM')} disabled />
    <RangePicker
      defaultValue={[dayjs('2015-06-06', dateFormat), dayjs('2015-06-06', dateFormat)]}
      disabled
    />
    <RangePicker
      defaultValue={[dayjs('2019-09-03', dateFormat), dayjs('2019-11-22', dateFormat)]}
      disabled={[false, true]}
    />
  </Space>
);
export default App;
`,description:"<p>A disabled state of the <code>DatePicker</code>. You can also set as array to disable one of input.</p>"}},{demo:{id:"components-date-picker-demo-disabled-date"},previewerProps:{title:"Disabled Date & Time",filename:"components/date-picker/demo/disabled-date.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const range = (start, end) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf('day');
};
const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
});
const disabledRangeTime = (_, type) => {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
};
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{
        defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
      }}
    />
    <DatePicker picker="month" disabledDate={disabledDate} />
    <RangePicker disabledDate={disabledDate} />
    <RangePicker
      disabledDate={disabledDate}
      disabledTime={disabledRangeTime}
      showTime={{
        hideDisabledOptions: true,
        defaultValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
      }}
      format="YYYY-MM-DD HH:mm:ss"
    />
  </Space>
);
export default App;
`,description:"<p>Disabled part of dates and time by <code>disabledDate</code> and <code>disabledTime</code> respectively, and <code>disabledTime</code> only works with <code>showTime</code>.</p>"}},{demo:{id:"components-date-picker-demo-select-in-range"},previewerProps:{title:"Select range dates in 7 days",filename:"components/date-picker/demo/select-in-range.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { DatePicker } from 'antd';
import React, { useState } from 'react';
const { RangePicker } = DatePicker;
const App = () => {
  const [dates, setDates] = useState(null);
  const [value, setValue] = useState(null);
  const disabledDate = (current) => {
    if (!dates) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') >= 7;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') >= 7;
    return !!tooEarly || !!tooLate;
  };
  const onOpenChange = (open) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  return (
    <RangePicker
      value={dates || value}
      disabledDate={disabledDate}
      onCalendarChange={(val) => {
        setDates(val);
      }}
      onChange={(val) => {
        setValue(val);
      }}
      onOpenChange={onOpenChange}
      changeOnBlur
    />
  );
};
export default App;
`,description:"<p>Using <code>changeOnBlur</code> work with <code>onCalendarChange</code> and <code>disabledDate</code> to limit date selection.</p>"}},{demo:{id:"components-date-picker-demo-preset-ranges"},previewerProps:{title:"Preset Ranges",filename:"components/date-picker/demo/preset-ranges.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;
const onChange = (date) => {
  if (date) {
    console.log('Date: ', date);
  } else {
    console.log('Clear');
  }
};
const onRangeChange = (dates, dateStrings) => {
  if (dates) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  } else {
    console.log('Clear');
  }
};
const rangePresets = [
  {
    label: 'Last 7 Days',
    value: [dayjs().add(-7, 'd'), dayjs()],
  },
  {
    label: 'Last 14 Days',
    value: [dayjs().add(-14, 'd'), dayjs()],
  },
  {
    label: 'Last 30 Days',
    value: [dayjs().add(-30, 'd'), dayjs()],
  },
  {
    label: 'Last 90 Days',
    value: [dayjs().add(-90, 'd'), dayjs()],
  },
];
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      presets={[
        {
          label: 'Yesterday',
          value: dayjs().add(-1, 'd'),
        },
        {
          label: 'Last Week',
          value: dayjs().add(-7, 'd'),
        },
        {
          label: 'Last Month',
          value: dayjs().add(-1, 'month'),
        },
      ]}
      onChange={onChange}
    />
    <RangePicker presets={rangePresets} onChange={onRangeChange} />
    <RangePicker
      presets={rangePresets}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onRangeChange}
    />
  </Space>
);
export default App;
`,description:"<p>We can set preset ranges to RangePicker to improve user experience.</p>"}},{demo:{id:"components-date-picker-demo-extra-footer"},previewerProps:{title:"Extra Footer",filename:"components/date-picker/demo/extra-footer.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker renderExtraFooter={() => 'extra footer'} />
    <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
    <RangePicker renderExtraFooter={() => 'extra footer'} />
    <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
    <DatePicker renderExtraFooter={() => 'extra footer'} picker="month" />
  </Space>
);
export default App;
`,description:"<p>Render extra footer in panel for customized requirements.</p>"}},{demo:{id:"components-date-picker-demo-size"},previewerProps:{title:"Three Sizes",filename:"components/date-picker/demo/size.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { DatePicker, Radio, Space } from 'antd';
const { RangePicker } = DatePicker;
const App = () => {
  const [size, setSize] = useState('middle');
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <Space direction="vertical" size={12}>
      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="middle">middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <DatePicker size={size} />
      <DatePicker size={size} picker="month" />
      <RangePicker size={size} />
      <DatePicker size={size} picker="week" />
    </Space>
  );
};
export default App;
`,description:"<p>The input box comes in three sizes. <code>middle</code> will be used if <code>size</code> is omitted.</p>"}},{demo:{id:"components-date-picker-demo-cell-render"},previewerProps:{title:"Customized Cell Rendering",filename:"components/date-picker/demo/cell-render.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { DatePicker, Space } from 'antd';
import React from 'react';
const { RangePicker } = DatePicker;
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      cellRender={(current, info) => {
        if (info.type !== 'date') return info.originNode;
        const style = {};
        if (current.date() === 1) {
          style.border = '1px solid #1677ff';
          style.borderRadius = '50%';
        }
        return (
          <div className="ant-picker-cell-inner" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
    <RangePicker
      cellRender={(current, info) => {
        if (info.type !== 'date') return info.originNode;
        const style = {};
        if (current.date() === 1) {
          style.border = '1px solid #1677ff';
          style.borderRadius = '50%';
        }
        return (
          <div className="ant-picker-cell-inner" style={style}>
            {current.date()}
          </div>
        );
      }}
    />
  </Space>
);
export default App;
`,description:"<p>We can customize the rendering of the cells in the calendar by providing a <code>cellRender</code> function to <code>DatePicker</code>.</p>"}},{demo:{id:"components-date-picker-demo-status"},previewerProps:{title:"Status",filename:"components/date-picker/demo/status.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker, Space } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <DatePicker
      status="error"
      style={{
        width: '100%',
      }}
    />
    <DatePicker
      status="warning"
      style={{
        width: '100%',
      }}
    />
    <DatePicker.RangePicker
      status="error"
      style={{
        width: '100%',
      }}
    />
    <DatePicker.RangePicker
      status="warning"
      style={{
        width: '100%',
      }}
    />
  </Space>
);
export default App;
`,description:"<p>Add status to DatePicker with <code>status</code>, which could be <code>error</code> or <code>warning</code>.</p>"}},{demo:{id:"components-date-picker-demo-bordered"},previewerProps:{title:"Bordered-less",filename:"components/date-picker/demo/bordered.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker bordered={false} />
    <DatePicker picker="week" bordered={false} />
    <DatePicker picker="month" bordered={false} />
    <DatePicker picker="year" bordered={false} />
    <RangePicker bordered={false} />
    <RangePicker picker="week" bordered={false} />
    <RangePicker picker="month" bordered={false} />
    <RangePicker picker="year" bordered={false} />
  </Space>
);
export default App;
`,description:"<p>Bordered-less style component.</p>"}},{demo:{id:"components-date-picker-demo-placement"},previewerProps:{title:"Placement",filename:"components/date-picker/demo/placement.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { DatePicker, Radio } from 'antd';
const { RangePicker } = DatePicker;
const App = () => {
  const [placement, SetPlacement] = useState('topLeft');
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  return (
    <>
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <DatePicker placement={placement} />
      <br />
      <br />
      <RangePicker placement={placement} />
    </>
  );
};
export default App;
`,description:"<p>You can manually specify the position of the popup via <code>placement</code>.</p>"}},{demo:{id:"components-date-picker-demo-mode"},previewerProps:{debug:!0,title:"Controlled Panels",filename:"components/date-picker/demo/mode.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const ControlledDatePicker = () => {
  const [mode, setMode] = useState('time');
  const handleOpenChange = (open) => {
    if (open) {
      setMode('time');
    }
  };
  const handlePanelChange = (_, newMode) => {
    setMode(newMode);
  };
  return (
    <DatePicker
      mode={mode}
      showTime
      onOpenChange={handleOpenChange}
      onPanelChange={handlePanelChange}
    />
  );
};
const ControlledRangePicker = () => {
  const [mode, setMode] = useState(['month', 'month']);
  const [value, setValue] = useState([null, null]);
  const handlePanelChange = (newValue, newModes) => {
    setValue(newValue);
    setMode([
      newModes[0] === 'date' ? 'month' : newModes[0],
      newModes[1] === 'date' ? 'month' : newModes[1],
    ]);
  };
  return (
    <RangePicker
      placeholder={['Start month', 'End month']}
      format="YYYY-MM"
      value={value}
      mode={mode}
      onChange={setValue}
      onPanelChange={handlePanelChange}
    />
  );
};
const App = () => (
  <Space direction="vertical" size={12}>
    <ControlledDatePicker />
    <ControlledRangePicker />
  </Space>
);
export default App;
`,description:"<p>Determine which panel to show with <code>mode</code> and <code>onPanelChange</code>.</p>"}},{demo:{id:"components-date-picker-demo-start-end"},previewerProps:{debug:!0,title:"Customized Range Picker",filename:"components/date-picker/demo/start-end.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
const App = () => {
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);
  const [endOpen, setEndOpen] = useState(false);
  const disabledStartDate = (startDate) => {
    if (!startDate || !endValue) {
      return false;
    }
    return startDate.valueOf() > endValue.valueOf();
  };
  const disabledEndDate = (endDate) => {
    if (!endDate || !startValue) {
      return false;
    }
    return endDate.valueOf() <= startValue.valueOf();
  };
  const handleStartOpenChange = (open) => {
    if (!open) {
      setEndOpen(true);
    }
  };
  const handleEndOpenChange = (open) => {
    setEndOpen(open);
  };
  return (
    <Space>
      <DatePicker
        disabledDate={disabledStartDate}
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        value={startValue}
        placeholder="Start"
        onChange={setStartValue}
        onOpenChange={handleStartOpenChange}
      />
      <DatePicker
        disabledDate={disabledEndDate}
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        value={endValue}
        placeholder="End"
        onChange={setEndValue}
        open={endOpen}
        onOpenChange={handleEndOpenChange}
      />
    </Space>
  );
};
export default App;
`,description:`<p>When <code>RangePicker</code> does not satisfied your requirements, try to implement similar functionality with two <code>DatePicker</code>.</p>
<blockquote>
<ul>
<li>Use the <code>disabledDate</code> property to limit the start and end dates.</li>
<li>Improve user experience with <code>open</code> and <code>onOpenChange</code>.</li>
</ul>
</blockquote>`}},{demo:{id:"components-date-picker-demo-suffix"},previewerProps:{debug:!0,title:"Suffix",filename:"components/date-picker/demo/suffix.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { DatePicker, Space } from 'antd';
const smileIcon = <SmileOutlined />;
const { RangePicker } = DatePicker;
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const App = () => (
  <Space direction="vertical" size={12}>
    <DatePicker suffixIcon={smileIcon} onChange={onChange} />
    <DatePicker suffixIcon={smileIcon} onChange={onChange} picker="month" />
    <RangePicker suffixIcon={smileIcon} onChange={onChange} />
    <DatePicker suffixIcon={smileIcon} onChange={onChange} picker="week" />
    <DatePicker suffixIcon="ab" onChange={onChange} />
    <DatePicker suffixIcon="ab" onChange={onChange} picker="month" />
    <RangePicker suffixIcon="ab" onChange={onChange} />
    <DatePicker suffixIcon="ab" onChange={onChange} picker="week" />
  </Space>
);
export default App;
`,description:"<p>Basic use case. Users can select or input a date in panel.</p>"}},{demo:{id:"components-date-picker-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/date-picker/demo/render-panel.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.13.2","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { DatePicker } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalDatePicker } = DatePicker;
const App = () => <InternalDatePicker />;
export default App;
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsx)("p",{children:r[1].value}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:r[2].value}),(0,e.jsx)("li",{children:r[3].value}),(0,e.jsx)("li",{children:r[4].value}),(0,e.jsx)("li",{children:r[5].value}),(0,e.jsx)("li",{children:r[6].value}),(0,e.jsx)("li",{children:r[7].value})]}),(0,e.jsxs)("h3",{id:"localization",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#localization",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Localization"]}),(0,e.jsxs)("p",{children:[r[8].value,(0,e.jsx)(n.Z,{href:"https://ant.design/components/config-provider/",sourceType:"a",children:r[9].value}),r[10].value]}),(0,e.jsxs)("p",{children:[r[11].value,(0,e.jsx)(n.Z,{href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json",sourceType:"a",children:r[12].value}),r[13].value]}),(0,e.jsx)(s.Z,{lang:"jsx",children:r[14].value}),(0,e.jsx)(s.Z,{lang:"jsx",children:r[15].value}),(0,e.jsxs)("h3",{id:"common-api",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#common-api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Common API"]}),(0,e.jsx)("p",{children:r[16].value}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[17].value}),(0,e.jsx)("th",{children:r[18].value}),(0,e.jsx)("th",{children:r[19].value}),(0,e.jsx)("th",{children:r[20].value}),(0,e.jsx)("th",{children:r[21].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[22].value}),(0,e.jsx)("td",{children:r[23].value}),(0,e.jsx)("td",{children:r[24].value}),(0,e.jsx)("td",{children:r[25].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[26].value}),(0,e.jsx)("td",{children:r[27].value}),(0,e.jsx)("td",{children:r[28].value}),(0,e.jsx)("td",{children:r[29].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[30].value}),(0,e.jsx)("td",{children:r[31].value}),(0,e.jsx)("td",{children:r[32].value}),(0,e.jsx)("td",{children:r[33].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[34].value}),(0,e.jsx)("td",{children:r[35].value}),(0,e.jsx)("td",{children:r[36].value}),(0,e.jsx)("td",{children:r[37].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[38].value}),(0,e.jsxs)("td",{children:[r[39].value,(0,e.jsx)("code",{children:r[40].value}),r[41].value]}),(0,e.jsx)("td",{children:r[42].value}),(0,e.jsx)("td",{children:r[43].value}),(0,e.jsx)("td",{children:r[44].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[45].value}),(0,e.jsxs)("td",{children:[r[46].value,(0,e.jsx)("code",{children:r[47].value}),r[48].value]}),(0,e.jsx)("td",{children:r[49].value}),(0,e.jsx)("td",{children:r[50].value}),(0,e.jsx)("td",{children:r[51].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[52].value}),(0,e.jsx)("td",{children:r[53].value}),(0,e.jsx)("td",{children:r[54].value}),(0,e.jsx)("td",{children:r[55].value}),(0,e.jsx)("td",{children:r[56].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[57].value}),(0,e.jsx)("td",{children:r[58].value}),(0,e.jsx)("td",{children:r[59].value}),(0,e.jsx)("td",{children:r[60].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[61].value}),(0,e.jsx)("td",{children:r[62].value}),(0,e.jsx)("td",{children:r[63].value}),(0,e.jsx)("td",{children:r[64].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[65].value}),(0,e.jsxs)("td",{children:[r[66].value,(0,e.jsx)(n.Z,{href:"https://day.js.org/docs/en/display/format",sourceType:"a",children:r[67].value}),r[68].value,(0,e.jsx)(n.Z,{to:"#components-date-picker-demo-format",sourceType:"Link",children:r[69].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{to:"#formattype",sourceType:"Link",children:r[70].value})}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://github.com/react-component/picker/blob/f512f18ed59d6791280d1c3d7d37abbb9867eb0b/src/utils/uiUtil.ts#L155-L177",sourceType:"a",children:r[71].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[72].value}),(0,e.jsx)("td",{children:r[73].value}),(0,e.jsx)("td",{children:r[74].value}),(0,e.jsx)("td",{children:r[75].value}),(0,e.jsx)("td",{children:r[76].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[77].value}),(0,e.jsxs)("td",{children:[r[78].value,(0,e.jsx)("code",{children:r[79].value}),r[80].value,(0,e.jsx)("code",{children:r[81].value})]}),(0,e.jsx)("td",{children:r[82].value}),(0,e.jsx)("td",{children:r[83].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[84].value}),(0,e.jsxs)("td",{children:[r[85].value,(0,e.jsx)("code",{children:r[86].value}),r[87].value]}),(0,e.jsx)("td",{children:r[88].value}),(0,e.jsx)("td",{children:r[89].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[90].value}),(0,e.jsx)("td",{children:r[91].value}),(0,e.jsx)("td",{children:r[92].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json",sourceType:"a",children:r[93].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[94].value}),(0,e.jsxs)("td",{children:[r[95].value,(0,e.jsx)(n.Z,{to:"/docs/react/faq#when-set-mode-to-datepickerrangepicker-cannot-select-year-or-month-anymore",sourceType:"Link",children:r[96].value}),r[97].value]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:r[98].value}),r[99].value,(0,e.jsx)("code",{children:r[100].value}),r[101].value,(0,e.jsx)("code",{children:r[102].value}),r[103].value,(0,e.jsx)("code",{children:r[104].value}),r[105].value,(0,e.jsx)("code",{children:r[106].value})]}),(0,e.jsx)("td",{children:r[107].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[108].value}),(0,e.jsx)("td",{children:r[109].value}),(0,e.jsx)("td",{children:r[110].value}),(0,e.jsx)("td",{children:r[111].value}),(0,e.jsx)("td",{children:r[112].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[113].value}),(0,e.jsx)("td",{children:r[114].value}),(0,e.jsx)("td",{children:r[115].value}),(0,e.jsx)("td",{children:r[116].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[117].value}),(0,e.jsx)("td",{children:r[118].value}),(0,e.jsx)("td",{children:r[119].value}),(0,e.jsx)("td",{children:r[120].value}),(0,e.jsx)("td",{children:r[121].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[122].value}),(0,e.jsx)("td",{children:r[123].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:r[124].value}),r[125].value,(0,e.jsx)("code",{children:r[126].value}),r[127].value,(0,e.jsx)("code",{children:r[128].value}),r[129].value,(0,e.jsx)("code",{children:r[130].value}),r[131].value,(0,e.jsx)("code",{children:r[132].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:r[133].value})}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:r[134].value}),r[135].value]})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[136].value}),(0,e.jsx)("td",{children:r[137].value}),(0,e.jsx)("td",{children:r[138].value}),(0,e.jsx)("td",{children:r[139].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[140].value}),(0,e.jsx)("td",{children:r[141].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:r[142].value}),r[143].value,(0,e.jsx)("code",{children:r[144].value}),r[145].value,(0,e.jsx)("code",{children:r[146].value}),r[147].value,(0,e.jsx)("code",{children:r[148].value})]}),(0,e.jsx)("td",{children:r[149].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[150].value}),(0,e.jsx)("td",{children:r[151].value}),(0,e.jsx)("td",{children:r[152].value}),(0,e.jsx)("td",{children:r[153].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[154].value}),(0,e.jsx)("td",{children:r[155].value}),(0,e.jsxs)("td",{children:[r[156].value,(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[157].value}),r[158].value]}),(0,e.jsx)("td",{children:r[159].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[160].value}),(0,e.jsx)("td",{children:r[161].value}),(0,e.jsx)("td",{children:r[162].value}),(0,e.jsx)("td",{children:r[163].value}),(0,e.jsx)("td",{children:r[164].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[165].value}),(0,e.jsxs)("td",{children:[r[166].value,(0,e.jsx)("code",{children:r[167].value}),r[168].value,(0,e.jsx)("code",{children:r[169].value}),r[170].value]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:r[171].value}),r[172].value,(0,e.jsx)("code",{children:r[173].value}),r[174].value,(0,e.jsx)("code",{children:r[175].value})]}),(0,e.jsx)("td",{children:r[176].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[177].value}),(0,e.jsx)("td",{children:r[178].value}),(0,e.jsx)("td",{children:r[179].value}),(0,e.jsx)("td",{children:r[180].value}),(0,e.jsx)("td",{children:r[181].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[182].value}),(0,e.jsx)("td",{children:r[183].value}),(0,e.jsx)("td",{children:r[184].value}),(0,e.jsx)("td",{children:r[185].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[186].value}),(0,e.jsx)("td",{children:r[187].value}),(0,e.jsx)("td",{children:r[188].value}),(0,e.jsx)("td",{children:r[189].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[190].value}),(0,e.jsx)("td",{children:r[191].value}),(0,e.jsx)("td",{children:r[192].value}),(0,e.jsx)("td",{children:r[193].value}),(0,e.jsx)("td",{children:r[194].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[195].value}),(0,e.jsx)("td",{children:r[196].value}),(0,e.jsx)("td",{children:r[197].value}),(0,e.jsx)("td",{children:r[198].value}),(0,e.jsx)("td",{children:r[199].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[200].value}),(0,e.jsx)("td",{children:r[201].value}),(0,e.jsx)("td",{children:r[202].value}),(0,e.jsx)("td",{children:r[203].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[204].value}),(0,e.jsx)("td",{children:r[205].value}),(0,e.jsx)("td",{children:r[206].value}),(0,e.jsx)("td",{children:r[207].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"common-methods",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#common-methods",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Common Methods"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[208].value}),(0,e.jsx)("th",{children:r[209].value}),(0,e.jsx)("th",{children:r[210].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[211].value}),(0,e.jsx)("td",{children:r[212].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[213].value}),(0,e.jsx)("td",{children:r[214].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"datepicker",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#datepicker",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DatePicker"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[215].value}),(0,e.jsx)("th",{children:r[216].value}),(0,e.jsx)("th",{children:r[217].value}),(0,e.jsx)("th",{children:r[218].value}),(0,e.jsx)("th",{children:r[219].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[220].value}),(0,e.jsx)("td",{children:r[221].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[222].value})}),(0,e.jsx)("td",{children:r[223].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[224].value}),(0,e.jsx)("td",{children:r[225].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[226].value})}),(0,e.jsx)("td",{children:r[227].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[228].value}),(0,e.jsx)("td",{children:r[229].value}),(0,e.jsx)("td",{children:r[230].value}),(0,e.jsx)("td",{children:r[231].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[232].value}),(0,e.jsxs)("td",{children:[r[233].value,(0,e.jsx)(n.Z,{href:"https://day.js.org/docs/en/display/format",sourceType:"a",children:r[234].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{to:"#formattype",sourceType:"Link",children:r[235].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:r[236].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[237].value}),(0,e.jsx)("td",{children:r[238].value}),(0,e.jsx)("td",{children:r[239].value}),(0,e.jsx)("td",{children:r[240].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[241].value}),(0,e.jsxs)("td",{children:[r[242].value,(0,e.jsx)("code",{children:r[243].value}),r[244].value]}),(0,e.jsx)("td",{children:r[245].value}),(0,e.jsx)("td",{children:r[246].value}),(0,e.jsx)("td",{children:r[247].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[248].value}),(0,e.jsx)("td",{children:r[249].value}),(0,e.jsx)("td",{children:r[250].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{to:"/components/time-picker/#api",sourceType:"Link",children:r[251].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[252].value}),(0,e.jsxs)("td",{children:[r[253].value,(0,e.jsx)(n.Z,{to:"#components-date-picker-demo-disabled-date",sourceType:"Link",children:r[254].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[255].value})}),(0,e.jsx)("td",{children:r[256].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[257].value}),(0,e.jsxs)("td",{children:[r[258].value,(0,e.jsx)("code",{children:r[259].value}),r[260].value]}),(0,e.jsx)("td",{children:r[261].value}),(0,e.jsx)("td",{children:r[262].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[263].value}),(0,e.jsx)("td",{children:r[264].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[265].value})}),(0,e.jsx)("td",{children:r[266].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[267].value}),(0,e.jsx)("td",{children:r[268].value}),(0,e.jsx)("td",{children:r[269].value}),(0,e.jsx)("td",{children:r[270].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[271].value}),(0,e.jsx)("td",{children:r[272].value}),(0,e.jsx)("td",{children:r[273].value}),(0,e.jsx)("td",{children:r[274].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[275].value}),(0,e.jsx)("td",{children:r[276].value}),(0,e.jsx)("td",{children:r[277].value}),(0,e.jsx)("td",{children:r[278].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"datepickerpickeryear",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#datepickerpickeryear",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DatePicker[picker=year]"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[279].value}),(0,e.jsx)("th",{children:r[280].value}),(0,e.jsx)("th",{children:r[281].value}),(0,e.jsx)("th",{children:r[282].value}),(0,e.jsx)("th",{children:r[283].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[284].value}),(0,e.jsx)("td",{children:r[285].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[286].value})}),(0,e.jsx)("td",{children:r[287].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[288].value}),(0,e.jsx)("td",{children:r[289].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[290].value})}),(0,e.jsx)("td",{children:r[291].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[292].value}),(0,e.jsxs)("td",{children:[r[293].value,(0,e.jsx)(n.Z,{href:"https://day.js.org/docs/en/display/format",sourceType:"a",children:r[294].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{to:"#formattype",sourceType:"Link",children:r[295].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:r[296].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[297].value}),(0,e.jsx)("td",{children:r[298].value}),(0,e.jsx)("td",{children:r[299].value}),(0,e.jsx)("td",{children:r[300].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[301].value}),(0,e.jsx)("td",{children:r[302].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[303].value})}),(0,e.jsx)("td",{children:r[304].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[305].value}),(0,e.jsx)("td",{children:r[306].value}),(0,e.jsx)("td",{children:r[307].value}),(0,e.jsx)("td",{children:r[308].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"datepickerpickerquarter",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#datepickerpickerquarter",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DatePicker[picker=quarter]"]}),(0,e.jsxs)("p",{children:[r[309].value,(0,e.jsx)("code",{children:r[310].value}),r[311].value]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[312].value}),(0,e.jsx)("th",{children:r[313].value}),(0,e.jsx)("th",{children:r[314].value}),(0,e.jsx)("th",{children:r[315].value}),(0,e.jsx)("th",{children:r[316].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[317].value}),(0,e.jsx)("td",{children:r[318].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[319].value})}),(0,e.jsx)("td",{children:r[320].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[321].value}),(0,e.jsx)("td",{children:r[322].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[323].value})}),(0,e.jsx)("td",{children:r[324].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[325].value}),(0,e.jsxs)("td",{children:[r[326].value,(0,e.jsx)(n.Z,{href:"https://day.js.org/docs/en/display/format",sourceType:"a",children:r[327].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{to:"#formattype",sourceType:"Link",children:r[328].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:r[329].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[330].value}),(0,e.jsx)("td",{children:r[331].value}),(0,e.jsx)("td",{children:r[332].value}),(0,e.jsx)("td",{children:r[333].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[334].value}),(0,e.jsx)("td",{children:r[335].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[336].value})}),(0,e.jsx)("td",{children:r[337].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[338].value}),(0,e.jsx)("td",{children:r[339].value}),(0,e.jsx)("td",{children:r[340].value}),(0,e.jsx)("td",{children:r[341].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"datepickerpickermonth",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#datepickerpickermonth",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DatePicker[picker=month]"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[342].value}),(0,e.jsx)("th",{children:r[343].value}),(0,e.jsx)("th",{children:r[344].value}),(0,e.jsx)("th",{children:r[345].value}),(0,e.jsx)("th",{children:r[346].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[347].value}),(0,e.jsx)("td",{children:r[348].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[349].value})}),(0,e.jsx)("td",{children:r[350].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[351].value}),(0,e.jsx)("td",{children:r[352].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[353].value})}),(0,e.jsx)("td",{children:r[354].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[355].value}),(0,e.jsxs)("td",{children:[r[356].value,(0,e.jsx)(n.Z,{href:"https://day.js.org/docs/en/display/format",sourceType:"a",children:r[357].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{to:"#formattype",sourceType:"Link",children:r[358].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:r[359].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[360].value}),(0,e.jsx)("td",{children:r[361].value}),(0,e.jsx)("td",{children:r[362].value}),(0,e.jsx)("td",{children:r[363].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[364].value}),(0,e.jsx)("td",{children:r[365].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[366].value})}),(0,e.jsx)("td",{children:r[367].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[368].value}),(0,e.jsx)("td",{children:r[369].value}),(0,e.jsx)("td",{children:r[370].value}),(0,e.jsx)("td",{children:r[371].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"datepickerpickerweek",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#datepickerpickerweek",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DatePicker[picker=week]"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[372].value}),(0,e.jsx)("th",{children:r[373].value}),(0,e.jsx)("th",{children:r[374].value}),(0,e.jsx)("th",{children:r[375].value}),(0,e.jsx)("th",{children:r[376].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[377].value}),(0,e.jsx)("td",{children:r[378].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[379].value})}),(0,e.jsx)("td",{children:r[380].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[381].value}),(0,e.jsx)("td",{children:r[382].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[383].value})}),(0,e.jsx)("td",{children:r[384].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[385].value}),(0,e.jsxs)("td",{children:[r[386].value,(0,e.jsx)(n.Z,{href:"https://day.js.org/docs/en/display/format",sourceType:"a",children:r[387].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{to:"#formattype",sourceType:"Link",children:r[388].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:r[389].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[390].value}),(0,e.jsx)("td",{children:r[391].value}),(0,e.jsx)("td",{children:r[392].value}),(0,e.jsx)("td",{children:r[393].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[394].value}),(0,e.jsx)("td",{children:r[395].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[396].value})}),(0,e.jsx)("td",{children:r[397].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[398].value}),(0,e.jsx)("td",{children:r[399].value}),(0,e.jsx)("td",{children:r[400].value}),(0,e.jsx)("td",{children:r[401].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"rangepicker",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#rangepicker",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"RangePicker"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[402].value}),(0,e.jsx)("th",{children:r[403].value}),(0,e.jsx)("th",{children:r[404].value}),(0,e.jsx)("th",{children:r[405].value}),(0,e.jsx)("th",{children:r[406].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[407].value}),(0,e.jsx)("td",{children:r[408].value}),(0,e.jsx)("td",{children:r[409].value}),(0,e.jsx)("td",{children:r[410].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[411].value}),(0,e.jsxs)("td",{children:[r[412].value,(0,e.jsx)("code",{children:r[413].value}),r[414].value]}),(0,e.jsx)("td",{children:r[415].value}),(0,e.jsx)("td",{children:r[416].value}),(0,e.jsx)("td",{children:r[417].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[418].value}),(0,e.jsx)("td",{children:r[419].value}),(0,e.jsx)("td",{children:r[420].value}),(0,e.jsx)("td",{children:r[421].value}),(0,e.jsx)("td",{children:r[422].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[423].value}),(0,e.jsx)("td",{children:r[424].value}),(0,e.jsxs)("td",{children:[r[425].value,(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[426].value}),r[427].value,(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[428].value}),r[429].value]}),(0,e.jsx)("td",{children:r[430].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[431].value}),(0,e.jsx)("td",{children:r[432].value}),(0,e.jsxs)("td",{children:[r[433].value,(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[434].value}),r[435].value,(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[436].value}),r[437].value]}),(0,e.jsx)("td",{children:r[438].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[439].value}),(0,e.jsx)("td",{children:r[440].value}),(0,e.jsx)("td",{children:r[441].value}),(0,e.jsx)("td",{children:r[442].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[443].value}),(0,e.jsx)("td",{children:r[444].value}),(0,e.jsxs)("td",{children:[r[445].value,(0,e.jsx)("code",{children:r[446].value}),r[447].value,(0,e.jsx)("code",{children:r[448].value}),r[449].value]}),(0,e.jsx)("td",{children:r[450].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[451].value}),(0,e.jsxs)("td",{children:[r[452].value,(0,e.jsx)(n.Z,{href:"https://day.js.org/docs/en/display/format",sourceType:"a",children:r[453].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{to:"#formattype",sourceType:"Link",children:r[454].value})}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:r[455].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[456].value}),(0,e.jsx)("td",{children:r[457].value}),(0,e.jsxs)("td",{children:[r[458].value,(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[459].value}),r[460].value]}),(0,e.jsx)("td",{children:r[461].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[462].value}),(0,e.jsx)("td",{children:r[463].value}),(0,e.jsx)("td",{children:r[464].value}),(0,e.jsx)("td",{children:r[465].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[466].value}),(0,e.jsx)("td",{children:r[467].value}),(0,e.jsx)("td",{children:r[468].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:r[469].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[470].value}),(0,e.jsx)("td",{children:r[471].value}),(0,e.jsx)("td",{children:r[472].value}),(0,e.jsx)("td",{children:(0,e.jsx)(n.Z,{to:"/components/time-picker/#api",sourceType:"Link",children:r[473].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[474].value}),(0,e.jsxs)("td",{children:[r[475].value,(0,e.jsx)(n.Z,{to:"#components-date-picker-demo-disabled-date",sourceType:"Link",children:r[476].value})]}),(0,e.jsxs)("td",{children:[(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[477].value}),r[478].value]}),(0,e.jsx)("td",{children:r[479].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[480].value}),(0,e.jsx)("td",{children:r[481].value}),(0,e.jsxs)("td",{children:[r[482].value,(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[483].value}),r[484].value,(0,e.jsx)(n.Z,{href:"https://day.js.org/",sourceType:"a",children:r[485].value}),r[486].value]}),(0,e.jsx)("td",{children:r[487].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[488].value}),(0,e.jsxs)("td",{children:[r[489].value,(0,e.jsx)("code",{children:r[490].value}),r[491].value]}),(0,e.jsxs)("td",{children:[r[492].value,(0,e.jsx)("code",{children:r[493].value}),r[494].value,(0,e.jsx)("code",{children:r[495].value}),r[496].value]}),(0,e.jsx)("td",{children:r[497].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[498].value}),(0,e.jsx)("td",{children:r[499].value}),(0,e.jsx)("td",{children:r[500].value}),(0,e.jsx)("td",{children:r[501].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h4",{id:"formattype",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#formattype",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"formatType"]}),(0,e.jsx)(s.Z,{lang:"typescript",children:r[502].value}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(i.Z,{component:"DatePicker"}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"when-set-mode-to-datepickerrangepicker-cannot-select-year-or-month-anymore",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-set-mode-to-datepickerrangepicker-cannot-select-year-or-month-anymore",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When set mode to DatePicker/RangePicker, cannot select year or month anymore?"]}),(0,e.jsxs)("p",{children:[r[503].value,(0,e.jsx)(n.Z,{to:"/docs/react/faq#when-set-mode-to-datepickerrangepicker-cannot-select-year-or-month-anymore",sourceType:"Link",children:r[504].value})]}),(0,e.jsxs)("h3",{id:"why-does-the-date-picker-switch-to-the-date-panel-after-selecting-the-year-instead-of-the-month-panel",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-does-the-date-picker-switch-to-the-date-panel-after-selecting-the-year-instead-of-the-month-panel",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why does the date picker switch to the date panel after selecting the year instead of the month panel?"]}),(0,e.jsx)("p",{children:r[505].value}),(0,e.jsxs)("h3",{id:"how-to-use-datepicker-with-customize-date-library-like-dayjs",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-use-datepicker-with-customize-date-library-like-dayjs",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"How to use DatePicker with customize date library like dayjs?"]}),(0,e.jsxs)("p",{children:[r[506].value,(0,e.jsx)(n.Z,{to:"/docs/react/use-custom-date-library#datepicker",sourceType:"Link",children:r[507].value})]}),(0,e.jsxs)("h3",{id:"why-config-dayjslocale-globally-not-work",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-config-dayjslocale-globally-not-work",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why config dayjs.locale globally not work?"]}),(0,e.jsxs)("p",{children:[r[508].value,(0,e.jsx)("code",{children:r[509].value}),r[510].value,(0,e.jsx)("code",{children:r[511].value}),r[512].value,(0,e.jsx)("code",{children:r[513].value}),r[514].value,(0,e.jsxs)(n.Z,{to:"/components/config-provider",sourceType:"Link",children:[r[515].value,(0,e.jsx)("code",{children:r[516].value})]}),r[517].value]}),(0,e.jsxs)("h4",{id:"date-related-components-locale-is-not-working",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#date-related-components-locale-is-not-working",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Date-related components locale is not working?"]}),(0,e.jsxs)("p",{children:[r[518].value,(0,e.jsx)(n.Z,{to:"/docs/react/faq#date-related-components-locale-is-not-working",sourceType:"Link",children:r[519].value})]}),(0,e.jsxs)("h3",{id:"how-to-modify-start-day-of-week",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-modify-start-day-of-week",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"How to modify start day of week?"]}),(0,e.jsxs)("p",{children:[r[520].value,(0,e.jsx)(n.Z,{to:"/docs/react/i18n",sourceType:"Link",children:r[521].value}),r[522].value,(0,e.jsx)(n.Z,{href:"https://github.com/ant-design/ant-design/issues/5605",sourceType:"a",children:r[523].value}),r[524].value,(0,e.jsx)("code",{children:r[525].value}),r[526].value]}),(0,e.jsx)("ul",{children:(0,e.jsxs)("li",{children:[r[527].value,(0,e.jsx)(n.Z,{href:"https://codesandbox.io/s/dayjs-day-of-week-x9tuj2?file=/demo.tsx",sourceType:"a",children:r[528].value})]})}),(0,e.jsx)(s.Z,{lang:"js",children:r[529].value}),(0,e.jsxs)("h3",{id:"why-origin-panel-dont-switch-when-using-panelrender",children:[(0,e.jsx)(n.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#why-origin-panel-dont-switch-when-using-panelrender",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Why origin panel don't switch when using ",(0,e.jsx)("code",{children:r[530].value}),"?"]}),(0,e.jsxs)("p",{children:[r[531].value,(0,e.jsx)("code",{children:r[532].value}),r[533].value,(0,e.jsx)(n.Z,{href:"https://github.com/ant-design/ant-design/issues/27263",sourceType:"a",children:r[534].value}),r[535].value]})]})]})})}a.default=o}}]);
