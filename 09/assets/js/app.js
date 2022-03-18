documento = document.body; // vinculou documento (body do html)
var menuButton = document.getElementById('l-sidebar__btn'); // criou variavel para vincular botão do menu
var lsidebar = document.getElementById('l-sidebar'); // criou variavel para vincular classe do menu
function closesidebar() { lsidebar.classList.add('l-sidebar--close') }; // variável: classe do menu vinculando com classe que fecha o menu

closesidebar(); // usando a função criada

function lsidebarOpenClose() { // criou a função de abrir e fechar menu
    var aux = lsidebar.classList[1]; // função: criou variavel que une o menu com a (??) ******
    if (aux == "l-sidebar--close") { // usando condicional "se" --- se menu estiver fechado,
        lsidebar.classList.remove('l-sidebar--close'); //  remova a classe de fechar menu
        lsidebar.classList.add('l-sidebar--open'); // e adicione a variavel de abrir menu
    } else { //senão (se o menu estiver aberto)
        lsidebar.classList.remove('l-sidebar--open'); // remova a classe de abrir menu
        lsidebar.classList.add('l-sidebar--close'); // adicione a classe de fechar menu
}};

menuButton.addEventListener("click", lsidebarOpenClose); // usou a variavel criada na linha 2 (que é do botao do menu) e disse que com 1 clique no botao o menu fecha
lsidebar.addEventListener("click", lsidebarOpenClose) // usou a variavel do menu e disse que com 1 clique o menu abre
document.addEventListener("dblclick", lsidebarOpenClose); // usou a variavel que vincula o documento (linha 1) e disse que com 2 cliques o menu fecha
document.addEventListener("keydown", (key) => { // usou a variavel que vincula o documento (linha 1) e disse que quando pressionado alguma tecla...
    if (key.code == "Space") { // escolheu a tecla espaço...
        lsidebarOpenClose() // ...o menu fecha
    }
})

var box = document.getElementById('textBox'); // criou variavel (atraves do ID) que vincula a caixa de texto criada no html e personalizada pelo css 
const onMouseMove = (e) =>{ // criou uma função que 
    box.style.left = e.pageX + 60 + 'px'; // retorna para a horizontal +60px a caixa de texto (qual o mouse foi clicado)
    box.style.top = e.pageY + -30 + 'px'; // retorna para a vertical -30px a caixa de texto
}
document.addEventListener('mousemove', onMouseMove); //O mousemove é disparado quando o um mouse é movido enquanto o ponto de acesso do cursor está dentro dele.


documento.addEventListener('mousemove', textBox, false) // desabilitando o mousemove dentro da caixa de texto do menu

    function vh(px){
    px = parseFloat(px);
    var wh = window.innerHeight;
    return (px*100)/wh;}

    var caixa = document.getElementById('textBox') // criou variavel da caixa de texto e chamou de "textbox"
    function bemvindo() { caixa.classList.add('contatos') }; // criou função para chamar a caixa de texto com a escrita "contatos"
    bemvindo(); // usando a função criada

    var texto = document.createElement('a'); // criou a variavel texto e chamou de "a"
    caixa.appendChild(texto); // vinculou a caixa de texto com o texto

function textBox(evento) { // criou uma função para a interação da caixa de texto
    
    var auxtext = caixa.classList[0]; // função: criou variavel que une o menu com a (??) *****
    var aux = vh(evento.pageY); // creio que seja cada página que aparece conforme rolagem *****
    var aux2 = document.createTextNode('Bem Vindo!'); // criou texto "Bem vindo" para a caixa
    var aux3 = document.createTextNode('Sobre mim'); // criou texto "Sobre mim" para a caixa
    var aux4 = document.createTextNode('Contatos'); // criou texto "Contatos" para a caixa
    if (aux < 100 && auxtext != 'bemvindo') { // usou a condicional "se" -- se a rolagem da tela for até 100 e (??) escreva "Bem vindo!"
        caixa.removeChild(texto)
        caixa.classList.remove('sobremim')
        caixa.classList.remove('contatos')
        caixa.classList.add('bemvindo')
        texto = aux2; 
        caixa.appendChild(texto)}
    else if (aux > 100 && aux < 200 && auxtext != 'sobremim') {
        caixa.removeChild(texto)
        caixa.classList.remove('bemvindo')
        caixa.classList.remove('contatos')
        caixa.classList.add('sobremim')
        texto = aux3 
        caixa.appendChild(texto)} 
    else if (aux > 200 && auxtext != 'contatos'){
        caixa.removeChild(texto)
        caixa.classList.remove('bemvindo')
        caixa.classList.remove('sobremim')
        caixa.classList.add('contatos')
        texto = aux4 
        caixa.appendChild(texto)}
}
