const form = document.querySelector("#Form")
const eventCards = document.querySelector(".cards")
form.addEventListener("submit", function (event) {
  event.preventDefault()
  const titlle=eventTitle.value
  const date=EventDate.value
  const cat=Category.value
  const desc=description.value
  const card=document.createElement("div")
  card.classList.add("card")
  card.innerHTML=`
    <h2>${titlle}</h2>
    <p>${date}</p>
    <button>${cat}</button>
    <p>${desc}</p>
    <div class="deletecard">X</div>
  `
  card.querySelector(".deletecard").addEventListener("click", function(){
    card.remove()
  })
  eventCards.appendChild(card)
  form.reset()

})

document.addEventListener("keydown", (event)=>{
    document.querySelector('.key').innerTextevent.key
})
const buttons = document.querySelectorAll('.events button')

const clearBtn = buttons[0]
const sampleBtn = buttons[1]

clearBtn.addEventListener('click', function () {
    eventCards.innerHTML = ''
})

sampleBtn.addEventListener('click', function () {

    const card = document.createElement('div')
    card.classList.add('card')

    card.innerHTML = `
      <h2>Sample Event</h2>
      <p>📆 2026-01-01</p>
      <button>Conference</button>
      <p>This is a sample event added automatically.</p>
      <div class="deletecard">x</div>
    `

    card.querySelector('.deletecard').addEventListener('click', function () {
        card.remove()
    })

    eventCards.appendChild(card)
})