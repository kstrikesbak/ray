const Ray = () => {
  return {
    items : [],
    length : 0,
    push : function(value) {
      this[this.length] = value;
      this.length++;
    },
    pop : function() {
      const toBeRemoved = this[this.length-1]
      delete this[this.length-1]
      this.length--;

      return toBeRemoved
    },
    unshift : function(value) {
      for (let i = this.length; i>0 ; i--) {
        this[i] = this[i-1];
      }
      this[0] = value;
      this.length++;
    },
    shift : function() {
      const toBeRemoved = this[0]
      delete this[0]
      this.length--;
      for (let i=0; i<this.length+1; i++) {
        this[i] = this[i+1]
      }
      return toBeRemoved
    }
  }
}

module.exports = {
  Ray,
}