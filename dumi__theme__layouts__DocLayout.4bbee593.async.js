"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5096],{803195:function(_e,tn,c){c.r(tn),c.d(tn,{default:function(){return Yo}});var un=c(805574),M=c.n(un),on=c(634577),mn=c(715778),hn=c(294184),$=c.n(hn),rn=c(727484),X=c.n(rn),Cn=c(533852),a=c(606641),u=c(667294),J=c(302559),an=c(438746),nt=c(168400),p=c.n(nt),C=c(370917),A=c(65630),n=c(785893),Sn,et={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},tt=function(){var e=(0,A.Fg)(),t=function i(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return d<=10?`
.palette-`.concat(s,"-").concat(d,` {
  background: `).concat(e["".concat(s,"-").concat(d)],`;
}
`).concat(i(s,d+1),`
    `):""},o=function i(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return s<=13?`
.palette-gray-`.concat(s,` {
  background: `).concat(et[s],`;
}
`).concat(i(s+1),`
    `):""};return(0,n.jsx)(C.xB,{styles:(0,C.iv)(Sn||(Sn=p()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,t("blue"),t("purple"),t("cyan"),t("green"),t("magenta"),t("red"),t("volcano"),t("orange"),t("gold"),t("yellow"),t("lime"),t("geekblue"),o())})},ot=tt,zn,rt=function(){return(0,n.jsx)(C.xB,{styles:(0,C.iv)(zn||(zn=p()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},Ln,it=function(){var r=(0,A.Fg)();return(0,n.jsx)(C.xB,{styles:(0,C.iv)(Ln||(Ln=p()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),r.colorText,r.fontSize,r.fontFamily,r.lineHeight,r.colorBgContainer)})},An,at=function(){return(0,n.jsx)(C.xB,{styles:(0,C.iv)(An||(An=p()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }
    `])))})},Q=c(510274),Nn,lt=function(){var e=(0,A.Fg)(),t=e.antCls,o=e.colorPrimary;return(0,n.jsx)(C.xB,{styles:(0,C.iv)(Nn||(Nn=p()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown p > img {
          margin: 34px 0;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }
        .antd-site-snippet {
          .ant-tabs-tab {
            .snippet-label {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                margin-inline-end: 8px;
              }
            }
          }
          .dumi-default-source-code {
            margin: 0 auto;
            background-color: `,`;
            border-radius: `,`px;
            > pre.prism-code {
              padding: 12px 20px;
              font-size: 13px;
              line-height: 2;
            }
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: #595959;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                width: 55%;
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,t,t,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,t,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),t,t,t,o,new Q.C(o).setAlpha(.75).toHex8String(),t,t,e.colorWhite,t,new Q.C(o).setAlpha(.75).toHexString(),t,t,new Q.C(o).setAlpha(.75).toHexString(),t,t,t,t,new Q.C(o).setAlpha(.6).toHexString(),t,t,t)})},st=lt,Tn,ct=function(){var r=(0,A.Fg)();return(0,n.jsx)(C.xB,{styles:(0,C.iv)(Tn||(Tn=p()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),r.colorText,r.fontSize,r.borderRadius)})},Bn,dt=function(){var e=(0,A.Fg)(),t=e.antCls,o=e.iconCls;return(0,n.jsx)(C.xB,{styles:(0,C.iv)(Bn||(Bn=p()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadius,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,t,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,o,e.colorTextSecondary,e.colorText,t,t,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,t,t,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,o,e.colorBgContainer,o,e.green6,e.colorBgContainer,e.purple3,e.purple6,t)})},pt=dt,En,ut=function(){var r=(0,A.Fg)(),e=r.antCls,t=r.iconCls;return(0,n.jsx)(C.xB,{styles:(0,C.iv)(En||(En=p()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),t,e,r.colorPrimary,t,e)})},Mn,mt=function(){var r=(0,A.Fg)(),e=r.iconCls;return(0,n.jsx)(C.xB,{styles:(0,C.iv)(Mn||(Mn=p()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),r.colorIcon,r.colorIconHover,r.colorBorder,r.colorTextSecondary,e,r.colorLinkHover)})},Dn,ht=function(){return(0,n.jsx)(C.xB,{styles:(0,C.iv)(Dn||(Dn=p()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},Hn,gt=function(){var r=(0,A.Fg)();return(0,n.jsx)(C.xB,{styles:(0,C.iv)(Hn||(Hn=p()([`
        .nav-phone-icon {
          position: absolute;
          top: 25px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),r.screenLG,r.colorBgContainer,r.colorSplit,r.colorLink,r.colorBgContainer)})},Fn,xt=function(){var r=(0,A.Fg)();return(0,n.jsx)(C.xB,{styles:(0,C.iv)(Fn||(Fn=p()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),r.colorPrimary,r.colorPrimary,r.colorPrimary,r.colorPrimary,r.colorPrimary)})},On,ft=function(){var r=(0,A.Fg)();return(0,n.jsx)(C.xB,{styles:(0,C.iv)(On||(On=p()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),r.colorPrimary,r.colorError,r.colorText,r.colorTextSecondary,r.colorBgContainer,r.borderRadius,r.colorBgContainer,r.colorBgContainer)})},Rn,gn="dumi-default-",vt=function(){var r=(0,A.Fg)();return(0,n.jsx)(C.xB,{styles:(0,C.iv)(Rn||(Rn=p()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),gn,r.colorText,r.colorBgContainer,r.colorBgContainer,r.colorTextPlaceholder,gn,r.colorBgElevated,r.colorBgElevated,gn,r.controlItemBgActive,r.controlItemBgHover,r.colorText,r.colorText)})},In,bt=function(){return(0,n.jsx)(C.xB,{styles:(0,C.iv)(In||(In=p()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},wt=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(it,{}),(0,n.jsx)(at,{}),(0,n.jsx)(st,{}),(0,n.jsx)(ct,{}),(0,n.jsx)(pt,{}),(0,n.jsx)(ut,{}),(0,n.jsx)(mt,{}),(0,n.jsx)(ht,{}),(0,n.jsx)(gt,{}),(0,n.jsx)(xt,{}),(0,n.jsx)(ft,{}),(0,n.jsx)(bt,{}),(0,n.jsx)(ot,{}),(0,n.jsx)(rt,{}),(0,n.jsx)(vt,{})]})},yt=wt,jt=c(857278),kt=c(430932),Ct=c(985093),ln=c(115668),St=c(642207),Pn=c(301210),zt=c(13923),xn=c(263783),Lt=c(937993),At=c(448118),Nt=c(938545),Tt=c(173224),Bt=c(630770),Et=c(391298),q=c(438199),Zn=c(693399),sn="ant-where-checker",Mt={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function Dt(){var r=(0,J.Z)(Mt),e=M()(r,1),t=e[0],o=u.useState(!0),i=M()(o,2),s=i[0],d=i[1];return u.useEffect(function(){var m=document.createElement("p");m.className=sn,m.style.position="fixed",m.style.pointerEvents="none",m.style.visibility="hidden",m.style.width="0",document.body.appendChild(m),(0,Zn.updateCSS)(`
:where(.`.concat(sn,`) {
  content: "__CHECK__";
}
    `),sn);var l=getComputedStyle(m),g=l.content;d(String(g).includes("CHECK")),document.body.removeChild(m),(0,Zn.removeCSS)(sn)},[]),s?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[t.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:t.whereDocUrl,children:t.whereDocTitle})]})})}var $n,Wn,Ht={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},Ft=function(){var e=(0,u.useContext)(q.Z),t=e.isMobile;return(0,A.kc)(function(o){var i=o.token,s=o.css,d=new Q.C((0,Bt.Z)("#f0f3fa","#fff")).onBackground(i.colorBgContainer).toHexString();return{holder:s($n||($n=p()([`
      background: `,`;
    `])),d),footer:s(Wn||(Wn=p()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),d,i.colorTextSecondary,i.colorText,t?60:0,t?20:0,i.marginXXL,i.fontSize)}})()},Ot=function(){var e=(0,an.Z)(),t=(0,J.Z)(Ht),o=M()(t,2),i=o[0],s=o[1],d=Ft(),m=d.styles,l=e.getLink,g=u.useMemo(function(){var k=s==="cn",E={title:(0,n.jsx)(a._H,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(a._H,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(a._H,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(a._H,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(a._H,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(a._H,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(a._H,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(a._H,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(a._H,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},b={title:(0,n.jsx)(a._H,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)(jt.Z,{}),title:(0,n.jsx)(a._H,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(kt.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(Ct.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(a._H,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(ln.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(a._H,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(ln.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(a._H,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(a._H,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};k&&b.items.push({icon:(0,n.jsx)(St.Z,{}),title:(0,n.jsx)(a._H,{id:"app.footer.work_with_us"}),url:l("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:a.rU});var v={title:(0,n.jsx)(a._H,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(Pn.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(zt.Z,{}),title:(0,n.jsx)(a._H,{id:"app.footer.change-log"}),url:l("/changelog"),LinkComponent:a.rU},{icon:(0,n.jsx)(xn.Z,{}),title:(0,n.jsx)(a._H,{id:"app.footer.faq"}),url:l("/docs/react/faq"),LinkComponent:a.rU},{icon:(0,n.jsx)(Lt.Z,{}),title:(0,n.jsx)(a._H,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(At.Z,{}),title:(0,n.jsx)(a._H,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)(Nt.Z,{}),title:(0,n.jsx)(a._H,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(xn.Z,{}),title:(0,n.jsx)(a._H,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(xn.Z,{}),title:(0,n.jsx)(a._H,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},z={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(a._H,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(a._H,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(a._H,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.vision",description:(0,n.jsx)(a._H,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(a._H,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(a._H,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(a._H,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(Tt.Z,{}),title:(0,n.jsx)(a._H,{id:"app.footer.theme"}),url:l("/theme-editor"),LinkComponent:a.rU}]};return[E,b,v,z]},[s,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Et.Z,{columns:g,className:m.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:i.owner})]})}),(0,n.jsx)(Dt,{})]})},fn=Ot,Rt=c(97857),N=c.n(Rt),It=c(9783),Un=c.n(It),Gn=c(660532),f=c(513669),Pt=c(39199),Zt=c(316165),$t="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",Wt="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",Ut=function(e){return(0,n.jsx)(Zt.Z,N()(N()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?$t:Wt})})}))},Vn=Ut,Z=c(373638),Kn,Jn,Gt=(0,A.kc)(function(r){var e=r.token,t=r.css,o=e.headerHeight,i=e.colorTextHeading,s=e.fontFamily,d=e.mobileMaxWidth;return{logo:t(Kn||(Kn=p()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),o,i,s,o,i,d),title:t(Jn||(Jn=p()([`
      line-height: 32px;
    `])))}}),Vt=function(e){var t=e.isZhCN,o=(0,a.TH)(),i=o.search,s=Gt(),d=s.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(a.rU,{to:Z.J1("/",t,i),className:d.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:d.title,children:"Ant Design"})]})})},Kt=Vt,Jt=c(534804),Xn,Yn,Qn,qn=(0,A.kc)(function(r){var e=r.css;return{smallStyle:e(Xn||(Xn=p()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),downOutlined:e(Yn||(Yn=p()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(Qn||(Qn=p()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),_n=function(){var e=qn(),t=e.styles;return(0,n.jsxs)("span",{className:t.smallStyle,children:["(",(0,n.jsx)(a._H,{id:"app.implementation.community"}),")"]})},ne=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(a._H,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(a._H,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(a._H,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(_n,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(_n,{})]}),key:"vue"}]},Xt=function(e){var t=e.isRTL,o=qn(),i=o.styles;return(0,n.jsx)(f.Dropdown,{menu:{items:ne()},placement:"bottomRight",children:(0,n.jsxs)(f.Button,{size:"small",children:[(0,n.jsx)(a._H,{id:"app.header.menu.more"}),(0,n.jsx)(Jt.Z,{className:t?i.downOutlinedRTL:i.downOutlined})]})})},Yt=Xt,Qt=c(719632),K=c.n(Qt),ee,te,qt={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},_t=(0,A.kc)(function(r){var e=r.token,t=e.antCls,o=e.iconCls,i=e.fontFamily,s=e.headerHeight,d=e.menuItemBorder,m=e.colorPrimary;return{nav:(0,A.iv)(ee||(ee=p()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),i,t,t,t,40+12*2,s,s,d,t,o,t,m,t,t),popoverMenuNav:(0,A.iv)(te||(te=p()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),t,t,t,t,t)}}),no=function(r){var e,t,o,i=r.isZhCN,s=r.isClient,d=r.isMobile,m=r.responsive,l=r.directionText,g=r.onLangChange,k=r.onDirectionChange,E=(0,a.TH)(),b=E.pathname,v=E.search,z=(0,J.Z)(qt),S=M()(z,1),h=S[0],T=(0,a.yh)(),L=((e=T["/docs/blog"])===null||e===void 0||(t=e[0])===null||t===void 0?void 0:t.children)||[],B=_t(),w=B.styles,F=d?"inline":"horizontal",I=b.split("/").filter(function(x){return x}).slice(0,-1).join("/"),P=I||"home";b.startsWith("/changelog")?P="docs/react":b.startsWith("/docs/resources")&&(P="docs/resources");var H,W=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(a._H,{id:"app.header.lang"}),onClick:g,key:"switch-lang"},{label:l,onClick:k,key:"switch-direction"}].concat(K()(ne()));d?H=W:m==="crowded"&&(H=[{label:(0,n.jsx)(Gn.Z,{}),key:"additional",children:K()(W)}]);var G=[{label:(0,n.jsx)(a.rU,{to:Z.J1("/docs/spec/introduce",i,v),children:h.design}),key:"docs/spec"},{label:(0,n.jsx)(a.rU,{to:Z.J1("/docs/react/introduce",i,v),children:h.development}),key:"docs/react"},{label:(0,n.jsx)(a.rU,{to:Z.J1("/components/overview/",i,v),children:h.components}),key:"components"},L.length?{label:(0,n.jsx)(a.rU,{to:Z.J1(L.sort(function(x,O){return x.frontmatter.date>O.frontmatter.date?-1:1})[0].link,i,v),children:h.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(a.rU,{to:Z.J1("/docs/resources",i,v),children:h.resources}),key:"docs/resources"},i&&s&&window.location.host!=="ant-design.antgroup.com"&&window.location.host!=="ant-design.gitee.io"?{label:"\u56FD\u5185\u955C\u50CF",key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(K()((o=H)!==null&&o!==void 0?o:[]));return(0,n.jsx)(f.Menu,{mode:F,selectedKeys:[P],className:w.nav,disabledOverflow:!0,items:G,style:{borderRight:0}})},oe,re,ie,ae,le,Y="1.2em",eo=(0,A.kc)(function(r){var e=r.token,t=r.css,o=e.colorText,i=e.colorBorder,s=e.colorBgContainer,d=e.colorBgTextHover,m=e.borderRadius,l=e.controlHeight,g=e.motionDurationMid;return{btn:t(oe||(oe=p()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),o,i,l,l,m,g,g,d,Y,Y,Y),innerDiv:t(re||(re=p()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Y,Y),labelStyle:t(ie||(ie=p()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Y,o,o),label1Style:t(ae||(ae=p()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),o,s),label2Style:t(le||(le=p()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),to=function(e){var t=e.label1,o=e.label2,i=e.tooltip1,s=e.tooltip2,d=e.value,m=e.pure,l=e.onClick,g=eo(),k=g.styles,E=k.btn,b=k.innerDiv,v=k.labelStyle,z=k.label1Style,S=k.label2Style,h=(0,n.jsx)("button",{onClick:l,className:E,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[m&&(d===1?t:o),!m&&(0,n.jsxs)("div",{className:b,children:[(0,n.jsx)("span",{className:$()(v,d===1?z:S),children:t}),(0,n.jsx)("span",{className:$()(v,d===1?S:z),children:o})]})]})},"lang-button");return i||s?(0,n.jsx)(f.Tooltip,{title:d===1?i:s,children:h}):h},vn=to,se,ce,de,pe=1120,ue=1200,oo=(0,A.kc)(function(r){var e=r.token,t=r.css,o="#ced4d9";return{header:t(se||(se=p()([`
      position: relative;
      z-index: 10;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,o,o,o),menuRow:t(ce||(ce=p()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:t(de||(de=p()([`
      width: 16px;
    `]))),popoverMenu:Un()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0})}}),me="ANT_DESIGN_DO_NOT_OPEN_MIRROR_MODAL";function he(){window.localStorage.setItem(me,"true")}function ro(){return!window.localStorage.getItem(me)}var io=function(){var e=u.useState(!1),t=M()(e,2),o=t[0],i=t[1],s=(0,J.Z)(),d=M()(s,2),m=d[1],l=(0,a.WF)(),g=l.pkg,k=(0,Z.Is)(),E=(0,u.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),b=M()(E,2),v=b[0],z=b[1],S=(0,u.useContext)(q.Z),h=S.direction,T=S.isMobile,L=S.updateSiteConfig,B=(0,u.useRef)(null),w=(0,a.TH)(),F=w.pathname,I=w.search,P=oo(),H=P.styles,W=(0,u.useCallback)(function(){z(function(D){return N()(N()({},D),{},{menuVisible:!1})})},[]),G=(0,u.useCallback)(function(){z(function(D){return N()(N()({},D),{},{windowWidth:window.innerWidth})})},[]),x=(0,u.useCallback)(function(){z(function(D){return N()(N()({},D),{},{menuVisible:!0})})},[]),O=(0,u.useCallback)(function(D){z(function(V){return N()(N()({},V),{},{menuVisible:D})})},[]),U=function(){L({direction:h!=="rtl"?"rtl":"ltr"})};(0,u.useEffect)(function(){W()},[w]),(0,u.useEffect)(function(){return i(typeof window!="undefined"),G(),window.addEventListener("resize",G),B.current=(0,Z.qE)(function(D){D!=="timeout"&&D!=="error"&&window.location.host!=="ant-design.antgroup.com"&&ro()&&f.Modal.confirm({title:"\u63D0\u793A",content:"\u5185\u7F51\u7528\u6237\u63A8\u8350\u8BBF\u95EE\u56FD\u5185\u955C\u50CF\u4EE5\u83B7\u5F97\u6781\u901F\u4F53\u9A8C\uFF5E",okText:"\u{1F680} \u7ACB\u523B\u524D\u5F80",cancelText:"\u4E0D\u518D\u5F39\u51FA",closable:!0,zIndex:99999,onOk:function(){window.open("https://ant-design.antgroup.com","_self"),he()},onCancel:function(){he()}})}),function(){window.removeEventListener("resize",G),B.current&&clearTimeout(B.current)}},[]);var y=(0,u.useCallback)(function(D){var V=window.location.href,tr=window.location.pathname;if(/overview/.test(tr)&&/0?[1-39][0-3]?x/.test(D)){window.location.href=V.replace(window.location.origin,D).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(D)?"":"/react","/introduce")).replace(/\/$/,"");return}var kn=new URL(V.replace(window.location.origin,D));kn.host.includes("antgroup")&&(window.location.href="".concat(kn.href.replace(/\/$/,""),"/")),window.location.href=kn.href.replace(/\/$/,"")},[]),j=(0,u.useCallback)(function(){var D="".concat(window.location.protocol,"//"),V=window.location.href.slice(D.length);Z.Fy()&&localStorage.setItem("locale",Z.KE(F)?"en-US":"zh-CN"),window.location.href=D+V.replace(window.location.pathname,Z.J1(F,!Z.KE(F),I).pathname)},[w]),R=(0,u.useMemo)(function(){return h!=="rtl"?"RTL":"LTR"},[h]),nn=(0,u.useMemo)(function(){return h==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[h]),Qo=v.menuVisible,pn=v.windowWidth,Je=v.searching,Xe=N()(Un()({},g.version,g.version),k==null?void 0:k.docVersions),qo=Object.keys(Xe).map(function(D){return{value:Xe[D],label:D}}),Ye=["","index","index-cn"].includes(F),_o=m==="cn",nr=h==="rtl",yn=null;pn<pe?yn="crowded":pn<ue&&(yn="narrow");var er=$()(H.header,"clearfix",{"home-header":Ye}),jn={isZhCN:_o,isRTL:nr,isClient:o},Qe=(0,n.jsx)(no,N()(N()({},jn),{},{responsive:yn,isMobile:T,directionText:R,onLangChange:j,onDirectionChange:U}),"nav"),en=[Qe,(0,n.jsx)(f.Select,{className:"version",size:"small",defaultValue:g.version,onChange:y,dropdownStyle:nn,popupMatchSelectWidth:!1,getPopupContainer:function(V){return V.parentNode},options:qo},"version"),(0,n.jsx)(Yt,N()({},jn),"more"),(0,n.jsx)(vn,{onClick:j,value:Z.KE(F)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(vn,{onClick:U,value:h==="rtl"?2:1,label1:(0,n.jsx)(Vn,{className:H.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(Vn,{className:H.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(vn,{value:1,label1:(0,n.jsx)(Pn.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];pn<pe?en=Je?[]:[Qe]:pn<ue&&(en=Je?[]:en);var qe=Ye?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:er,children:[T&&(0,n.jsx)(f.Popover,{overlayClassName:H.popoverMenu,placement:"bottomRight",content:en,trigger:"click",open:Qo,arrow:{arrowPointAtCenter:!0},onOpenChange:O,children:(0,n.jsx)(Gn.Z,{className:"nav-phone-icon",onClick:x})}),(0,n.jsxs)(f.Row,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(f.Col,N()(N()({},qe[0]),{},{children:(0,n.jsx)(Kt,N()(N()({},jn),{},{location:w}))})),(0,n.jsxs)(f.Col,N()(N()({},qe[1]),{},{className:H.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(Pt.ZP,{})}),!T&&en]}))]})]})},ao=io,or=c(945462),lo=function(){var e=(0,a.eL)(),t=(0,u.useMemo)(function(){var d;if(!e.frontmatter.subtitle&&!e.frontmatter.title)d="404 Not Found - Ant Design";else{var m;d="".concat(e.frontmatter.subtitle||""," ").concat(((m=e.frontmatter)===null||m===void 0?void 0:m.title)||""," - Ant Design")}var l=e.frontmatter.description||"";return[d,l]},[e]),o=M()(t,2),i=o[0],s=o[1];return(0,n.jsxs)(a.ql,{children:[(0,n.jsx)("title",{children:i}),(0,n.jsx)("meta",{property:"og:title",content:i}),s&&(0,n.jsx)("meta",{name:"description",content:s})]})},ge=lo,xe=c(148050),so=c(823493),co=c.n(so),po=c(658192),fe,ve,be,we=["scroll","resize"],uo=(0,A.kc)(function(r){var e=r.token,t=r.css,o=e.boxShadowSecondary,i=e.antCls;return{affixTabs:t(fe||(fe=p()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),o,i,i,i),affixTabsFixed:t(ve||(ve=p()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:t(be||(be=p()([`
      text-transform: capitalize;
    `])))}}),ye=32,mo=function(){var e=u.useRef(null),t=u.useRef([]),o=u.useState(!1),i=M()(o,2),s=i[0],d=i[1],m=u.useState(null),l=M()(m,2),g=l[0],k=l[1],E=uo(),b=E.styles,v=b.affixTabs,z=b.affixTabsFixed,S=b.span;function h(L){var B=document.getElementById(L);if(B){var w=B.offsetTop-e.current.offsetHeight-ye;(0,po.Z)(w)}}u.useEffect(function(){t.current=Array.from(document.querySelectorAll("h2[id]")).map(function(L){var B=L.id;return B}),d(!0)},[]),u.useEffect(function(){var L=decodeURIComponent((location.hash||"").slice(1));L&&h(L)},[s]);var T=u.useMemo(function(){function L(){for(var B=window,w=B.scrollY,F=e.current.offsetHeight,I=t.current.length-1;I>=0;I-=1){var P=t.current[I],H=document.getElementById(P),W=H.offsetTop-F-ye;if(W<=w){k(P);return}}k(null)}return co()(L)},[]);return u.useEffect(function(){return we.forEach(function(L){return window.addEventListener(L,T)}),T(),function(){we.forEach(function(L){return window.removeEventListener(L,T)})}},[]),(0,n.jsx)("div",{className:$()(v,g&&z),ref:e,children:(0,n.jsx)(f.Tabs,{activeKey:g,onChange:h,items:t.current.map(function(L){return{key:L,label:(0,n.jsx)("span",{className:S,children:L.replace(/-/g," ")})}})})})},ho=mo,je,ke,Ce,Se=40,cn=1208,bn=24,go=(0,A.kc)(function(r){var e=r.token,t=r.css,o=e.antCls;return{resourcePage:t(je||(je=p()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),cn),resourceContent:t(ke||(ke=p()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),Se,cn,bn,o),banner:t(Ce||(Ce=p()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),Se,cn,cn,bn,bn)}}),xo=function(e){var t,o=e.children,i=go(),s=i.styles,d=(0,a.eL)();return(0,n.jsx)(f.ConfigProvider,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(f.Layout,{children:[(0,n.jsx)(ge,{}),(0,n.jsxs)("div",{id:"resources-page",className:s.resourcePage,children:[(0,n.jsx)(ho,{}),(0,n.jsxs)("div",{className:s.banner,children:[(0,n.jsxs)(f.Typography.Title,{style:{fontSize:30},children:[(t=d.frontmatter)===null||t===void 0?void 0:t.title,(0,n.jsx)(xe.Z,{title:(0,n.jsx)(a._H,{id:"app.content.edit-page"}),filename:d.frontmatter.filename})]}),(0,n.jsx)("section",{children:d.frontmatter.description})]}),(0,n.jsx)("div",{className:s.resourceContent,children:o}),(0,n.jsx)(fn,{})]})]})})},fo=xo,vo=c(720841),bo=c(538294),wo=c(217187),_=c(743929),ze=c(206171),yo=c(513769),jo=c.n(yo),ko=["to","children"],Co=(0,u.forwardRef)(function(r,e){var t=r.to,o=r.children,i=jo()(r,ko),s=(0,a.s0)(),d=function(l){t.startsWith("http")||!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&(l.preventDefault(),(0,u.startTransition)(function(){s(t)}))};return(0,n.jsx)("a",N()(N()({ref:e,href:t,onClick:d},i),{},{children:o}))}),dn=Co,So=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(0,a.yh)(),o=(0,an.Z)(),i=o.pathname,s=o.search,d=(0,a.tx)(),m=e.before,l=e.after,g=f.theme.useToken(),k=g.token,E=(0,u.useMemo)(function(){var b,v=K()(d!=null?d:[]);if(i.startsWith("/docs/spec")){var z=v.splice(0,1);v.push.apply(v,K()(z))}if(i.startsWith("/docs/react")){var S,h=(S=Object.entries(t).find(function(B){var w=M()(B,1),F=w[0];return F.startsWith("/changelog")}))===null||S===void 0?void 0:S[1];h&&v.push.apply(v,K()(h))}if(i.startsWith("/changelog")){var T,L=(T=Object.entries(t).find(function(B){var w=M()(B,1),F=w[0];return F.startsWith("/docs/react")}))===null||T===void 0?void 0:T[1];L&&v.unshift.apply(v,K()(L))}return(b=v==null?void 0:v.reduce(function(B,w){if(w!=null&&w.title)if(i.startsWith("/docs/spec")){var F,I,P=w.children.reduce(function(x,O){var U,y=(U=O.frontmatter.type)!==null&&U!==void 0?U:"default";return x[y]||(x[y]=[]),x[y].push(O),x},{}),H=[];H.push.apply(H,K()((F=(I=P.default)===null||I===void 0?void 0:I.map(function(x){return{label:(0,n.jsxs)(dn,{to:"".concat(x.link).concat(s),children:[m,x==null?void 0:x.title,l]}),key:x.link.replace(/(-cn$)/g,"")}}))!==null&&F!==void 0?F:[])),Object.entries(P).forEach(function(x){var O=M()(x,2),U=O[0],y=O[1];U!=="default"&&H.push({type:"group",label:U,key:U,children:y==null?void 0:y.map(function(j){return{label:(0,n.jsxs)(dn,{to:"".concat(j.link).concat(s),children:[m,j==null?void 0:j.title,l]}),key:j.link.replace(/(-cn$)/g,"")}})})}),B.push({label:w==null?void 0:w.title,key:w==null?void 0:w.title,children:H})}else{var W;B.push({type:"group",label:w==null?void 0:w.title,key:w==null?void 0:w.title,children:(W=w.children)===null||W===void 0?void 0:W.map(function(x){return{label:(0,n.jsxs)(dn,{to:"".concat(x.link).concat(s),children:[m,(0,n.jsx)("span",{children:x==null?void 0:x.title},"english"),(0,n.jsx)("span",{className:"chinese",children:x.frontmatter.subtitle},"chinese"),x.frontmatter.tag&&(0,n.jsx)(f.Tag,{color:"warning",style:{marginInlineStart:k.marginXS},children:x.frontmatter.tag}),l]}),key:x.link.replace(/(-cn$)/g,"")}})})}else{var G=w.children||[];G.every(function(x){var O;return x==null||(O=x.frontmatter)===null||O===void 0?void 0:O.date})&&G.sort(function(x,O){return x.frontmatter.date>O.frontmatter.date?-1:1}),B.push.apply(B,K()(G.map(function(x){return{label:(0,n.jsxs)(dn,{to:"".concat(x.link).concat(s),children:[m,x==null?void 0:x.title,l]}),key:x.link.replace(/(-cn$)/g,"")}})))}return B},[]))!==null&&b!==void 0?b:[]},[d,t,i,s,e]);return[E,i]},Le=So,Ae,Ne,Te,Be,zo=(0,A.kc)(function(r){var e=r.token,t=r.css,o=e.colorSplit,i=e.iconCls,s=e.fontSizeIcon;return{prevNextNav:t(Ae||(Ae=p()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),o),pageNav:t(Ne||(Ne=p()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),i,s),prevNav:t(Te||(Te=p()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:t(Be||(Be=p()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),Lo=function r(e){return Array.isArray(e)?e.reduce(function(t,o){if(!o)return t;if("children"in o&&o.children){var i;return t.concat((i=r(o.children))!==null&&i!==void 0?i:[])}return t.concat(o)},[]):null},Ao=function(e){var t=e.rtl,o=zo(),i=o.styles,s={className:"footer-nav-icon-before"},d={className:"footer-nav-icon-after"},m=t?(0,n.jsx)(_.Z,N()({},s)):(0,n.jsx)(ze.Z,N()({},s)),l=t?(0,n.jsx)(ze.Z,N()({},d)):(0,n.jsx)(_.Z,N()({},d)),g=Le({before:m,after:l}),k=M()(g,2),E=k[0],b=k[1],v=(0,u.useMemo)(function(){var T=Lo(E);if(!T)return[null,null];var L=-1;return T.forEach(function(B,w){B&&B.key===b&&(L=w)}),[T[L-1],T[L+1]]},[E,b]),z=M()(v,2),S=z[0],h=z[1];return(0,n.jsxs)("section",{className:i.prevNextNav,children:[S&&u.cloneElement(S.label,{className:$()(i.pageNav,i.prevNav,S.className)}),h&&u.cloneElement(h.label,{className:$()(i.pageNav,i.nextNav,h.className)})]})},No=Ao,To=c(524229),Ee=c(211646),Bo=function(e){var t=e.className,o=e.style;return(0,n.jsx)("svg",{className:t,style:o,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},Me=Bo,De,He,Fe,Oe,Re,Ie,Pe,wn="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",Eo=(0,A.kc)(function(r){var e=r.token,t=r.css;return{card:t(De||(De=p()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:t(He||(He=p()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:t(Fe||(Fe=p()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:t(Oe||(Oe=p()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:t(Re||(Re=p()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:t(Ie||(Ie=p()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #646464;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .logo {
        width: 24px;
        height: 24px;
        font-size: 24px;
        &.zhihu-logo {
          color: #056de8;
        }
        &.yuque-logo {
          color: #00b96b;
        }
        &.juejin-logo {
          color: #1e80ff;
        }
      }
      .arrowIcon {
        margin: 0 8px;
        color: #8a8f8d;
        font-size: 12px;
      }
      .zl-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #646464;
      }
    `]))),btn:t(Pe||(Pe=p()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),Mo={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},Do=function(e){var t=e.zhihuLink,o=e.yuqueLink,i=e.juejinLink,s=(0,J.Z)(Mo),d=M()(s,1),m=d[0],l=Eo(),g=l.styles,k=g.card,E=g.bigTitle,b=g.cardBody,v=g.left,z=g.title,S=g.subTitle,h=g.btn;return!t&&!o&&!i?null:(0,n.jsxs)(f.Card,{className:k,bordered:!1,children:[(0,n.jsx)("h3",{className:E,children:m.bigTitle}),t&&(0,n.jsxs)("div",{className:b,children:[(0,n.jsxs)("div",{className:v,children:[(0,n.jsx)("img",{src:wn,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:z,children:"Ant Design"}),(0,n.jsxs)("div",{className:S,children:[(0,n.jsx)(ln.Z,{className:"logo zhihu-logo"}),(0,n.jsx)(_.Z,{className:"arrowIcon"}),(0,n.jsx)(f.Button,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:m.zhiHu})]})]})]}),(0,n.jsx)(f.Button,{type:"primary",className:h,icon:(0,n.jsx)(ln.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:t,children:m.buttonText})]}),o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.Divider,{}),(0,n.jsxs)("div",{className:b,children:[(0,n.jsxs)("div",{className:v,children:[(0,n.jsx)("img",{src:wn,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:z,children:"Ant Design"}),(0,n.jsxs)("div",{className:S,children:[(0,n.jsx)(Ee.Z,{className:"logo yuque-logo"}),(0,n.jsx)(_.Z,{className:"arrowIcon"}),(0,n.jsx)(f.Button,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:m.yuQue})]})]})]}),(0,n.jsx)(f.Button,{type:"primary",className:h,icon:(0,n.jsx)(Ee.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:o,children:m.buttonText})]})]}),i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.Divider,{}),(0,n.jsxs)("div",{className:b,children:[(0,n.jsxs)("div",{className:v,children:[(0,n.jsx)("img",{src:wn,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:z,children:"Ant Design"}),(0,n.jsxs)("div",{className:S,children:[(0,n.jsx)(Me,{className:"logo juejin-logo"}),(0,n.jsx)(_.Z,{className:"arrowIcon"}),(0,n.jsx)(f.Button,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:m.junjin})]})]})]}),(0,n.jsx)(f.Button,{type:"primary",className:h,icon:(0,n.jsx)(Me,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:i,children:m.buttonText})]})]})]})},Ho=Do,Ze,$e,We,Ue,Fo=(0,A.kc)(function(r){var e=r.token,t=r.css,o=e.antCls;return{contributorsList:t(Ze||(Ze=p()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),o,o,e.motionDurationSlow,o),toc:t($e||($e=p()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),o,o),tocWrapper:t(We||(We=p()([`
      position: absolute;
      top: 8px;
      inset-inline-end: 0;
      width: 160px;
      margin: 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:t(Ue||(Ue=p()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),Oo=function(e){var t=e.num,o=t===void 0?3:t;return(0,n.jsx)("li",{children:Array.from({length:o}).map(function(i,s){return(0,n.jsx)(f.Skeleton.Avatar,{size:"small",active:!0,style:{marginLeft:s===0?0:-8}},s)})})},Ro=function(e){var t=e.name,o=e.avatar,i=(0,u.useState)(!0),s=M()(i,2),d=s[0],m=s[1],l=(0,u.useState)(!1),g=M()(l,2),k=g[0],E=g[1];return(0,u.useLayoutEffect)(function(){var b=new Image;b.src=o,b.onload=function(){return m(!1)},b.onerror=function(){return E(!0)}},[]),k?null:d?(0,n.jsx)(f.Skeleton.Avatar,{size:"small",active:!0}):(0,n.jsx)(f.Avatar,{size:"small",src:o,alt:t,children:t})},Io=function(e){var t,o,i,s,d,m=e.children,l=(0,a.eL)(),g=(0,a.zh)(),k=(0,an.Z)(),E=k.pathname,b=k.hash,v=(0,a.YB)(),z=v.formatMessage,S=Fo(),h=S.styles,T=(0,A.Fg)(),L=(0,u.useContext)(q.Z),B=L.direction,w=(0,wo.Z)(!1),F=M()(w,2),I=F[0],P=F[1],H=(0,u.useMemo)(function(){var y;return((y=l.toc)===null||y===void 0?void 0:y.filter(function(j){return j._debug_demo}).map(function(j){return j.id}))||[]},[l]),W=H.includes(b.slice(1));(0,u.useLayoutEffect)(function(){P(W)},[]);var G=(0,u.useMemo)(function(){return{showDebug:I,setShowDebug:P}},[I,H]),x=(0,u.useMemo)(function(){return((g==null?void 0:g.toc)||l.toc).reduce(function(y,j){if(j.depth===2)y.push(N()({},j));else if(j.depth===3){var R=y[y.length-1];R&&(R.children=R.children||[],R.children.push(N()({},j)))}return y},[])},[g==null?void 0:g.toc,l.toc]),O=B==="rtl",U=(0,u.useMemo)(function(){var y=l.frontmatter.author;return y?typeof y=="string"?y.split(",").map(function(j){return{name:j,avatar:"https://github.com/".concat(j,".png")}}):Array.isArray(y)?y:[]:[]},[l.frontmatter.author]);return(0,n.jsx)(To.Z.Provider,{value:G,children:(0,n.jsxs)(f.Col,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,n.jsx)(f.Affix,{children:(0,n.jsx)("section",{className:h.tocWrapper,children:(0,n.jsx)(f.Anchor,{className:h.toc,affix:!1,targetOffset:T.marginXXL,showInkInFixed:!0,items:x.map(function(y){var j;return{href:"#".concat(y.id),title:y.title,key:y.id,children:(j=y.children)===null||j===void 0?void 0:j.filter(function(R){return I||!H.includes(R.id)}).map(function(R){return{key:R.id,href:"#".concat(R.id),title:(0,n.jsx)("span",{className:$()(H.includes(R.id)&&"toc-debug"),children:R==null?void 0:R.title})}})}})})})}),(0,n.jsxs)("article",{className:$()(h.articleWrapper,{rtl:O}),children:[(t=l.frontmatter)!==null&&t!==void 0&&t.title?(0,n.jsxs)(f.Typography.Title,{style:{fontSize:30},children:[(o=l.frontmatter)===null||o===void 0?void 0:o.title,l.frontmatter.subtitle&&(0,n.jsx)("span",{style:{marginLeft:12},children:l.frontmatter.subtitle}),!E.startsWith("/components/overview")&&(0,n.jsx)(xe.Z,{title:(0,n.jsx)(a._H,{id:"app.content.edit-page"}),filename:l.frontmatter.filename})]}):null,l.frontmatter.date||l.frontmatter.author?(0,n.jsx)(f.Typography.Paragraph,{children:(0,n.jsxs)(f.Space,{children:[l.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(vo.Z,{})," ",X()(l.frontmatter.date).format("YYYY-MM-DD")]}),U.map(function(y){return(0,n.jsx)("a",{href:"https://github.com/".concat(y.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(f.Space,{size:3,children:[(0,n.jsx)(Ro,{name:y.name,avatar:y.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",y.name]})]})},y.name)})]})}):null,!l.frontmatter.__autoDescription&&l.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:m}),(((i=l.frontmatter)===null||i===void 0?void 0:i.zhihu_url)||((s=l.frontmatter)===null||s===void 0?void 0:s.yuque_url)||((d=l.frontmatter)===null||d===void 0?void 0:d.juejin_url))&&(0,n.jsx)(Ho,{zhihuLink:l.frontmatter.zhihu_url,yuqueLink:l.frontmatter.yuque_url,juejinLink:l.frontmatter.juejin_url}),l.frontmatter.filename&&(0,n.jsx)(bo.Z,{repo:"ant-design",owner:"ant-design",className:h.contributorsList,cache:!0,fileName:l.frontmatter.filename,renderItem:function(j,R){var nn;return!j||R?(0,n.jsx)(Oo,{}):(nn=j.username)!==null&&nn!==void 0&&nn.includes("github-actions")?null:(0,n.jsx)(f.Tooltip,{mouseEnterDelay:.3,title:"".concat(z({id:"app.content.contributors"}),": ").concat(j.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(j.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(f.Avatar,{size:"small",src:j.url,alt:j.username,children:j.username})})})},j.username)}})]}),(0,n.jsx)(No,{rtl:O}),(0,n.jsx)(fn,{})]})})},Po=Io,Zo=c(650010),Ge,Ve,$o=(0,A.kc)(function(r){var e=r.token,t=r.css,o=e.antCls,i=e.fontFamily,s=e.colorSplit;return{asideContainer:t(Ge||(Ge=p()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),i,o,o,o,o,o,o,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),mainMenu:t(Ve||(Ve=p()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: 0;
        width: 100%;
        height: 100%;
        max-height: 100vh;
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])))}}),Wo=function(){var e=(0,a.tx)(),t=(0,u.useContext)(q.Z),o=t.isMobile,i=t.theme,s=$o(),d=s.styles,m=Le(),l=M()(m,2),g=l[0],k=l[1],E=i.includes("dark"),b=(0,A.Fg)(),v=b.colorBgContainer,z=(0,n.jsx)(f.ConfigProvider,{theme:{components:{Menu:{itemBg:v,darkItemBg:v}}},children:(0,n.jsx)(f.Menu,{items:g,inlineIndent:30,className:d.asideContainer,mode:"inline",theme:E?"dark":"light",selectedKeys:[k],defaultOpenKeys:e==null?void 0:e.map(function(S){var h=S.title;return h}).filter(function(S){return S})})});return o?(0,n.jsx)(Zo.Z,{children:z},"Mobile-menu"):(0,n.jsx)(f.Col,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:d.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:z})})},Uo=Wo,Ke,Go=(0,A.kc)(function(r){var e=r.css;return{main:e(Ke||(Ke=p()([`
    display: flex;
    margin-top: 40px;
  `])))}}),Vo=function(e){var t=e.children,o=Go(),i=o.styles;return(0,n.jsxs)("main",{className:i.main,children:[(0,n.jsx)(ge,{}),(0,n.jsx)(Uo,{}),(0,n.jsx)(Po,{children:t})]})},Ko=Vo,Jo={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},Xo=function(){var e=(0,a.pC)(),t=(0,an.Z)(),o=t.pathname,i=t.search,s=t.hash,d=(0,J.Z)(Jo),m=M()(d,2),l=m[0],g=m[1],k=(0,u.useRef)(null),E=(0,u.useContext)(q.Z),b=E.direction,v=(0,a.WF)(),z=v.loading;(0,u.useLayoutEffect)(function(){g==="cn"?X().locale("zh-cn"):X().locale("en")},[]),(0,u.useEffect)(function(){var h=document.getElementById("nprogress-style");h&&(k.current=setTimeout(function(){var T;(T=h.parentNode)===null||T===void 0||T.removeChild(h)},0))},[]),(0,u.useEffect)(function(){var h,T=s.replace("#","");T&&((h=document.getElementById(decodeURIComponent(T)))===null||h===void 0||h.scrollIntoView())},[z,s]),u.useEffect(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",o+i),typeof window._hmt!="undefined"&&window._hmt.push(["_trackPageview",o+i])},[t]);var S=(0,u.useMemo)(function(){return["","/"].some(function(h){return h===o})||["/index"].some(function(h){return o.startsWith(h)})?(0,n.jsxs)(n.Fragment,{children:[e,(0,n.jsx)(fn,{})]}):o.startsWith("/docs/resource")?(0,n.jsx)(fo,{children:e}):o.startsWith("/theme-editor")?e:(0,n.jsx)(Ko,{children:e})},[o,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.ql,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:g==="cn"?"zh-CN":g,"data-direction":b,className:$()({rtl:b==="rtl"})}),(0,n.jsx)("title",{children:l==null?void 0:l.title}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{name:"description",content:l.description}),(0,n.jsx)("meta",{property:"og:title",content:l==null?void 0:l.title}),(0,n.jsx)("meta",{property:"og:description",content:l.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(on.ZP,{direction:b,locale:g==="cn"?mn.Z:void 0,children:[(0,n.jsx)(yt,{}),(0,n.jsx)(ao,{}),S]})]})},Yo=Xo},715778:function(_e,tn,c){c.d(tn,{Z:function(){return J}});var un=c(174219),M=c(97857),on=c.n(M),mn=c(585369),hn={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},$=hn,rn={lang:on()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},mn.Z),timePickerLocale:on()({},$)};rn.lang.ok="\u786E\u5B9A";var X=rn,Cn=X,a="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",u={locale:"zh-cn",Pagination:un.Z,DatePicker:X,TimePicker:$,Calendar:Cn,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:a,method:a,array:a,object:a,number:a,date:a,boolean:a,integer:a,float:a,regexp:a,email:a,url:a,hex:a},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},J=u}}]);
