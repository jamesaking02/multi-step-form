const formStep1 = document.querySelector(".step1")
const formStep2 = document.querySelector(".step2")
const formStep3 = document.querySelector(".step3")
const formStep4 = document.querySelector(".step4")
const formButton = document.querySelectorAll(".form-button")
const asideSteps = document.querySelectorAll(".step__number")
const planOptions = document.querySelectorAll(".option")
const yearlyDeal = document.querySelectorAll(".yearlydeal")

document.querySelector("form").addEventListener('click', function(e) {
  e.preventDefault()
  console.log(e.target)

  switch (e.target) {
    case this.querySelector(".nextstep"):
      if (formStep1.classList.contains("active")) {
        formStep1.classList.remove("active")
        formStep2.classList.add("active")

        for (let i = 0; i < asideSteps.length; i++) {
          asideSteps[0].classList.remove("active")
          asideSteps[1].classList.add("active")
        }

        for (let i = 0; i < formButton.length; i++) {
          formButton[0].classList.remove("active")
          formButton[1].classList.add("active")
        }
      }
      break;
    case this.querySelector(".goback"):
      if (formStep2.classList.contains("active")) {
        formStep1.classList.add("active")
        formStep2.classList.remove("active")

        for (let i = 0; i < asideSteps.length; i++) {
          asideSteps[0].classList.add("active")
          asideSteps[1].classList.remove("active")
        }

        for (let i = 0; i < formButton.length; i++) {
          formButton[0].classList.add("active")
          formButton[1].classList.remove("active")
        }
      }
      break;
  }

  if (e.target.classList.contains("option")) {
    planOptions.forEach((option) => {
      if (option === e.target) {
        if (option.dataset.planOption === "arcade") {
          option.classList.toggle("selected")
        } else if (option.dataset.planOption === "advanced") {
          option.classList.toggle("selected")
        } else if (option.dataset.planOption === "pro") {
          option.classList.toggle("selected")
        }
      } else {
        option.classList.remove("selected")
      }
      
    })
  }

  if (e.target.classList.contains("switch")) {
    this.querySelector(".switch__circle").classList.toggle("yearlyplan")
    if (this.querySelector(".switch__circle").classList.contains("yearlyplan")) {
      this.querySelector(".monthly").classList.remove("active")
      this.querySelector(".yearly").classList.add("active")

      yearlyDeal.forEach((deal) => {
        deal.classList.add("visible")
      })
    } else {
      this.querySelector(".monthly").classList.add("active")
      this.querySelector(".yearly").classList.remove("active")

      yearlyDeal.forEach((deal) => {
        deal.classList.remove("visible")
      })
    }
  }
})


