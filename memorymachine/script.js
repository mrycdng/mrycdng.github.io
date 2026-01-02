async function loadSheet() {
    const apiKey = "AIzaSyCek86Q6VBL-hEKcBdxdkDGUhaw4tYP_IE";
    const sheetId = "1M51LurDMKbG8Ed8jm_A4FvUdwK539cFcK11TG3xq578";
  
    // Sets range of columns corresponding to this page 
    const range = "Sheet1!A:AP";
  
    const url =
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
  
    const res = await fetch(url);
    const data = await res.json();
  
    const rows = data.values || [];
  
   // Skips row 1 on spreadsheet (row reserved for labels)
    const dataRows = rows.slice(1);
  
// Number of divs on page (same number of paired columns on spreadsheet)
    const numPairs = 20;
  
    const pairs = [];
  
    for (let p = 0; p < numPairs; p++) {
      const colImg = p * 2;      // 0 → A, 2 → C, 4 → E
      const colLink = colImg + 1; // 1 → B, 3 → D, 5 → F
  
      const pairData = dataRows
        .map(row => ({
          img: row[colImg],
          link: row[colLink]
        }))
        .filter(item => item.img); // Skips empty rows
  
      pairs.push(pairData);
    }
  
    // Updates each div
    startRotator("mm1-1", pairs[0]);
    startRotator("mm1-2", pairs[1]);
    startRotator("mm1-3", pairs[2]);
    startRotator("mm1-4", pairs[3]);
    startRotator("mm1-5", pairs[4]);
    startRotator("mm1-6", pairs[5]);
    startRotator("mm1-7", pairs[6]);
    startRotator("mm1-8", pairs[7]);
    startRotator("mm1-9", pairs[8]);
    startRotator("mm1-10", pairs[9]);
    startRotator("mm1-11", pairs[10]);
    startRotator("mm2-1", pairs[11]);
    startRotator("mm2-2", pairs[12]);
    startRotator("mm2-3", pairs[13]);
    startRotator("mm2-4", pairs[14]);
    startRotator("mm2-5", pairs[15]);
    startRotator("mm2-6", pairs[16]);
    startRotator("mm2-7", pairs[17]);
    startRotator("mm2-8", pairs[18]);
    startRotator("mm2-9", pairs[19]);
  }
  
  function startRotator(divId, pairData) {
    const div = document.getElementById(divId);
  
    function update() {
     
      if (mm1Frozen && div.id.startsWith("mm1-")) {
        return;
      }

      const item = pairData[Math.floor(Math.random() * pairData.length)];
  
      div.style.backgroundImage = `url(${item.img})`;
  
      div.innerHTML = `
        <a href="${item.link}" target="_blank">
           ${item.link}
        </a>
      `;
    }
  
    update();
    setInterval(update, 5000); // Updates div background image randomly at a given interval
  }
  
  loadSheet();
  
const scroll = document.getElementById('scroll');
const main1 = document.getElementById('main-1');

// changes page background colour when hovering on #scroll
scroll.addEventListener('mouseenter', () => {
    main1.style.backgroundColor = "#a1a1a1"; 
    main1.style.backgroundImage = "none";
    
});

scroll.addEventListener('mouseleave', () => {
    main1.style.backgroundColor = "";
    main1.style.backgroundImage = ""; 
});


//Div labels
const mm1HoverWords = {
  "mm1-1": "TREES; SKY",
  "mm1-2": "TREES",
  "mm1-3": "CAR",
  "mm1-4": "ROAD",
  "mm1-5": "STREETLAMP",
  "mm1-6": "NO PARKING",
  "mm1-7": "FLARE",
  "mm1-8": "TREES",
  "mm1-9": "TREES",
  "mm1-10": "UNCLE",
  "mm1-11": "CURB"
};

let mm1Frozen = false;


// Get all mm1-* elements
const mm1Divs = Array.from(document.querySelectorAll('[id^="mm1-"]'));

mm1Divs.forEach(div => {
  div._originalHTML = div.innerHTML;
});

// Hover starts → freeze and show custom words
scroll.addEventListener("mouseenter", () => {
  mm1Frozen = true; // STOP rotators updating mm1 divs

  mm1Divs.forEach(div => {
    div._originalHTML = div.innerHTML;

    const id = div.id;
    const customWord = mm1HoverWords[id];

    div.innerHTML = customWord
      ? `<span class="override-word">${customWord}</span>`
      : `<span class="override-word"></span>`;
  });
});

// Hover ends → unfreeze and restore normal behavior
scroll.addEventListener("mouseleave", () => {
  mm1Frozen = false; // ALLOW rotators to resume

  mm1Divs.forEach(div => {
    div.innerHTML = div._originalHTML;
  });
});