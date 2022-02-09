// Captando

const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById('lamp');


// Função Lâmpada Quebrada Calculo

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
        

}

// Função Lâmpada Ligada

function lampOn() {
    if(!isLampBroken()){
         lamp.src = './img/ligada.jpg';
    }
}

// Função Lâmpada Desligada

function lampOff() {
    if(!isLampBroken()){
        lamp.src = './img/desligada.jpg';
    }

}

// Função Lâmpada Quebrada

function lampBroken() {
    lamp.src = './img/quebrada.jpg';

}



turnOn.addEventListener ('click', lampOn );
turnOff.addEventListener('click', lampOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);
lamp.addEventListener('dblclick', lampBroken);



