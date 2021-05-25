let autos = require('./autos');
let persona = require('./persona');

let concesionaria = {
    autos: autos,
    buscarAuto: function(patente) {
      testPatente = patente; 
      for(var i = 0; i < autos.length; i++) {
      if(autos[i].patente === testPatente) {
        return autos[i];
      } 
    } return null
  },
 venderAuto: function (patente, buscarAuto) {
    let carro = this.buscarAuto(patente);
    if (carro != null) {
      carro.vendido = true;
    }
  },
  autosParaLaVenta: function (){
     let autosFiltrados = this.autos.filter(autos => autos.vendido == false)
     return autosFiltrados;
  },
  autosNuevos: function (autosParaLaVenta){
     let autosCero = this.autosParaLaVenta().filter (autos => autos.km <100)
     return autosCero;
  },
  listaDeVentas: function (){
     let ventas = [];
     for(var i = 0; i < autos.length; i++) {
        if (autos[i].vendido == true) {
           ventas.push(autos[i].precio)
        }
     } return ventas
  },
  totalDeVentas: function(){
     let total = this.listaDeVentas().reduce((estado, precio)=> estado + precio, 0)
     return total
  },
  puedeComprar: function(auto, persona) {
     if(auto.precio < persona.capacidadDePagoTotal && persona.capacidadDePagoEnCuotas > auto.precio / auto.cuotas) {
        return true;
     } return false;
  },
  autosQuePuedeComprar: function(persona){
     let autosParaVenta = this.autosParaLaVenta();
     let resultado = [];
     for(var i=0; i < autosParaVenta.length; i++) {
     if (this.puedeComprar(autosParaVenta[i], persona) == true) {
       resultado.push(autosParaVenta[i])
      }
     } console.log(resultado);
    }
  }

concesionaria.buscarAuto('JJK116');