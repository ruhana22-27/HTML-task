// --- BÖLMƏ 1: CÜT ƏDƏDLƏR ---

// Tapşırıq 1: 1-dən 50-yə qədər cüt ədədlər
console.log("Tapşırıq 1 (for):");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) console.log(i);
}

console.log("Tapşırıq 1 (while):");
let i1 = 1;
while (i1 <= 50) {
    if (i1 % 2 === 0) console.log(i1);
    i1++;
}

// Tapşırıq 2: İstifadəçidən verilən N-ə qədər cüt ədədlər (N = 30 götürdük)
let N = 30;
console.log("Tapşırıq 2 (for):");
for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) console.log(i);
}

console.log("Tapşırıq 2 (while):");
let i2 = 1;
while (i2 <= N) {
    if (i2 % 2 === 0) console.log(i2);
    i2++;
}

// --- BÖLMƏ 2: TƏK ƏDƏDLƏR ---

// Tapşırıq 3: 1-dən 100-ə qədər tək ədədlər
console.log("Tapşırıq 3 (for):");
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) console.log(i);
}

console.log("Tapşırıq 3 (while):");
let i3 = 1;
while (i3 <= 100) {
    if (i3 % 2 !== 0) console.log(i3);
    i3++;
}

// Tapşırıq 4: Tək ədədlərin sayını tap
let sayFor = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) sayFor++;
}
console.log("Tapşırıq 4 (for) - Tək ədədlərin sayı:", sayFor);

let sayWhile = 0;
let i4 = 1;
while (i4 <= 100) {
    if (i4 % 2 !== 0) sayWhile++;
    i4++;
}
console.log("Tapşırıq 4 (while) - Tək ədədlərin sayı:", sayWhile);

// --- BÖLMƏ 3: ƏDƏDLƏRİN CƏMİ ---

// Tapşırıq 5: 1-dən 100-ə qədər bütün ədədlərin cəmi
let cemFor = 0;
for (let i = 1; i <= 100; i++) cemFor += i;
console.log("Tapşırıq 5 (for) - Cəm:", cemFor);

let cemWhile = 0;
let i5 = 1;
while (i5 <= 100) {
    cemWhile += i5;
    i5++;
}
console.log("Tapşırıq 5 (while) - Cəm:", cemWhile);

// Tapşırıq 6: Cüt ədədlərin cəmi
let cutCemFor = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) cutCemFor += i;
}
console.log("Tapşırıq 6 (for) - Cüt ədədlərin cəmi:", cutCemFor);

let cutCemWhile = 0;
let i6 = 1;
while (i6 <= 100) {
    if (i6 % 2 === 0) cutCemWhile += i6;
    i6++;
}
console.log("Tapşırıq 6 (while) - Cüt ədədlərin cəmi:", cutCemWhile);

// Tapşırıq 7: Tək ədədlərin cəmi
let tekCemFor = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) tekCemFor += i;
}
console.log("Tapşırıq 7 (for) - Tək ədədlərin cəmi:", tekCemFor);

let tekCemWhile = 0;
let i7 = 1;
while (i7 <= 100) {
    if (i7 % 2 !== 0) tekCemWhile += i7;
    i7++;
}
console.log("Tapşırıq 7 (while) - Tək ədədlərin cəmi:", tekCemWhile);