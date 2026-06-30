// 1. Özün haqqında
let ad = "Ruhana";
let yas = 32;          // Yaşın
let telebedir = false; // Tələbə deyilsən

console.log("--- 1. Özün haqqında ---");
console.log("Ad:", ad);
console.log("Yaş:", yas);
console.log("Tələbədir:", telebedir);

// 2. Tip yoxla
console.log("\n--- 2. Tip yoxla ---");
console.log("Adın tipi:", typeof ad);        // "string"
console.log("Yaşın tipi:", typeof yas);       // "number"
console.log("Tələbədir tipinin tipi:", typeof telebedir); // "boolean"

// 3. Sadə hesablama
let a = 10;
let b = 3;

console.log("\n--- 3. Sadə hesablama ---");
console.log("Cəm:", a + b);
console.log("Fərq:", a - b);
console.log("Hasil:", a * b);
console.log("Bölmə:", a / b);
console.log("Qalıq:", a % b);

// 4. % ilə yoxla
let say = 10;
console.log("\n--- 4. % ilə yoxla ---");
console.log(say % 2); // 0 (çünki 10 cütdür)

// 5. Təqdimat cümləsi
let adim = "Ruhana";
let seher = "Bakı";

console.log("\n--- 5. Təqdimat cümləsi ---");
// Template literal (${}) ilə
console.log(`Mənim adım ${adim} və mən ${seher} şəhərində yaşayıram.`);
// + işarəsi ilə
console.log("Mənim adım " + adim + " və mən " + seher + " şəhərində yaşayıram.");

// 6. Düşün
let x;
let y = null;

console.log("\n--- 6. Düşün ---");
console.log("typeof x:", typeof x); // undefined
console.log("typeof y:", typeof y); // object