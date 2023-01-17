// 09/06/2017
// by hhun73r

function log(x){
	console.log("## " + x);
}
function kolikoJeSati()
{		
	var trenutnoVrijeme = new Date().toLocaleTimeString	('en-US', { hour12: false,	hour: "numeric", minute: "numeric"/*,	second: "numeric"*/ });
	return trenutnoVrijeme;
}

function kojiJeDanUSedmici()
{	
	var daniUSedmici = [ "nedjelja", "ponedjeljak",	"utorak",	"srijeda", "cetvrtak", "petak", "subota" ];
	
	var datum = new Date();
	var danasJe = daniUSedmici[datum.getDay()];
	return danasJe;
}
function kojiJeDatum()
{
	var danas = new Date();
	
	var dan = danas.getDate();
	var mjesec = danas.getMonth() + 1;
	var temp = "" + danas.getFullYear();
	var godina = temp.slice(2); // get-only-last-two-numbers
	
	var separator = "/";
	var danasJe =  mjesec + separator + dan + separator + godina;
	return danasJe;
}

//	funkcija za sat[HH:MM:SS]
function sat(){
	var danas = new Date;
	var x = danas.getHours();
	var y	= danas.getMinutes();
	var	z	=	danas.getSeconds();
	
	x	=	provjeriSat(x);
	y	=	provjeriSat(y);
	z	=	provjeriSat(z);
	
	document.getElementById("sat").innerHTML = " " + x + ":" + y + ":" + z;
	
	var i	= setTimeout(sat, 1000);	// otkucaj
}

function provjeriSat(x){
	if (x < 10)	{ x = "0" + x }; // dodaj nulu ako je ispod 10
	return x;
}


// TO DO clear code
function createInputField(id, cls, type, name, acomplete, afocus, placeholder, whereId){
	var x = document.createElement('input');
	
	if (id != undefined && id != "")
	{
		log("input id [ " + id + " ]!");
		x.setAttribute('id', id);
	} else {
		log("input id [ none ]!");
	}
	
	if (cls != undefined && cls != "")
	{
		log("input class [ " + cls + " ]!");
		x.setAttribute('class', cls);
	} else {
		log("input class [ none ]!");
	}
	
	if (type != undefined && type != "")
	{
		log("input type [ " + type + " ]!");
		x.setAttribute('type', type);
	} else {
		log("input type [ none ]!");
	}
	
	if (name != undefined && name != "")
	{
		log("input name [ " + name + " ]!");
		x.setAttribute('name', name);
	} else {
		log("input name [ none ]!");
	}
	
	if (acomplete != undefined && acomplete != "")
	{
		log("input autocomplete [ " + acomplete + " ]!");
		x.setAttribute('autocomplete', acomplete);
	} else {
		log("input autocomplete [ none ]");
	}
	
	if (afocus != undefined && afocus != "")
	{
		log("input autofocus [ " + afocus + " ]!");
		x.setAttribute('autofocus', afocus);
	} else {
		log("input autofocus [ none ]!");
	}
	
	if (placeholder != undefined && placeholder != "")
	{
		log("input placeholder [ " + placeholder + " ]!");
		x.setAttribute('placeholder', placeholder);
	} else {
		log("input placeholder [ none ]!");
	}
	
	if (whereId != undefined && whereId != "")
	{
		log("input location by id [ " + whereId + " ]!");
		var y = document.getElementById(whereId);
		y.appendChild(x);
	} else {
		log("input location by id [ body ]!");
		var y = document.body;
		y.appendChild(x);
	}
}

// create form ( id - class - action - where to add by id )
function createForm(id, klass, action, whereId){
	var form = document.createElement('form');
	
	if (id != undefined && id != "")
		form.setAttribute('id', id);
	
	if (klass != undefined && klass != "")
		form.setAttribute('class', klass);
	
	if (action != undefined && action != "")
		form.setAttribute('action', action);
	
	if (whereId != undefined && whereId != "")
	{
		var x = document.getElementById(whereId);
		x.appendChild(form);
	} else {
		var x = document.body;
		x.appendChild(form);
	}
}

