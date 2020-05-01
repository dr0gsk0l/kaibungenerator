var ansstr="",ansimg="",meisi=false,idx,tmp="",cntplay=0;
const tweetDivided = document.getElementById('tweet');
const mojiDivided = document.getElementById('moji');
const submitDivided = document.getElementById('Make');

var MAKE=document.createElement('button');
MEKE.setAttribute("id","make");
MALE.setAttribute("value","回文作成");
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
  if(ansimg.length)document.getElementById("ansimg").innerHTML=ansimg=ansstr="";
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
  if(ansstr.length>50&&mojiDivided.childElementCount==4){
    makebutton("shinbunshi","しんぶんし");
    document.getElementById("shinbunshi").onclick=function(){pushed('しんぶんし')};
  }
  if(ansstr=="まままままままままま"){
    document.getElementById("make").value="魔獣作成";
    document.getElementById("letsmake").innerText="君だけの魔獣を作ろう!";
    document.title="魔獣ジェネレーター";
  }
  else{
    document.getElementById("make").value=document.h1="回文作成";
    document.getElementById("letsmake").innerText="君だけの回文を作ろう!";
    document.title="回文ジェネレーター";
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
  if(ansstr=="まままままままままま"){
    var now=new Date();
    document.getElementById("ansimg").innerHTML=MAJU[now%11];
    document.getElementById("ansstring").innerText=MAJUNAME[now%11];
    ansimg="あ";
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
  if(++cntplay==10){
    console.log("DP button");
    var Anchor=document.createElement('button');
    Anchor.setAttribute("id","DP");
    Anchor.setAttribute("value","DP作成");
    submitDivided.appendChild(Anchor);
  }
  console.log("play回数:"+cntplay);
  for(var i=ansstr.length-1;i>=0;i--)ansstr+=ansstr[i];
  ansstr+='#####################################';
  tmp="";
  idx=0;
  while(ansstr[idx]!='#'){
    if(meisi&&ansstr[idx]=='と'&&ansstr[idx+1]!='#'){
      tmp+='と';
      meisi=false;
      idx++;continue;
    }
    if(meisi)tmp+='、';
    if(change(6,'ましんぶんし','マシン、分子',MASHINE+' '+BUNSHI))continue;
    if(change(20,'ひととひととひととひととひととひととひと','人と人と人と人と人と人と人',HITONANA))continue;
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
    if(change(5,'しんぶんし','新聞紙',SHINBUNSHI))continue;
    console.log('error');
    break;
  }
  document.getElementById("ansstring").innerText=tmp;
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
  anchor.setAttribute('data-text', tmp+' https://dr0gsk0l.github.io/kaibungenerator/tmp.html');
  anchor.innerText = 'Tweet #クソ回文ジェネレーター';
  tweetDivided.appendChild(anchor);
  
  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  tweetDivided.appendChild(script);
}
document.getElementById("DP").onclick=function(){
  if(ansimg.length)return;
  ansstr+='#####################################';
  tmp="";
  idx=0;
  while(ansstr[idx]!='#'){
    if(meisi&&ansstr[idx]=='と'&&ansstr[idx+1]!='#'){
      tmp+='と';
      meisi=false;
      idx++;continue;
    }
    if(meisi)tmp+='、';
    if(change(6,'ましんぶんし','マシン、分子',MASHINE+' '+BUNSHI))continue;
    if(change(20,'ひととひととひととひととひととひととひと','人と人と人と人と人と人と人',HITONANA))continue;
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
    if(change(5,'しんぶんし','新聞紙',SHINBUNSHI))continue;
    console.log('error');
    break;
  }
  document.getElementById("ansstring").innerText=tmp+"DP";
  document.getElementById("ansimg").innerHTML=ansimg;
  
  ansimg+="あ";
  meisi=false;
  
  while (tweetDivided.firstChild){
    tweetDivided.removeChild(tweetDivided.firstChild);
  }
  const anchor = document.createElement('a');
  const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
    + encodeURIComponent('クソDPジェネレーター')
    + '&ref_src=twsrc%5Etfw';
  anchor.setAttribute('href', hrefValue);
  anchor.className = 'twitter-hashtag-button';
  anchor.setAttribute('data-text', tmp+' https://dr0gsk0l.github.io/kaibungenerator/tmp.html');
  anchor.innerText = 'Tweet #クソDPジェネレーター';
  tweetDivided.appendChild(anchor);
  
  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  tweetDivided.appendChild(script);
}
