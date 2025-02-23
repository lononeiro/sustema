
var coordenadaInicial = [-22.4689, -44.4467];
var map = L.map('map').setView(coordenadaInicial, 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

var enderecosCadastrados = [];
var marcadores = [];

function geocodificarEndereco() {
  var endereco = document.getElementById('endereco').value;

  searchAdress(endereco)
    .then(coordenadas => {
      var lat = coordenadas.lat;
      var lon = coordenadas.lon;

      var marker = L.marker([lat, lon]).addTo(map)
        .bindPopup(endereco)
        .openPopup();

      map.setView([lat, lon], 13);

      adicionarEndereco(endereco, lat, lon, marker);
    })
    .catch(error => {
      console.error('Erro ao geocodificar:', error);
      alert(error.message);
    });
}

function adicionarEndereco(endereco, lat, lon, marker) {
  enderecosCadastrados.push({ endereco, lat, lon, marker });
  atualizarListaEnderecos();
}

function removerEndereco(index) {
  var endereco = enderecosCadastrados[index];
  map.removeLayer(endereco.marker); // Remove o marcador do mapa
  enderecosCadastrados.splice(index, 1); // Remove o endereço da lista
  atualizarListaEnderecos(); // Atualiza a lista na interface
}

function atualizarListaEnderecos() {
  var listaEnderecos = document.getElementById('listaEnderecos');
  listaEnderecos.innerHTML = "";

  enderecosCadastrados.forEach((endereco, index) => {
    var li = document.createElement('li');
    li.textContent = endereco.endereco;

    var botaoExcluir = document.createElement('span');
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.className = "excluir";
    botaoExcluir.onclick = () => removerEndereco(index);

    li.appendChild(botaoExcluir);
    listaEnderecos.appendChild(li);
  });
}