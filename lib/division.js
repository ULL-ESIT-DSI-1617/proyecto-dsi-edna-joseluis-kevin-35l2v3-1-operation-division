"use strict";

var Operation = require("@ull-edna-joseluis-kevin-35l2/ull-operation");

/**
* Clase que calcula la division entre dos dígitos
* @class Division
* @param {number} izq Operando izquierdo (Numerador)
* @param {number} dch Operando derecho (Denominador)
*/

(function (operations){
  module.exports = operations['/'] = class Division extends Operation {
    constructor (izq, dch){
      super(izq,dch);
    }
    calculate(){
      return (this.izq_/this.dch_).toFixed(2);
    }
  }

  if(operations.symbols){
    operations.symbols += '/';
  }else{
    operations.symbols = '/';
  }
}(global.operations = global.operations || {}));
