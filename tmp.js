var ansstr="",ansimg="",meisi=false,idx,tmp="";
const tweetDivided = document.getElementById('tweet');
const mojiDivided = document.getElementById('moji');

document.getElementById("ansstring").innerText="ボタンを押してね";
makebutton("to","と");
makebutton("ma","ま");
document.getElementById("to").onclick=function(){pushed('と')};
document.getElementById("ma").onclick=function(){pushed('ま')};

var TOMATO='<img src="https://4.bp.blogspot.com/-FlkEDz3wQSc/Vtw1wrbo6AI/AAAAAAAA4fk/k8tfPNkMvb4/s800/tomato_red.png" alt="トマト" width="100px" height="100px">';
var TOMATO2='<img src="https://2.bp.blogspot.com/-i3xPt3TISb0/UWgWlyylbUI/AAAAAAAAQGo/JUtkdKSkloc/s1600/vegetable_tomato.png" alt="トマト2" width="120px" height="100px">';
var MAMA='<img src="https://3.bp.blogspot.com/-Tsx2ag1qcVk/UNO5bQwAElI/AAAAAAAAIx8/jwOIg9WO8L8/s1600/apron_mama.png" alt="ママ" width="50px" height="100px">';
var MAMA2='<img src="https://3.bp.blogspot.com/-x2DitymfGAo/UnyHS2DYEZI/AAAAAAAAahQ/HDhiTG4b4n8/s800/cooking_mama.png" alt="ママ2" width="100px" height="100px">';
var MAMA3='<img src="https://2.bp.blogspot.com/-M28y-PtBkHM/Uj_28pHhwWI/AAAAAAAAYE0/9HYKZ4HErwE/s800/mother_angry.png" alt="ママ3" width="90px" height="100px">';
var MATO='<img src="https://3.bp.blogspot.com/-OBwWX1xu1xc/WGnPb8Ly_HI/AAAAAAABA60/Qu-WGOBcSicVM8iSXq2xxXQcpRZE7zyWQCLcB/s800/sports_archery_mato1.png" alt="的" width="100px" height="100px">';
var TO='<img src="https://2.bp.blogspot.com/-6noe-4G5FNU/V2ubhr0UDKI/AAAAAAAA7pY/nHp2zGXHshkiwzUxYa5RQVf-pcwn31GSACLcB/s800/door_half_open.png" alt="戸" width="50px" height="100px">';
var MA='<img src="https://3.bp.blogspot.com/-m31LpaTSzy4/U32NRZQpjbI/AAAAAAAAgr0/xx3csFTzTJ8/s800/character_akuma.png" alt="悪魔" width="60px" height="100px">';
var HITOME='<img src="https://3.bp.blogspot.com/-9_vm6fBg8dw/V_4bzTx9OaI/AAAAAAAA-vc/7H75GLosPTYvV8Nd-K5zGTtviYzZQpFMwCLcB/s800/pose_nozoku_blind.png" alt="人目" width="100px" height="100px">';
var HITOMATOME='<img src="https://3.bp.blogspot.com/-pF9-RWRttnE/UV1JHjxu-dI/AAAAAAAAPTY/roqGEIUYZRA/s450/key.png" alt="ひとまとめ" width="100px" height="100px">';
var MATOME='<img src="https://4.bp.blogspot.com/-trtHL6GrztE/WWXXWKOmVDI/AAAAAAABFhk/75aMZKZCReErCPiZenZpT00mZvNjuV6XgCLcBGAs/s800/website_matome_site.png" alt="まとめ" width="100px" height="100px">';
var HIHI='<img src="https://2.bp.blogspot.com/-yCY7N5N-UNg/ViipUz6xPRI/AAAAAAAAz1g/QtFlHr5sSrk/s800/eto_saru_mark.png" alt="ヒヒ" width="100px" height="100px">';
var HIME='<img src="https://1.bp.blogspot.com/-dQHPshzm_tY/WaOePIs3e9I/AAAAAAABGLI/bvasBK5wZPIVPskCglfUp5itLsFfJJRGQCLcBGAs/s180-c/royal_princess.png" alt="姫" width="100px" height="100px">';
var MAME='<img src="https://1.bp.blogspot.com/-UfAoUzcJCMs/Udy6oyQbj6I/AAAAAAAAWKQ/bD4waahGR6I/s400/food_endoumame.png" alt="豆" width="100px" height="100px">';
var HITO='<img src="https://1.bp.blogspot.com/-sT0aNSDSNd8/W6DT3AoIEtI/AAAAAAABO_4/OH0B97M-Hu8lyzYFM6V1m-z0qCx-WV_bgCLcBGAs/s800/talk4_green_man.png" alt="人" width="100px" height="100px">';
var HITO2='<img src="https://1.bp.blogspot.com/-BU_JEXiwX-U/XRHH8c8Se3I/AAAAAAABTYU/i1I_GS0HawoaiktSasQM5M5tbb1Z_NgaQCLcBGAs/s800/ryuugakusei_daigaku_black_man.png" alt="人" width="100px" height="100px">';
var HITO3='<img src="https://4.bp.blogspot.com/-3ucwJP0Yc3Y/W6DT4kRm1BI/AAAAAAABPAI/FY6w2WWEVQcleBVoNKXWGGFUNVBfB9LkwCLcBGAs/s800/talk9_brown_man.png" alt="人" width="100px" height="100px">';
var HITO4='<img src="https://1.bp.blogspot.com/-dgtkP4wAOnk/W6DT38rTvOI/AAAAAAABPAA/fvIweeOxx9AfkNTFQ3OOKXzcPXqlzH7VACLcBGAs/s800/talk7_blue_man.png" alt="人" width="100px" height="100px">';
var HITO5='<img src="https://1.bp.blogspot.com/-HqzQ05aA7xE/XWS5iiw_2uI/AAAAAAABUTs/VJuekgkFXDU2PLpdQYnXNrce42U9nY0rwCLcBGAs/s1600/kakedasu_people2.png" alt="人" width="100px" height="100px">';
var HIMA='<img src="https://3.bp.blogspot.com/-fImkQ-EyglU/VJF_oRM5p4I/AAAAAAAAp5I/N4jypFga8ew/s400/hima_taikutsu.png" alt="暇" width="100px" height="100px">';
var HI='<img src="https://3.bp.blogspot.com/-bTpI2R-Kxe0/Viio_KII7WI/AAAAAAAAztM/oNokVj_uJyI/s400/honoo_hi_fire.png" alt="火" width="100px" height="100px">';
var ME='<img src="https://2.bp.blogspot.com/-UNeJcdfWzIw/Wn1ZZObzwbI/AAAAAAABKL0/pyLhnj-bz8clSvYGOKpCNvZ_4kXxoXJcgCLcBGAs/s800/body_eye_color9_black.png" alt="目" width="100px" height="100px">';
var SHINBUNSHI='<img src="https://3.bp.blogspot.com/--hFzOAXOk-Y/Wn1aH38lQvI/AAAAAAABKSQ/bFMS6Hoae8kQpwi2y4SzdEBScWCC7j6RACLcBGAs/s400/news_shinbunshi.png" alt="新聞紙" width="100px" height="100px">';

