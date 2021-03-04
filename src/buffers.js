import { nanoid } from "nanoid"

class Buffers {
  constructor() {
    this.buffers = [
      {
        id: nanoid(),
        title: "Default",
      },
    ]
  }
}

export { Buffers }
