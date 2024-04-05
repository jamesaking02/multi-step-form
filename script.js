const formStep1 = document.querySelector(".step1")
const formStep2 = document.querySelector(".step2")
const formStep3 = document.querySelector(".step3")
const formStep4 = document.querySelector(".step4")
const formStep5 = document.querySelector(".step5")
const formButton = document.querySelectorAll(".form-button")
const asideSteps = document.querySelectorAll(".step__number")
const planOptions = document.querySelectorAll(".option")
const yearlyDeal = document.querySelectorAll(".yearlydeal")
const addOns = document.querySelectorAll(".add-on")

document.querySelector("form").addEventListener('click', function(e) {
  if (e.target.classList.contains("nextstep") || e.target.classList.contains("goback")
  || e.target.classList.contains("switch") || e.target.classList.contains("confirm")) { // allows checkboxes to be checked still
    e.preventDefault()
  }
  console.log(e.target)


  if (e.target.classList.contains("nextstep")) {
    nextStep()
    createSummary()
  } else if (e.target.classList.contains("goback")) {
    goBack()
  } else if (e.target.classList.contains("confirm")) {
    if (formStep4.classList.contains("active")) {
      formStep4.classList.remove("active")
      formStep5.classList.add("active")

      formButton[3].classList.remove("active")
    }
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

  

  addOns.forEach((addOn) => {
    const addonCheckbox1 = document.querySelector("#addon1")
    const addonCheckbox2 = document.querySelector("#addon2")
    const addonCheckbox3 = document.querySelector("#addon3")

    addonCheckbox1.checked ? addonCheckbox1.parentElement.parentElement.classList.add("checked")
    : addonCheckbox1.parentElement.parentElement.classList.remove("checked")

    addonCheckbox2.checked ? addonCheckbox2.parentElement.parentElement.classList.add("checked")
    : addonCheckbox2.parentElement.parentElement.classList.remove("checked")

    addonCheckbox3.checked ? addonCheckbox3.parentElement.parentElement.classList.add("checked")
    : addonCheckbox3.parentElement.parentElement.classList.remove("checked")


    addOn.addEventListener('change', (e) => {
      e.target.checked ? e.target.parentElement.parentElement.classList.add("checked") 
      : e.target.parentElement.parentElement.classList.remove("checked")
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

function validation() {
  let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (formStep1.classList.contains("active")) {
    let noName = document.querySelector("#name").value === ""
    if (!noName) {
      document.querySelector(".invalid-name").classList.remove("active")
    } else {
      document.querySelector(".invalid-name").classList.add("active")
      return false
    }

    let email = document.querySelector("#email").value

    if (!emailRegex.test(email)) {
      document.querySelector(".invalid-email").classList.add("active")
      return false
    } else {
      document.querySelector(".invalid-email").classList.remove("active")
    }


    let noNumber = document.querySelector("#phonenum").value === ""
    let number = document.querySelector("#phonenum").value
    if (noNumber) {
      document.querySelector(".invalid-phonenum").classList.add("active")
      document.querySelector(".invalid-phonenum").textContent = "This field is required"
      return false
    } else if (!phoneRegex.test(number)) {
      document.querySelector(".invalid-phonenum").classList.add("active")
      document.querySelector(".invalid-phonenum").textContent = "Please enter a valid phone number"
      return false
    } else {
      document.querySelector(".invalid-phonenum").classList.remove("active")
    }
    
    return true
  }

  
  let isSelected = false
  if (formStep2.classList.contains("active")) {
    planOptions.forEach((option) => {
      if (option.classList.contains("selected")) {
        isSelected = true
      }
    })

    if (!isSelected) {
      document.querySelector(".invalid-option").classList.add("active")
      return false
    } else {
      document.querySelector(".invalid-option").classList.remove("active")
      return true
    }
  }
  
  if (formStep3.classList.contains("active")) {
    return true
  }
}

function nextStep() {
  if (!validation()) {
    return
  } else {
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
  const totalLabel = document.querySelector(".total-label")
  let total = document.querySelector(".total")
  let totalPrice = 0
  
  yearPlanSelected ? totalLabel.textContent = "Total (per year)" : totalLabel.textContent = "Total (per month)"

  planOptions.forEach((option) => {
    if (option.classList.contains("selected") && yearPlanSelected) {
      if (option.dataset.planOption === "arcade") {

        summaryPlanType.textContent = "Arcade (Yearly)"
        summaryPlanPrice.textContent = "$90/yr"
        totalPrice += parseInt(summaryPlanPrice.textContent.substring(1, 3))
      } else if (option.dataset.planOption === "advanced") {

        summaryPlanType.textContent = "Advanced (Yearly)"
        summaryPlanPrice.textContent = "$120/yr"
        totalPrice += parseInt(summaryPlanPrice.textContent.substring(1, 4))

      } else if (option.dataset.planOption === "pro") {

        summaryPlanType.textContent = "Pro (Yearly)"
        summaryPlanPrice.textContent = "$150/yr"
        totalPrice += parseInt(summaryPlanPrice.textContent.substring(1, 4))
      }
    } else if (option.classList.contains("selected")) {
      if (option.dataset.planOption === "arcade") {

        summaryPlanType.textContent = "Arcade (Monthly)"
        summaryPlanPrice.textContent = "$9/mo"
        totalPrice += parseInt(summaryPlanPrice.textContent.substring(1, 2))

      } else if (option.dataset.planOption === "advanced") {

        summaryPlanType.textContent = "Advanced (Monthly)"
        summaryPlanPrice.textContent = "$12/mo"
        totalPrice += parseInt(summaryPlanPrice.textContent.substring(1, 3))

      } else if (option.dataset.planOption === "pro") {

        summaryPlanType.textContent = "Pro (Monthly)"
        summaryPlanPrice.textContent = "$15/mo"
        totalPrice += parseInt(summaryPlanPrice.textContent.substring(1, 3))

      }
      console.log(totalPrice)
    } 
  })

  

addOns.forEach((addOn) => {
  let anyChecked = false

  addOns.forEach((addOn) => {
    addOn.classList.contains("checked") ? anyChecked = true : false
  })
  
  if (!anyChecked) {
    const summaryAddon1 = document.querySelector("#summary__addon1")
    summaryAddon1.children[0].textContent = "No Add-ons"
  }

  if (addOn.dataset.addonType === "online service" && addOn.classList.contains("checked")) {
    const summaryAddon1 = document.querySelector("#summary__addon1")
    const addOnName = document.querySelector("#addon1__name")
    const addOnPrice = document.querySelector("#addon1__price")
          
    summaryAddon1.children[0].textContent = addOnName.textContent
    summaryAddon1.children[1].textContent = addOnPrice.textContent

    let addOnPriceNum
    yearPlanSelected ? addOnPriceNum = parseInt(addOnPrice.textContent.substring(1, 3))
    : addOnPriceNum = parseInt(addOnPrice.textContent.substring(1, 2))
    totalPrice += addOnPriceNum
    console.log(totalPrice)

  } else if (addOn.dataset.addonType === "online service") {
    const summaryAddon1 = document.querySelector("#summary__addon1")

    summaryAddon1.children[0].textContent = ""
    summaryAddon1.children[1].textContent = ""
  }

  if (addOn.dataset.addonType === "larger storage"  && addOn.classList.contains("checked")) {
    const summaryAddon2 = document.querySelector("#summary__addon2")
    const addOnName = document.querySelector("#addon2__name")
    const addOnPrice = document.querySelector("#addon2__price")
          
    summaryAddon2.children[0].textContent = addOnName.textContent
    summaryAddon2.children[1].textContent = addOnPrice.textContent

    let addOnPriceNum
    yearPlanSelected ? addOnPriceNum = parseInt(addOnPrice.textContent.substring(1, 3))
    : addOnPriceNum = parseInt(addOnPrice.textContent.substring(1, 2))
    totalPrice += addOnPriceNum
    console.log(totalPrice)

  } else if (addOn.dataset.addonType === "larger storage") {
    const summaryAddon2 = document.querySelector("#summary__addon2")

    summaryAddon2.children[0].textContent = ""
    summaryAddon2.children[1].textContent = ""
  }

  if (addOn.dataset.addonType === "customizable profile"  && addOn.classList.contains("checked")) {
    const summaryAddon3 = document.querySelector("#summary__addon3")
    const addOnName = document.querySelector("#addon3__name")
    const addOnPrice = document.querySelector("#addon3__price")
          
    summaryAddon3.children[0].textContent = addOnName.textContent
    summaryAddon3.children[1].textContent = addOnPrice.textContent
    let addOnPriceNum
    yearPlanSelected ? addOnPriceNum = parseInt(addOnPrice.textContent.substring(1, 3))
    : addOnPriceNum = parseInt(addOnPrice.textContent.substring(1, 2))
    totalPrice += addOnPriceNum
    console.log(totalPrice)

  } else if (addOn.dataset.addonType === "customizable profile") {
    const summaryAddon3 = document.querySelector("#summary__addon3")

    summaryAddon3.children[0].textContent = ""
    summaryAddon3.children[1].textContent = ""
  }

  yearPlanSelected ? total.textContent = `+$${totalPrice}/yr`
  : total.textContent = `+$${totalPrice}/mo` 
})
    
}