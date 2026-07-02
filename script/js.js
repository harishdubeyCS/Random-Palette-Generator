const generateBtn = document.querySelector("#generateBtn");
const saveBtn = document.querySelector("#saveBtn");

function getRandomColor() {
    color = "#";
    letters = "9876543210ABCDEF";
    for(let i = 0; i<6; i++){
        const randomIndex = Math.floor(Math.random() * 16);
        color += letters[randomIndex];
    }
    return color;
}

function createCard(randomColor){
    const card = document.createElement("div");
    card.setAttribute("class", "color-card");
    card.style.backgroundColor = randomColor;


    card.innerHTML = `
            <div class="color-content">
               <span class="color-code">${randomColor}</span>
               <i class="fa-regular fa-clipboard copy-icon"></i>
            </div>
    `;

    const copy = card.querySelector(".copy-icon");

    copy.addEventListener("click", ()=>{
        navigator.clipboard.writeText(randomColor);
        showMessege("Color Copied");
    })

    return card;

}

function showMessege(messege) {
    const toast = document.createElement("div");
    toast.setAttribute("class", "toast");

    toast.innerHTML = messege;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 10);
    
    setTimeout(()=>{
        toast.remove();
    }, 2000)
}


function generatePalette() {
    const palette = document.querySelector(".colorPalette");

    palette.innerHTML = '';

    for(let i = 0; i<5; i++){
        const randomColor = getRandomColor();
        const card = createCard(randomColor);

        palette.append(card);
    }
}

saveBtn.addEventListener("click", ()=>{

    const colors = [];

    document.querySelectorAll(".color-code").forEach((ele)=>{
        colors.push(ele.innerText);
    });

    localStorage.setItem("palette", JSON.stringify(colors));

    showMessege("Palette Saved!");

});

generatePalette();



generateBtn.addEventListener("click", generatePalette);

