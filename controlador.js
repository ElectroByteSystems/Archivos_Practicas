import {Funcion_Exponencial} from "./kernel.js";
import {Logaritmo_Natural} from "./kernel.js";
import {Serie_geometrica} from "./kernel.js";
import {serie_de_taylor_4} from "./kernel.js";
import {sen} from "./kernel.js";
import {coseno} from "./kernel.js";
import {arctang} from "./kernel.js";
import {arcsen} from "./kernel.js";
import {arco} from "./kernel.js";
import {secante} from "./kernel.js";
import {csc} from "./kernel.js";
import {tang} from "./kernel.js";
import {sh} from "./kernel.js";
import {ch} from "./kernel.js";
import {th} from "./kernel.js";
import {ach} from "./kernel.js";
import {arcotanh} from "./kernel.js";
import {lambert1} from "./kernel.js";
document.getElementById("serie1detaylor").addEventListener("click", serie1)
function serie1(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    x = document.getElementById("v_x").value
    numTerminos = document.getElementById("v_t").value
    resultado = Funcion_Exponencial(x, numTerminos)
    console.log(resultado)
    document.getElementById("v_r1").value = resultado
}
document.getElementById("serie2detaylor").addEventListener("click", serie2)
function serie2(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    x = document.getElementById("v_x2").value
    numTerminos = document.getElementById("v_t2").value
    resultado = Logaritmo_Natural(x, numTerminos)
    console.log(resultado)
    document.getElementById("v_r2").value = resultado
}
document.getElementById("serie3detaylor").addEventListener("click", serie3)
function serie3(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    let tipo = 0
    x = document.getElementById("v_x3").value
    numTerminos = document.getElementById("v_t3").value
    tipo = document.getElementById("tipo").value
    resultado = Serie_geometrica(x, numTerminos, tipo)
    console.log(resultado)
    document.getElementById("v_r3").value = resultado
}
document.getElementById("serie4detaylor").addEventListener("click", serie4)
function serie4(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    let alpha = 0
    x = document.getElementById("v_x4").value
    numTerminos = document.getElementById("v_t4").value
    alpha = document.getElementById("alpha").value
    resultado = serie_de_taylor_4(x, numTerminos, alpha)
    console.log(resultado)
    document.getElementById("v_r4").value = resultado
}
document.getElementById("sen1").addEventListener("click", sen1t)
function sen1t(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    x = document.getElementById("x_sen").value
    numTerminos = document.getElementById("t_sen").value
    resultado = sen(x, numTerminos)
    console.log(resultado)
    document.getElementById("r_sen").value = resultado
}
document.getElementById("cos1").addEventListener("click", cos1t)
function cos1t(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    x = document.getElementById("cos_x").value
    numTerminos = document.getElementById("t_cos").value
    resultado = coseno(x, numTerminos)
    console.log(resultado)
    document.getElementById("r_cos").value = resultado
}
document.getElementById("tan1").addEventListener("click", arc)
function arc(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    x = document.getElementById("tan_x").value
    numTerminos = document.getElementById("t_tan").value
    resultado = arctang(x, numTerminos)
    console.log(resultado)
    document.getElementById("r_tan").value = resultado
}
document.getElementById("arsec1").addEventListener("click", arcsen1)
function arcsen1(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    x = document.getElementById("arsen_x").value
    numTerminos = document.getElementById("t_arsec").value
    resultado = arcsen(x, numTerminos)
    console.log(resultado)
    document.getElementById("r_arsec").value = resultado
}
document.getElementById("arco1").addEventListener("click", arcoo)
function arcoo(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    x = document.getElementById("arco_x").value
    numTerminos = document.getElementById("t_arco").value
    resultado = arco(x, numTerminos)
    console.log(resultado)
    document.getElementById("r_arco").value = resultado
}
document.getElementById("sec1").addEventListener("click", secan)
function secan(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    x = document.getElementById("sec_x").value
    numTerminos = document.getElementById("t_sec").value
    resultado = secante(x, numTerminos)
    console.log(resultado)
    document.getElementById("r_sec").value = resultado
}
document.getElementById("csc1").addEventListener("click", csc2)
function csc2(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    x = document.getElementById("csc_x").value
    numTerminos = document.getElementById("t_csc").value
    resultado = csc(x, numTerminos)
    console.log(resultado)
    document.getElementById("r_csc").value = resultado
}
document.getElementById("tang_x_b").addEventListener("click", tang1)
function tang1(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    x = document.getElementById("tang_x").value
    numTerminos = document.getElementById("t_tang_x").value
    resultado = tang(x, numTerminos)
    console.log(resultado)
    document.getElementById("r_tang_x").value = resultado
}
document.getElementById("senh1").addEventListener("click", senoh)
function senoh(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    x = document.getElementById("x_sen_h").value
    numTerminos = document.getElementById("t_sen_h").value
    resultado = sh(x, numTerminos)
    console.log(resultado)
    document.getElementById("r_sen_h").value = resultado
}
document.getElementById("cosh1").addEventListener("click", cosenoh)
function cosenoh(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    x = document.getElementById("x_cos_h").value
    numTerminos = document.getElementById("t_cos_h").value
    resultado = ch(x, numTerminos)
    console.log(resultado)
    document.getElementById("r_cosh").value = resultado
}
document.getElementById("tanh1").addEventListener("click", tangh)
function tangh(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    x = document.getElementById("x_tan_h").value
    numTerminos = document.getElementById("t_tan_h").value
    resultado = th(x, numTerminos)
    console.log(resultado)
    document.getElementById("r_tanh").value = resultado
}
document.getElementById("arcocos").addEventListener("click", arcocosh1)
function arcocosh1(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    x = document.getElementById("x_arco_cos").value
    numTerminos = document.getElementById("t_arco_cos").value
    resultado = ach(x, numTerminos)
    console.log(resultado)
    document.getElementById("r_arco_cos").value = resultado
}
document.getElementById("tan_arco_h").addEventListener("click", arcotnag1h)
function arcotnag1h(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    x = document.getElementById("x_t_arco_h").value
    numTerminos = document.getElementById("t_arco_h_t").value
    resultado = arcotanh(x, numTerminos)
    console.log(resultado)
    document.getElementById("r_arco_h").value = resultado
}
document.getElementById("b_lambert").addEventListener("click", lam1)
function lam1(){
    let resultado = 0
    let x = 0
    let numTerminos = 0
    x = document.getElementById("x_lambert").value
    numTerminos = document.getElementById("t_lambert").value
    resultado = lambert1(x, numTerminos)
    console.log(resultado)
    document.getElementById("r_lambert").value = resultado
}