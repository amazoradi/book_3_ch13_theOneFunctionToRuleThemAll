// click events
document.querySelector("#activate-flight").addEventListener("click", () => {
  let currentID = event.target.id.split("-")[1]
  toRuleThemAll(currentID)
})

document.querySelector("#activate-mindreading").addEventListener("click", () => {
  let currentID = event.target.id.split("-")[1]
  toRuleThemAll(currentID)
})

document.querySelector("#activate-xray").addEventListener("click", () => {
  let currentID = event.target.id.split("-")[1]
  toRuleThemAll(currentID)
})


// our one function to rule them all
function toRuleThemAll(id) {
  let Section = document.getElementById(id)
  Section.classList.remove("disabled")
  Section.classList.add("enabled")
}

// functions for add or remove all buttons
document.querySelector("#activate-all").addEventListener("click", () => {
  function addToAll() {
    let allSections = document.querySelectorAll("section")
    allSections.forEach(section => {
      section.classList.add("enabled")
      section.classList.remove("disabled")
    })
  }
  addToAll()
})

document.querySelector("#deactivate-all").addEventListener("click", () => {
  function deactivateAll() {
    let allSections = document.querySelectorAll("section")
    allSections.forEach(section => {
      section.classList.add("disabled")
      section.classList.remove("enabled")
    });
  }
  deactivateAll()
})