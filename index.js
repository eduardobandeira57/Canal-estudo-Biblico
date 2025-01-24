const myObserver = new IntersectionObserver((entryes) =>{

    entryes.forEach((entry) =>{
    
     if(entry.isIntersecting){
        entry.target.classList.add("show")
    
     }else{
        entry.target.classList.remove("caixa")
    
     }
    
    
    
    })
    
    
    
    
    });
    
    const elements=document.querySelectorAll(".caixa")
    elements.forEach((element) => myObserver.observe(element))
    
    devoc=0
    var devocional="Devocional: 21/01/2025"
    document.querySelector(".cont").textContent=devocional;
    var data = new Date();
     var horas=0
            document.body.style.backgroundImage="url('...')" 
           
               setInterval(() => {
                
                horas=  data.getHours();
              
                
                if(horas==0){
                    document.body.style.backgroundImage="url('https://eduardobandeira57.github.io/image/0.jpg')" 
                };
                if(horas==4){
                    document.body.style.backgroundImage="url('https://eduardobandeira57.github.io/image/4.jpg')" 
                };
                if(horas==10){
                    document.body.style.backgroundImage="url('https://eduardobandeira57.github.io/image/10.jpg')" 
                };
                if(horas==12){
                    document.body.style.backgroundImage="url('https://eduardobandeira57.github.io/image/12.jpg')" 
                };
                if(horas==17){
                    document.body.style.backgroundImage="url('https://eduardobandeira57.github.io/image/17.jpg')" 
                };
                if(horas==18){
                    document.body.style.backgroundImage="url('https://eduardobandeira57.github.io/image/18.jpg')" 
                };
                if(horas==19){
                    document.body.style.backgroundImage="url('https://eduardobandeira57.github.io/image/19.jpg')" 
                };
                if(horas==20){
                    document.body.style.backgroundImage="url('https://eduardobandeira57.github.io/image/20.jpg')" 
                };
                
               
            }, 1000);      
    
    
    
    function buscar(){
         var array=[
        /*0*/"boa madrugada",
        /*1*/"boa madrugada",
       /*2*/"boa madrugada",
       /*3*/"boa madrugada",
       /*4*/"boa madrugada",
       /*5*/"bom dia",
       /*6*/"bom dia",
       /*7*/"bom dia",
       /*8*/"bom dia",
        /*9*/"bom dia",
        /*10*/"bom dia",
        /*11*/"bom dia",
        /*12*/"boa tarde",
        /*13*/"boa tarde",
        /*14*/"boa tarde",
        /*15*/"boa tarde",
        /*16*/"boa tarde",
        /*17*/"boa tarde",
        /*18*/"boa noite",
        /*19*/"boa noite",
        /*20*/"boa noite",
        /*21*/"boa noite",
        /*22*/"boa noite",
        /*23*/"boa noite",
      ]
     var nome =document.getElementById("input").value
    
     if(nome==""){
        alert("È obrigatotio colocar o nome")
     }else{
         document.querySelector(".iframe").style.position="absolute"
         document.querySelector(".iframe").src="74US.gif"
         document.querySelector(".h4").textContent="Esculte 7 hinos e receba á Palavra"
         document.querySelector(".rest").style.backgroundImage = 'url("https://dhamaka-music.com/BZ/img/names-min111.gif")'
         document.querySelector(".rest").textContent="Bem Vindo! "+"  "+nome
         document.querySelector(".marq").textContent="Edu.App    WhatasApp   81984242796"
    
        document.querySelector(".caixa").style.display="none"
        document.querySelector(".menu").classList.add("show")
        document.querySelector(".rest").classList.add("show")
    
    var sauda= setInterval(() => {
      var nome =document.querySelector("#input").value
      speechSynthesis.speak(new SpeechSynthesisUtterance(array[horas]+"  "+"seja muito bem vindo "+nome))
      
      clearInterval(sauda)
       var time=0
       var set1 = setInterval(() => {
         
         if (time==0) {
         speechSynthesis.speak(new SpeechSynthesisUtterance(" estudo você escolhe o estudos"))
        
         document.querySelector(".pmenu1").style.backgroundColor= "gold";
         document.querySelector(".pmenu2").style.backgroundColor= "rgba(249, 40, 17, 0.869)";
         document.querySelector(".pmenu4").style.backgroundColor= "rgba(249, 40, 17, 0.869)";
    
         time++
         
    
           
         } else {
           
          document.querySelector(".pmenu1").style.backgoundColor="rgb(12, 237, 229)";
           clearInterval(set1)
    
         var set2 = setInterval(() => {
           
           if (time==1) {
             speechSynthesis.speak(new SpeechSynthesisUtterance("Quiz voce escolhe o quiz  que voce quiser jogar"))
            
             document.querySelector(".pmenu2").style.backgroundColor= "gold";
             document.querySelector(".pmenu1").style.backgroundColor= "rgba(249, 40, 17, 0.869)";
         document.querySelector(".pmenu4").style.backgroundColor= "rgba(249, 40, 17, 0.869))";
    
             time++
             
           } else {
             
               document.querySelector(".pmenu2").style.backgoundColor="rgba(249, 40, 17, 0.869)";
            clearInterval(set2)
            var set3 = setInterval(() => {
             
               if (time==2) {
                 speechSynthesis.speak(new SpeechSynthesisUtterance("Hinos voce tem 24 hinos para escolher de um em um até completar 7 hinos para receber a palavra devocional"))
                 
                  document.querySelector(".pmenu4").style.backgroundColor= "gold";
                  document.querySelector(".pmenu1").style.backgroundColor= "rgba(249, 40, 17, 0.869)";
         document.querySelector(".pmenu2").style.backgroundColor= "rgba(249, 40, 17, 0.869)";
                 time++
                 
               } else {
                  document.querySelector(".pmenu4").style.backgoundColor="rgba(249, 40, 17, 0.869)";
                  clearInterval(set3)
                  var set4= setInterval(() => {
                   if (time==3) {
                     speechSynthesis.speak(new SpeechSynthesisUtterance(" este site não tem laick pois toda Honra e Glorias e para o Senhor Jesus então dê um gloria para jesus"))
                     document.querySelector(".pmenu2").style.backgroundColor= "rgba(249, 40, 17, 0.869)";
                      document.querySelector(".pmenu4").style.backgroundColor= "rgba(249, 40, 17, 0.869)";
                      document.querySelector(".pmenu1").style.backgroundColor= "rgba(249, 40, 17, 0.869)";
      
                     clearInterval(set4)
                   }
                   
                  }, 3000);
                 
               }
    
    
             
            }, 3000);
             
           }
           
         }, 3000);
           
         }
         
         
       }, 5000);
    
    }, 10);
    
    
    var anime=setInterval(() => {
     document.querySelector(".iframe").src=""
     document.querySelector(".rest").style.backgroundImage = 'url(...)'
     document.querySelector(".iframe").style.position="relative"
     document.querySelector(".iframe").style.display="none"
    
     
    
    
    clearInterval(anime)
    }, 10000);
    
    
    
    
    }
    
    }
    let div1=document.querySelector(".pmenu1");
    let fechardiv1=document.querySelector(".princ");
    div1.addEventListener("mouseover",function(){
     document.querySelector(".princ").classList.add("show")
     document.querySelector(".princ1").classList.remove("show")
     document.querySelector(".harpa").classList.remove(show)
     
    });
    
    fechardiv1.addEventListener("mouseleave",function(){
     
     document.querySelector(".princ").classList.remove("show")
    
    });
    
    let div2=document.querySelector(".pmenu2");
    let fechardiv2=document.querySelector(".princ1");
    div2.addEventListener("mouseover",function(){
     document.querySelector(".princ1").classList.add("show")
     document.querySelector(".princ").classList.remove("show")
     document.querySelector(".harpa").classList.remove("show")
    
    })
    
    fechardiv2.addEventListener("mouseleave",function(){
     document.querySelector(".princ1").classList.remove("show")
     
    
    });
    
    
    let div4=document.querySelector(".pmenu4");
    let fechardiv4=document.querySelector(".harpa");
    div4.addEventListener("mouseover",function(){
     document.querySelector(".princ1").classList.remove("show")
     document.querySelector(".princ").classList.remove("show")
     document.querySelector(".harpa").classList.add("show")
    
    
    })
    
    fechardiv4.addEventListener("mouseleave",function(){
     
     document.querySelector(".harpa").classList.remove("show")
    
    });
    
    const audio=document.getElementById("audio")
    
    
    var l1=document.querySelector(".l1")
    
    
    
    
    l1.addEventListener("click",function(){
    
    audio.src="Conversao.mp3"
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
        
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
      var hor="";
      var min="";
     var seg="";
     var correntTimerhor="";
     var correntTimermin="";
     var correntTimerseg="";
    
    
    var time=  setInterval(() => {
    
    
    
    
    
     hor= Math.floor(audio.duration / 3600)
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
       
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         
          clearInterval(time)
    
        }
    
          
       
     }, 100);
     
    
    }
    
    
    
    })
    
    
    var l2=document.querySelector(".l2")
    
    l2.addEventListener("click",function(){
    
    audio.src="Cristo o Fiel Amigo.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
         
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
       
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    }
    
    
    
    })
    var l3=document.querySelector(".l3")
    
    l3.addEventListener("click",function(){
    
    audio.src="De Valor em Valor.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
        
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
       
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    }
    
    
    
    })
    var l4=document.querySelector(".l4")
    
    l4.addEventListener("click",function(){
    
    audio.src="Em Fervente Oracao.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
         
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
        
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    }
    
    
    
    })
    var l5=document.querySelector(".l5")
    
    l5.addEventListener("click",function(){
    
    audio.src="Firme nas Promessas.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
        
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
        
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    }
    
    
    
    })
    var l6=document.querySelector(".l6")
    
    l6.addEventListener("click",function(){
    
    audio.src="Grato a Ti.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
        
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
       
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    }
    
    
    
    })
    var l7=document.querySelector(".l7")
    
    l7.addEventListener("click",function(){
    
    audio.src="Guarda o Contacto.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
       
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
       
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    
    }
    
    
    
    })
    var l8=document.querySelector(".l8")
    
    l8.addEventListener("click",function(){
    
    audio.src="Guia-me Sempre Meu Senhor.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
         
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
       
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    
    }
    
    
    
    })
    var l9=document.querySelector(".l9")
    
    l9.addEventListener("click",function(){
    
    audio.src="Jesus o Bom Amigo.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
        
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
       
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    
    }
    
    
    
    })
    var l10=document.querySelector(".l10")
    
    l10.addEventListener("click",function(){
    
    audio.src="Mais Perto Meu Deus de Ti.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
        
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
        
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    
    }
    
    
    
    })
    var l11=document.querySelector(".l11")
    
    l11.addEventListener("click",function(){
    
    audio.src="Oh Jesus me Ama.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
         
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
       
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    
    
    }
    
    
    
    })
    var l12=document.querySelector(".l12")
    
    l12.addEventListener("click",function(){
    
    audio.src="os guerreiro.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
        document.querySelector(".cont").textContent=data
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
       
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    }
    
    
    
    })
    var l13=document.querySelector(".l13")
    
    l13.addEventListener("click",function(){
    
    audio.src="Pelo Sangue.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
         
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
       
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    
    
    }
    
    
    
    })
    var l14=document.querySelector(".l14")
    
    l14.addEventListener("click",function(){
    
    audio.src="Por Que Ele Vive.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
         
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
       
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    
    }
    
    
    
    })
    var l15=document.querySelector(".l15")
    
    l15.addEventListener("click",function(){
    
    audio.src="Se Cristo Comigo Vai.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
         
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
        
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    
    }
    
    
    
    })
    var l16=document.querySelector(".l16")
    
    l16.addEventListener("click",function(){
    
    audio.src="Ser Valente.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
        
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
       
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    
    }
    
    
    
    })
    var l17=document.querySelector(".l17")
    
    l17.addEventListener("click",function(){
    
    audio.src="Sossegai.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
         
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
       
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    
    
    }
    
    
    
    })
    var l18=document.querySelector(".l18")
    
    l18.addEventListener("click",function(){
    
    audio.src="Tempo de Sega.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
        
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
        
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    
    
    }
    
    
    
    })
    var l19=document.querySelector(".l19")
    
    l19.addEventListener("click",function(){
    
    audio.src="Vem Cear.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
         
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
        
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    
    
    }
    
    
    
    })
    var l20=document.querySelector(".l20")
    
    l20.addEventListener("click",function(){
    
    audio.src="A Face Adorada de Jesus.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
         
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
       
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    }
    
    
    
    })
    var l21=document.querySelector(".l21")
    
    l21.addEventListener("click",function(){
    
    audio.src="A Mensagem da Cruz.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
       
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
       
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    
    
    }
    
    
    
    })
    var l22=document.querySelector(".l22")
    
    l22.addEventListener("click",function(){
    
    audio.src="Alma Abatida.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
         
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
        
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    
    
    }
    
    
    
    })
    var l23=document.querySelector(".l23")
    
    l23.addEventListener("click",function(){
    
    audio.src="Alvo Mais Que a Neve.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
         
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
        
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    
    
    }
    
    
    
    })
    var l24=document.querySelector(".l24")
    
    l24.addEventListener("click",function(){
    
    audio.src="Chuva de Gracas.mp3"
    
    if(devoc==7){
     document.querySelector(".divh").style.display="block"
     document.querySelector(".harpa").classList.remove("show")
     var anime= setInterval(() => {
         document.querySelector(".divh").style.display="none"
         document.querySelector(".h4").textContent=""
           document.querySelector(".leitura").style.display="block"
        
        devoc=0
        clearInterval(anime)
         
     }, 15000);
     
    
    }else{
    document.querySelector(".harpa").classList.remove("show")
    
    document.querySelector(".musica").style.display="block"
    var time=  setInterval(() => {
    hor= Math.floor(audio.duration / 3600)
    
      min= Math.floor(audio.duration / 60)
      seg= Math.floor((((audio.duration / 60) % 1) *60))
    
      correntTimerhor= Math.floor((audio.currentTime / 3600))
      correntTimermin= Math.floor((audio.currentTime / 60))
       correntTimerseg= Math.floor(((((audio.currentTime)/60)%1)*60) )
    
    
       
         var temp= correntTimermin+":"+correntTimerseg
         var final= min+":"+seg
       if (temp==final) {
          devoc++
          document.querySelector(".temp").innerHTML=devoc
          document.querySelector(".musica").style.display="none"
         clearInterval(time)
    
        }
    
    
       }, 100);
    
    
    
    
    
    }
    
    
    
    })
    
    
    
    
    
    
    
    