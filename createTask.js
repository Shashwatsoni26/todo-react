function createTask(div, limit, classesArray) {
  for (let i = 0; i < limit; i++) {
    const anchor = document.createElement("a")
    anchor.classList.add("icon")
    anchor.href = ''

    const icon = document.createElement("span")
    icon.classList.add("fa-solid", classesArray[i])
    anchor.appendChild(icon)
    div.appendChild(anchor)
    
  }
}

export default createTask