function makebutton(ID,VALUE){
  var anchor=document.createElement('input');
  anchor.setAttribute("type","button");
  anchor.setAttribute("id",ID);
  anchor.setAttribute("value",VALUE);
  mojiDivided.appendChild(anchor);
}

function pushed(moji){
  console.log("pushed "+moji);
  if(ansimg.length)document.getElementById("ansimg").innerHTML=ansimg=ansstr="";
  ansstr+=moji;
  document.getElementById("ansstring").innerText=ansstr;
  console.log(ansstr);
  if(ansstr.length>60&&mojiDivided.childElementCount==2){
    makebutton("hi","ひ");
    document.getElementById("hi").onclick=function(){pushed('ひ')};
  }
  if(ansstr.length>120&&mojiDivided.childElementCount==3){
    makebutton("me","め");
    document.getElementById("me").onclick=function(){pushed('め')};
  }
  if(ansstr.length>300&&mojiDivided.childElementCount==4){
    makebutton("shinbunshi","しんぶんし");
    document.getElementById("shinbunshi").onclick=function(){pushed('しんぶんし')};
  }
}

document.getElementById("reset").onclick=function(){
  document.getElementById("ansstring").innerText="ボタンを押してね";
  document.getElementById("ansimg").innerHTML=ansstr=ansimg="";
}

