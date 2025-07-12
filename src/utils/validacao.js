export function validarEntrada (ent) {

    const saida = document.getElementById('resultado')
    if(ent === ''){
        saida.textContent = 'O campo não pode ficar vazio';
        return null
    }
    
    return ent
    
}


export function adicionarEventoBotao(idBotao, funcao) {
    if (idBotao) {
        idBotao.addEventListener('click', funcao);
    }
}