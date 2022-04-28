let numberOfPeople = prompt("Введіть кількість чоловік:");
let people = [];
let min = -1;

for(let i = 0; i < numberOfPeople; i++){
    let surnameAndHeight = prompt("Введіть Прізвище та зріст(Дорошенко 2.30):");

    for(let i = 1; i < surnameAndHeight.length; i++){
        if(surnameAndHeight[i] == " "){
            var surname = surnameAndHeight.substr(0, i);
            var height = surnameAndHeight.substr(i + 1, surnameAndHeight.length - (i - 1));
        }
    }

    people[i] = createObject(surname,height,i);
    minHeight(i);
    info(people[i]);
}

document.write(`Найменший ріст: ${people[min].surname}  ${people[min].height}`);

function createObject(surname, height, number){
    return {
        number:number + 1,
        surname: surname,
        height: height,
    }
}

function info(people){
    let tr = document.createElement("tr");
    let tdOne = document.createElement("td");
    let tdTwo = document.createElement("td");
    let tdTree = document.createElement("td");

    tdOne.innerText = people.number;
    tdTwo.innerText = people.surname;
    tdTree.innerText = people.height;

    document.getElementById("table").appendChild(tr);
    tr.appendChild(tdOne);
    tr.appendChild(tdTwo);
    tr.appendChild(tdTree);
}

function minHeight(i){
    if(min == -1){
        min = i;
    }else if(people[i].height < people[min].height){
        min = i;
    }
}