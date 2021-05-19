


class Column {
    constructor(_id, _amountOfFloors, _amountOfElevators) {
        this.ID = _id;
        this.status = 'idle';
        this.elevatorsList = [];
        this.callButtonsList = [];
        this.amountOfElevators = _amountOfElevators

        for (let i = 1; i <= _amountOfElevators; i++){
            this.elevatorsList.push(new Elevator(i, 'idle', _amountOfFloors))
        }
        for (let i = 1; i <= (_amountOfFloors); i++){
            this.callButtonsList.push(new CallButton(i, 'idle', i, 'up' ))
            this.callButtonsList.push(new CallButton(i + 10, 'idle', i, 'down' ))
        }   
    }
    requestElevator(_requestedFloor, _direction){
        let score = 0;
        for (let i = 0; i < this.elevatorsList.length; i++){
            var x = i
            if (this.elevatorsList[i].currentFloor > _requestedFloor){
                score =  this.elevatorsList[i].currentFloor - _requestedFloor
                } else {
                    score =  _requestedFloor - this.elevatorsList[i].currentFloor
                } 
                if (_direction === this.elevatorsList[i].direction){
                    score = +2
                }
                this.elevatorsList[i].score += score
               /*  console.log(this.elevatorsList[i])   */
            }
            var amountOfElevators = this.amountOfElevators 
           
            let scoreFinal = this.elevatorsList.reduce((accumulator, current) => accumulator + current.score, 0);
            var selectedElevatorList =  this.elevatorsList.filter(function(selectedElevator) {
                return selectedElevator.score <= (scoreFinal / amountOfElevators)
            });
             
            console.log(selectedElevatorList[0])

            if (selectedElevatorList[0].currentFloor < _requestedFloor) {
                
                for (let i = (selectedElevatorList[0].currentFloor); i < _requestedFloor; i++){

                    selectedElevatorList[0].currentFloor = selectedElevatorList[0].currentFloor + 1
                    console.log('Floor : ' + selectedElevatorList[0].currentFloor )
   
                }
            } else {
                for (let i = (selectedElevatorList[0].currentFloor); i > _requestedFloor; i--){

                    selectedElevatorList[0].currentFloor = selectedElevatorList[0].currentFloor - 1
                    console.log('Floor : ' + selectedElevatorList[0].currentFloor )
   
                }
            }
            
            console.log(selectedElevatorList[0])
         
/*      -Trouver un ascenseur disponible
        -Faire bouger cet ascenseur jusqu’à l’utilisateur
        -Gérer les portes
        -Retourner l’ascenseur à la fin de la fonction, pour être utilisé par la méthode request */
    }
}

class Elevator {
    constructor(_id, _amountOfFloors, _currentFloor){
        this.ID = _id;
        this.status = 'idle';
        this.direction;
        this.currentFloor = _currentFloor;
        this.door = new Door(_id);
        this.floorRequestButtonList = [];
        this.floorRequestList = [];
        this.score = 0;

    }
    
    requestFloor(_requestedFloor) {
        console.log(_requestedFloor)
/*      -Déplacer l’ascenseur jusqu’à l’étage demandé par l’utilisateur
        -Gérer les portes */
    }
    
}

class Door {
    constructor(_id) {
        this.ID = _id;
        this.status = 'closed';
    }
}

class CallButton {
    constructor(_id, _floor, _direction){
        this.ID = _id;
        this.status = 'idle'
        this.floor = _floor
        this.direction = _direction
    }
}
class FloorRequestButton {
    constructor(_id, _floor) {
        this.ID = _id
        this.status = 'idle'
        this.floor = _floor
    }
}

//////////////// scénario 1 ////////////////////

let column1 = new Column(1, 10, 2)
column1.elevatorsList[0].currentFloor = 2
column1.elevatorsList[1].currentFloor = 6

/* column1.elevatorsList[0].direction = 'down'
column1.elevatorsList[1].direction = 'up' */




column1.requestElevator(5, 'up')
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

