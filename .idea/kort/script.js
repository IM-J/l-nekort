const send = require('./send.js');

function neste(id){
    var selv = document.getElementById('selv');
    var foresatt = document.getElementById('foresatt');
    var barn = document.getElementById('barn');
    var hvem = document.getElementById('hvem');

    switch(id){
        case 'foresatt':
            hvem.style.display='none';
            selv.style.display='none';
            foresatt.style.display='block';
            barn.style.display='none';
            break;
        case 'barn':
            hvem.style.display='none';
            selv.style.display='none';
            foresatt.style.display='none';
            barn.style.display='block';
            break;
       default:
            hvem.style.display='block';
            selv.style.display='block';
            foresatt.style.display='none';
            barn.style.display='none';
            break;
    }
}

function tilbake(id){
    var selv = document.getElementById('selv');
    var foresatt = document.getElementById('foresatt');
    var barn = document.getElementById('barn');
    var hvem = document.getElementById('hvem');

    switch(id){
        case 'selv':
            hvem.style.display='grid';
            selv.style.display='block';
            foresatt.style.display='none';
            barn.style.display='none';
            break;
        case 'foresatt':
            hvem.style.display='none';
            selv.style.display='none';
            foresatt.style.display='block';
            barn.style.display='none';
            break;
       default:
            hvem.style.display='none';
            selv.style.display='none';
            foresatt.style.display='none';
            barn.style.display='block';
            break;
    }
}

function brukerInput(){
var forHvem;
    var selv = document.getElementById('selvknp').addEventListener('change', function(){
        if (this.checked){
            forHvem = 'selv';
        }
    });
    var alt = document.getElementById('barnknp').addEventListener('change', function(){
        if (this.checked){
            forHvem = 'alt';
        }
    });
    return forHvem;
}


function visknp(){
    var sendSelv = document.getElementById('sendSelv');
    var sendVidere = document.getElementById('sendVidere');
    sendSelv.style.display='none';
    sendVidere.style.display='block';
}

function sjulknp(){
    var sendSelv = document.getElementById('sendSelv');
    var sendVidere = document.getElementById('sendVidere');
    sendVidere.style.display='none';
    sendSelv.style.display='block';
}

function ulikAddr(){
    var addrBox = document.getElementById('addresse');
    var barnAddr = document.getElementById('barnAddr');
    var nyVerdi1 = document.getElementById('addr1');
    var nyVerdi2 = document.getElementById('addr2');
    document.getElementById('addr').value = nyVerdi1;
    document.getElementById('addr').value nyVerdi2;

    addrBox.style.display='grid';
    barnAddr.style.display='block';

}

function sammeAddr(){
    var addrBox = document.getElementById('addresse');
    var barnAddr = document.getElementById('barnAddr');
    addrBox.style.display='none';
    barnAddr.style.display='none';
}

function barnAddresse(id){
    var barnAddr;
    var addresse1 = document.getElementById('addr');
    var addresse2 = document.getElementById('addrFor');

    switch(id){
        case('addr1'):
            barnAddr = addresse1;
            break;
        case('addr2'):
            barnAddr = addresse2;
            break;
    }
    return barnAddr;
}

function validerTekst(element){
    var id = element.id;
    var pattern = /^[A-Z a-z ÆØÅæøå]+$/
    var errorMelding = document.getElementById(id + '_error')

    if (pattern.test(element.value)){
        element.style.borderColor = 'green';
        errorMelding.textContent = '';
    }
    else {
        element.style.borderColor = 'red';
        errorMelding.textContent = 'Her er det noe feil. I dette feltet kan du kun bruke bokstaver.';
    }
}

function validerBlanding(element){
    var id = element.id;
    var pattern = /^[A-Z a-z ÆØÅæøå 0-9]+$/
    var errorMelding = document.getElementById(id + '_error')
    if (pattern.test(element.value)){
        element.style.borderColor = 'green';
        errorMelding.textContent = '';
    }
    else {
        element.style.borderColor = 'red';
        errorMelding.textContent = 'Her er det noe feil. I dette feltet kan du kun bruke bokstaver og tall.';
    }
}

function validerTall(element){
    var id = element.id;
    var pattern = /^[0-9]+$/
    var errorMelding = document.getElementById(id + '_error')

    if (pattern.test(element.value)){
        element.style.borderColor = 'green';
    }
    else {
        element.style.borderColor = 'red';
        errorMelding.textContent = 'Her er det noe feil. I dette feltet kan du kun bruke tall.';
    }


}
function validerland(element){
    var id = element.id;
    var pattern = /^[0-9]{1,3}$/

    if (pattern.test(element.value)){
        element.style.borderColor = 'green';
    }
    else {
        element.style.borderColor = 'red';
        errorMelding.textContent = 'Her er det noe feil. Dette feltet er for landskoder. Her burde det stå mellom ett og tre tall.';
    }
}

function validerEmail(element){
    var id = element.id;
    var pattern = /^[A-Za-zÆØÅæøå0-9._%+-,]+@[A-Za-zÆØÅæøå0-9,.-_]+\.[A-Za-z]{2,}$/

   if (pattern.test(element.value)){
       element.style.borderColor = 'green';
   }
   else {
       element.style.borderColor = 'red';
       errorMelding.textContent = 'Her er det noe feil. Dette må være en gyldig email. pass på at den er riktig.';
   }
}

function submit(id){

    var form = document.getElementById(id);
    var formData = new FormData(form);

    return formData;
}