/**
 * Pure JavaScript to return to the top of the plugin
 * @Author: iTanken
 * @Refer: hzwangzhiwei
 * @Date: 2016-12-02 12:11:44
 */
! function() {
  var btn, b, d;
  function iGoTop() {
    initStyle();
    initElement();
    b = document.body;
    d = document.documentElement;
    btn = document.getElementById("gotop");
    window.onscroll = setDisplay();
    btn.onclick = function () { 
      btn.style.display="none"; 
      window.onscroll = null; 
      btn.timer = setInterval(function() { 
        d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1); 
        b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1); 
        if((d.scrollTop + b.scrollTop) == 0) 
          clearInterval(btn.timer, window.onscroll = setDisplay()); 
      }, 10);
    };
  }
  function setDisplay() {
    btn.style.display = (d.scrollTop + b.scrollTop > 500) ? "block" : "none"} 
  }
  // 通过标签名获取所有同名元素
  function iGetElesByTag(name) {
    return document.getElementsByTagName(name)
  }
  // 添加页面元素
  function iAddNode(tag) {
    return document.createElement(tag);
  }
  // 向元素内部追加子元素
  function iAppend(p, c) {
    p.appendChild(c);
  }
  // 样式
  function initStyle() {
    var tmp = iAddNode("div");
    tmp.innerHTML = '<style type="text/css">.gotop{ width:32px; height:32px; } #gotop{ position:fixed; bottom:60px; right:10px;text-align:center;display:none; cursor:pointer;  z-index:100;}*html #gotop{ position:absolute; bottom:auto; top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-(parseInt(this.currentStyle.marginBottom,10)||0)));}</style>';
    iAppend(iGetElesByTag("body")[0], tmp.lastChild);
  }
  // 元素
  function initElement() {
    var iEle = iAddNode("div");
    iEle.id = "gotop";
    iEle.className = "gotop";
    iEle.title = "返回顶部";
    iEle.innerHTML = '<img class="gotop" src="http://git.itanken.cn/gotop.svg" border="0" alt="返回顶部">';
    iAppend(iGetElesByTag("body")[0], iEle);
  }
  
  iGoTop(); // exec return top function
}();
