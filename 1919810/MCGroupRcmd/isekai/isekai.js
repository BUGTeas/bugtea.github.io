var isekaijs = srcFnt + "?" + Math.random()
var isekaihref = window.location.href
loadJS(isekaijs);
history.pushState("","",isekaihref.substring(0,isekaihref.length - 9))
console.log("已跳转到" + isekaijs)