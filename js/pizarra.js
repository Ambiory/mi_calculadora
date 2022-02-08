class Pizarra {
    constructor(pizarra_primer_valor, pizarra_actual) {
        this.pizarra_actual=pizarra_actual;
        this.pizarra_primer_valor=pizarra_primer_valor;
        this.acciones = new Acciones();
        this.valoractual='';
        this.primervalor='';
        this.operacion = undefined;
        this.signos={
            sumar:'+',
            dividir:'%',
            multiplicar:'x',
            restar:'-',
        }

        
    }


    


    calcular(){
        const primervalor= parseFloat(this.primervalor)
        const valoractual= parseFloat(this.valoractual)

        if(isNaN(valoractual) || isNaN(primervalor) ) return
        this.valoractual=this.acciones[this.operacion](primervalor, valoractual);

    }

    computar(tipo){
        this.operacion !=='igual' && this.calcular();
        this.operacion=tipo;
        this.primervalor=this.valoractual || this.primervalor;
        this.valoractual='';
        this.vizualizarvalor();
    }

    agregarnumero(numero) {
        if(numero=='.' && this.valoractual.includes('.')) return
        this.valoractual=this.valoractual.toString() + numero.toString();
        this.vizualizarvalor();
    }

    clean(){
        this.valoractual='';
        this.primervalor='';
        this.operacion=undefined;
        this.vizualizarvalor();
    }

    borrar(){
        this.valoractual=this.valoractual.toString().slice(0,-1);
        this.vizualizarvalor();
    }

    vizualizarvalor(){
        this.pizarra_actual.textContent=this.valoractual;
        this.pizarra_primer_valor.textContent= `${this.primervalor} ${this.signos[this.operacion] || ''} `;
    }



}