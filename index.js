const audio=new Audio("img/audio/audio.mp3");function playAudio(){audio.volume=.0099,audio.play(),document.getElementById("sound-on").style.display="flex",document.getElementById("sound-mute").style.display="none"}function stopAudio(){audio.pause(),audio.currentTime=0,document.getElementById("sound-mute").style.display="flex",document.getElementById("sound-on").style.display="none"}function toggelbtn(){var e=document.getElementById("headerHeaderDivNav");"flex"===e.style.display?(e.style.display="none",document.getElementById("forMakeChangeBGColor").style.backgroundColor="#00000000",document.getElementById("forMakeChangeBGColorsvg").style.display="block",document.getElementById("forMakeChangeBGColorimg").style.display="block"):(e.style.display="flex",document.getElementById("forMakeChangeBGColor").style.backgroundColor="#fff",document.getElementById("forMakeChangeBGColorsvg").style.display="none",document.getElementById("forMakeChangeBGColorimg").style.display="none")}window.onload=function(){audio.volume=.0099,audio.play(),document.getElementById("sound-on").style.display="flex",document.getElementById("sound-mute").style.display="none"},audio.addEventListener("ended",(function(){audio.currentTime=0,audio.play()}));