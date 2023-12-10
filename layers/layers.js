var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AKL_Jember_1 = new ol.format.GeoJSON();
var features_AKL_Jember_1 = format_AKL_Jember_1.readFeatures(json_AKL_Jember_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AKL_Jember_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AKL_Jember_1.addFeatures(features_AKL_Jember_1);
var lyr_AKL_Jember_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AKL_Jember_1, 
                style: style_AKL_Jember_1,
                interactive: true,
    title: 'AKL_Jember<br />\
    <img src="styles/legend/AKL_Jember_1_0.png" /> Kemampuan Pengembangan Agak Tinggi<br />\
    <img src="styles/legend/AKL_Jember_1_1.png" /> Kemampuan Pengembangan Rendah<br />\
    <img src="styles/legend/AKL_Jember_1_2.png" /> Kemampuan Pengembangan Sedang<br />\
    <img src="styles/legend/AKL_Jember_1_3.png" /> <br />'
        });
var format_AKL_PEMUKIMAN_JEMBER_2 = new ol.format.GeoJSON();
var features_AKL_PEMUKIMAN_JEMBER_2 = format_AKL_PEMUKIMAN_JEMBER_2.readFeatures(json_AKL_PEMUKIMAN_JEMBER_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AKL_PEMUKIMAN_JEMBER_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AKL_PEMUKIMAN_JEMBER_2.addFeatures(features_AKL_PEMUKIMAN_JEMBER_2);
var lyr_AKL_PEMUKIMAN_JEMBER_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AKL_PEMUKIMAN_JEMBER_2, 
                style: style_AKL_PEMUKIMAN_JEMBER_2,
                interactive: true,
    title: 'AKL_PEMUKIMAN_JEMBER<br />\
    <img src="styles/legend/AKL_PEMUKIMAN_JEMBER_2_0.png" /> <br />\
    <img src="styles/legend/AKL_PEMUKIMAN_JEMBER_2_1.png" /> Sesuai<br />\
    <img src="styles/legend/AKL_PEMUKIMAN_JEMBER_2_2.png" /> Tidak Sesuai<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_AKL_Jember_1.setVisible(true);lyr_AKL_PEMUKIMAN_JEMBER_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_AKL_Jember_1,lyr_AKL_PEMUKIMAN_JEMBER_2];
lyr_AKL_Jember_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Kemampuan': 'Kemampuan', });
lyr_AKL_PEMUKIMAN_JEMBER_2.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Keterangan': 'Keterangan', });
lyr_AKL_Jember_1.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Kemampuan': 'TextEdit', });
lyr_AKL_PEMUKIMAN_JEMBER_2.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_AKL_Jember_1.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Kemampuan': 'header label', });
lyr_AKL_PEMUKIMAN_JEMBER_2.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Keterangan': 'header label', });
lyr_AKL_PEMUKIMAN_JEMBER_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});