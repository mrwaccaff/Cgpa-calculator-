 var acc233,acc201,fin201,acc205,ecn201,ecn203,gns211,pos111,
gns111,bus103,eng,maths,econs,com,acc,calc,result,unit2;

var acc233p,acc201p,fin201p,acc205p,ecn201p,ecn203p,gns211p,pos111p,
gns111p,bus103p,engp,mathsp,econsp,comp,accp,newg;

var acc233c,acc201c,fin201c,acc205c,ecn201c,ecn203c,gns211c,pos111c,
gns111c,bus103c,engc,mathsc,econsc,comc,accc;

var acc233cs,acc201cs,fin201cs,acc205cs,ecn201cs,ecn203cs,gns211cs,pos111cs,
gns111cs,bus103cs,engcs,mathscs,econscs,comcs,acccs;

var gp1,gp2,calculate,sresult,yresult;
function gpcalc()
{
acc233= Number(document.getElementById("acc233").value);
fin201= Number(document.getElementById("fin201").value);
acc201= Number(document.getElementById("acc201").value);
acc205= Number(document.getElementById("acc205").value);
ecn201= Number(document.getElementById("ecn201").value);
ecn203= Number(document.getElementById("ecn203").value);
gns211= Number(document.getElementById("gns211").value);
gns111= Number(document.getElementById("gns111").value);
bus103= Number(document.getElementById("bus103").value);
pos111= Number(document.getElementById("pos111").value);
eng= Number(document.getElementById("eng").value);
maths= Number(document.getElementById("maths").value);
econs= Number(document.getElementById("econs").value);
com= Number(document.getElementById("com").value);
acc= Number(document.getElementById("acc").value);

	acc233p= Number(document.getElementById("acc233p").value);
fin201p= Number(document.getElementById("fin201p").value);
acc201p= Number(document.getElementById("acc201p").value);
	acc205p= Number(document.getElementById("acc205p").value);
	ecn201p= Number(document.getElementById("ecn201p").value);
	ecn203p= Number(document.getElementById("ecn203p").value);
gns211p= Number(document.getElementById("gns211p").value);
gns111p= Number(document.getElementById("gns111p").value);
bus103p= Number(document.getElementById("bus103p").value);
	pos111p= Number(document.getElementById("pos111p").value);
	engp= Number(document.getElementById("engp").value);
	mathsp= Number(document.getElementById("mathsp").value);
	econsp= Number(document.getElementById("econsp").value);
	comp= Number(document.getElementById("comp").value);
	accp= Number(document.getElementById("accp").value);
	 
    if(acc233==-1){ acc233p=0;}
	if(fin201==-1){ fin201p=0;}
	if(acc201==-1){ acc201p=0;}
	if(acc205==-1){ acc205p=0;}
	if(ecn201==-1){ ecn201p=0;}
	if(ecn203==-1){ ecn203p=0;}
	if(gns211==-1){ gns211p=0;}
	if(gns111==-1){ gns111p=0;}
	if(bus103==-1){ bus103p=0;}
	if(pos111==-1){ pos111p=0;}
	if(eng==-1){ engpp=0;}
	if(maths==-1){mathsp=0;}
	if(econs==-1){ econsp=0;}
	if(com==-1){ comp=0;}
	if(acc==-1){ accp=0;}
	
	////////////////////////////////////////////////////////
	
	acc233c= document.getElementById("acc233c").value;
fin201c= document.getElementById("fin201c").value;
acc201c= document.getElementById("acc201c").value;
acc205c= document.getElementById("acc205c").value;
ecn201c= document.getElementById("ecn201c").value;
ecn203c= document.getElementById("ecn203c").value;
gns211c= document.getElementById("gns211c").value;
gns111c= document.getElementById("gns111c").value;
bus103c= document.getElementById("bus103c").value;
pos111c= document.getElementById("pos111c").value;
engc= document.getElementById("engc").value;
mathsc= document.getElementById("mathsc").value;
econsc= document.getElementById("econsc").value;
comc= document.getElementById("comc").value;
accc= document.getElementById("accc").value;

	
acc233cs=	window.localStorage['acc233c8']=acc233c;
fin201cs=	window.localStorage['fin201c8']=fin201c;
acc201cs=	window.localStorage['acc201c8']=acc201c;
acc205cs=	window.localStorage['acc205c8']=acc205c;
ecn201cs=	window.localStorage['ecn201c8']=ecn201c;
ecn203cs=	window.localStorage['ecn203c8']=ecn203c;
gns211cs=	window.localStorage['gns211c8']=gns211c;
gns111cs=	window.localStorage['gns111c8']=gns111c;
bus103cs=	window.localStorage['bus103c8']=bus103c;
pos111cs=	window.localStorage['pos111c8']=pos111c;
engcs=	window.localStorage['engc8']=engc;
mathscs=	window.localStorage['mathsc8']=mathsc;
econscs=	window.localStorage['econsc8']=econsc;
comcs=	window.localStorage['comc8']=comc;
acccs=	window.localStorage['accc8']=accc;

acc233ps=	window.localStorage['acc233p8']=acc233p;
fin201ps=	window.localStorage['fin201p8']=fin201p;
acc201ps=	window.localStorage['acc201p8']=acc201p;
acc205ps=	window.localStorage['acc205p8']=acc205p;
ecn201ps=	window.localStorage['ecn201p8']=ecn201p;
ecn203ps=	window.localStorage['ecn203p8']=ecn203p;
gns211ps=	window.localStorage['gns211p8']=gns211p;
gns111ps=	window.localStorage['gns111p8']=gns111p;
bus103ps=	window.localStorage['bus103p8']=bus103p;
pos111ps=	window.localStorage['pos111p8']=pos111p;
engps=	window.localStorage['engp8']=engp;
mathsps=	window.localStorage['mathsp8']=mathsp;
econsps=	window.localStorage['econsp8']=econsp;
comps=	window.localStorage['comp8']=comp;
accps=	window.localStorage['accp8']=accp;


acc233s=	window.localStorage['acc2338']=acc233;
fin201s=	window.localStorage['fin2018']=fin201;
acc201s=	window.localStorage['acc2018']=acc201;
acc205s=	window.localStorage['acc2058']=acc205;
ecn201s=	window.localStorage['ecn2018']=ecn201;
ecn203s=	window.localStorage['ecn2038']=ecn203;
gns211s=	window.localStorage['gns2118']=gns211;
gns111s=	window.localStorage['gns1118']=gns111;
bus103s=	window.localStorage['bus1038']=bus103;
pos111s=	window.localStorage['pos1118']=pos111;
engs=	window.localStorage['eng8']=eng;
mathss=	window.localStorage['maths8']=maths;
econss=	window.localStorage['econs8']=econs;
coms=	window.localStorage['com8']=com;
accs=	window.localStorage['acc8']=acc;

	
	//////////////////////////////////////////////////////////////

	
unit2= (acc233p)+(acc201p)+(fin201p)+(acc205p)+(ecn201p)+(ecn203p)+(gns211p)+(gns111p)+(bus103p)+(pos111p)+(engp)+(mathsp)+(econsp)+(comp)+(accp);
var tp=((acc233*acc233p)+(fin201*fin201p)+(acc201*acc201p)+(acc205*acc205p)+(ecn201*ecn201p)+(ecn203*ecn203p)+(gns211*gns211p)+(gns111*gns111p)+(bus103*bus103p)+(pos111*pos111p)+(eng*engp)+(maths*mathsp) +(econs*econsp)+(com*comp)+(acc*accp));
var grade_sys=window.localStorage['grade'];	
/////MULTIPLE GRADING SYSTEM CALCULATION
if(window.localStorage['spreadsheet']=="spreadsheet4_all.html"){
var	cal= (tp/unit2)*(grade_sys/4);
}
else{
var	cal= (tp/unit2)*(grade_sys/5);
}
//////////////////////////////////////////////////////////////////////////////
calc=cal;
calc2=calc.toPrecision(3);
	
	if(calc2=="NaN"){
	window.localStorage['tp8']=0;
	window.localStorage['tu8']=0;	
	}
	else{
	window.localStorage['tp8']=tp;
	window.localStorage['tu8']=unit2;
		}
	//alert(window.localStorage['tp8']);

var grade;
var calc_p=calc/window.localStorage['grade']

if(calc<0){result2= "Please input your data";}
if(calc_p>=0.9){grade= "IS FIRST CLASS UPPER/DISTINCTION";}
if(calc_p>=0.7 & calc<0.9){grade= "IS SECOND CLASS UPPER/UPPER CREDIT";}
if(calc_p>=0.5 & calc<0.7){grade= "IS SECOND CLASS LOWER/LOWER CREDIT";}
if(calc_p>=0.3 & calc<0.5){grade= "IS THIRD CLASS LOWER/PASS CREDIT";}
if(calc_p<0.3){grade= "WILL LEAD TO EXPULSION FOR 100L AND 300L STUDENTS WHILE IT WILL LEAD TO PROBATION FOR 200L STUDENTS";}
	result2 = "YOUR GRADE POINT AVERAGE(CURRENT SEMESTER) IS " + calc2 + "  GRADE POINT(CHECK DOCUMENTATION FOR GRADE CATEGORY) ";
	result= calc2 + " GP(CURRENT SEMESTER)";
	if(result=="NaN GP(CURRENT SEMESTER)") {alert("Please Insert your Details appropriately(NOTE THAT F DOES NOT ATTRACT ANY GRADE POINT)");}
	else{
	window.localStorage['result8']=result;
	document.getElementById("result").value=result ;
	document.getElementById("show").value=result ;
	alert(result2);
		window.location="log/level.html";
}

}



