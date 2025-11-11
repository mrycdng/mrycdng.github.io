const container = document.getElementById("tabletop");
const button = document.getElementById("next-button");
const dayNum = document.getElementById("day-num");
const fortune = document.getElementById("fortune");
const item = document.getElementById("item");
const energy = document.getElementById("energy");
item.textContent = "ITEM";

let dayCount = 0;

var week_1 = [
    egg,
    toast,
    sausage
]

var week_2 = [
    toast,
    sausage,
    egg2Yolks,
    coffee,
    hair,
    cheese
]

var week_3 = [
    egg3Yolks,
    coffee,
    hair,
    cheese,
    fish,
    sludge,
    shell
]

function dayGoesUp() {
    //clear plate
    container.innerHTML = "";
    
    dayCount++;
    dayNum.textContent = dayCount;
    ketchup()

    if (dayCount <=7) {
        var food1 = Math.floor(Math.random() * week_1.length);
        var food2 = Math.floor(Math.random() * week_1.length);
        while (food2 === food1) {
            food2 = Math.floor(Math.random() * week_1.length);
          }
        var food3 = Math.floor(Math.random() * week_1.length);
        while (food3 === food2 || food3 === food1) {
            food3 = Math.floor(Math.random() * week_1.length);
          }
        week_1[food1]();
        week_1[food2]();
        week_1[food3]();
    }
    else if (dayCount > 7 && dayCount <= 14) {
        var food1 = Math.floor(Math.random() * week_2.length);
        var food2 = Math.floor(Math.random() * week_2.length);
        while (food2 === food1) {
            food2 = Math.floor(Math.random() * week_2.length);
          }
        var food3 = Math.floor(Math.random() * week_2.length);
        while (food3 === food2 || food3 === food1) {
            food3 = Math.floor(Math.random() * week_2.length);
          }
        week_2[food1]();
        week_2[food2]();
        week_2[food3]();
    }
    else {
        var food1 = Math.floor(Math.random() * week_3.length);
        var food2 = Math.floor(Math.random() * week_3.length);
        while (food2 === food1) {
            food2 = Math.floor(Math.random() * week_3.length);
          }
        var food3 = Math.floor(Math.random() * week_3.length);
        while (food3 === food2 || food3 === food1) {
            food3 = Math.floor(Math.random() * week_3.length);
          }
        week_3[food1]();
        week_3[food2]();
        week_3[food3](); 
    }

}


