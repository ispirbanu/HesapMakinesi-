
//hangi sayı üzerinde işlem yapılacağı
var degerkonum=0; //0- 1.sayıyı, 1- 2.sayıyı gösterir
//sayılar
var sayi1=0;
var sayi2=0;
//operatörü tut
var operatordeger="";
var islemsonucu=0;

//sonuçları temizlemek
function clearSonuc(){
	document.getElementById("sonuc").value = "";
	document.getElementById("sayi1").value="";
	document.getElementById("sayi2").value="";
	sayi1=0;
	sayi2=0;
	operatordeger="";
	islemsonucu=0;
	degerkonum=0;
}
//baştaki sıfırı kaldırmak
function removeZero(){
	var val=document.getElementById("sonuc").value;
	if(val=="0"){
		val=" ";
		document.getElementById("sonuc").value = val;
	}
}
//sayıları girmek
function fordisplay(myvalue){
	if(degerkonum==0){
		sayi1+=myvalue;	
		document.getElementById("sayi1").value+= myvalue;
	}
	if(degerkonum==1){
		sayi2+=myvalue;
		document.getElementById("sayi2").value +=myvalue;
	}			
}
//işlem belirtmek
function operators(myoperator){
	if(degerkonum != -1 ){ //sonuç durumundaysa işlem yapılmaması için
		degerkonum=1;
		operator=myoperator;
	}
}
//işlemleri tamamlamak ve sonucu yazdırmak
function equalfonk(){
	removeZero();
	degerkonum=-1;
	if(operator=='/'){
		islemsonucu= sayi1/sayi2;
		document.getElementById("sonuc").value= islemsonucu;
	}
	if(operator=='x'){
		islemsonucu= sayi1*sayi2;
		document.getElementById("sonuc").value= islemsonucu;
	}
	if(operator=='-'){
		islemsonucu= sayi1-sayi2;
		document.getElementById("sonuc").value= islemsonucu;
	}
	if(operator=='+'){
		islemsonucu=(parseFloat(sayi1)+ parseFloat(sayi2));
		document.getElementById("sonuc").value= islemsonucu;
	}
}
//rakam silme işlemi	
function deletefonk(myvaluee){
	if(myvaluee=="<"){
		if(degerkonum==0){
			var silinmis= sayi1.slice(1,-1);
			sayi1=silinmis;
			document.getElementById("sayi1").value= sayi1;
		}
		else if(degerkonum==1){
			var silinmis= sayi2.slice(1,-1);
			sayi2=silinmis;
			document.getElementById("sayi2").value= sayi2;
		}
	}
		
}