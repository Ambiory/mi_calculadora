const pizarra_primer_valor = document.getElementById('primer-valor');
const pizarra_actual = document.getElementById('actual');
const botones_operadores = document.querySelectorAll('.operador');
const botones_numeros = document.querySelectorAll('.numero');


const pizarra=new Pizarra(pizarra_primer_valor, pizarra_actual);

botones_numeros.forEach(boton => {
    boton.addEventListener('click', ()=> pizarra.agregarnumero(boton.innerHTML));
});

botones_operadores.forEach(boton => {
    boton.addEventListener('click', ()=>pizarra.computar(boton.value))
});