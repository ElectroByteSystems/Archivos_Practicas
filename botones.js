document.addEventListener('DOMContentLoaded', function(){
    const Inicio = document.getElementById('bienvenida')
    const fExpo = document.getElementById('ExponencialModal')
    const logNatural = document.getElementById('NaturalModal')
    const seriegeo = document.getElementById('geometricaModal')
    const serieBino = document.getElementById('BinomialModal')
    const senox = document.getElementById('senModal')
    const cosenox = document.getElementById('cosModal')
    const arctanx = document.getElementById('arctanModal')
    const arcsenx = document.getElementById('arcsenModal')
    const arccosx = document.getElementById('arccosModal')
    const secx = document.getElementById('secModal')
    const cscx = document.getElementById('cscModal')
    const tangx = document.getElementById('tanModal')
    const senohx = document.getElementById('senhModal')
    const cosenohx = document.getElementById('coshModal')
    const tanghx1 = document.getElementById('tanhModal')
    const arcosenhx = document.getElementById('arcosenohModal')
    const arcotanhx = document.getElementById('arcotanModal')
    const lambertWX = document.getElementById('wlamModal')

    const botones = {
        btnFuncionExponencial: fExpo,
        btnLogaritmoNatural: logNatural,
        btnSerieGeometrica: seriegeo,
        btnSerieBinomial: serieBino,
        btnSenX: senox,
        btnCosX: cosenox,
        btnArctan: arctanx,
        btnArcsen: arcsenx,
        btnArccos: arccosx,
        btnsec: secx,
        btncsc: cscx,
        btnTan: tangx,
        btnsenh: senohx,
        btnCH: cosenohx,
        btnTH: tanghx1,
        btnASH: arcosenhx,
        btnATH: arcotanhx,
        btnFWL: lambertWX
    }
    Object.keys(botones).forEach(id =>{
        const boton = document.getElementById(id)
        boton.addEventListener('click', () =>{
            Inicio.style.display ='none'
            botones[id].style.display = 'block'
        })
    })
    const botonesCerrar = document.querySelectorAll('.cerrar')
    botonesCerrar.forEach(boton =>{
        boton.addEventListener('click', () =>{
            cerrarModalyRegresar()
        })
    })
    function cerrarModalyRegresar(){
        
        fExpo.style.display = 'none'
        logNatural.style.display = 'none'
        seriegeo.style.display = 'none'
        serieBino.style.display = 'none'
        senox.style.display = 'none'
        cosenox.style.display = 'none'
        arctanx.style.display = 'none'
        arcsenx.style.display = 'none'
        arccosx.style.display = 'none'
        secx.style.display = 'none'
        cscx.style.display = 'none'
        tangx.style.display = 'none'
        senohx.style.display = 'none'
        cosenohx.style.display = 'none'
        tanghx1.style.display = 'none'
        arcosenhx.style.display = 'none'
        arcotanhx.style.display = 'none'
        lambertWX.style.display = 'none'
        Inicio.style.display = 'block'
    }
})