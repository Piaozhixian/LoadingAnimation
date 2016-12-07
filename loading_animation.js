/**
 * Created by piao on 12/7/16.
 */
//页面开始加载时执行加载动画
$(document).ready(function()
{
    // 设置四个用于加载的正方形
    $('#loading-animation-area').html("" +
        "<table id='show-loading-animation'>" +
        "<tr><td><div class='loading-square1'></div>" +
        "<div class='loading-square2'></div>" +
        "<div class='loading-square3'></div>" +
        "<div class='loading-square4'></div></td></tr></table>" +
        "");
});
//页面加载完成后关闭加载动画
$(window).load(function(){
    //删除id为show-loading-animation的子标签
    document.body.removeChild(document.getElementById("loading-animation-area"));
});
