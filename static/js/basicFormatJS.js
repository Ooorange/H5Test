var ar=['今天',1243,true,'哈哈'];
var ar2=['明天','是','礼拜','happy'];
var ar3=['后天','是','礼拜1','bad'];
console.log('原始ar:'+ar);
console.log('原始ar2:'+ar2);

console.log('拼接ar2后:'+ar.concat(ar2)+ar.concat(ar3));


//加入其他字符
ar2.join('--');
console.log('ar2加入--后'+ar2.sort());
