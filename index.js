import HashMap from "./hashmap.js";
import LinkedList from "./linked-list.js";

let map = new HashMap();
let list = new LinkedList();
list.append("daniel", "26");

//console.log(list.toString());
//console.log(list.replaceValue("Daniel", 186))
//console.log(list.toString());

map.set("daniel", 26)
map.set("Daniel", 186)
map.set("Anna", 183)

console.log(map.get("daniel"));
console.log(map.get("Daniel"));
console.log(map.entries())
console.log(map.length());

map.remove("Daniel");

console.log(map.entries())
console.log(map.length());