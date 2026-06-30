
let xal = 83;

if (xal >= 90) {
    console.log("A");
} else if (xal >= 80) {
    console.log("B");
} else if (xal >= 70) {
    console.log("C");
} else if (xal >= 60) {
    console.log("D");
} else {
    console.log("F");
}




let istifadeci="admin";
let sifre="1234";
if(istifadeci==="admin"&& sifre==="1234")
{console.log("Xoş gəldiniz!");}
else
{ console.log("Giriş rədd edildi");}






let gunNo=5
switch(gunNo)
{ case 1:console.log("Bazar ertesi");break;
case 2:console.log("Çərşənbə axşami");break;
case 3: console.log("Çərşənbə");break;
case 4:console.log("Cume axşamı");break;
case 5:console.log("Cume");break;
case 6:console.log("Şənbə");break;
case 7:console.log("BAzar");break;
default:console.log ("Yanliş gun nömrəsi");
}

let saatlar=45;
if (saatlar <40)
{ console.log("Natamam iş həftəsi");}
else if ("saatlar===40")
{console.log(" Normal iş həftəsi");}
else if(" saatlar>40 && saatlar<=50 ")
{ console.log ("Əlavə iş var(x 1,5 tarif)");}
else 
{console.log("Həddindən artıq iş- icazə lazimdir");
}



let rengKodu = "#FF0000";

switch (rengKodu) {
    case "#FF0000": 
        console.log("Qırmızı"); 
        break;
    case "#00FF00": 
        console.log("Yaşıl"); 
        break;
    case "#0000FF": 
        console.log("Mavi"); 
        break;
    case "#FFFF00": 
        console.log("Sarı"); 
        break;
    case "#000000": 
        console.log("Qara"); 
        break;
    case "#FFFFFF": 
        console.log("Ağ"); 
        break;
    default: 
        console.log("Naməlum rəng");
}

let yemek = "kabab";

switch (yemek) {
    case "kabab":
        console.log("Kabab gətirildi.");
        // Əgər burada 'break' yoxdursa...
    case "pizza":
        console.log("Pizza gətirildi.");
        // ...kompüter kababdan sonra pizzanı da gətirəcək!
    case "salat":
        console.log("Salat gətirildi.");
        break; // Burada dayanacaq.
}
