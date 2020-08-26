var wcratioA=[0.3,0.35,0.42,0.43,0.44,0.45,0.46,0.47,0.48,0.49,0.50,0.51,0.52,0.53,0.54,0.55];

var tmsA=[57.5,54,48,45,43,40,38,33,31,29,26,25,24,23,22,21];

var szoneValueA=[1.5,0,-1.5,-3];

var percentSIOrD=0;

var L46,L47,L50,L51,L56,L57,L58,L59,M46,M50,N58,N59;

var wcratio=0,cementCont=0,corrScont=0,corrWcont=0;

var speGravCem=0.0,sgravf=0.0,sgravc=0.0;

var qtyFagg=0.0,qtyCagg=0,corrQtyFagg=0,corrQtyCagg=0,corrQtyWater=0;

var wcont=0,scont=0;

var estAirCont=1,volOfConcrete=1

var fram;

function allv1(){

fetchData();
wContsCont();
sandCorr();
waterCorr();
speGravCm();
sgravfm();
sgravcm();
mcontfm();
mcontcm();
wAbsfm();
wAbscm();

}

function fetchData(){
var dg=parseInt(document.getElementById('dg').value);
var sigma=0,tms=0,mfactor=1.64;
if(dg==20||dg==25){
	sigma=4;
	tms=dg+mfactor*sigma;
	document.getElementById('tms').innerHTML="TMS = <b>"+tms+"</b>";
}
else if (dg==30||dg==35||dg==40||dg==45||dg==50){
	sigma=5;
	tms=dg+mfactor*sigma;
	document.getElementById('tms').innerHTML="TMS = <b>"+tms+"</b>";
}
else{
	document.getElementById('tms').innerHTML="TMS = ";
}
calcWCRatio(tms);
}



function calcWCRatio(tms){

	for (var i = tmsA.length - 1; i > 0; i--) {
		if(tms==tmsA[i]){
			wcratio=wcratioA[i];
				document.getElementById('wcratio').innerHTML="<b>"+wcratio+"</b>";
				percentSIOrD=(0.6-wcratio)/0.05;

		}
		else if(tms>=tmsA[0]){
			wcratio=wcratioA[0];
				document.getElementById('wcratio').innerHTML="<b>"+wcratio+"</b>";
				percentSIOrD=(0.6-wcratio)/0.05;

		}
		else if(tms>tmsA[i]&&tms<tmsA[i-1])
		{
			var mid=(tmsA[i]+tmsA[i-1])/2;
			if (tms<mid)
				wcratio=wcratioA[i];
			else
				wcratio=wcratioA[i-1];
			percentSIOrD=(wcratio-0.6)/0.05;
			document.getElementById('wcratio').innerHTML="<b>"+wcratio+"</b>";
		}
	}
	percentSIOrD=percentSIOrD.toFixed(1);
}

function wContsCont(){
	var maxaggr=parseInt(document.getElementById('maxaggr').value);
	var f=0;
	if(maxaggr==10)
	{
		wcont=208;
		scont=40;
	}
	else if(maxaggr==20)
	{
		wcont=186;
		scont=35;
	}
	else if(maxaggr==40)
	{
		wcont=165;
		scont=30;
	}
	else
	{
		f=1;
		alert("Wrong Input !!");
	}
	if(f!=1)
	{
		document.getElementById('wcont').innerHTML="Water Content = <b>"+wcont+"</b>";
		document.getElementById('scont').innerHTML="Sand Content = <b>"+scont+"</b>";
	}
}

function sandCorr(){
	var szone=parseInt(document.getElementById('szone').value);
	var percentScont=szoneValueA[szone-1];
	var TpercentScont=(parseFloat(percentScont)+parseFloat(percentSIOrD)).toFixed(1);
	corrScont=parseFloat(scont)+parseFloat(TpercentScont);
	var tempScont=corrScont*100;
	tempScont=tempScont.toFixed(2);
	document.getElementById('corrScont').innerHTML="Correction in sand content = <b>"+tempScont+"%"+"</b>";

}

function waterCorr(){
	var tempWcont=3;
	corrWcont=wcont+wcont*tempWcont/100;
	corrWcont=corrWcont.toFixed(2);
	document.getElementById('corrWcont').innerHTML="Correction in water content = <b>"+corrWcont+"</b>";
	cementCont=corrWcont/wcratio;
	cementCont=cementCont.toFixed(2);
	document.getElementById('cementCont').innerHTML="<b>"+cementCont+"</b>";
}

