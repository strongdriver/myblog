window.onload=function(){


var box=this.document.getElementsByClassName("re")[0]; var lik=box.getElementsByTagName("li");

function fun(i,j){//转换图⽚函数，就是把透明度改了⼀下

lik[i].style.opacity=1;

lik[j].style.opacity=0;

lik[i+5].style.backgroundColor="#ffffff";//改⼀下⼩图标

lik[j+5].style.backgroundColor="#00000000"


}

fun(0,1);//初始化下

var i =0;

function auto(){//轮播循环函数

if(++i>=5){

i=0;

fun(0,4);

}

else fun(i,i-1);

}


timer=this.setInterval(auto,2000);

box.onmouseover=function(){//⿏标划上去，停⽌轮播 console.log('good');

clearInterval(timer);

}

box.onmouseout=function(){//⿏标划出，继续轮播

timer =setInterval(auto,2000);//调⽤定时器

}

var j =0;


for(;j<5;j++){//点击⼩图标也可以转换图⽚

lik[j+5].ind=j;

lik[j+5].onclick=function(){

fun(this.ind,i)

i=this.ind;

}

}

}
