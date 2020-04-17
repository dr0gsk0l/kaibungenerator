var ansstr="";
var ansimg="";
var meisi=false;
document.getElementById("ansstring").innerText="ボタンを押してね";

var TOMATO='<img src="https://4.bp.blogspot.com/-FlkEDz3wQSc/Vtw1wrbo6AI/AAAAAAAA4fk/k8tfPNkMvb4/s800/tomato_red.png" alt="トマト" width="100px" height="100px"';
var MAMA='<img src="https://3.bp.blogspot.com/-Tsx2ag1qcVk/UNO5bQwAElI/AAAAAAAAIx8/jwOIg9WO8L8/s1600/apron_mama.png" alt="ママ" width="50px" height="100px">';
var MATO='<img src="https://3.bp.blogspot.com/-OBwWX1xu1xc/WGnPb8Ly_HI/AAAAAAABA60/Qu-WGOBcSicVM8iSXq2xxXQcpRZE7zyWQCLcB/s800/sports_archery_mato1.png" alt="的" width="100px" height="100px">';
var TO='<img src="https://2.bp.blogspot.com/-6noe-4G5FNU/V2ubhr0UDKI/AAAAAAAA7pY/nHp2zGXHshkiwzUxYa5RQVf-pcwn31GSACLcB/s800/door_half_open.png" alt="戸" width="50px" height="100px">';
var MA='<img src="https://3.bp.blogspot.com/-m31LpaTSzy4/U32NRZQpjbI/AAAAAAAAgr0/xx3csFTzTJ8/s800/character_akuma.png" alt="悪魔" width="60px" height="100px">';
document.getElementById("to").onclick=function(){
  if(ansimg.length){
    ansimg="";
    ansstr="";
  }
  console.log("と");
  ansstr+='と';
  document.getElementById("ansstring").innerText=ansstr;
  console.log(ansstr);
}

document.getElementById("ma").onclick=function(){
  if(ansimg.length){
    ansimg="";
    ansstr="";
  }
  console.log("ま");
  ansstr+='ま';
  document.getElementById("ansstring").innerText=ansstr;
  console.log(ansstr);
}

document.getElementById("reset").onclick=function(){
  ansstr="";
  ansimg="";
  document.getElementById("ansstring").innerText="ボタンを押してね";
  document.getElementById("ansimg").innerHTML=ansimg;
}

document.getElementById("make").onclick=function(){
  if(ansimg.length)return;
  for(var i=ansstr.length-1;i>=0;i--)ansstr+=ansstr[i];
  ansstr+='###########';
  var tmp="";
  for(var i=0;;){
    if(ansstr[i]=='#')break;
    if(meisi&&ansstr[i]=='と'&&ansstr[i+1]!='#'){
      tmp+='と';
      meisi=false;
      i++;continue;
    }
    if(ansstr.substr(i,3)=='とまと'){
      if(meisi)tmp+='，';
      tmp+='トマト';
      ansimg+=TOMATO+' ';
      i+=3;
      meisi=true;
      continue;
    }
    if(ansstr.substr(i,2)=='まま'){
      if(meisi)tmp+='，';
      tmp+='ママ';
      ansimg+=MAMA+' ';
      i+=2;
      meisi=true;
      continue;
    }
    if(ansstr.substr(i,2)=='まと'){
      if(meisi)tmp+='，';
      tmp+='的';
      ansimg+=MATO+' ';
      i+=2;
      meisi=true;
      continue;
    }
    if(ansstr[i]=='と'){
      if(meisi)tmp+='，';
      tmp+='戸';
      ansimg+=TO+' ';
      i++;
      meisi=true;
      continue;
    }
    if(ansstr[i]=='ま'){
      if(meisi)tmp+='，';
      tmp+='魔';
      ansimg+=MA+' ';
      i++;
      meisi=true;
      continue;
    }
    console.log('error');
    break;
  }
  document.getElementById("ansstring").innerText=tmp;
  document.getElementById("ansimg").innerHTML=ansimg;
}
