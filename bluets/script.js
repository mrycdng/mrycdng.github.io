const pantone = [["Aqua Splash", "#85ced1"], ["Colony Blue", "#65769a"], ["Bijou Blue", "#4e5e7f"], 
["Etsate Blue", "#233658"], ["Little Boy Blue", "#6ea2d5"], ["Hawaiian Surf", "#0078a7"], ["Tahitian Tide", "#006b7e"], 
["Baja Blue", "#5f6db0"], ["Surf the Web", "#203c7f"], ["English Manor", "#7181a4"], ["Blue Heaven", "#5b7e98"], 
["Bachelor Button", "#4abbd5"], ["Turkish Tile", "#00698b"], ["Stratosphere", "#9ec1cc"]];

const werner = [["Throat of Blue Titmouse", "#281f3f"], ["Beauty Spot on Wing of Mallard Drake", "#1c1949"], 
["Breast of Emerald-Crested Manakin", "#5c6b8f"], ["Upper Side of the Wings of Small Blue Heath Butterfly", "#657abb"], 
["Light Parts of the Margin of the Wings of Devil’s Butterfly", "#6f88af"], ["Wing Feathers of Jay", "#7994b5"],
["Back of Blue Titmouse", "#8aa1a6"]];

const crayola = [["Maximum Blue Green", "#30BFBF"], ["Cool Mint", "#DDEBEC"], ["Robin’s Egg Blue", "#00CCCC"], ["Outer Space", "#2D383A"], 
["Blizzard Blue", "#64CAE0"], ["Maximum Blue", "#47ABCC"], ["Blue (I)", "#2EB4E6"], ["Denim", "#1560BD"], 
["Blue (III)", "#0066FF"], ["Blue Ribbon", "#0066CC"], ["Blue Bell", "#8CADDA"], ["Blue (II)", "#4570E6"], 
["Bluetiful", "#263A79"], ["Wild Blue Yonder", "#7A89B8"]]

const benjamin = [["Mill Springs Blue", "#7da19a"], ["Stratton Blue", "#93a9a0"], ["Van Courtland Blue", "#86989e"], 
["Jamestown Blue", "82a0a6"], ["Newbury Port Blue", "#465566"], ["Yarmouth Blue", "#b5c8c9"], ["Philipsburg Blue", "#627885"], 
["Hale Navy", "#434b56"], ["Whipple Blue", "#769eb0"], ["Buxton Bllue", "#9db6ba"], ["Wythe Blue", "#aabeb4"], 
["Woodlawn Blue", "#c1d0ca"], ["Palladian Blue", "#c1d1c9"], ["Van Deusen Blue", "#485b6e"]]

const vista = [["Dancing in the Rain", "#ADC6D6"], ["Midnight Magic", "#525356"], ["Lazy Day", "#99AFD2"], 
["Simply Sparkling", "#B3C6E0"], ["Job’s Tears", "#006381"], ["Innuendo", "#A0BDE4"], ["Day Spa", "#4B5C6A"], 
["Happy Tune", "#425E79"], ["Enchanted Evening", "#6CC4D3"], ["Joyful Tears", "#006D6E"], 
["Surf’s Surprise", "#C6D3E5"], ["Simple Serenity", "#C8D8E4"], ["Abstract Idea", "#BCD2DD"]];

const tiffany = [["Tiffany Blue", "#81D8D0"]];

    
    let currentPalette = tiffany;

    function replaceBlueInClone(clone) {
      const spans = clone.querySelectorAll('span.bluetag');
      spans.forEach(span => {
        const [name, color] = currentPalette[Math.floor(Math.random() * currentPalette.length)];
        span.textContent = name;
        span.style.color = color; 
      });
    }

    function showOgText(num) {
      const divs = document.querySelectorAll('.og_text');
      divs.forEach(div => div.style.display = 'none');

      const selectedDiv = document.getElementById(`og_text_${num}`);
      selectedDiv.style.display = 'block';

      const clone = document.createElement('div');
      clone.innerHTML = selectedDiv.innerHTML;
      replaceBlueInClone(clone);

      const remixDiv = document.getElementById('remix_text');
      remixDiv.innerHTML = clone.innerHTML;
    }


    document.getElementById("remix_btn_1").onclick = () => { currentPalette = pantone; reRemix(); };
    document.getElementById("remix_btn_2").onclick = () => { currentPalette = werner; reRemix(); };
    document.getElementById("remix_btn_3").onclick = () => { currentPalette = crayola; reRemix(); };
    document.getElementById("remix_btn_4").onclick = () => { currentPalette = benjamin; reRemix(); };
    document.getElementById("remix_btn_5").onclick = () => { currentPalette = vista; reRemix(); };
    document.getElementById("remix_btn_6").onclick = () => { currentPalette = tiffany; reRemix(); };

    function reRemix() {
      const remixDiv = document.getElementById('remix');
      if (!remixDiv.innerHTML.trim()) return; 
      const clone = document.createElement('div');
      clone.innerHTML = remixDiv.innerHTML;
      replaceBlueInClone(clone);
      remixDiv.innerHTML = clone.innerHTML;
    }

  