function change(num,from,to,img){
  if(ansstr.substr(idx,num)!=from)return false;
  tmp+=to;
  idx+=num;
  ansimg+=img+' ';
  meisi=true;
  return true;
}

document.getElementById("make").onclick=function(){
  if(ansimg.length)return;
  for(var i=ansstr.length-1;i>=0;i--)ansstr+=ansstr[i];
  ansstr+='###########';
  tmp="";
  idx=0;
  while(ansstr[idx]!='#'){
    if(meisi&&ansstr[idx]=='と'&&ansstr[idx+1]!='#'){
      tmp+='と';
      meisi=false;
      idx++;continue;
    }
    if(meisi)tmp+='、';
    if(idx%30==15){if(change(3,'とまと','トマト',TOMATO2))continue;}
    else if(change(3,'とまと','トマト',TOMATO))continue;
    if(idx%40==10){if(change(2,'まま','ママ',MAMA2))continue;}
    else if(idx%40==21){if(change(2,'まま','ママ',MAMA3))continue;}
    else if(change(2,'まま','ママ',MAMA))continue;
    if(change(2,'まめ','豆',MAME))continue;
    if(change(3,'まとめ','まとめ',MATOME))continue;
    if(change(5,'ひとまとめ','ひとまとめ',HITOMATOME))continue;
    if(change(2,'ひひ','ヒヒ',HIHI))continue;
    if(change(3,'ひとめ','人目',HITOME))continue;
    if(change(2,'ひめ','姫',HIME))continue;
    if(idx%5==0)if(change(2,'ひと','人',HITO))continue;
    if(idx%5==1)if(change(2,'ひと','人',HITO2))continue;
    if(idx%5==2)if(change(2,'ひと','人',HITO3))continue;
    if(idx%5==3)if(change(2,'ひと','人',HITO4))continue;
    if(idx%5==4)if(change(2,'ひと','人',HITO5))continue;
    if(change(2,'ひま','暇',HIMA))continue;
    if(change(2,'まと','的',MATO))continue;
    if(change(1,'と','戸',TO))continue;
    if(change(1,'ま','魔',MA))continue;
    if(change(1,'ひ','火',HI))continue;
    if(change(1,'め','目',ME))continue;
    if(change(5,'しんぶんし','新聞紙',SHINBUNSHI))continue;
    console.log('error');
    break;
  }
  document.getElementById("ansstring").innerText=tmp;
  document.getElementById("ansimg").innerHTML=ansimg;
  
  ansimg+="あ";
  meisi=false;
  
  if(tweetDivided.firstChild)return;
  const anchor = document.createElement('a');
  const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
    + encodeURIComponent('クソ回文ジェネレーター')
    + '&ref_src=twsrc%5Etfw';
  anchor.setAttribute('href', hrefValue);
  anchor.className = 'twitter-hashtag-button';
  anchor.setAttribute('data-text', tmp+' https://dr0gsk0l.github.io/kaibungenerator/generate.html');
  anchor.innerText = 'Tweet #クソ回文ジェネレーター';
  tweetDivided.appendChild(anchor);
  
  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  tweetDivided.appendChild(script);
}
