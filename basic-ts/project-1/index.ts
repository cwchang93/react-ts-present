const person: string = "Jinwei";

person.toLowerCase();

let nothing = undefined;

// window.onscrolldown = function(mouseEvent) {
//     console.log(mouseEvent.button)
// }

// let num:number = 'dfsa'

interface I_info {
  name: string;
  age: number;
  hasPet: boolean;
}

let info:object = {
  name: "Maxwell",
  age: 20,
  hasPet: false
};

info = {
    newInfo: 'info',
    newName: 'JW',
}

// info["newKey"] = "newKey";

// delete info.hasPet;  // ts 的bug



console.log(info);
