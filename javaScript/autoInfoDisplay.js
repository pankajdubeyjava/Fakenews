
  let mystring = '" The trust of the innocent is the liar’s most useful tool"— Stephen King';
  let myarray= mystring.split("");
  let looptimer;

  function framelooper(){
      if(myarray.length>0){
          document.getElementById("mytypingtext").innerHTML +=myarray.shift();
      }else{
          clearTimeout(looptimer);
      }
      
      looptimer=setTimeout('framelooper()',121);

  }
