const secao = document.getElementById("carrinho");
const lista = document.createElement("ul"); 

lista.classList.add('lista');
secao.appendChild(lista);

const itensLista = ['Carro', 'Bike', 'Patinete', 'Celular', 'Carregador'];
let itemLista; 
let textoItemLista; 

for (const texto of itensLista) {
    itemLista = document.createElement("li");
    itemLista.classList.add('lista__item');
    textoItemLista = document.createTextNode(texto);
    itemLista.appendChild(textoItemLista);
    lista.appendChild(itemLista);
}