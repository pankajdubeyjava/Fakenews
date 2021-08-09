
function rendertime(){
    let currenttime=new Date();
    let diem ="AM";
    let hour= currenttime.getHours();
    let min=currenttime.getMinutes();
    let sec=currenttime.getSeconds();
    
    if(hour==0){
        hour=12;
    }
    else if(hour>12){
        hour=hour-12;
        diem="PM"
    }
    if(hour<10){
        hour="0" + hour;  
    }
    if(min<10){
        min="0" + min;  
    }
    if(sec<10){
        sec="0" + sec;  
    }
    var myclock= document.getElementById('clockdisplay');
    myclock.textContent = hour+ ":"+min +":" +sec +" "+diem;

    setTimeout('rendertime()',1000);
}

