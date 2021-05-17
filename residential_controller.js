


class Column {
    constructor(_id, _status, _amountOfFloors, _amountOfElevators) {
        this.ID = _id;
        this.status = _status;
        this.elevatorsList = [];
        this.callButtonsList = [];
    }
    requestElevator(_requestedFloor, direction){
        if (Elevator.status = 'marche'){
            console.log('ca marche')
        }

/*      -Trouver un ascenseur disponible
        -Faire bouger cet ascenseur jusqu’à l’utilisateur
        -Gérer les portes
        -Retourner l’ascenseur à la fin de la fonction, pour être utilisé par la méthode request */
    }
}

class Elevator {
    constructor(_id, _status, _amountOfFloor, _currentFloor){
        this.ID = _id;
        this.status = _status;
        this.direction;
        this.currentFloor = _currentFloor;
        this.door = new Door(_id, _status);
        this.floorRequestButtonList = [];
        this.floorRequestList = [];
    }
    
    requestFloor(_requestedFloor) {
        console.log(_requestedFloor)
/*      -Déplacer l’ascenseur jusqu’à l’étage demandé par l’utilisateur
        -Gérer les portes */
    }
    
}

class Door {
    constructor(_id, _status) {
        this.ID = _id;
        this.status = _status;
    }
}

class CallButton {
    constructor(_id, _status, _floor, _direction){
        this.ID = _id;
        this.status = _status
        this.floor = _floor
        this.direction = _direction
    }
}
class FloorRequestButton {
    constructor(_id, _status, _floor) {
        this.ID = _id
        this.status = _status
        this.floor = _floor
    }
}

//////////////// scénario 1 ////////////////////

let column1 = new Column(1, 'idle', 10, 2)
let elevatorA = new Elevator(1, 'idle', 10, 2)
let elevatorB = new Elevator(2, 'idle', 10, 6)
elevatorA.door.status = 'closed'
elevatorB.door.status = 'closed'

column1.elevatorsList = [{elevatorA}, {elevatorB}]

console.log(column1)
console.log(column1.elevatorsList)
console.log(column1.elevatorsList[0].elevatorA.door)
console.log(column1.elevatorsList[1].elevatorB.door)








/* let colume1 = new Column(1)

console.log(colume1.requestElevator) */

// nouvelle instance de Door (door1)
/* let door1 = new Door(1)
let door2 = new Door(321)

door1.status = 'opened'

console.log(door1)
console.log(door2) */
/* 
let floorRequestButton = new FloorRequestButton(2, 4)
let floorRequestButton2 = new FloorRequestButton(3, 10)
console.log(floorRequestButton)
console.log(floorRequestButton2) */

