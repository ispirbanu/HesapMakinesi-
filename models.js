//Başlangıçtaki div yazılarını silmek için
var sayac1=1;
var sayac2=1;
//hangi sayı üzerinde işlem yapılacağı
var degerkonum=0; //0- 1.sayıyı, 1- 2.sayıyı gösterir
var sayi1=0;
var sayi2=0;
var operatordeger="";
var islemsonucu=0;

//sonuçları temizlemek
function clearSonuc(){
	document.getElementById("sonuc").innerHTML = "";
	document.getElementById("sayi1").innerHTML="";
	document.getElementById("sayi2").innerHTML="";
	sayi1=0;
	sayi2=0;
	operatordeger="";
	islemsonucu=0;
	sayac1=1;
	sayac2=1;
	degerkonum=0;
}
//baştaki sıfırı kaldırmak
function removeZero(){
	var val=document.getElementById("sonuc").innerHTML;
	if(val=="0"){
		valu=" ";
		document.getElementById("sonuc").innerHTML = valu;
	}
}

//sayıları girmek
function fordisplay(myvalue){	
	if(degerkonum==0){
		sayi1+=myvalue;
		if(sayac1==1){
			document.getElementById("sayi1").innerHTML="";
				sayac1=0;
		}
		document.getElementById("sayi1").innerHTML += myvalue;
	}
	if(degerkonum==1){
		sayi2+=myvalue;
		if(sayac2==1){
			document.getElementById("sayi2").innerHTML="";
			sayac2=0;
		}
		document.getElementById("sayi2").innerHTML +=myvalue;
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
		document.getElementById("sonuc").innerHTML= islemsonucu;
	}
	if(operator=='x'){
		islemsonucu= sayi1*sayi2;
		document.getElementById("sonuc").innerHTML= islemsonucu;
	}
	if(operator=='-'){
		islemsonucu= sayi1-sayi2;
		document.getElementById("sonuc").innerHTML= islemsonucu;
	}
	if(operator=='+'){
		islemsonucu=(parseFloat(sayi1)+ parseFloat(sayi2));
		document.getElementById("sonuc").innerHTML= islemsonucu;
	}
}

//rakam silme işlemi	
function deletefonk(myvaluee){
	if(myvaluee=="<"){
		if(degerkonum==0){
			var silinmis= sayi1.slice(1,-1);
			sayi1=silinmis;
			document.getElementById("sayi1").innerHTML= sayi1;
		}
		else if(degerkonum==1){
			var silinmis= sayi2.slice(1,-1);
			sayi2=silinmis;
			document.getElementById("sayi2").innerHTML= sayi2;
		}
	}
		
}