function ketchup() {

    const numKetch = 10 + dayCount * 2;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    for (let i = 0; i < numKetch; i++) {
        const ketch = document.createElement("div");
        ketch.classList.add("ketch");

        // Have ketchup droplet be between 30-80px
        const size = Math.floor(Math.random() * 40) + 50;

        // Keep ketchup droplets contained to the plate
        //here add changing container width - ketchup not part of array --> must show up
        const x = Math.random() * (containerWidth - size);
        const y = Math.random() * (containerHeight - size);

        ketch.style.width = `${size}px`;
        ketch.style.height = `${size}px`;
        ketch.style.left = `${x}px`;
        ketch.style.top = `${y}px`;

        container.appendChild(ketch);


        ketch.addEventListener("mouseenter", () => {
            if (dayCount > 7){
                fortune.textContent = "Sweetness thickens, clings, overwhelms."
                energy.textContent = "-"
            }
            else {
            fortune.textContent = "Pleasure awaits, sweet and simple.";
            energy.textContent = "+";
            }
            item.textContent = "KETCHUP";
            fortune.style.opacity = 1;
            item.style.opacity = 1;
            energy.style.opacity = 1;
        });

        ketch.addEventListener("mouseleave", () => {
            fortune.style.opacity = 0;
            item.textContent = "ITEM";
            energy.style.opacity = 0;
        });
    }
}
function egg() {

    const egg = document.createElement("div");
    egg.classList.add("egg");

    const eggWidth = 314;
    const eggHeight = 255;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Random position (keep egg fully inside container)
    const x = Math.random() * (containerWidth - eggWidth);
    const y = Math.random() * (containerHeight - eggHeight);

    // Random rotation between -45 and +45 degrees
    const rotation = Math.random() * 90 - 45;

    egg.style.left = `${x}px`;
    egg.style.top = `${y}px`;
    egg.style.transform = `rotate(${rotation}deg)`;
    egg.style.backgroundImage = "url('food4thought_egg_1.png')";
    egg.style.zIndex = 6;

    container.appendChild(egg);

    egg.addEventListener("mouseenter", () => {
        fortune.textContent = "Potential births with each crack of golden dawn.";
        item.textContent = "EGG";
        energy.textContent = "+";
        fortune.style.opacity = 1;
        item.style.opacity = 1;
        energy.style.opacity = 1;
    });

    egg.addEventListener("mouseleave", () => {
        fortune.style.opacity = 0;
        item.textContent = "ITEM";
        energy.style.opacity = 0;
    });

}
function sausage() {
    
    const sausage = document.createElement("div");
    sausage.classList.add("sausage");

    const sauceWidth = 514;
    const sauceHeight = 56;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Random position (keep sausage fully inside container)
    const x = Math.random() * (containerWidth - sauceWidth);
    const y = Math.random() * (containerHeight - sauceHeight);

    // Random rotation between -30 and +30 degrees
    const rotation = Math.random() * 50 - 20;

    sausage.style.left = `${x}px`;
    sausage.style.top = `${y}px`;
    sausage.style.transform = `rotate(${rotation}deg)`;
    sausage.style.backgroundImage = "url('food4thought_sausages_1.png')";
    sausage.style.zIndex = 4;
    container.appendChild(sausage);


    sausage.addEventListener("mouseenter", () => {
        if (dayCount > 7){
            fortune.textContent = "The once connected inevitably fray.";
            energy.textContent="-";
        }
        else {
        fortune.textContent = "Connections and continuity will serve well.";
        energy.textContent="+";
        }
        item.textContent = "SAUSAGES";
        fortune.style.opacity = 1;
        item.style.opacity = 1;
        energy.style.opacity = 1;
    });

    sausage.addEventListener("mouseleave", () => {
        fortune.style.opacity = 0;
        item.textContent = "ITEM";
        energy.style.opacity = 0;
    });

    

}
function toast() {

    const toast = document.createElement("div");
    toast.classList.add("toast");

    const toastWidth = 350;
    const toastHeight = 350;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Random position (keep sausage fully inside container)
    const x = Math.random() * (containerWidth - toastWidth);
    const y = Math.random() * (containerHeight - toastHeight);

    // Random rotation between -30 and +30 degrees
    const rotation = Math.random() * 50 - 20;

    toast.style.left = `${x}px`;
    toast.style.top = `${y}px`;
    toast.style.transform = `rotate(${rotation}deg)`;
    toast.style.backgroundImage = "url('food4thought_toast.png')";
    toast.style.zIndex = 9;
    container.appendChild(toast);


    toast.addEventListener("mouseenter", () => {
        if (dayCount > 7){
            fortune.textContent = "The brittle fractures and burns."
            energy.textContent="-";
        }
        else {
        fortune.textContent = "Greatness comes to the soft-at-heart.";
        energy.textContent="+";
        }
        item.textContent = "TOAST";
        fortune.style.opacity = 1;
        item.style.opacity = 1;
        energy.style.opacity = 1;
    });

    toast.addEventListener("mouseleave", () => {
        fortune.style.opacity = 0;
        item.textContent = "ITEM";
        energy.style.opacity = 0;
    });

}
function egg2Yolks() {

    const egg2Y = document.createElement("div");
    egg2Y.classList.add("egg2Y");

    const eggWidth = 314;
    const eggHeight = 255;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Random position (keep egg fully inside container)
    const x = Math.random() * (containerWidth - eggWidth);
    const y = Math.random() * (containerHeight - eggHeight);

    // Random rotation between -45 and +45 degrees
    const rotation = Math.random() * 90 - 45;

    egg2Y.style.left = `${x}px`;
    egg2Y.style.top = `${y}px`;
    egg2Y.style.transform = `rotate(${rotation}deg)`;
    egg2Y.style.backgroundImage = "url('food4thought_egg_2.png')";
    egg2Y.style.zIndex = 7;

    container.appendChild(egg2Y);

    egg2Y.addEventListener("mouseenter", () => {
        fortune.textContent = "Unexpected duplicity; a boon with hidden consequences."; 
        item.textContent = "EGG";
        energy.textContent="-";
        fortune.style.opacity = 1;
        item.style.opacity = 1;
        energy.style.opacity = 1;
    });

    egg2Y.addEventListener("mouseleave", () => {
        fortune.style.opacity = 0;
        item.textContent = "ITEM";
        energy.style.opacity = 0;
    });

}
function coffee() {

    const coffee = document.createElement("div");
    coffee.classList.add("coffee");

    const coffeeWidth = 649;
    const coffeeHeight = 216;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Random position (keep coffee fully inside container)
    const x = Math.random() * (containerWidth - coffeeWidth);
    const y = Math.random() * (containerHeight - coffeeHeight);

    // Random rotation between -30 and +30 degrees
    const rotation = Math.random() * 50 - 20;

    coffee.style.left = `${x}px`;
    coffee.style.top = `${y}px`;
    coffee.style.transform = `rotate(${rotation}deg)`;
    coffee.style.backgroundImage = "url('food4thought_coffee.png')";
    coffee.style.zIndex = 10;
    container.appendChild(coffee);


    coffee.addEventListener("mouseenter", () => {
        fortune.textContent = `Small accidents leave lasting impressions.`;
        item.textContent = "COFFEE";
        energy.textContent="-";
        fortune.style.opacity = 1;
        item.style.opacity = 1;
        energy.style.opacity = 1;
    });

    coffee.addEventListener("mouseleave", () => {
        fortune.style.opacity = 0;
        item.textContent = "ITEM";
        energy.style.opacity = 0;
    });

}
function hair() {

    const hair = document.createElement("div");
    hair.classList.add("hair");

    const hairWidth = 414;
    const hairHeight = 237;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Random position (keep hair fully inside container)
    const x = Math.random() * (containerWidth - hairWidth);
    const y = Math.random() * (containerHeight - hairHeight);

    // Random rotation between -180 and +180 degrees
    const rotation = Math.random() * 180 - 180;

    hair.style.left = `${x}px`;
    hair.style.top = `${y}px`;
    hair.style.transform = `rotate(${rotation}deg)`;
    hair.style.backgroundImage = "url('food4thought_hair.png')";
    hair.style.zIndex = 1;
    container.appendChild(hair);


    hair.addEventListener("mouseenter", () => {
        fortune.textContent = "Once bound, now fallen. Beware of impermanence.";
        item.textContent = "HAIR";
        energy.textContent="-";
        fortune.style.opacity = 1;
        item.style.opacity = 1;
        energy.style.opacity = 1;
    });

    hair.addEventListener("mouseleave", () => {
        fortune.style.opacity = 0;
        item.textContent = "ITEM";
        energy.style.opacity = 0;
    });

}
function cheese() {

    const cheese = document.createElement("div");
    cheese.classList.add("cheese");

    const cheeseWidth = 414;
    const cheeseHeight = 237;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Random position (keep cheese fully inside container)
    const x = Math.random() * (containerWidth - cheeseWidth);
    const y = Math.random() * (containerHeight - cheeseHeight);

    // Random rotation between -180 and +180 degrees
    const rotation = Math.random() * 180 - 180;

    cheese.style.left = `${x}px`;
    cheese.style.top = `${y}px`;
    cheese.style.transform = `rotate(${rotation}deg)`;
    cheese.style.backgroundImage = "url('food4thought_cheese.png')";
    cheese.style.zIndex = 5;
    container.appendChild(cheese);


    cheese.addEventListener("mouseenter", () => {
        fortune.textContent = "With enticement comes risk. With richness comes rot.";
        item.textContent = "CHEESE";
        energy.textContent="-";
        fortune.style.opacity = 1;
        item.style.opacity = 1;
        energy.style.opacity = 1;
    });

    cheese.addEventListener("mouseleave", () => {
        fortune.style.opacity = 0;
        item.textContent = "ITEM";
        energy.style.opacity = 0;
    });

}
function egg3Yolks() {

    const egg3Y = document.createElement("div");
    egg3Y.classList.add("egg3Y");

    const eggWidth = 314;
    const eggHeight = 255;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Random position (keep egg fully inside container)
    const x = Math.random() * (containerWidth - eggWidth);
    const y = Math.random() * (containerHeight - eggHeight);

    // Random rotation between -45 and +45 degrees
    const rotation = Math.random() * 90 - 45;

    egg3Y.style.left = `${x}px`;
    egg3Y.style.top = `${y}px`;
    egg3Y.style.transform = `rotate(${rotation}deg)`;
    egg3Y.style.backgroundImage = "url('food4thought_egg_3.png')";
    egg3Y.style.zIndex = 8;

    container.appendChild(egg3Y);

    egg3Y.addEventListener("mouseenter", () => {
        fortune.textContent = "Shameless excess. What will break first under an unbearable weight?";
        item.textContent = "EGG";
        energy.textContent="?";
        fortune.style.opacity = 1;
        item.style.opacity = 1;
        energy.style.opacity = 1;
    });

    egg3Y.addEventListener("mouseleave", () => {
        fortune.style.opacity = 0;
        item.textContent = "ITEM";
        energy.style.opacity = 0;
    });

}
function fish() {

    const fish = document.createElement("div");
    fish.classList.add("fish");

    const fishWidth = 894;
    const fishHeight = 194;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Random position (keep egg fully inside container)
    const x = Math.random() * (containerWidth - fishWidth);
    const y = Math.random() * (containerHeight - fishHeight);

    // Random rotation between -45 and +45 degrees
    const rotation = Math.random() * 90 - 45;

    fish.style.left = `${x}px`;
    fish.style.top = `${y}px`;
    fish.style.transform = `rotate(${rotation}deg)`;
    fish.style.backgroundImage = "url('food4thought_fish.png')";
    fish.style.zIndex = 11;

    container.appendChild(fish);

    fish.addEventListener("mouseenter", () => {
        fortune.textContent = "Seized prematurely. What do you see mirrored in its unblinking eye?";
        item.textContent = "LIVE FISH";
        energy.textContent="?";
        fortune.style.opacity = 1;
        item.style.opacity = 1;
        energy.style.opacity = 1;
    });

    fish.addEventListener("mouseleave", () => {
        fortune.style.opacity = 0;
        item.textContent = "ITEM";
        energy.style.opacity = 0;
    });

}
function sludge() {

    const sludge = document.createElement("div");
    sludge.classList.add("sludge");

    const sludgeWidth = 582;
    const sludgeHeight = 302;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Random position (keep egg fully inside container)
    const x = Math.random() * (containerWidth - sludgeWidth);
    const y = Math.random() * (containerHeight - sludgeHeight);

    // Random rotation between -45 and +45 degrees
    const rotation = Math.random() * 45 - 45;

    sludge.style.left = `${x}px`;
    sludge.style.top = `${y}px`;
    sludge.style.transform = `rotate(${rotation}deg)`;
    sludge.style.backgroundImage = "url('food4thought_sludge.png')";
    sludge.style.zIndex = 3;

    container.appendChild(sludge);

    sludge.addEventListener("mouseenter", () => {
        fortune.textContent = "Nothing holds shape or meaning. What truths have you lost to the muddle?";
        item.textContent = "SLUDGE";
        energy.textContent="?";
        fortune.style.opacity = 1;
        item.style.opacity = 1;
        energy.style.opacity = 1;
    });

    sludge.addEventListener("mouseleave", () => {
        fortune.style.opacity = 0;
        item.textContent = "ITEM";
        energy.style.opacity = 0;
    });

}
function shell() {

    const shell = document.createElement("div");
    shell.classList.add("shell");

    const shellWidth = 882;
    const shellHeight = 647;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Random position (keep egg fully inside container)
    const x = Math.random() * (containerWidth - shellWidth);
    const y = Math.random() * (containerHeight - shellHeight);

    // Random rotation between -45 and +45 degrees
    const rotation = Math.random() * 180 - 180;

    shell.style.left = `${x}px`;
    shell.style.top = `${y}px`;
    shell.style.transform = `rotate(${rotation}deg)`;
    shell.style.backgroundImage = "url('food4thought_shell.png')";
    shell.style.zIndex = 2;

    container.appendChild(shell);

    shell.addEventListener("mouseenter", () => {
        fortune.textContent = "A soul breaking containment. What fragments of you remain?";
        item.textContent = "EGGSHELL";
        energy.textContent="?";
        fortune.style.opacity = 1;
        item.style.opacity = 1;
        energy.style.opacity = 1;
    });

    shell.addEventListener("mouseleave", () => {
        fortune.style.opacity = 0;
        item.textContent = "ITEM";
        energy.style.opacity = 0;
    });

}
