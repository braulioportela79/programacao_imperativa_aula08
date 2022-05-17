// 1. Crie uma função podeSubir() que receba dois parâmetros:
//      - altura da pessoa;
//      - se está acompanhada.
//    Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
//      a) A pessoa deve medir mais de 1.40m e menos de 2 metros.
//      b) Se a pessoa medir menos de 1.40m, deve vir acompanhada.
//      c) Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.

function podeSubir(altura, acompanhada) {
    if (altura >= 1.40 && altura <= 2) {
        return true;
    } else if ((altura >= 1.20 && acompanhada) && (altura < 1.40 && acompanhada)) {
        return true;
    } else {
        return false;
    };
};

// 2) Modifique a função podeSubir(), de modo que ela exiba uma mensagem de autorização ou de impedimento no acesso ao brinquedo dependendo se a pessoa se enquadra ou não nas condições do exercício anterior. Por exemplo:
//       a) Em caso de autorização, exiba a mensagem: “Acesso autorizado.” ou “Acesso autorizado somente com acompanhante.”;
//       b) Em caso de impedimento, exiba a mensagem: “Acesso negado.”

function podeSubir(altura, acompanhada) {
    if (altura >= 1.40 && altura <= 2) {
        return `Acesso autorizado!`;
    } else if ((altura >= 1.20 && acompanhada) && (altura < 1.40 && acompanhada)) {
        return `Acesso autorizado somente com acompanhante!`;
    } else {
        return `Acesso negado!`;
    };
};

let altura = 1.20;
let acompanhada = true;

console.log(`${podeSubir(altura, acompanhada)}`);