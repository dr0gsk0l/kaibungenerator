var ansstr="",ansimg="",meisi=false,idx,tmp="",cntplay=0,rndm=0,mojinagasa,tangosuu;
var shuruisuu=new Set();
var tango=[];
var yomiage = new SpeechSynthesisUtterance();
yomiage.lang = 'ja-JP';
yomiage.rate = 1.0;
const tweetDivided = document.getElementById('tweet');
const mojiDivided = document.getElementById('moji');
const submitDivided = document.getElementById('Make');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var MAKE=document.createElement('input');
MAKE.setAttribute("type","button");
MAKE.setAttribute("id","make");
MAKE.setAttribute("value","回文作成");
submitDivided.appendChild(MAKE);

document.getElementById("ansstring").innerText="ボタンを押してね";
makebutton("to","と");
makebutton("ma","ま");
document.getElementById("to").onclick=function(){pushed('と')};
document.getElementById("ma").onclick=function(){pushed('ま')};

function makebutton(ID,VALUE){
  var anchor=document.createElement('input');
  anchor.setAttribute("type","button");
  anchor.setAttribute("id",ID);
  anchor.setAttribute("value",VALUE);
  mojiDivided.appendChild(anchor);
}

function pushed(moji){
  console.log("pushed "+moji);
  if(ansimg.length){
    document.getElementById("ansimg").innerHTML=document.getElementById("point").innerText=ansimg=ansstr="";
    tango=[];
  }
  ansstr+=moji;
  document.getElementById("ansstring").innerText=ansstr;
  console.log(ansstr);
  if(ansstr.length>10&&mojiDivided.childElementCount==2){
    makebutton("hi","ひ");
    document.getElementById("hi").onclick=function(){pushed('ひ')};
  }
  if(ansstr.length>20&&mojiDivided.childElementCount==3){
    makebutton("me","め");
    document.getElementById("me").onclick=function(){pushed('め')};
  }
  if(ansstr.length>30&&mojiDivided.childElementCount==4){
    makebutton("ka","か");
    document.getElementById("ka").onclick=function(){pushed('か')};
  }
  if(ansstr.length>100&&mojiDivided.childElementCount==5){
    makebutton("shinbunshi","しんぶんし");
    document.getElementById("shinbunshi").onclick=function(){pushed('しんぶんし')};
  }
  if(ansstr=="まままままままままま"){
    document.getElementById("make").value="魔獣作成";
    document.getElementById("letsmake").innerText="君だけの魔獣を作ろう!";
    document.title="魔獣ジェネレーター";
    $('#ansstring').css('color','White');
    $('#letsmake').css('color','White');
    $('body').css('background-image','url(https://4.bp.blogspot.com/-He_mXZIlM2k/V8jqWIVG1jI/AAAAAAAA9dQ/jp7ui0iGU4QEWCKzaWKUaZiR5QqHoLqYQCLcB/s2000/bg_hell_jigoku.jpg)');
  }
  else{
    document.getElementById("make").value=document.h1="回文作成";
    document.getElementById("letsmake").innerText="君だけの回文を作ろう!";
    document.title="回文ジェネレーター";
    $('#ansstring').css('color',"Black");
    $('#letsmake').css('color','Black');
    $('body').css('background-image', 'none');
  }
}

document.getElementById("reset").onclick=function(){
  document.getElementById("ansstring").innerText="ボタンを押してね";
  document.getElementById("ansimg").innerHTML=document.getElementById("point").innerText=ansstr=ansimg="";
  tango=[];
}

function change(num,from,to,img){
  if(ansstr.substring(idx,idx+num)!=from)return false;
  tmp+=to;
  idx+=num;
  ansimg+=img+' ';
  meisi=true;
  tangosuu++;
  if(from=='ましんぶんし')tangosuu++;
  shuruisuu.add(to);
  tango.push(from);
  return true;
}

