function onDeviceReady() { 
	var states ={};
    states[Connection.UNKNOWN]='Conexão desconhecida';
    states[Connection.ETHERNET]='Conexão Ethernet';
    states[Connection.WIFI]='Conexão WiFi';
    states[Connection.CELL_2G]='Conexão 2G';
    states[Connection.CELL_3G]='Conexão 3G';
    states[Connection.CELL_4G]='Conexão 4G';
    states[Connection.NONE]='Sem conexão';
    
document.getElementById("deviceName").innerHTML = device.name;
document.getElementById("version").innerHTML = device.cordova;
document.getElementById("mobilePlatform").innerHTML = device.platform;
document.getElementById("platformVersion").innerHTML = device.version;
document.getElementById("uuid").innerHTML = device.uuid;
document.getElementById("tipo").innerHTML = states[navigator.network.connection.type];
}

function init() {
	document.addEventListener("deviceready", onDeviceReady, false);
}
