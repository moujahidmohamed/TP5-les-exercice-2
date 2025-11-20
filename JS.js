
let nombreSecret = Math.floor(Math.random() * 10) + 1;
let score = 0;
let proposition = 0;
console.log("Devinez le nombre entre 1 et 10");
while (proposition !== nombreSecret) {
    proposition = parseInt(prompt("Votre proposition :"));
    score++;
    
    if (proposition < nombreSecret) {
        console.log("Plus grand !");
    } else if (proposition > nombreSecret) {
        console.log("Plus petit !");
    }
}
console.log(`Bravo ! Trouvé en ${score} tentatives`);
alert(`Félicitations ! Score : ${score} tentatives`);