function speGravCm(){
	L56=((volOfConcrete-(estAirCont/100))*1000).toFixed(2);
	speGravCem=parseFloat(document.getElementById('sGravCem').value);
	L57=(cementCont/speGravCem).toFixed(6);
	L58=(100/corrScont).toFixed(6);
}

function sgravfm(){
	sgravf=parseFloat(document.getElementById('sGravf').value);
	L59=(1/sgravf).toFixed(6);
	var temp=parseFloat(corrWcont)+parseFloat(L57);
	temp=temp.toFixed(6);
	var temp1=parseFloat(L56)-parseFloat(temp);
	temp1=temp1.toFixed(6);
	var temp2=L58*L59;
	temp2=temp2.toFixed(6);
	qtyFagg=(temp1/temp2).toFixed(2);
	document.getElementById('qtyFagg').innerHTML="Quantity of Fine Aggregate = <b>"+qtyFagg+"</b>";
	}

function sgravcm(){
	var temp=(corrScont/100).toFixed(6);
	var temp1=(1-parseFloat(temp)).toFixed(6);
	N58=(1/temp1).toFixed(6);
	sgravc=parseFloat(document.getElementById('sGravc').value);
	N59=(1/sgravc).toFixed(6);
	var temp2=parseFloat(corrWcont)+parseFloat(L57);
	temp2=(temp2).toFixed(6);
	var temp3=parseFloat(L56)-parseFloat(temp2);
	temp3=(temp3).toFixed(6);
	var temp4=(N58*N59).toFixed(6);
	qtyCagg=(temp3/temp4).toFixed(2);
	document.getElementById('qtyCagg').innerHTML="Quantity of Coarse Aggregate = <b>"+qtyCagg+"</b>";
}

function mcontfm(){
	sgravcm();
	mcontf=parseFloat(document.getElementById('mContf').value);
	L46=(mcontf/100)*qtyFagg;
	corrQtyFagg=parseFloat(qtyFagg)+parseFloat(L46);
	corrQtyFagg=corrQtyFagg.toFixed(2);
	document.getElementById('corrQtyFagg').innerHTML="<b>"+corrQtyFagg+"</b>";
}

function mcontcm(){
	mcontc=parseFloat(document.getElementById('mContc').value);
	L47=(mcontc/100)*qtyCagg;
	corrQtyCagg=parseFloat(qtyCagg)+parseFloat(L47);
	corrQtyCagg=corrQtyCagg.toFixed(2);
	document.getElementById('corrQtyCagg').innerHTML="<b>"+corrQtyCagg+"</b>";
	M46=parseFloat(L46)+parseFloat(L47);
	M46.toFixed(2);
}

function wAbsfm(){
	wAbsf=parseFloat(document.getElementById('wAbsf').value);
	L50=(wAbsf/100)*qtyFagg;
	L50=L50.toFixed(6);
}

function wAbscm(){
	wAbsc=parseFloat(document.getElementById('wAbsc').value);
	L51=(wAbsc/100)*qtyCagg;
	L51=L51.toFixed(6);
	M50=parseFloat(L50)+parseFloat(L51);
	M50=M50.toFixed(2);
	corrQtyWater=(parseFloat(corrWcont)-parseFloat(M46))+parseFloat(M50);
	corrQtyWater=corrQtyWater.toFixed(2);
	document.getElementById('corrQtyWater').innerHTML="<b>"+corrQtyWater+"</b>";
}

function add3(a)
{
	var b=a+3;
	return b;
}

/*function valueExchange()
{

$.ajax({
type: "POST",
url: 'test.php',
data: "I37="+5;
//data: "I37="+cementCont+"&I67="+corrQtyWater+"&I63="+corrQtyFagg+"&I65="+corrQtyCagg ,
success: function(data)
{
alert(data);
}
});

}*/

// I37 cementCont,
// I67 corrQtyWater,
// I63 corrQtyFagg,
// I65 corrQtyCagg,

