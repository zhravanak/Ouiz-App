const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const list = document.querySelector("ol");
const content = highScores.map((Score, index) => {
  return `
    <li>
        <span>${index + 1}</span>
        <p>${Score.name}</p>
        <span>${Score.score}</span>
    </li>
    `;
});

list.innerHTML = content.join("");
