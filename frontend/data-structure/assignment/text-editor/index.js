module.exports = class TextEditor {
  constructor() {
    // TODO: answer here
    this.data = [];
    this.top = -1;
    this.undoStack = [];
    this.redoStack = [];
  }

  write(c) {
    // TODO: answer here
    this.top += 1;
    this.undoStack.push(c);
    return this.data.push(c);
  }

  read() {
    // TODO: answer here
    return this.data.join("");
  }

  undo() {
    // TODO: answer here
    if (this.data.length !== 0) {
      let out = this.undoStack.pop();
      this.redoStack.push(out);
      this.data.pop();
      this.top -= 1;
    }
  }

  redo() {
    // TODO: answer here
    if (this.redoStack.length !== 0) {
      let inp = this.redoStack.pop();
      this.top += 1;
      this.data.push(inp);
      this.undoStack.push(inp);
    }
  }
};