function change(){

	//XXXXX-XXXXX-XXXXX-XXXXX
	//xxxxx-xxxxx-xxxxx-xxxxx-xx

	var name=document.getElementById('name').value;
	alert(name);
	var email=document.getElementById('email').value;
	alert(email);
	var mob=document.getElementById('mob').value;
	alert(mob);
	var gender=document.getElementById('gender').value;
	alert(gender);
	var m=document.getElementById('gm').value;
	alert(m);
	var f=document.getElementById('gf').value;
	alert(f);
	var t=document.getElementById('gt').value;
	alert(t);
	var dob=document.getElementById('dob').value;
	alert(dob);
	var purpose=getElementsByClassName('purpose').value;
	alert(purpose);
	var org=document.getElementById('org').value;
	alert(org);
	var address=document.getElementById('address').value;
	alert(address);
	if(name==""||email==""||mob==""||gender==""||dob==""||purpose==""||org==""||address=="")
	return;
		else
			window.location.assign("activity.html");
//m==""&&f==""
	alert("ok");
}

function disp(){
	var a=document.getElementById('fa').value;
	document.getElementById('aws').innerHTML=""+a;
	alert(a);
}

function activity()
{
	window.location.assign("test.php?cementCont="+cementCont+"&corrQtyFagg="+corrQtyFagg+"&corrQtyCagg="+corrQtyCagg+"&corrQtyWater="+corrQtyWater+"&wcratio="+wcratio);
}

function purchase()
{
	window.location.assign("newform.html");
}

function activity2()
{
	window.location.assign("activity.html");
}


function passVal(){

	var e1=document.getElementById('dg').value;
	var e2=document.getElementById('maxaggr').value;
	var e3=document.getElementById('fmod').value;
	var e4=document.getElementById('szone').value;
	var e5=document.getElementById('sGravCem').value;
	var e6=document.getElementById('sGravf').value;
	var e7=document.getElementById('sGravc').value;
	var e8=document.getElementById('mContf').value;
	var e9=document.getElementById('mContc').value;
	var e10=document.getElementById('wAbsf').value;
	var e11=document.getElementById('wAbsf').value;



if(e1&&e2&&e3&&e4&&e5&&e6&&e7&&e8&&e9&&e10&&e11)
{
	activity();
}
}

function Disable_Control_C() {
         var keystroke = String.fromCharCode(event.keyCode).toLowerCase();

         if (event.ctrlKey && (keystroke == 'c' || keystroke == 'a')) {
             event.returnValue = false; // disable Ctrl+C
         }
     }

     function disableContextMenu()
  {
    //window.frames["fram"].document.oncontextmenu = function(){alert("No way!"); return false;};   
    // Or use this
     document.getElementById("fram").contentWindow.document.oncontextmenu = function(){alert("No way!"); return false;};

     var keystroke = String.fromCharCode(event.keyCode).toLowerCase();

         if (event.ctrlKey && (keystroke == 'c' || keystroke == 'a')) {
             event.returnValue = false; // disable Ctrl+C
         }
  }  



function copyToClipboard() {
  // Create a "hidden" input
  var aux = document.createElement("input");
  // Assign it the value of the specified element
  aux.setAttribute("value", "Você não pode mais dar printscreen. Isto faz parte da nova medida de segurança do sistema.");
  // Append it to the body
  document.body.appendChild(aux);
  // Highlight its content
  aux.select();
  // Copy the highlighted text
  document.execCommand("copy");
  // Remove it from the body
  document.body.removeChild(aux);
  alert("Print screen desabilitado.");
}

function test(){

$(window).keyup(function(e){
  if(e.keyCode == 44){
    copyToClipboard();
  }
}); 

$(window).focus(function() {
  $("body").show();
}).blur(function() {
  $("body").hide();
});

}
/*function passVal(){
        var data = {
            fn: cementCont,
            str: corrQtyWater
        };

        $.post("test.php", data);
    }

test.php?cementCont=23&corrQtyFagg=45&corrQtyCagg=14&corrQtyWater=27


/*function startTimer() {
  myTimer = setInterval(function() {
    fetchData();
  }, 100);
}*/


/*

   var wall_user_id =  "<?php echo $_SESSION['user_id'];?>";
             var wall_userimage = "<?php echo $user_data['imagename']; ?>";

 $.ajax({
            type: "POST",
            url: "insert.php",
            data: "user_id=" + wall_user_id +"userimage="+ wall_userimage,
            success: function () {
                $('ul#posts').prepend(wall_post);

            }
        });//end success function


   data : "user_id=" + wall_user_id +"&userimage="+ wall_userimage

data : { 'user_id': wall_user_id, 'userimage': wall_userimage }

action="javascript:void(0)"

<?php $nam=$_POST['user_id']; echo $nam; ?>

*/