const clock=document.getElementById('clock');
const date=document.getElementById('date');
const timezone=document.querySelector('#timezone')
setInterval(function(){
    const date=new Date();
    clock.innerHTML=date.toLocaleTimeString()
},1000)
const d=new Date();
date.innerHTML=d.toDateString()
timezone.innerHTML=Intl.DateTimeFormat().resolvedOptions().timeZone

   