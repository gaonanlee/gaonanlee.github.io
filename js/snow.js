function back1()
{
	document.getElementById("backup1").src="../img/top1.png";
}
function back2()
{
	document.getElementById("backup1").src="../img/top.png";
}
var timer,height;
function gotop()
{
	timer=setInterval("runtotop()",1);
}
function runtotop()
{
	height=document.activeElement.scrollTop||document.body.scrollTop;
	height-=70;
	if(height>0)
	{
		window.scrollTo(0,height);
	}
	else
	{
		window.scrollTo(0,0);
		clearInterval(timer);
	}
}
$(function(){
	var height=1000;
	offset=Math.round(Math.floor(Math.random()*1000));
	function scrolll()
	{
		offset=offset>1000?(offset-height):offset+1;
		$("#lay").css("background-position","50% "+offset+"px");
		setTimeout(function(){scrolll();},40);
	}
	scrolll();
})	// JavaScript Document