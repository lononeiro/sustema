// scripts/geocodificacao.js

function searchAdress(endereco) {
  // Define a bounding box de Resende, RJ
  const resendeBoundingBox = {
    minLat: -22.5500,
    maxLat: -22.4000,
    minLon: -44.5000,
    maxLon: -44.3500
  };

  // Formata a bounding box para o parâmetro viewbox
  const viewbox = `${resendeBoundingBox.minLon},${resendeBoundingBox.minLat},${resendeBoundingBox.maxLon},${resendeBoundingBox.maxLat}`;

  // Faz a requisição à API do Nominatim com a bounding box
  return fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}&bounded=1&viewbox=${viewbox}`)
    .then(response => response.json())
    .then(data => {
      // Exibe o JSON completo no console
      console.log("Resposta da API:", data);

      if (data.length > 0) {
        var lat = parseFloat(data[0].lat);
        var lon = parseFloat(data[0].lon);
        return { lat, lon };
      } else {
        throw new Error("Endereço não encontrado em Resende, RJ, Brasil.");
      }
    });
}