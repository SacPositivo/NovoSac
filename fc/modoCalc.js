function selecionarInput(id) {
    let input = document.getElementById(id);
    if (input) {
        input.checked = true;
    }
}


function selecionarInputAdd(id) {
    let input = document.getElementById(id);

    if (input) {
        input.checked = !input.checked;
    }
}

document.addEventListener("DOMContentLoaded", function () {
  
    let bt1 = document.getElementById("bt1");
    let bt2 = document.getElementById("bt2");
    let state = 0;
    let mudardesc = document.getElementById("mudardesc")

    bt2.addEventListener("click", mudarpara2);
    bt1.addEventListener("click", mudarpara1);

    function mudarpara1() {
        bt2.style.backgroundColor = 'gray';
        bt1.style.backgroundColor = '#f69209'
        state = 0;
        mudardesc.innerHTML = 'Desconto (%):'

    }

    function mudarpara2() {
        bt1.style.backgroundColor = 'gray'; 
        bt2.style.backgroundColor = '#f69209'
        state = 1
        mudardesc.innerHTML = 'Valor com desconto:'
    }



    let data = [
        {
            valorEscola: 19905.60,
            valorMaterial: 4375.80,
            varCurso: 'Extensivo',
            varTurno: 'manha',
            varSede: 'Vicente_Machado'
        },
        {
            valorEscola: 11926.20,
            valorMaterial: 4375.80,
            varCurso: 'Extensivo',
            varTurno: 'tarde',
            varSede: 'Vicente_Machado'
        },
        {
            valorEscola: 8923.20,
            valorMaterial: 4375.80,
            varCurso: 'Extensivo',
            varTurno: 'noite',
            varSede: 'Vicente_Machado'
        },
        {
            valorEscola: 13384.80,
            valorMaterial: 4375.80,
            varCurso: 'Extensivo',
            varTurno: 'manha',
            varSede: 'Hauer'
        },
        {
            valorEscola: 17503.20,
            valorMaterial: 4375.80, 
            varCurso: 'Extensivo',
            varTurno: 'manha',
            varSede: 'Boa_Vista'
        },
        {
           valorEscola: 4375.80,
           valorMaterial: 4375.80, 
           varCurso: 'Extensivo',
           varTurno: 'EAD',
           varSede: ''
       },
   
       //valores SemiExtensivo
   
      
   
   
        //valores terceirão
   
        {
           valorEscola: 24882.00,
           valorMaterial: 4375.80,
           varCurso: 'Terceirão',
           varTurno: 'manha',
           varSede: 'Vicente_Machado'
       },
       {
           valorEscola: 14929.20,
           valorMaterial: 4375.80,
           varCurso: 'Terceirão',
           varTurno: 'tarde',
           varSede: 'Vicente_Machado'
       },
       {
           valorEscola: 12269.40,
           valorMaterial: 4375.80,
           varCurso: 'Terceirão',
           varTurno: 'noite',
           varSede: 'Vicente_Machado'
       },
       {
           valorEscola: 18532.80,
           valorMaterial: 4375.80,
           varCurso: 'Terceirão',
           varTurno: 'manha',
           varSede: 'Hauer'
       },
       {
           valorEscola: 24024.00,
           valorMaterial: 4375.80, 
           varCurso: 'Terceirão',
           varTurno: 'manha',
           varSede: 'Boa_Vista'
       },
    ];        
       
       
        document.addEventListener("keydown", function(event) {
           if (event.keyCode === 13) {
               event.preventDefault();
               calcular();
           }
       });
        
        
       document.getElementById('sede').addEventListener('change', troca_display)


       function verify(event){
        let turnos = document.getElementById("turnos");
        let sede = document.getElementById('sede').value;
        if( sede === "Boa_Vista" && turnos != "manha" || sede != "Hauer" && turnos === "manha" ){
            document.getElementById('primeiroValor').textContent = 'Erro, turno inexistente'
        }else{
            troca_display();
        }

       }
       
       function troca_display (event) {
           event.preventDefault();
           let turnos = document.getElementById("turnos");
           let sede = document.getElementById('sede').value;
           let adicionais = document.getElementById("adicionais");
       
           if(sede != "" && sede != "vazio"){
               turnos.style.display = "block"
               adicionais.style.display = "block"
           }else{
               turnos.style.display = ""
               adicionais.style.display = ""
       
           }
       };
       
       
       
       
       
       let calc = document.getElementById("calcularButton")
       calc.addEventListener('click', calcular)
       
       
       function calcular () {
        document.getElementById('primeiroValor').textContent = 'Erro, turno inexistente'
           let desconto = document.getElementById('desconto').value
           let parcelamento = parseInt(document.getElementById('parcelamento').value, 10);
           let adicionaisElement = document.querySelector('input[name="add"]:checked');
           let adicionais = 0;
       
           if (adicionaisElement !== null) {
               adicionais = adicionaisElement.value
               if (adicionais == "Integral"){
                   adicionais = 6435.00
               }else{
                   adicionais = 1201.20
               }
           }else{
               adicionais = 0
           }
           if(state === 0){
           if (desconto > 100 && state === 0){
               alert("desconto incomum")
           }
           else if(desconto == '' &&  parcelamento > 1){
               sem_desconto(parcelamento, adicionais)
           }else if(desconto != '' && parcelamento > 1){
               com_desconto(parcelamento,desconto, adicionais)
           }else if(desconto == '' && parcelamento == 1){
               a_vista(parcelamento, adicionais)
           }else if(desconto != '' && parcelamento == 1){
               a_vista_com_desconto(parcelamento,desconto, adicionais)
           }
        }else if (state === 1){
            calcularInverso(parcelamento,adicionais,desconto)
        }
       
       }
       console.log(adicionais)
       
       
       
       function sem_desconto(parcelamento,adicionais){
           let curso = document.getElementById('curso').value;
           let sede = document.getElementById('sede').value;
            if(sede === ''){
               for (let i = 0; i < data.length; i++){
                   if (data[i].varCurso === curso && data[i].varSede === sede && data[i]) {
                       console.log(adicionais)
                       let mensalidade =  (new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(((data[i].valorEscola+data[i].valorMaterial) / parcelamento) ))
                       document.getElementById('primeiroValor').textContent = (parcelamento + " x de " + mensalidade)
                   }
               }
            }else{
               let turno = document.querySelector('input[name="turno"]:checked').value;
               for (let i = 0; i < data.length; i++){
                   if (data[i].varCurso === curso && data[i].varSede === sede && data[i] && data[i].varTurno === turno) {
                       let mensalidade =  (new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(((data[i].valorEscola+data[i].valorMaterial + adicionais) / parcelamento) ))
                       document.getElementById('primeiroValor').textContent = (parcelamento + " x de " + mensalidade)
                   }
           }
           
            }
       
       }
       
       function com_desconto(parcelamento,desconto, adicionais){
           let curso = document.getElementById('curso').value;
           let sede = document.getElementById('sede').value;
            if(sede === ''){
               for (let i = 0; i < data.length; i++){
                   if (data[i].varCurso === curso && data[i].varSede === sede && data[i]) {
                       let mensalidade =  (new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(((data[i].valorEscola * (1- desconto/100)) +data[i].valorMaterial) / parcelamento ))
       + adicionais
                       document.getElementById('primeiroValor').textContent = (parcelamento + " x de " + mensalidade)
                   }
               }
            }else{
               let turno = document.querySelector('input[name="turno"]:checked').value;
               for (let i = 0; i < data.length; i++){
                   if (data[i].varCurso === curso && data[i].varSede === sede && data[i] && data[i].varTurno === turno) {
                       let mensalidade =  (new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(((data[i].valorEscola * (1- desconto/100)) +data[i].valorMaterial + adicionais) / parcelamento ))
                       document.getElementById('primeiroValor').textContent = (parcelamento + " x de " + mensalidade)
                   }
           }
           
            }
       
       }
       
       
       function a_vista(parcelamento, adicionais){
           let curso = document.getElementById('curso').value;
           let sede = document.getElementById('sede').value;
            if(sede === ''){
               for (let i = 0; i < data.length; i++){
                   if (data[i].varCurso === curso && data[i].varSede === sede && data[i]) {
                       let mensalidade =  (new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format((data[i].valorEscola+data[i].valorMaterial) * 0.96 / parcelamento))
                       document.getElementById('primeiroValor').textContent = (parcelamento + " x de " + mensalidade)
                   }
               }
            }else{
               let turno = document.querySelector('input[name="turno"]:checked').value;
               for (let i = 0; i < data.length; i++){
                   if (data[i].varCurso === curso && data[i].varSede === sede && data[i] && data[i].varTurno === turno) {
                       let mensalidade =  (new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format((data[i].valorEscola+data[i].valorMaterial) * 0.96 / parcelamento + adicionais))
                       document.getElementById('primeiroValor').textContent = (parcelamento + " x de " + mensalidade)
                   }
           }
           
            }
       
       }
       
       function a_vista_com_desconto(parcelamento, desconto, adicionais){
           let curso = document.getElementById('curso').value;
           let sede = document.getElementById('sede').value;
            if(sede === ''){
               for (let i = 0; i < data.length; i++){
                   if (data[i].varCurso === curso && data[i].varSede === sede && data[i]) {
                       let mensalidade =  (new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(((data[i].valorEscola * (1 - desconto/100)) + (data[i].valorMaterial * 0.96))))
                       document.getElementById('primeiroValor').textContent = (parcelamento + " x de " + mensalidade)
                   }
               }
            }else{
               let turno = document.querySelector('input[name="turno"]:checked').value;
               for (let i = 0; i < data.length; i++){
                   if (data[i].varCurso === curso && data[i].varSede === sede && data[i] && data[i].varTurno === turno) {
                       let mensalidade =  (new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(((data[i].valorEscola * (1 - desconto/100)) + (data[i].valorMaterial * 0.96)) + adicionais))
                       document.getElementById('primeiroValor').textContent = (parcelamento + " x de " + mensalidade)
                   }
           }
           
            }
       
       }

       function calcularInverso(parcelamento,adicionais, desconto){
        let curso = document.getElementById('curso').value;
        let sede = document.getElementById('sede').value;
         if(sede === ''){
            for (let i = 0; i < data.length; i++){
                if (data[i].varCurso === curso && data[i].varSede === sede) {
                    let VyE = data[i].valorEscola / parcelamento
                    let VxE = (desconto - (data[i].valorMaterial / parcelamento))
                    let descontoP = ((VxE - VyE) / VyE) * 100
                    console.log(descontoP, VyE, VxE,"valo")
                    document.getElementById('primeiroValor').textContent = ("Desconto: " + descontoP.toFixed(2) + "%")
                }
            }
         }else{
            let turno = document.querySelector('input[name="turno"]:checked').value;
            for (let i = 0; i < data.length; i++){
                if (data[i].varCurso === curso && data[i].varSede === sede && data[i].varTurno === turno) {
                    let VyE = data[i].valorEscola / parcelamento
                    let add = adicionais / parcelamento
                    console.log(add)
                    let VxE = ((desconto - add) - (data[i].valorMaterial / parcelamento))
                    let descontoP = ((VxE - VyE) / VyE) * 100
                    document.getElementById('primeiroValor').textContent = ("Desconto: " + descontoP.toFixed(2) + "%")
                
                }
        }
        
        }
       }
       
       
 
});
