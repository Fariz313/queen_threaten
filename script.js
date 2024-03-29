// SVG ratu
const svgQueen = '<svg class=" mx-3 my-2" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision"     text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd"     clip-rule="evenodd" viewBox="0 0 194 510.84">     <path fill="green"  stroke="white" style="  stroke-width: 5;"         d="M48.01 216.67c-1.15 46.22-11.65 135.35-23.21 165.21h144.4c-13.45-33.87-24.57-122.41-26.13-165.21H48.01zm11.45-83.87h75.08c4.91 0 8.93 4.06 8.93 8.93 0 4.88-4.06 8.94-8.93 8.94H59.46c-4.87 0-8.93-4.02-8.93-8.94 0-4.91 4.02-8.93 8.93-8.93zm-26.24 55.91h127.56c4.91 0 8.93 4.04 8.93 8.94 0 4.89-4.04 8.93-8.93 8.93H33.22c-4.89 0-8.93-4.02-8.93-8.93 0-4.92 4.02-8.94 8.93-8.94zm13.12-27.96h101.32c4.91 0 8.93 4.06 8.93 8.94s-4.05 8.93-8.93 8.93H46.34c-4.88 0-8.93-4.02-8.93-8.93 0-4.92 4.02-8.94 8.93-8.94zM97 59.26c-5.33.07-11.61-3.54-14.39-10.63h-9.8c-2.93 11.83-23.41 17.97-30.6.08l-7.99 5.12c-2.66 1.71-3.25 1.8-3.37 5.32-.05 1.68.23 3.5.9 4.83 14.3 13.97 21 35.19 21.98 58.74h86.54c.98-23.55 7.68-44.77 21.98-58.74.67-1.33.95-3.15.9-4.83-.12-3.52-.71-3.61-3.37-5.32l-7.99-5.12c-7.19 17.89-27.67 11.75-30.6-.08h-9.8c-2.78 7.09-9.06 10.7-14.39 10.63zM97 0c9.64 0 17.46 7.82 17.46 17.46 0 4.99-2.11 9.5-5.47 12.69 14.91 2.67 27.09 10.3 32.9 20.3-.38.31-.77.58-1.17.8-1.66.95-3.53 1.27-5.36 1.09a11.24 11.24 0 0 1-5.38-2.03c-1.71-1.21-2.99-2.84-3.43-4.63a6.058 6.058 0 0 0-5.87-4.6v-.01h-9.8c-2.67 0-4.94 1.74-5.74 4.15-.87 2.07-2.18 3.65-3.65 4.74-1.61 1.19-3.37 1.78-4.92 1.76h-.15c-1.55.02-3.31-.57-4.91-1.76-1.55-1.14-2.91-2.82-3.78-5.04a6.064 6.064 0 0 0-5.62-3.85h-9.8c-2.95 0-5.41 2.11-5.95 4.9-.5 1.68-1.73 3.2-3.35 4.34a11.24 11.24 0 0 1-5.38 2.03c-1.83.18-3.7-.14-5.36-1.09l-.17-.1C57.71 40.88 69.96 33 85.08 30.21c-3.41-3.19-5.54-7.72-5.54-12.75C79.54 7.82 87.36 0 97 0zM31.18 391.97h131.64c6.03 0 10.96 4.95 10.96 10.95 0 6-4.96 10.96-10.96 10.96H31.18c-6 0-10.96-4.93-10.96-10.96 0-6.02 4.93-10.95 10.96-10.95zm-19.85 96.21h171.34c6.23 0 11.33 5.09 11.33 11.33 0 6.23-5.1 11.33-11.33 11.33H11.33C5.1 510.84 0 505.74 0 499.51c0-6.24 5.1-11.33 11.33-11.33zm148.88-64.19c9.17 16.1 24.19 32.39 21.75 54.07H12.01c-2.44-21.68 14.6-37.97 23.77-54.07h124.43z" /> </svg>'
function isQueenThreatened(queen1, queen2) {
    // Memeriksa apakah dua ratu memiliki posisi yang sama
    if (queen1[0] === queen2[0] || queen1[1] === queen2[1]) {
        // Jika posisi sama pada baris atau kolom, maka saling mengancam
        return true;
    }

    // Memeriksa diagonal utama
    if (Math.abs(queen1[0] - queen2[0]) === Math.abs(queen1[1] - queen2[1])) {
        // Jika posisi berada di diagonal utama, maka saling mengancam
        return true;
    }

    // Jika tidak memenuhi kondisi di atas, maka tidak saling mengancam
    return false;
}

// Fungsi untuk memeriksa apakah ada dua ratu yang saling mengancam
function isAnyQueenThreatened(queens) {
    let Threatened=0
    let svgQueenPlaced = svgQueen
    // Loop semua hubungan 2 ratu 
    for (let i = 0; i < queens.length; i++) {
        for (let j = i + 1; j < queens.length; j++) {
            if (isQueenThreatened(queens[i], queens[j])) {
                console.log(queens[i], queens[j],"Saling Mengancam");
                // Jika ratu terancam ganti warna menjadi merah
                const svgQueenPlacedRedded=svgQueenPlaced.replace("green", "red")
                // Tempatkan SVG di papan catur sesuai dengan coordinate
                $("#p" + queens[i].join("")).html(svgQueenPlacedRedded)
                $("#p" + queens[j].join("")).html(svgQueenPlacedRedded)
                // Tandai ratu berwarna merah
                $("#p" + queens[i].join("")).attr("redded",true)
                $("#p" + queens[j].join("")).attr("redded",true)
            } else {
                console.log(queens[i], queens[j],"Aman, Tidak Dalam Jangkauan");
                // Jika rempat tidak ditempati ratu merah taruh ratu hijau
                if(!$("#p" + queens[i].join("")).attr("redded")){$("#p" + queens[i].join("")).html(svgQueenPlaced)}
                if(!$("#p" + queens[j].join("")).attr("redded")){$("#p" + queens[j].join("")).html(svgQueenPlaced)}
            }
        }
    }
}


// Contoh penggunaan
const queens = [[5, 1], [2, 8], [1, 3], [4, 6], [3, 8]]; // Misalnya, koordinat ratu di papan catur
console.log(isQueenThreatened([4, 6], [2, 8]));
isAnyQueenThreatened(queens); // Cek apakah ada dua ratu yang saling mengancam
$("#countThreaten").html($("path[fill='red']").length)

