# 视频

## flv.js

一个实现了在 HTML5 视频中播放 FLV 格式视频的 JavaScript 库。它的工作原理是将 FLV 文件流转码复用成 ISO BMFF（MP4 碎片）片段，然后通过 Media Source Extensions 将 MP4 片段喂进浏览器。