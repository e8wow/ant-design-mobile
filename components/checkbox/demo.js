webpackJsonp([21,98],{421:function(n,s){"use strict";n.exports={content:[["p","Checkbox.AgreeItem (",["a",{title:null,href:"https://github.com/react-component/form"},"rc-form \u6587\u6863"],")"]],meta:{order:1,title:"\u534f\u8bae\u590d\u9009\u6846",filename:"components/checkbox/demo/agreeitem.md",id:"components-checkbox-demo-agreeitem"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Checkbox <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> createForm <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'rc-form\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> AgreeItem <span class="token operator" >=</span> Checkbox<span class="token punctuation" >.</span>AgreeItem<span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> AgreeItemExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >onClick</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >.</span><span class="token function" >getFieldsValue</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> getFieldProps <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token operator" >&lt;</span>AgreeItem data<span class="token operator" >-</span>seed<span class="token operator" >=</span><span class="token string" >"logId"</span>\n        <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token function" >getFieldProps</span><span class="token punctuation" >(</span><span class="token string" >\'agreeitem1\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n          initialValue<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n          valuePropName<span class="token punctuation" >:</span> <span class="token string" >\'checked\'</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n      <span class="token operator" >></span>\n        \u5df2\u9605\u8bfb\u534f\u8bae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span> e<span class="token punctuation" >.</span><span class="token function" >preventDefault</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u6253\u5f00\u534f\u8bae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u300a\u534f\u8bae\u94fe\u63a5\u300b<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>AgreeItem</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nAgreeItemExample <span class="token operator" >=</span> <span class="token function" >createForm</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >(</span>AgreeItemExample<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>AgreeItemExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:["pre",{lang:"__react"},["code","import { Checkbox } from 'antd-mobile';\nimport { createForm } from 'rc-form';\n\nconst AgreeItem = Checkbox.AgreeItem;\n\nlet AgreeItemExample = React.createClass({\n  onClick() {\n    console.log(this.props.form.getFieldsValue());\n  },\n  render() {\n    const { getFieldProps } = this.props.form;\n    return (\n      <AgreeItem data-seed=\"logId\"\n        {...getFieldProps('agreeitem1', {\n          initialValue: false,\n          valuePropName: 'checked',\n        })}\n      >\n        \u5df2\u9605\u8bfb\u534f\u8bae<a onClick={(e) => { e.preventDefault(); alert('\u6253\u5f00\u534f\u8bae'); }}>\u300a\u534f\u8bae\u94fe\u63a5\u300b</a>\n      </AgreeItem>\n    );\n  },\n});\n\nAgreeItemExample = createForm()(AgreeItemExample);\n\nReactDOM.render(<AgreeItemExample />, mountNode);"]]}},422:function(n,s){"use strict";n.exports={content:[["p","Checkbox.CheckboxItem (",["a",{title:null,href:"https://github.com/react-component/form"},"rc-form \u6587\u6863"],")"]],meta:{order:0,title:"\u5217\u8868\u9879\u590d\u9009\u6846",filename:"components/checkbox/demo/checkboxitem.md",id:"components-checkbox-demo-checkboxitem"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> List<span class="token punctuation" >,</span> Checkbox <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> createForm <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'rc-form\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> CheckboxItem <span class="token operator" >=</span> Checkbox<span class="token punctuation" >.</span>CheckboxItem<span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> CheckboxItemExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >onClick</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >.</span><span class="token function" >getFieldsValue</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> getFieldProps <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>form<span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span>\n          <span class="token attr-name" >renderHeader</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token string" >\'\u591a\u9879\u9009\u62e9\u64cd\u4f5c\'</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\n          <span class="token operator" >&lt;</span>CheckboxItem data<span class="token operator" >-</span>seed<span class="token operator" >=</span><span class="token string" >"logId"</span>\n            <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token function" >getFieldProps</span><span class="token punctuation" >(</span><span class="token string" >\'checkboxitem1\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n              initialValue<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n              valuePropName<span class="token punctuation" >:</span> <span class="token string" >\'checked\'</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n          <span class="token operator" >></span>\n            \u4f7f\u7528Ant Design Component\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>CheckboxItem</span><span class="token punctuation" >></span></span>\n          <span class="token operator" >&lt;</span>CheckboxItem\n            <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token function" >getFieldProps</span><span class="token punctuation" >(</span><span class="token string" >\'checkboxitem2\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n              initialValue<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n              valuePropName<span class="token punctuation" >:</span> <span class="token string" >\'checked\'</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n          <span class="token operator" >></span>\n            \u4e2a\u6027\u5316\u8c03\u6574\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>CheckboxItem</span><span class="token punctuation" >></span></span>\n          <span class="token operator" >&lt;</span>CheckboxItem\n            disabled\n            <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token function" >getFieldProps</span><span class="token punctuation" >(</span><span class="token string" >\'checkboxitem3\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n              initialValue<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n              valuePropName<span class="token punctuation" >:</span> <span class="token string" >\'checked\'</span><span class="token punctuation" >,</span>\n            <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n          <span class="token operator" >></span>\n            \u4e2a\u6027\u5316\u8c03\u6574\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>CheckboxItem</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nCheckboxItemExample <span class="token operator" >=</span> <span class="token function" >createForm</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >(</span>CheckboxItemExample<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>CheckboxItemExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:["pre",{lang:"__react"},["code","import { List, Checkbox } from 'antd-mobile';\nimport { createForm } from 'rc-form';\n\nconst CheckboxItem = Checkbox.CheckboxItem;\n\nlet CheckboxItemExample = React.createClass({\n  onClick() {\n    console.log(this.props.form.getFieldsValue());\n  },\n  render() {\n    const { getFieldProps } = this.props.form;\n    return (\n      <div>\n        <List\n          renderHeader={() => '\u591a\u9879\u9009\u62e9\u64cd\u4f5c'}\n        >\n          <CheckboxItem data-seed=\"logId\"\n            {...getFieldProps('checkboxitem1', {\n              initialValue: true,\n              valuePropName: 'checked',\n            })}\n          >\n            \u4f7f\u7528Ant Design Component\n          </CheckboxItem>\n          <CheckboxItem\n            {...getFieldProps('checkboxitem2', {\n              initialValue: false,\n              valuePropName: 'checked',\n            })}\n          >\n            \u4e2a\u6027\u5316\u8c03\u6574\n          </CheckboxItem>\n          <CheckboxItem\n            disabled\n            {...getFieldProps('checkboxitem3', {\n              initialValue: true,\n              valuePropName: 'checked',\n            })}\n          >\n            \u4e2a\u6027\u5316\u8c03\u6574\n          </CheckboxItem>\n        </List>\n      </div>\n    );\n  },\n});\n\nCheckboxItemExample = createForm()(CheckboxItemExample);\n\nReactDOM.render(<CheckboxItemExample />, mountNode);"]]}},605:function(n,s,a){n.exports={agreeitem:a(421),checkboxitem:a(422)}}});