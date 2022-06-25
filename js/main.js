const 
    a = document.getElementById('numero1')
    b = document.getElementById('numero2')
    c = document.getElementById('numero3')
    d = document.getElementById('numero4')
    datoBoton = document.getElementById('boton')
    datoMayor = document.getElementById('numeroMayor')
    datoMenor = document.getElementById('numeroMenor')


datoBoton.addEventListener('click', ()=>{
    if((a.value == b.value) || (a.value == c.value) || (a.value == d.value)){
        alert('No pude haber numeros Repetidos')
    }else if((b.value == c.value) || (b.value == d.value)){
        alert('No pude haber numeros Repetidos')
    }else if((c.value == d.value)){
        alert('No pude haber numeros Repetidos')
    }else{
        let Mayor = Math.max(a.value,b.value,c.value,d.value)
        if(Mayor == a.value){
            datoMayor.innerHTML = 'El dato [A] Mayor es : ' + Mayor
        }else if(Mayor == b.value){
            datoMayor.innerHTML = 'El dato [B] Mayor es : ' + Mayor
        }else if(Mayor == c.value){
            datoMayor.innerHTML = 'El dato [C] Mayor es : ' + Mayor
        }else if(Mayor == d.value){
            datoMayor.innerHTML = 'El dato [D] Mayor es : ' + Mayor
        }
        let Menor = Math.min(a.value,b.value,c.value,d.value)
        if(Menor == a.value){
            datoMenor .innerHTML = 'El dato [A] Menor es : ' + Menor
        }else if(Menor == b.value){
            datoMenor .innerHTML = 'El dato [B] Menor es : ' + Menor
        }else if(Menor == c.value){
            datoMenor .innerHTML = 'El dato [C] Menor es : ' + Menor
        }else if(Menor == d.value){
            datoMenor .innerHTML = 'El dato [D] Menor es : ' + Menor
        }
    }
})
