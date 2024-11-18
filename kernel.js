function EN(n) {
    console.log("valor de n");
    console.log(n);
    let E = [];

    E[0] = 1;
    E[1] = 1;
    E[2] = -1;
    E[3] = 5;
    E[4] = -61;
    E[5] = 1385;
    E[6] = -50521;
    E[7] = 2702765;
    E[8] = -199360981;
    E[9] = 19391512145;
    E[10] = -2404879675441;
    E[11] = 370371188237525;
    E[12] = -69348874393137901;
    E[13] = 26315271553053477373;
    E[14] = -1123420320481181303125;
    E[15] = 551350298393271;
    E[16] = -23749461029;
    E[17] = 29382049034;
    E[18] = -176453341101;
    E[19] = 191154327;
    E[20] = -26878036369;
    E[21] = 71446747;
    E[22] = -16861025;
    E[23] = 10032399149;
    E[24] = 34458895657;
    E[25] = -15905311315;
    E[26] = -109228;
    E[27] = 352;
    E[28] = -716571695703170;

    if (n <= 60) {
        if ((n == 0) || (n == 1) || (n % 2 == 0)) {
            return E[n];
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

function BN(n) {
    console.log("valor de n")
    console.log(n)
    let B = []

    B[0] = 1
    B[1] = 1 / 2
    B[2] = 1 / 6
    B[4] = -1 / 30
    B[6] = 1 / 42
    B[8] = -1 / 30
    B[10] = 5 / 66
    B[12] = -691 / 2730
    B[14] = 7 / 6
    B[16] = -3617 / 510
    B[18] = 43867 / 798
    B[20] = -174611 / 330
    B[22] = 854513 / 138
    B[24] = -236364091 / 2730
    B[26] = 8553103 / 6
    B[28]= -23749461029 / 870
    B[30] = 8615841276005 / 14322
    B[32] = -7709321041217 / 510
    B[34] = 2577687858367 / 6
    B[36] = -26315271553053477373 / 1919190
    B[38] = 2929993913841559 / 6
    B[40] = -261082718496449122051 / 13530
    B[42] = 1520097643918070802691 / 1806
    B[44] = -27833269579301024235023 / 690
    B[46] = 596451111593912163277961 / 282
    B[48] = -5609403368997817686249127547 / 46410
    B[50] = 495057205241079648212477525 / 66
    B[52] = -801165718135489957347924991853 / 1590
    B[54] = 29149963634884862421418123812691 / 798
    B[56] = -2479392929313226753685415739663229 / 870
    B[58] = 84483613348880041862046775994036021 / 354
    B[60] = -1215233140483755572040304994079820246041491 / 56786730

    if (n <= 60 ) {
        if ((n == 0) || (n == 1) || (n % 2 == 0)) {
            //console.log("devuelve n")
            //console.log(B[n])
            return B[n]
        } else {
            //console.log("devuelve n else")
            //console.log(0)
            return 0
        }
    } else {
        //console.log("devuelve n else else")
        //console.log(0)
        return 0
    }
}
function menos_uno_elevado_ala_N(n){
    let resultado = 0
    if (n%2 == 0){
        resultado = 1
    } else {
        resultado = -1
    }
    return resultado
}
function alterdorSigno(n){
    return (n % 2 === 0) ? 1: -1
}
function potenciass(N, P){
    let resultado = 1;
    for (let i = 0; i < P; i++) {
        resultado = resultado * N;
    }
    console.log(resultado);
    return resultado
}
function factorial(f){
    return (f <= 1) ? 1 : f * factorial(f - 1);
}
function factoriales(fn) {
    let result = 1;
    for (let i = 2; i <= fn; i++) {
        result *= i;
    }
    return result;
}
function Funcion_Exponencial(x, n){
    let resultado = 0
    let operacion = 0
    for (let i = 0; i < n; i++){
        operacion = potenciass(x, i) / factorial(i)
        resultado = resultado + operacion
    }
    return resultado
}
function Logaritmo_Natural(x, numTerminos){
    let resultado = 0
    for (let n = 1; n <= numTerminos; n++){
        resultado = resultado + menos_uno_elevado_ala_N (n+1) * (potenciass(x, n)/n)
    }
    return resultado
}
function Serie_geometrica(x, numTerminos, tipo){
    let resultado = 0
    switch(tipo){
        case 1: 
        for(let n = 0; n < numTerminos; n++){
            resultado = resultado + potenciass(x,n)
        }
        break
        case 2: 
        for(let n = 1; n <= numTerminos; n++){
            resultado = resultado + n * potenciass(x, n -1)
        }
        break
        case 3: 
        for(let n = 2; n <= numTerminos; n++){
            resultado = resultado + (n * (n - 1) / 2) * potenciass(x, n - 2)
        }
        break
    }
    return resultado
}
function serie_de_taylor_4(x, numTerminos, alpha){
    let resultado = 0
    let coefBinomial = 1
    let potencia = 1
    for (let n = 0; n < numTerminos; n++){
        resultado = resultado + coefBinomial * potencia
        coefBinomial = coefBinomial * (alpha - n) / (n + 1)
        potencia = potencia * x 
    }
    return resultado
}
function sen(x, numTerminos){
    let resultado = 0
    for (let n = 0; n < numTerminos; n++){
        let termino = (menos_uno_elevado_ala_N (n) * potenciass (x, 2 * n + 1)) / factorial (2 * n + 1)
        resultado = resultado + termino
    }
    return resultado
}
function coseno(x, numTerminos){
    let resultado = 0
    for (let n = 0; n < numTerminos; n++){
        let termino = (menos_uno_elevado_ala_N(n) * potenciass(x, 2 * n)) / factorial(2 * n)
        resultado = resultado + termino
    }
    return resultado
}
function arctang(x, numTerminos){
    let resultado = 0
    for (let n = 0; n < numTerminos; n++){
        let termino = (menos_uno_elevado_ala_N (n) * potenciass (x, 2 * n + 1)) / (2 * n + 1)
        resultado = resultado + termino
    }
    return resultado
}
function arcsen(x, numTerminos){
    let resultado = 0
    for (let n = 0; n < numTerminos; n++){
        let termino = (factorial(2 * n) * potenciass(x, 2 * n + 1)) / (potenciass (4, n) * factorial(n) * factorial(n) * (2 * n +1))
        resultado = resultado + termino
    }
    return resultado
}
function arco(x, numTerminos){
    return Math.PI / 2 - arcsen(x, numTerminos)
}
function secante(x, numTerminos){
    let resultado = 0
    for(let n = 0; n < numTerminos; n++){
        let termino = (EN[n] * potenciass(x, 2 * n)) / factorial(2 * n)
        resultado = resultado + termino
    }
    return 1 / resultado;
}
function csc(x, numTerminos){
    return 1 / sen(x, numTerminos)
}
function tang(x, numTerminos){
    let seno = sen(x, numTerminos)
    let cos = coseno(x, numTerminos)
    return seno / cos
}
function sh(x, numTerminos){
    let resultado = 0
    for (let n = 0; n < numTerminos; n++){
        resultado = resultado + potenciass(x, 2 * n + 1) / factorial(2 * n + 1)
    }
    return resultado
}
function ch(x, numTerminos){
    let resultado = 0
    for (let n = 0; n < numTerminos; n++){
        resultado = resultado + potenciass(x, 2 * n) / factorial(2 * n)
    }
    return resultado
}
function th(x, numTerminos){
    let resultado = 0
    for (let n = 1; n < numTerminos; n++){
        resultado = resultado + (BN[n] * Math.pow(4, n) * (Math.pow(4, n) - 1) * potenciass(x, 2 * n - 1))  / factorial(2 * n)
    }
    return resultado
}
function ach(x, numTerminos){
    let resultado = 0
    for (let n = 0; n < numTerminos; n++){
        let coef = alterdorSigno(n) * factorial(2 * n) / (Math.pow(4, n) * Math.pow(factorial(n), 2) * (2 * n +1))
        resultado = resultado + coef * potenciass(x, 2 * n + 1)
    }
    return resultado
}
function arcotanh(x, numTerminos){
    let resultado = 0
    for (let n = 0; n < numTerminos; n++){
        resultado = resultado + potenciass(x, 2 * n + 1) / (2 * n + 1)
    }
    return resultado
}
function lambert1(x, numTerminos){
    let resultado = 0
    for (let n = 1; n <= numTerminos; n++){
        let termino = (Math.pow(-n, n - 1) * potenciass(x, n)) / factorial(n)
        resultado = resultado + termino
    }
    return resultado
}
export {Funcion_Exponencial}
export {Logaritmo_Natural}
export {Serie_geometrica}
export {serie_de_taylor_4}
export {sen}
export {coseno}
export {arctang}
export {arcsen}
export {arco}
export {secante}
export {csc}
export {tang}
export {sh}
export {ch}
export {th}
export {ach}
export {arcotanh}
export {lambert1}