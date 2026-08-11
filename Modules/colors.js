export function getRandomColor() {
    let color = "#";
    const letters = "9876543210ABCDEF";
    for(let i = 0; i<6; i++){
        const randomIndex = Math.floor(Math.random() * 16);
        color += letters[randomIndex];
    }
    return color;
}