var wms_layers = [];
var format_jmlhmurid_0 = new ol.format.GeoJSON();
var features_jmlhmurid_0 = format_jmlhmurid_0.readFeatures(json_jmlhmurid_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jmlhmurid_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jmlhmurid_0.addFeatures(features_jmlhmurid_0);var lyr_jmlhmurid_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jmlhmurid_0, 
                style: style_jmlhmurid_0,
    title: 'jmlh murid<br />\
    <img src="styles/legend/jmlhmurid_0_0.png" /> Bandar<br />\
    <img src="styles/legend/jmlhmurid_0_1.png" /> Banyuputih<br />\
    <img src="styles/legend/jmlhmurid_0_2.png" /> Batang<br />\
    <img src="styles/legend/jmlhmurid_0_3.png" /> Bawang<br />\
    <img src="styles/legend/jmlhmurid_0_4.png" /> Blado<br />\
    <img src="styles/legend/jmlhmurid_0_5.png" /> Gringsing<br />\
    <img src="styles/legend/jmlhmurid_0_6.png" /> Kandeman<br />\
    <img src="styles/legend/jmlhmurid_0_7.png" /> Limpung<br />\
    <img src="styles/legend/jmlhmurid_0_8.png" /> Pecalungan<br />\
    <img src="styles/legend/jmlhmurid_0_9.png" /> Reban<br />\
    <img src="styles/legend/jmlhmurid_0_10.png" /> Subah<br />\
    <img src="styles/legend/jmlhmurid_0_11.png" /> Tersono<br />\
    <img src="styles/legend/jmlhmurid_0_12.png" /> Tulis<br />\
    <img src="styles/legend/jmlhmurid_0_13.png" /> Warungasem<br />\
    <img src="styles/legend/jmlhmurid_0_14.png" /> Wonotunggal<br />\
    <img src="styles/legend/jmlhmurid_0_15.png" /> <br />'
        });var format_jmlhguru_1 = new ol.format.GeoJSON();
var features_jmlhguru_1 = format_jmlhguru_1.readFeatures(json_jmlhguru_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jmlhguru_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jmlhguru_1.addFeatures(features_jmlhguru_1);var lyr_jmlhguru_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jmlhguru_1, 
                style: style_jmlhguru_1,
    title: 'jmlh guru<br />\
    <img src="styles/legend/jmlhguru_1_0.png" /> Bandar<br />\
    <img src="styles/legend/jmlhguru_1_1.png" /> Banyuputih<br />\
    <img src="styles/legend/jmlhguru_1_2.png" /> Batang<br />\
    <img src="styles/legend/jmlhguru_1_3.png" /> Bawang<br />\
    <img src="styles/legend/jmlhguru_1_4.png" /> Blado<br />\
    <img src="styles/legend/jmlhguru_1_5.png" /> Gringsing<br />\
    <img src="styles/legend/jmlhguru_1_6.png" /> Kandeman<br />\
    <img src="styles/legend/jmlhguru_1_7.png" /> Limpung<br />\
    <img src="styles/legend/jmlhguru_1_8.png" /> Pecalungan<br />\
    <img src="styles/legend/jmlhguru_1_9.png" /> Reban<br />\
    <img src="styles/legend/jmlhguru_1_10.png" /> Subah<br />\
    <img src="styles/legend/jmlhguru_1_11.png" /> Tersono<br />\
    <img src="styles/legend/jmlhguru_1_12.png" /> Tulis<br />\
    <img src="styles/legend/jmlhguru_1_13.png" /> Warungasem<br />\
    <img src="styles/legend/jmlhguru_1_14.png" /> Wonotunggal<br />\
    <img src="styles/legend/jmlhguru_1_15.png" /> <br />'
        });var format_jmlhsekolah_2 = new ol.format.GeoJSON();
var features_jmlhsekolah_2 = format_jmlhsekolah_2.readFeatures(json_jmlhsekolah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jmlhsekolah_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jmlhsekolah_2.addFeatures(features_jmlhsekolah_2);var lyr_jmlhsekolah_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jmlhsekolah_2, 
                style: style_jmlhsekolah_2,
    title: 'jmlh sekolah<br />\
    <img src="styles/legend/jmlhsekolah_2_0.png" /> 1<br />\
    <img src="styles/legend/jmlhsekolah_2_1.png" /> 2<br />\
    <img src="styles/legend/jmlhsekolah_2_2.png" /> 3<br />\
    <img src="styles/legend/jmlhsekolah_2_3.png" /> 4<br />\
    <img src="styles/legend/jmlhsekolah_2_4.png" /> 9<br />\
    <img src="styles/legend/jmlhsekolah_2_5.png" /> <br />'
        });

lyr_jmlhmurid_0.setVisible(true);lyr_jmlhguru_1.setVisible(true);lyr_jmlhsekolah_2.setVisible(true);
var layersList = [lyr_jmlhmurid_0,lyr_jmlhguru_1,lyr_jmlhsekolah_2];
lyr_jmlhmurid_0.set('fieldAliases', {'id': 'id', 'nama_kec': 'nama_kec', 'jmlh_sklh': 'jmlh_sklh', 'jmlh_guru': 'jmlh_guru', 'jmlh_murid': 'jmlh_murid', });
lyr_jmlhguru_1.set('fieldAliases', {'id': 'id', 'nama_kec': 'nama_kec', 'jmlh_sklh': 'jmlh_sklh', 'jmlh_guru': 'jmlh_guru', 'jmlh_murid': 'jmlh_murid', });
lyr_jmlhsekolah_2.set('fieldAliases', {'id': 'id', 'nama_kec': 'nama_kec', 'jmlh_sklh': 'jmlh_sklh', 'jmlh_guru': 'jmlh_guru', 'jmlh_murid': 'jmlh_murid', });
lyr_jmlhmurid_0.set('fieldImages', {'id': 'TextEdit', 'nama_kec': 'TextEdit', 'jmlh_sklh': 'TextEdit', 'jmlh_guru': 'TextEdit', 'jmlh_murid': 'TextEdit', });
lyr_jmlhguru_1.set('fieldImages', {'id': 'TextEdit', 'nama_kec': 'TextEdit', 'jmlh_sklh': 'TextEdit', 'jmlh_guru': 'TextEdit', 'jmlh_murid': 'TextEdit', });
lyr_jmlhsekolah_2.set('fieldImages', {'id': 'TextEdit', 'nama_kec': 'TextEdit', 'jmlh_sklh': 'TextEdit', 'jmlh_guru': 'TextEdit', 'jmlh_murid': 'TextEdit', });
lyr_jmlhmurid_0.set('fieldLabels', {'id': 'inline label', 'nama_kec': 'inline label', 'jmlh_sklh': 'inline label', 'jmlh_guru': 'inline label', 'jmlh_murid': 'inline label', });
lyr_jmlhguru_1.set('fieldLabels', {'id': 'inline label', 'nama_kec': 'inline label', 'jmlh_sklh': 'inline label', 'jmlh_guru': 'inline label', 'jmlh_murid': 'inline label', });
lyr_jmlhsekolah_2.set('fieldLabels', {'id': 'inline label', 'nama_kec': 'inline label', 'jmlh_sklh': 'inline label', 'jmlh_guru': 'inline label', 'jmlh_murid': 'inline label', });
lyr_jmlhsekolah_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});