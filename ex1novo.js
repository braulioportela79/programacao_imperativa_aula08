function podeSubir(altura, acompanhado) {
    if (altura > 1.40 && altura < 2.00) {
        return true;
    } else if ((altura < 1.40 && acompanhado) && (altura > 1.20 && acompanhado)) {
        return true;
    }
    else {
        return false;
    }
};

function podeSubir(altura, acompanhado) {
    let podeSubir = false;
    if (altura > 1.40 && altura < 2.00) {
        podeSubir = true;
    } else if ((altura < 1.40 && acompanhado) && (altura > 1.20 && acompanhado)) {
        podeSubir = true;
    }
    else {
        podeSubir = false;
    }
    return podeSubir;
};

function podeSubir(altura, acompanhado) {
    if (altura > 1.40 && altura < 2.00) {
        return 'Acesso autorizado!';
    } else if ((altura < 1.40 && acompanhado) && (altura > 1.20 && acompanhado)) {
        return 'Acesso autorizado com acompanhante!';
    }
    else {
        return 'Acesso negado!';
    }
};

let altura = 1.40;
let acompanhado = true;

console.log(podeSubir(altura, acompanhado));