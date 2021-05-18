


class Column {
    constructor(_id, _status, _amountOfFloors, _amountOfElevators) {
        this.ID = _id;
        this.status = _status;
        this.elevatorsList = [];
        this.callButtonsList = [];

        for (let i = 1; i <= _amountOfElevators; i++){
            this.elevatorsList.push(new Elevator(i, _status, _amountOfFloors))
        }
        for (let i = 1; i <= (_amountOfFloors); i++){
            this.callButtonsList.push(new CallButton(i, _status, i, 'up' ))
            this.callButtonsList.push(new CallButton(i + 10, _status, i, 'down' ))
        } 
        
        
    }
    requestElevator(_requestedFloor, _direction){
        for (let i = 0; i < this.elevatorsList.length; i++){
            
            let score =  this.elevatorsList[i].currentFloor - _requestedFloor
            
            if (_direction === this.elevatorsList[i].direction){
                score = +2
            }

            
            console.log(score)
 
        }
        

        
/*         for (let i = 0; i < this.elevatorsList.length; i++){
            console.log(_requestedFloor)
            if (_requestedFloor <= 5 && this.elevatorsList[0].status === 'idle'){
                console.log(this.elevatorsList[0])
                this.elevatorsList[0].currentFloor = _requestedFloor
                this.elevatorsList[0].status = 'moving'
                console.log(this.elevatorsList[0])
                break;
            } else if (_requestedFloor > 5 && this.elevatorsList[1].status === 'idle') {
                console.log(this.elevatorsList[1])
                this.elevatorsList[1].currentFloor = _requestedFloor
                this.elevatorsList[1].status = 'moving'
                console.log(this.elevatorsList[1])
                break;
            } 
        }     */
/*      -Trouver un ascenseur disponible
        -Faire bouger cet ascenseur jusqu’à l’utilisateur
        -Gérer les portes
        -Retourner l’ascenseur à la fin de la fonction, pour être utilisé par la méthode request */
    }
}

class Elevator {
    constructor(_id, _status, _amountOfFloors, _currentFloor){
        this.ID = _id;
        this.status = _status;
        this.direction;
        this.currentFloor = _currentFloor;
        this.door = new Door(_id, _status);
        this.floorRequestButtonList = [];
        this.floorRequestList = [];
        this.score;

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
column1.elevatorsList[0].currentFloor = 2
column1.elevatorsList[1].currentFloor = 6
column1.elevatorsList[0].direction = 'down'
column1.elevatorsList[1].direction = 'up'




column1.requestElevator(3, 'up')
//console.log(column1.callButtonsList)
//console.log(column1.elevatorsList[0].door)










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

