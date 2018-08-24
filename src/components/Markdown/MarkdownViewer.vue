<template>
  <div :data-tipe-ui="$options.name">
    <tipe-scrollable>
      <vue-markdown :source="value"/>
    </tipe-scrollable>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import VueMarkdown from 'vue-markdown'
import TipeScrollable from '@/components/Scrollable'

export default {
  name: 'TipeMarkdownViewer',
  components: {
    VueMarkdown,
    TipeScrollable
  },
  props: {
    value: vueTypes.string.def('')
  }
}
</script>

<style>
[data-tipe-ui='TipeMarkdownViewer'] {
  height: 100%;
  width: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  word-wrap: break-word;
  line-height: 1.5rem;
}

[data-tipe-ui='TipeMarkdownViewer'] a {
  background-color: transparent;
}

[data-tipe-ui='TipeMarkdownViewer'] a:active,
[data-tipe-ui='TipeMarkdownViewer'] a:hover {
  outline-width: 0;
}

[data-tipe-ui='TipeMarkdownViewer'] strong {
  font-weight: inherit;
}

[data-tipe-ui='TipeMarkdownViewer'] strong {
  font-weight: bolder;
}

[data-tipe-ui='TipeMarkdownViewer'] h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

[data-tipe-ui='TipeMarkdownViewer'] img {
  border-style: none;
}

[data-tipe-ui='TipeMarkdownViewer'] code,
[data-tipe-ui='TipeMarkdownViewer'] kbd,
[data-tipe-ui='TipeMarkdownViewer'] pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

[data-tipe-ui='TipeMarkdownViewer'] hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

[data-tipe-ui='TipeMarkdownViewer'] input {
  font: inherit;
  margin: 0;
}

[data-tipe-ui='TipeMarkdownViewer'] input {
  overflow: visible;
}

[data-tipe-ui='TipeMarkdownViewer'] [type='checkbox'] {
  box-sizing: border-box;
  padding: 0;
}

[data-tipe-ui='TipeMarkdownViewer'] * {
  box-sizing: border-box;
}

[data-tipe-ui='TipeMarkdownViewer'] input {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

[data-tipe-ui='TipeMarkdownViewer'] a {
  color: #0366d6;
  text-decoration: none;
}

[data-tipe-ui='TipeMarkdownViewer'] a:hover {
  text-decoration: underline;
}

[data-tipe-ui='TipeMarkdownViewer'] strong {
  font-weight: 600;
}

[data-tipe-ui='TipeMarkdownViewer'] hr {
  height: 0;
  margin: 15px 0;
  overflow: hidden;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #dfe2e5;
}

[data-tipe-ui='TipeMarkdownViewer'] hr::before {
  display: table;
  content: '';
}

[data-tipe-ui='TipeMarkdownViewer'] hr::after {
  display: table;
  clear: both;
  content: '';
}

[data-tipe-ui='TipeMarkdownViewer'] table {
  border-spacing: 0;
  border-collapse: collapse;
}

[data-tipe-ui='TipeMarkdownViewer'] td,
[data-tipe-ui='TipeMarkdownViewer'] th {
  padding: 0;
}

[data-tipe-ui='TipeMarkdownViewer'] h1,
[data-tipe-ui='TipeMarkdownViewer'] h2,
[data-tipe-ui='TipeMarkdownViewer'] h3,
[data-tipe-ui='TipeMarkdownViewer'] h4,
[data-tipe-ui='TipeMarkdownViewer'] h5,
[data-tipe-ui='TipeMarkdownViewer'] h6 {
  margin-top: 0;
  margin-bottom: 0;
}

[data-tipe-ui='TipeMarkdownViewer'] h1 {
  font-size: 32px;
  font-weight: 600;
}

[data-tipe-ui='TipeMarkdownViewer'] h2 {
  font-size: 24px;
  font-weight: 600;
}

[data-tipe-ui='TipeMarkdownViewer'] h3 {
  font-size: 20px;
  font-weight: 600;
}

[data-tipe-ui='TipeMarkdownViewer'] h4 {
  font-size: 16px;
  font-weight: 600;
}

[data-tipe-ui='TipeMarkdownViewer'] h5 {
  font-size: 14px;
  font-weight: 600;
}

[data-tipe-ui='TipeMarkdownViewer'] h6 {
  font-size: 12px;
  font-weight: 600;
}

[data-tipe-ui='TipeMarkdownViewer'] p {
  margin-top: 0;
  margin-bottom: 10px;
}

[data-tipe-ui='TipeMarkdownViewer'] blockquote {
  margin: 0;
}

[data-tipe-ui='TipeMarkdownViewer'] ul,
[data-tipe-ui='TipeMarkdownViewer'] ol {
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}

[data-tipe-ui='TipeMarkdownViewer'] ol ol,
[data-tipe-ui='TipeMarkdownViewer'] ul ol {
  list-style-type: lower-roman;
}

[data-tipe-ui='TipeMarkdownViewer'] ul ul ol,
[data-tipe-ui='TipeMarkdownViewer'] ul ol ol,
[data-tipe-ui='TipeMarkdownViewer'] ol ul ol,
[data-tipe-ui='TipeMarkdownViewer'] ol ol ol {
  list-style-type: lower-alpha;
}

[data-tipe-ui='TipeMarkdownViewer'] dd {
  margin-left: 0;
}

[data-tipe-ui='TipeMarkdownViewer'] code {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
  font-size: 12px;
}

[data-tipe-ui='TipeMarkdownViewer'] pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
  font-size: 12px;
}
</style>