// object.addEventListener("click", yo);
function yo() { 
alert("YO"); 
}

// create div element ( id - class - value - where to add by id )
function createDiv(id, klass, value, whereId){	
	var div = document.createElement('div');
	
	if (id != undefined && id != "")
		div.setAttribute('id', id); 
	
	if (klass != undefined && klass != "")
		div.setAttribute('class', klass);
	
	var textNode;
	if (value != undefined && value != "")
	{
		textNode = document.createTextNode(value);
		div.appendChild(textNode);
	}

	if (whereId != undefined && whereId != "")
	{
		var b = document.getElementById(whereId);
		b.appendChild(div);
	}	else {
		var b = document.body;
		b.appendChild(div);
	}	
}


function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
//	create link element ( path - name - id - class - where to add by id)
function createLink(href, name, id, klass, whereId){	
	var a = document.createElement('a');
	
	if (href != undefined)
		a.setAttribute('href', href);
	else
		a.setAttribute('href', "#");
	
	var textNode;	
	if (name != undefined && name != "")
	{
		
		// name = dec2bin(7);
		// name = dec2bin(7);
		textNode = document.createTextNode(name);	
			
		a.appendChild(textNode);
	}
	
	if (id != undefined && id != "")
		a.setAttribute('id', id);
	
	if (klass != undefined && klass != "")
		a.setAttribute('class', klass);
	
	if (whereId != undefined)
	{
		var x = document.getElementById(whereId);
		x.appendChild(a);
	}	else {
		var x = document.body;
		x.appendChild(a);
		
		
	}
}

// google search query/form
function createSearchForm(){
	createForm("trazi", "trazi", "https://google.com/search", "");
	createInputField("ttext", "ttext", "text", "q", "off", "", "search", "trazi");
}
createSearchForm()

// clock
function createClock(){
	createDiv("clock", "clock", "", "");
	createDiv("time","time", kolikoJeSati(), "clock");
	createDiv("date", "date", kojiJeDatum(), "clock");
	createDiv("today", "today", kojiJeDanUSedmici(), "clock");
	
	
}
createClock()

// panel with icons/links
function createPanel(){
	createDiv("panel", "panel", "", "");
	createLink("https://facebook.com", "", "", "links", "panel");
	createLink("https://youtube.com", "", "", "links", "panel");
	createLink("https://reddit.com",  "", "links", "panel");
	createLink("http://192.168.1.1", "", "", "links", "panel");
	createLink("https://www.twitch.tv/directory", "", "", "links", "panel");
	createLink("http://www.vojvodinanet.com/publ/strane_serije/21", "", "", "links", "panel");
	createLink("https://www.bhtelecom.ba/webtv.html#", "", "", "links", "panel");
	createLink("http://weather.ba/detaljna-vremenska-prognoza/kakanj", "", "", "links", "panel");
	createLink("http://weather.ba/detaljna-vremenska-prognoza/kakanj", "", "", "links", "panel");
	createLink("https://facebook.com", "", "", "links", "panel");
	createLink("https://youtube.com", "", "", "links", "panel");
	createLink("https://reddit.com",  "", "links", "panel");
	createLink("http://192.168.1.1", "", "", "links", "panel");
	createLink("https://www.twitch.tv/directory", "", "", "links", "panel");
	createLink("http://www.vojvodinanet.com/publ/strane_serije/21", "", "", "links", "panel");
	createLink("https://www.bhtelecom.ba/webtv.html#", "", "", "links", "panel");
	createLink("http://weather.ba/detaljna-vremenska-prognoza/kakanj", "", "", "links", "panel");
	createLink("http://weather.ba/detaljna-vremenska-prognoza/kakanj", "", "", "links", "panel");
}
createPanel()

// // clock
// function createClock(){
	// createDiv("clock", "clock", "", "panel");
	// createDiv("today", "today", kojiJeDanUSedmici(), "clock");
	// createDiv("date", "date", kojiJeDatum(), "clock");
	// createDiv("time","time", kolikoJeSati(), "clock");
// }
// createClock()




function createStart(){
	createDiv("start", "start", "", "panel");
}
createStart()
