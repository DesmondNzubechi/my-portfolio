var a = document.getElementById('sidebar');
var b = document.getElementById('open');
var c = document.getElementById('close');
var d = document.getElementById('form');
var e = document.getElementById('cancel');
var f = document.getElementById('sms');
b.onclick=function myW(argument) {
	// body...
	a.style.display = 'block';
	b.style.display = 'none';
	c.style.display = 'block';
} ;
c.onclick=function() {
	a.style.display = 'none';
	b.style.display = 'block';
}   
f.onclick=function() {
	d.style.display = 'block';
	f.style.display = 'none';
}   
e.onclick=function() {
	d.style.display = 'none';
	f.style.display = 'block';
}   ;
send.onclick=function() {
	document.getElementById('aler').innerHTML = alert('Please exercise some patience for me, i am still working on backend of this form');
}