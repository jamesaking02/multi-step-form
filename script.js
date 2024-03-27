const formStep1 = document.querySelector(".step1")
const formStep2 = document.querySelector(".step2")
const formStep3 = document.querySelector(".step3")
const formStep4 = document.querySelector(".step4")
const formButton = document.querySelectorAll(".form-button")
const asideSteps = document.querySelectorAll(".step__number")
const planOptions = document.querySelectorAll(".option")
const yearlyDeal = document.querySelectorAll(".yearlydeal")

document.querySelector("form").addEventListener('click', function(e) {
  if (e.target.classList.contains("nextstep") || e.target.classList.contains("goback")
  || e.target.classList.contains("switch")) { // allows checkboxes to be checked still
    e.preventDefault()
  }
  console.log(e.target)


  if (e.target.classList.contains("nextstep")) {
    nextStep()
    createSummary()
  } else if (e.target.classList.contains("goback")) {
    goBack()
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

  const optionPrice = document.querySelectorAll(".option__price")

  if (e.target.classList.contains("switch")) {
    this.querySelector(".switch__circle").classList.toggle("yearlyplan")
    if (this.querySelector(".switch__circle").classList.contains("yearlyplan")) {
      this.querySelector(".monthly").classList.remove("active")
      this.querySelector(".yearly").classList.add("active")

      for (let i = 0; i < optionPrice.length; i++) {
        optionPrice[0].textContent = "$90/yr"
        optionPrice[1].textContent = "$120/yr"
        optionPrice[2].textContent = "$150/yr"
      }

      yearlyDeal.forEach((deal) => {
        deal.classList.add("visible")
      })


    } else {
      this.querySelector(".monthly").classList.add("active")
      this.querySelector(".yearly").classList.remove("active")

      for (let i = 0; i < optionPrice.length; i++) {
        optionPrice[0].textContent = "$9/mo"
        optionPrice[1].textContent = "$12/mo"
        optionPrice[2].textContent = "$15/mo"
      }

      yearlyDeal.forEach((deal) => {
        deal.classList.remove("visible")
      })
    }
  }

  const addOns = document.querySelectorAll(".add-on")

  addOns.forEach((addOn) => {
    addOn.addEventListener('change', (e) => {
      if (e.target.checked) {
        e.target.parentElement.parentElement.classList.add("checked")
      } else {
        e.target.parentElement.parentElement.classList.remove("checked")
      }
    })
    
  })

  if (e.target.classList.contains("change-plan")) {

    formStep4.classList.remove("active")
    formStep2.classList.add("active")

    for (let i = 0; i < asideSteps.length; i++) {
      asideSteps[3].classList.remove("active")
      asideSteps[1].classList.add("active")
    }

    for (let i = 0; i < formButton.length; i++) {
      formButton[3].classList.remove("active")
      formButton[1].classList.add("active")
    }
  }

})


function nextStep() {
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
  } else if (formStep2.classList.contains("active")) {

    formStep2.classList.remove("active")
    formStep3.classList.add("active")

    for (let i = 0; i < asideSteps.length; i++) {
      asideSteps[1].classList.remove("active")
      asideSteps[2].classList.add("active")
    }

    for (let i = 0; i < formButton.length; i++) {
      formButton[1].classList.remove("active")
      formButton[2].classList.add("active")
    }

    let yearPlanSelected = document.querySelector(".switch__circle").classList.contains("yearlyplan")
    const addonPrice = document.querySelectorAll(".add-on__price")

    if (yearPlanSelected) {
      for (let i = 0; i < addonPrice.length; i++) {
        addonPrice[0].textContent = "+10/yr"
        addonPrice[1].textContent = "+20/yr"
        addonPrice[2].textContent = "+20/yr"
      }
    } else {
      for (let i = 0; i < addonPrice.length; i++) {
        addonPrice[0].textContent = "+1/mo"
        addonPrice[1].textContent = "+2/mo"
        addonPrice[2].textContent = "+2/mo"
      }
    }
  } else if (formStep3.classList.contains("active")) {
      
    formStep3.classList.remove("active")
    formStep4.classList.add("active")

    for (let i = 0; i < asideSteps.length; i++) {
      asideSteps[2].classList.remove("active")
      asideSteps[3].classList.add("active")
    }

    for (let i = 0; i < formButton.length; i++) {
      formButton[2].classList.remove("active")
      formButton[3].classList.add("active")
    }
  }
}

function goBack() {
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
  } else if (formStep3.classList.contains("active")) {

    formStep2.classList.add("active")
    formStep3.classList.remove("active")

    for (let i = 0; i < asideSteps.length; i++) {
      asideSteps[1].classList.add("active")
      asideSteps[2].classList.remove("active")
    }

    for (let i = 0; i < formButton.length; i++) {
      formButton[1].classList.add("active")
      formButton[2].classList.remove("active")
    }
  } else if (formStep4.classList.contains("active")) {

    formStep3.classList.add("active")
    formStep4.classList.remove("active")

    for (let i = 0; i < asideSteps.length; i++) {
      asideSteps[2].classList.add("active")
      asideSteps[3].classList.remove("active")
    }

    for (let i = 0; i < formButton.length; i++) {
      formButton[2].classList.add("active")
      formButton[3].classList.remove("active")
    }
  }
}

function createSummary() {
  const summaryPlanType = document.querySelector(".plan-type")
  const summaryPlanPrice = document.querySelector(".plan-price")
  let yearPlanSelected = document.querySelector(".switch__circle").classList.contains("yearlyplan")

  planOptions.forEach((option) => {
    if (option.classList.contains("selected") && yearPlanSelected) {
      if (option.dataset.planOption === "arcade") {

        summaryPlanType.textContent = "Arcade (Yearly)"
        summaryPlanPrice.textContent = "$90/mo"

      } else if (option.dataset.planOption === "advanced") {

        summaryPlanType.textContent = "Advanced (Yearly)"
        summaryPlanPrice.textContent = "$120/mo"

      } else if (option.dataset.planOption === "pro") {

        summaryPlanType.textContent = "Pro (Yearly)"
        summaryPlanPrice.textContent = "$150/mo"

      }
    } else if (option.classList.contains("selected")) {
      if (option.dataset.planOption === "arcade") {

        summaryPlanType.textContent = "Arcade (Monthly)"
        summaryPlanPrice.textContent = "$9/mo"

      } else if (option.dataset.planOption === "advanced") {

        summaryPlanType.textContent = "Advanced (Monthly)"
        summaryPlanPrice.textContent = "$12/mo"

      } else if (option.dataset.planOption === "pro") {

        summaryPlanType.textContent = "Pro (Monthly)"
        summaryPlanPrice.textContent = "$15/mo"

      }
    } 
  })
}