document.getElementById("make").onclick=function(){
  if(ansstr=="まままままままままま"){
    var now=new Date();
    document.getElementById("ansimg").innerHTML=MAJU[now%11];
    document.getElementById("ansstring").innerText=MAJUNAME[now%11];
    ansimg="まじ";
    while (tweetDivided.firstChild){
      tweetDivided.removeChild(tweetDivided.firstChild);
    }
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
      + encodeURIComponent('クソ魔獣ジェネレーター')
      + '&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', MAJUNAME[now%11]+' https://dr0gsk0l.github.io/kaibungenerator/tmp.html');
    anchor.innerText = 'Tweet #クソ魔獣ジェネレーター';
    tweetDivided.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);
    return;
  }
  if(ansimg.length)return;
  if(++cntplay==3){
    document.getElementById("Link").innerText='回文部の作品を見る';
    document.getElementById("Link").href='https://twitter.com/Ky_oto_yK';
  }
  if(cntplay==5){
    document.getElementById("Link2").innerText='より独創的な回文を作りたい人へ';
    document.getElementById("Link2").href='https://drogskol.hatenablog.com/entry/2019/10/21/202240';
  }
  console.log("play回数:"+cntplay);
  rndm=getRandomInt(100);
  idx=0;
  if(ansstr[ansstr.length-1]=='し')rndm=0;
  for(var i=ansstr.length-1-(rndm%2);i>=0;i--)ansstr+=ansstr[i];
  mojinagasa=ansstr.length;
  ansstr+='#####################################';
  tmp="";
  tangosuu=0;
  shuruisuu.clear();
  if(rndm==29){
    ansstr="#####?#";
    change(1,'#','ゆすいだらパチンカス完治パラダイス湯',SECRET);
  }
  while(ansstr[idx]!='#'){
    if(meisi&&ansstr[idx]=='と'&&ansstr[idx+1]=='か'&&ansstr[idx+2]!='#'){
      tmp+='とか';
      meisi=false;
      tango[tango.length-1]+='とか';
      idx+=2;continue;
    }
    if(meisi&&ansstr[idx]=='と'&&ansstr[idx+1]!='#'){
      tmp+='と';
      meisi=false;
      tango[tango.length-1]+='と';
      idx++;continue;
    }
    if(meisi)tmp+='、';
    if(change(6,'ましんぶんし','マシン、分子',MASHINE+' '+BUNSHI))continue;
    if(change(6,'しんぶんしま','新聞、島',SHINBUNSHI+' '+SHIMA))continue;
    if(change(20,'ひととひととひととひととひととひととひと','人と人と人と人と人と人と人',HITONANA))continue;

    if(change(2,'めか','メカ',MASHINE))continue;
    if(idx%2==0)if(change(2,'かま','鎌',KAMA1))continue;
    if(idx%2==1)if(change(2,'かま','釜',KAMA2))continue;
    if(idx%4==0)if(change(2,'かめ','亀',KAME1))continue;
    if(idx%4==1)if(change(2,'かめ','亀',KAME2))continue;
    if(idx%4==2)if(change(2,'かめ','亀',KAME3))continue;
    if(idx%4==3)if(change(2,'かめ','亀',KAME4))continue;
    if(idx%2==0)if(change(6,'しんぶんしか','新聞、鹿',SHINBUNSHI+' '+SHIKA1))continue;
    if(idx%2==1)if(change(6,'しんぶんしか','新聞、歯科',SHINBUNSHI+' '+SHIKA2))continue;

    if(idx%30==15){if(change(3,'とまと','トマト',TOMATO2))continue;}
    else if(change(3,'とまと','トマト',TOMATO))continue;
    if(change(5,'ままとひと','ママと人',MAMATOHITO))continue;
    if(change(5,'ひととまま','人とママ',MAMATOHITO))continue;
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
    if(change(2,'まひ','麻痺',MAHI))continue;
    if(change(2,'ひま','暇',HIMA))continue;
    if(change(2,'まと','的',MATO))continue;
    if(change(1,'と','戸',TO))continue;
    if(change(1,'ま','魔',MA))continue;
    if(change(1,'ひ','火',HI))continue;
    if(change(1,'め','目',ME))continue;
    if(change(1,'か','蚊',KA))continue;
    if(change(5,'しんぶんし','新聞紙',SHINBUNSHI))continue;
    console.log('error');
    break;
  }
  let point=Math.round(10000*(mojinagasa%100)/(1+Math.abs(Math.log(mojinagasa*tangosuu+1-shuruisuu.size))));
  if(ansstr[5]=='?')point=1000000000000000;
  document.getElementById("ansstring").innerText=tmp;
  document.getElementById("point").innerText=point+'points!';
  document.getElementById("ansimg").innerHTML=ansimg;

  ansimg+="あ";
  meisi=false;

  while (tweetDivided.firstChild){
    tweetDivided.removeChild(tweetDivided.firstChild);
  }
  const anchor = document.createElement('a');
  const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
    + encodeURIComponent('クソ回文ジェネレーター')
    + '&ref_src=twsrc%5Etfw';
  anchor.setAttribute('href', hrefValue);
  anchor.className = 'twitter-hashtag-button';
  anchor.setAttribute('data-text', tmp+'\n'+point+'points!'+'\n'+'https://dr0gsk0l.github.io/kaibungenerator/tmp.html'+'\n');
  anchor.innerText = 'Tweet #クソ回文ジェネレーター';
  tweetDivided.appendChild(anchor);

  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  tweetDivided.appendChild(script);
}

function yomi(ms,now){
  yomiage.text=tango[now];
  console.log(yomiage.text);
  speechSynthesis.speak(yomiage);

  return new Promise((resolve,reject)=>{ 
      setTimeout(()=>{
          resolve();
      ;} ,ms
      );
  });
}

document.getElementById("anime").onclick=async function(){
  if(document.getElementById("ansimg").innerHTML=="")return;
  console.log(document.getElementById("ansimg").innerHTML);
  var now=0;
  
  console.log(tango);
  for(var i=0;ansimg[i]!='あ';i++){
    var end=0;
    while(ansimg[i+end]!='>')end++;
    end++;
    console.log(ansimg.substring(i,i+end));
    document.getElementById("ansimg").innerHTML=ansimg.substring(i,i+end);
    
    await yomi(1000,now++);

    i+=end;

  }
  document.getElementById("ansimg").innerHTML=ansimg.substring(0,i);
}
