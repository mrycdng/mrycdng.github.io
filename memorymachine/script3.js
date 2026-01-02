async function loadSheet() {
    const apiKey = "AIzaSyCek86Q6VBL-hEKcBdxdkDGUhaw4tYP_IE";
    const sheetId = "1M51LurDMKbG8Ed8jm_A4FvUdwK539cFcK11TG3xq578";
  
    // Sets range of columns corresponding to this page 
    const range = "Sheet1!AO:BH";
  
    const url =
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
  
    const res = await fetch(url);
    const data = await res.json();
  
    const rows = data.values || [];
  
    // Skips row 1 on spreadsheet (row reserved for labels)
    const dataRows = rows.slice(1);
  
    // Number of divs on page (same number of paired columns on spreadsheet) 
    const numPairs = 10;
  
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
    startRotator("mm3-1", pairs[0]);
    startRotator("mm3-2", pairs[1]);
    startRotator("mm3-3", pairs[2]);
    startRotator("mm3-4", pairs[3]);
    startRotator("mm3-5", pairs[4]);
    startRotator("mm3-6", pairs[5]);
    startRotator("mm3-7", pairs[6]);
    startRotator("mm3-8", pairs[7]);
    startRotator("mm3-9", pairs[8]);
    startRotator("mm3-10", pairs[9]);
  }
  
  function startRotator(divId, pairData) {
    const div = document.getElementById(divId);
  
    function update() {

      if (mm3Frozen && div.id.startsWith("mm3-")) {
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

const scroll = document.getElementById('scroll3');
const main1 = document.getElementById('main-3');

// changes page background colour when hovering on #scroll2
scroll.addEventListener('mouseenter', () => {
    main1.style.backgroundColor = "#a1a1a1"; 
    main1.style.backgroundImage = "none";
    
});

scroll.addEventListener('mouseleave', () => {
    main1.style.backgroundColor = "";
    main1.style.backgroundImage = ""; 
});

  //Div labels
  const mm3HoverWords = {
    "mm3-1": "APARTMENT",
    "mm3-2": "APARTMENT",
    "mm3-3": "APARTMENT",
    "mm3-4": "CHAIR",
    "mm3-5": "STREETLAMP",
    "mm3-6": "KINDERGARTEN ENTRANCE",
    "mm3-7": "CAR",
    "mm3-8": "APARTMENT; TREES; SKY",
    "mm3-9": "UNCLE",
    "mm3-10": "SPEEDBUMP"
  };
  
  let mm3Frozen = false;


// Get all mm3-* elements
const mm3Divs = Array.from(document.querySelectorAll('[id^="mm3-"]'));

mm3Divs.forEach(div => {
  div._originalHTML = div.innerHTML;
});

// Show box labels instead of links on hover
scroll.addEventListener("mouseenter", () => {
  mm3Frozen = true; // Stop updating images

  mm3Divs.forEach(div => {
    div._originalHTML = div.innerHTML;

    const id = div.id;
    const customWord = mm3HoverWords[id];

    div.innerHTML = customWord
      ? `<span class="override-word">${customWord}</span>`
      : `<span class="override-word"></span>`;
  });
});

// Restore box labels when hover ends
scroll.addEventListener("mouseleave", () => {
  mm3Frozen = false; // Resume updating images

  mm3Divs.forEach(div => {
    div.innerHTML = div._originalHTML;
  });
});
  