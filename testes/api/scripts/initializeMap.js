function InitializeMap(){
    var coordenadaInicial = [-22.4689, -44.4467];
    var map = L.map('map').setView(coordenadaInicial, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
    }).addTo(map);

}