function course()
{
	if(window.localStorage['result8']=='NAN GRADE POINT'||window.localStorage['result8']==''){}
	else{
		

document.getElementById("acc233c").value=window.localStorage['acc233c8'];
document.getElementById("acc201c").value=window.localStorage['acc201c8'];
document.getElementById("fin201c").value=window.localStorage['fin201c8'];	
document.getElementById("acc205c").value=window.localStorage['acc205c8'];
document.getElementById("ecn201c").value=window.localStorage['ecn201c8'];
document.getElementById("ecn203c").value=window.localStorage['ecn203c8'];
document.getElementById("gns211c").value=window.localStorage['gns211c8'];
document.getElementById("gns111c").value=window.localStorage['gns111c8'];
document.getElementById("pos111c").value=window.localStorage['pos111c8'];
document.getElementById("engc").value=window.localStorage['engc8'];
document.getElementById("mathsc").value=window.localStorage['mathsc8'];
document.getElementById("econsc").value=window.localStorage['econsc8'];	
document.getElementById("comc").value=window.localStorage['comc8'];
document.getElementById("accc").value=window.localStorage['accc8'];
document.getElementById("bus103c").value=window.localStorage['bus103c8'];
///////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("acc233p").value=window.localStorage['acc233p8'];
document.getElementById("acc201p").value=window.localStorage['acc201p8'];
document.getElementById("fin201p").value=window.localStorage['fin201p8'];	
document.getElementById("acc205p").value=window.localStorage['acc205p8'];
document.getElementById("ecn201p").value=window.localStorage['ecn201p8'];
document.getElementById("ecn203p").value=window.localStorage['ecn203p8'];
document.getElementById("gns211p").value=window.localStorage['gns211p8'];
document.getElementById("gns111p").value=window.localStorage['gns111p8'];
document.getElementById("pos111p").value=window.localStorage['pos111p8'];
document.getElementById("engp").value=window.localStorage['engp8'];
document.getElementById("mathsp").value=window.localStorage['mathsp8'];
document.getElementById("econsp").value=window.localStorage['econsp8'];	
document.getElementById("comp").value=window.localStorage['comp8'];
document.getElementById("accp").value=window.localStorage['accp8'];
document.getElementById("bus103p").value=window.localStorage['bus103p8'];
////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("acc233").value=window.localStorage['acc2338'];
document.getElementById("acc201").value=window.localStorage['acc2018'];
document.getElementById("fin201").value=window.localStorage['fin2018'];	
document.getElementById("acc205").value=window.localStorage['acc2058'];
document.getElementById("ecn201").value=window.localStorage['ecn2018'];
document.getElementById("ecn203").value=window.localStorage['ecn2038'];
document.getElementById("gns211").value=window.localStorage['gns2118'];
document.getElementById("gns111").value=window.localStorage['gns1118'];
document.getElementById("pos111").value=window.localStorage['pos1118'];
document.getElementById("eng").value=window.localStorage['eng8'];
document.getElementById("maths").value=window.localStorage['maths8'];
document.getElementById("econs").value=window.localStorage['econs8'];	
document.getElementById("com").value=window.localStorage['com8'];
document.getElementById("acc").value=window.localStorage['acc8'];
document.getElementById("bus103").value=window.localStorage['bus1038'];

document.getElementById("result").value=window.localStorage['result8'];
document.getElementById("show").value=window.localStorage['result8'];
/////////////////////////////////////////////////////////////////////////////////////////////
		}
}



