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
}
  
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false