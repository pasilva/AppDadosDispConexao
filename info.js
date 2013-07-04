function onDeviceReady() { 
	var states ={};
    states[Connection.UNKNOWN]='Conex�o desconhecida';
    states[Connection.ETHERNET]='Conex�o Ethernet';
    states[Connection.WIFI]='Conex�o WiFi';
    states[Connection.CELL_2G]='Conex�o 2G';
    states[Connection.CELL_3G]='Conex�o 3G';
    states[Connection.CELL_4G]='Conex�o 4G';
    states[Connection.NONE]='Sem conex�o';
    
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
