const homes = document.querySelector(".homes")
const info = document.querySelector(".info")
const reStartBtn = document.querySelector("button")
let player = "O"
let playing = true

homes.addEventListener("click", (e) => {
  if (e.target.className == "home" && playing) {
    if (player == "O") {
      styling(e, "rgb(246, 99, 99)", "X")
      winner("O")
      equal()
    } else {
      styling(e, "rgb(90, 90, 234)", "O")
      winner("X")
      equal()
    }
  }
})

function styling(e, color, XO) {
  e.target.style.backgroundColor = color
  e.target.innerText = player
  player = XO
  info.innerText = `نوبت: ${player}`
}

function isVal(a, b, c, XO) {
  if (
    homes.children[a].innerText == XO &&
    homes.children[b].innerText == XO &&
    homes.children[c].innerText == XO
  ) {
    playing = false
    info.innerText = `بازیکن  ${XO}برنده شد`
    reStartBtn.style.display = "block"
    for (const home of homes.children) {
      home.style.cursor = "default"
    }
    if (XO == "O") {
      info.style.color = "rgb(246, 99, 99)"
      document.querySelector("body").style.backgroundColor = "rgb(246, 99, 99)"
    } else {
      info.style.color = "rgb(90, 90, 234)"
      document.querySelector("body").style.backgroundColor = "rgb(90, 90, 234)"
    }
  }
}

function winner(XO) {
  isVal(0, 1, 2, XO)
  isVal(0, 3, 6, XO)
  isVal(0, 4, 8, XO)
  isVal(1, 4, 7, XO)
  isVal(2, 5, 8, XO)
  isVal(3, 4, 5, XO)
  isVal(6, 7, 8, XO)
  isVal(2, 4, 6, XO)
}

function equal() {
  if (
    homes.children[0].innerText &&
    homes.children[1].innerText &&
    homes.children[2].innerText &&
    homes.children[3].innerText &&
    homes.children[4].innerText &&
    homes.children[5].innerText &&
    homes.children[6].innerText &&
    homes.children[7].innerText &&
    homes.children[8].innerText
  ) {
    if (!info.style.color || info.style.color == 'black') {
      info.innerText = "پایان بازی"
      reStartBtn.style.display = "block"
      playing = false
      for (const home of homes.children) {
        home.style.cursor = "default"
      }
    }
  }
}

reStartBtn.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "white"
  reStartBtn.style.display = "none"
  playing = true
  info.style.color = "black"
  info.innerText = `نوبت: ${player}`

  for (const home of homes.children) {
    home.style.cursor = "pointer"
    home.innerText = ""
    home.style.backgroundColor = "white"
  }
})