function about(){
	alert('This app was Designed by MR WACCAFF TECH WORLD you can contact us 08062070963 or EMAIL:mrwaccafftech@gmail.com');
}
	
function clr(){
	if(window.localStorage['result8']=='NAN GRADE POINT'||window.localStorage['result8']==''){ alert('NO DATA FOUND, CALCULATE YOUR GPA AND THE DATA WILL BE AUTOMATICALLY SAVED');}
	else{
	alert('YOUR GRADE POINT DATA FOR CURRENT SEMESTER HAS BEEN PERMANENTLY DELETED,ANY OTHER CALCULATED GPA DATA WILL BE AUTOMATICALLY SAVED.');}
	
	
acc233cs=	window.localStorage['acc233c8']="";
fin201cs=	window.localStorage['fin201c8']="";
acc201cs=	window.localStorage['acc201c8']="";
acc205cs=	window.localStorage['acc205c8']="";
ecn201cs=	window.localStorage['ecn201c8']="";

ecn203cs=	window.localStorage['ecn203c8']="";
gns211cs=	window.localStorage['gns211c8']="";
gns111cs=	window.localStorage['gns111c8']="";
bus103cs=	window.localStorage['bus103c8']="";
pos111cs=	window.localStorage['pos111c8']="";
engcs=	window.localStorage['engc8']="";
mathscs=	window.localStorage['mathsc8']="";
econscs=	window.localStorage['econsc8']="";
comcs=	window.localStorage['comc8']="";
acccs=	window.localStorage['accc8']="";

acc233ps=	window.localStorage['acc233p8']=0;
fin201ps=	window.localStorage['fin201p8']=0;
acc201ps=	window.localStorage['acc201p8']=0;
acc205ps=	window.localStorage['acc205p8']=0;
ecn201ps=	window.localStorage['ecn201p8']=0;
ecn203ps=	window.localStorage['ecn203p8']=0;
gns211ps=	window.localStorage['gns211p8']=0;
gns111ps=	window.localStorage['gns111p8']=0;
bus103ps=	window.localStorage['bus103p8']=0;
pos111ps=	window.localStorage['pos111p8']=0;
engps=	window.localStorage['engp8']=0;
mathsps=	window.localStorage['mathsp8']=0;
econsps=	window.localStorage['econsp8']=0;
comps=	window.localStorage['comp8']=0;
accps=	window.localStorage['accp8']=0;


acc233s=	window.localStorage['acc2338']=0;
fin201s=	window.localStorage['fin2018']=0;
acc201s=	window.localStorage['acc2018']=0;
acc205s=	window.localStorage['acc2058']=0;
ecn201s=	window.localStorage['ecn2018']=0;
ecn203s=	window.localStorage['ecn2038']=0;
gns211s=	window.localStorage['gns2118']=0;
gns111s=	window.localStorage['gns1118']=0;
bus103s=	window.localStorage['bus1038']=0;
pos111s=	window.localStorage['pos1118']=0;
engs=	window.localStorage['eng8']=0;
mathss=	window.localStorage['maths8']=0;
econss=	window.localStorage['econs8']=0;
coms=	window.localStorage['com8']=0;
accs=	window.localStorage['acc8']=0;
window.localStorage['result8']="";
/////////////////////////////////////////////////////////
	var cgpa1= window.localStorage['cgpa18']="";
	var cgpa2= window.localStorage['cgpa28']="";
	var cgpa3= window.localStorage['cgpar8']="";

	window.location='l_eight.html';

}
/////////////////////////////////////////////////////////////

function exited(){
	buttonIndex=1;
confirmed = function(buttonIndex) { if(buttonIndex == 1) {
console.log("navigator.app.exitApp"); navigator.app.exitApp(); } }
onTouch = function() { navigator.notification.confirm('', confirmed,
'Exit?'); }
}
function onLoad() {
/*document.addEventListener("deviceready", onDeviceReady);*/
}
// device APIs are available
//
function onDeviceReady() {
// Register the event listener
document.addEventListener("backbutton", onBackKeyDown);
}
// Handle the back button
//
function onBackKeyDown() {
navigator.notification.confirm(
'Are you sure you want to exit?!', // message
onConfirm, // callback to invoke with index of button pressed
'Confirm exit', // title
['Yes','No'] // buttonLabels
);
function onConfirm(buttonIndex) {
if (buttonIndex == 1) {
navigator.app.exitApp();
}
}
}


