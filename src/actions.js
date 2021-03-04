class Actions {
  constructor() {
    this.actions = {}
  }

  add(keys, action) {
    let currentAction = this.actions

    for (let i = 0, l = keys.length; i < l; i++) {
      const isLastKey = keys.length - 1 === i

      if (isLastKey) {
        if (!currentAction[keys[i]]) {
          currentAction[keys[i]] = action
        }
        break
      }

      if (currentAction[keys[i]]) {
        if (typeof currentAction[keys[i]] === "function") {
          throw Error("Conflict")
        } else {
          currentAction = currentAction[keys[i]]
        }
      } else {
        currentAction[keys[i]] = {}
        currentAction = currentAction[keys[i]]
      }
    }
  }
}

export { Actions }
