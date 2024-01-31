require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer"
], function (Map, MapView, FeatureLayer) {
  var map = new Map({
    basemap: "topo-vector"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-90.2269929, 38.6213622],
    zoom: 12
  });

    var featureLayer1 = new FeatureLayer({
    portalItem: {
      id: "b0a2bf75ab284aba834328a5a8f6e28b"
    }
  });
  map.add(featureLayer1);

  var featureLayer2 = new FeatureLayer({
    url: "https://services2.arcgis.com/yL7v93RXrxlqkeDx/arcgis/rest/services/STL_Neighborhoods/FeatureServer/0",
    opacity: 0.4
  });
  map.add(featureLayer2);
});