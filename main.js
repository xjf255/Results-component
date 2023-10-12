const user = `[
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg",
      "color": "hsl(0, 100%, 67%)",
      "bgColor": "hsla(0, 100%, 67%, 0.090)"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg",
      "color": "hsl(39, 100%, 56%)",
      "bgColor": "hsla(39, 100%, 56%, 0.090)"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg",
      "color": "hsl(166, 100%, 37%)",
      "bgColor": "hsla(166, 100%, 37%, 0.090)"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg",
      "color": "hsl(234, 85%, 45%)",
      "bgColor": "hsla(234, 85%, 45%, 0.090)"
    }
  ]
`
const userHtml = JSON.parse(user)
const $sectionUser = document.getElementById("section__users");
const html = userHtml.map(ob => {
  return `<section class="user" style="color:${ob.color} ; background-color:${ob.bgColor}">
  <span><img src="${ob.icon}" alt="avatar">
  <p>${ob.category}</p></span>
  <span class="user__score">
  <p class="score__value">${ob.score}</p>
  <p>/ 100</p>
  </span>
  </section>`
}).join('')

$sectionUser.insertAdjacentHTML("beforeend",html);