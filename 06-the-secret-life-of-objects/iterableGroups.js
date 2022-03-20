class Group {
    constructor() {
        this.group = []; 
    }
    
    add(value) {
        if (!this.has(value)) this.group.push(value);
    }
    
    delete(value) {
        this.group = this.group.filter((item) => {
        if (item !== value) return item;
      }); 
    }
    
    has(value) {
        return this.group.includes(value); 
    }
    
    static from(iterable) {
        let g = new Group;
        for (let item of iterable) {
            g.add(item);
        }
        return g;
    }

    [Symbol.iterator]() {
        return new iterableGroup(this);
    }
}
  
class iterableGroup {
    constructor(group) {
        this.g = group;
        this.currentIndex = 0;
    }

    next() {
        if (this.currentIndex >= this.g.group.length) return {done: true};
        return {value: this.g.group[this.currentIndex++], done: false};
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c