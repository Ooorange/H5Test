/**
 * 鼠标经过产生提示框
 * Created by orange on 16/5/25.
 */
var className="tooltip-box";
function showTips(obg,id,html,widht,height) {
    if (document.getElementById(id)==null){
        var tooltips;
        tooltips=document.createElement('div');
        tooltips.className=className;
        tooltips.id=id;
        tooltips.innerHTML=html;
        tooltips.style.width=widht?widht+"px":"auto";
        tooltips.style.height=height?height+"px":"auto";
        tooltips.style.position='absolute';
        tooltips.style.display='block';

        var top=obg.offsetTop+20;
        var left=obg.offsetLeft;
        tooltips.style.top=top+'px';
        tooltips.style.left=left+'px';
        obg.appendChild(tooltips);
        obg.onmouseout=function () {
            setTimeout(function () {
                document.getElementById(id).style.display='none';
            },500);

        }

    }else {
        document.getElementById(id).style.display='block';
    }
}

var weibo=document.getElementById('author');
var authorName=document.getElementById('capture');

weibo.onmousemove=function(){
    showTips(this,"weibo","黄城弹框测试",200);
};

authorName.onmousemove=function () {
    var link="<iframe src='http://search.jikexueyuan.com/course/?q=javascript%E5%AE%9E%E6%88%98&page=1' width='400' height='500'/>";
    showTips(this,"capture",link,500,500);
};