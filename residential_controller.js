


class Column {
    constructor(_id, _amountOfFloors, _amountOfElevators) {
        this.ID = _id;
        this.status = 'idle';
        this.elevatorsList = [];
        this.callButtonsList = [];
        this.elevatorInAction = [];
        this.amountOfElevators = _amountOfElevators


/////////////////////////  CRÉE LES ASCENCEUR  ////////////////////////////////

        for (let i = 1; i <= _amountOfElevators; i++){
            this.elevatorsList.push(new Elevator(i, 'idle', _amountOfFloors))
        }

/////////////////////////  CRÉE LES BOUTON SUR ÉTAGE  ////////////////////////////////

        for (let i = 1; i <= (_amountOfFloors); i++){
            this.callButtonsList.push(new CallButton(i, 'idle', i, 'up' ))
            this.callButtonsList.push(new CallButton(i + _amountOfFloors, 'idle', i, 'down' ))
        }   
    }

/////////////////////////  FONCION D'APPELLE  ////////////////////////////////
    


    requestElevator(_requestedFloor, _direction){

        let score = 0;
        
        for (let i = 0; i < this.elevatorsList.length; i++){

            this.elevatorsList[i].currentFloor = this.elevatorsList[i].idle
            ///////////////  CRÉATION DU SCORE  ////////////
            
            if (this.elevatorsList[i].currentFloor > _requestedFloor){
                score =  this.elevatorsList[i].currentFloor - _requestedFloor
            } else {
                score =  _requestedFloor - this.elevatorsList[i].currentFloor
            } 
            if (_direction == this.elevatorsList[i].direction){
                    score +=  2
            }
                this.elevatorsList[i].score += score

              
        }
            var amountOfElevators = this.amountOfElevators 

            /////////////  REGLE ET SELECTION  /////////////
 
            let scoreFinal = this.elevatorsList.reduce((accumulator, current) => accumulator + current.score, 0);
            var selectedElevatorList =  this.elevatorsList.filter(function(selectedElevator) {
                
                return selectedElevator.score <= (scoreFinal / amountOfElevators)
            });

            //////////////  MOUVEMENT DE L'ASCENCEUR  ////////////////
          
            if (selectedElevatorList[0].currentFloor < _requestedFloor) {
                selectedElevatorList[0].status = 'moving'
                selectedElevatorList[0].direction = 'up'
                console.log("Elevator " + selectedElevatorList[0].ID + " is " + selectedElevatorList[0].status + ' ' + selectedElevatorList[0].direction)

                for (let i = (selectedElevatorList[0].currentFloor); i < _requestedFloor; i++){

                    selectedElevatorList[0].currentFloor = selectedElevatorList[0].currentFloor + 1
         /*         console.log('score : ' + selectedElevatorList[0].score) */
                    console.log('Floor : ' + selectedElevatorList[0].currentFloor )
   
                }
            } else {
                selectedElevatorList[0].status = 'moving'
                selectedElevatorList[0].direction = 'down'
                console.log("Elevator " + selectedElevatorList[0].ID + " is " + selectedElevatorList[0].status + ' ' + selectedElevatorList[0].direction)

                for (let i = (selectedElevatorList[0].currentFloor); i > _requestedFloor; i--){

                    selectedElevatorList[0].currentFloor = selectedElevatorList[0].currentFloor - 1
           /*       console.log('score : ' + selectedElevatorList[0].score) */
                    console.log('Floor : ' + selectedElevatorList[0].currentFloor )
   
                }
            }


            //////////////  MOUVEMENT DES PORTES  ////////////////
            
            selectedElevatorList[0].direction = 'idle'
            selectedElevatorList[0].status = 'on idle'
            selectedElevatorList[0].door = 'open'
   
            console.log("Elevator " + selectedElevatorList[0].ID + " is " + selectedElevatorList[0].status)       
            console.log('The door is ' + selectedElevatorList[0].door)

            this.elevatorInAction = selectedElevatorList[0]

    }
}

class Elevator {
    constructor(_id, _amountOfFloors, _currentFloor, _idle){
        this.ID = _id;
        this.status = 'idle';
        this.direction = 'on idle'
        this.currentFloor = _currentFloor;
        this.idle = _idle
        this.door = new Door(_id);
        this.floorRequestButtonList = [];
        this.floorRequestList = [];
        this.score = 0;
    }
    
    requestFloor(_requestedFloor) {

        //////////////  CRÉATION DES REQUETTE D'ÉTAGE  ////////////////
        
        for (let i = 1; i <= this.floorRequestList.length + 1; i++){
            var idFloorRequest = i
        } 
        this.floorRequestList.push(new FloorRequestButton(idFloorRequest, _requestedFloor))

        console.log("Floor " + this.floorRequestList[0].floor + " is selected")
        
        //////////////  FERMETURE DE PORTE A PARTIR DE L'INTERIEUR ////////////////
//***//
        column1.elevatorInAction.door = 'closed'
        console.log('The door is ' + column1.elevatorInAction.door)
        

        //////////////  MOUVEMENT DE L'ASCENCEUR A PARTIR DE L'INTERIEUR ////////////////

        column1.elevatorInAction.status = 'moving'

        if (column1.elevatorInAction.currentFloor < _requestedFloor) {

            column1.elevatorInAction.direction = 'up'
            console.log("Elevator " + column1.elevatorInAction.ID + " is " + column1.elevatorInAction.status + ' ' + column1.elevatorInAction.direction)

            for (let i = (column1.elevatorInAction.currentFloor); i < _requestedFloor; i++){

                column1.elevatorInAction.currentFloor = column1.elevatorInAction.currentFloor + 1
     /*         console.log('score : ' + column1.elevatorInAction.score) */
                console.log('Floor : ' + column1.elevatorInAction.currentFloor )
            }
        } else {
            column1.elevatorInAction.direction = 'down'

            for (let i = (column1.elevatorInAction.currentFloor); i > _requestedFloor; i--){
                column1.elevatorInAction.currentFloor = column1.elevatorInAction.currentFloor - 1
            /*  console.log('score : ' + column1.elevatorInAction.score) */
                console.log('Floor : ' + column1.elevatorInAction.currentFloor )
   
            }
        }
//***//
        //////////////  OUVERTURE DE PORTE A PARTIR DE L'INTERIEUR ////////////////

        column1.elevatorInAction.status = 'on idle'

        column1.elevatorInAction.direction = 'idle'
        column1.elevatorInAction.door = 'open'
        console.log('Elevator ' + column1.elevatorInAction.ID + " " + column1.elevatorInAction.status)
        console.log('The door is ' + column1.elevatorInAction.door)       


        //////////////  RETOUR A SON EMPLACEMENT INITIAL ////////////////
        
        column1.elevatorInAction.door = 'closed'
        console.log('The door is ' + column1.elevatorInAction.door)
        column1.elevatorInAction.status = 'moving'

         if (column1.elevatorInAction.currentFloor < column1.elevatorInAction.idle) {

            column1.elevatorInAction.direction = 'up'
            console.log("Elevator " + column1.elevatorInAction.ID + " is " + column1.elevatorInAction.status + ' ' + column1.elevatorInAction.direction)

            for (let i = (column1.elevatorInAction.currentFloor); i < column1.elevatorInAction.idle; i++){

                column1.elevatorInAction.currentFloor = column1.elevatorInAction.currentFloor + 1
                ////compte les floor parcourue
                console.log('Floor : ' + column1.elevatorInAction.currentFloor )
            }
        } else {

            column1.elevatorInAction.direction = 'down'
            console.log("Elevator " + column1.elevatorInAction.ID + " is " + column1.elevatorInAction.status + ' ' + column1.elevatorInAction.direction)

            for (let i = (column1.elevatorInAction.currentFloor); i > column1.elevatorInAction.idle; i--){

                column1.elevatorInAction.currentFloor = column1.elevatorInAction.currentFloor - 1
                ///compte les floor parcourue
                console.log('Floor : ' + column1.elevatorInAction.currentFloor )
   
            }
        } 

        //////////////////  IDLE AUX POINT D'ORIGINE /////////////////////
        column1.elevatorInAction.direction = 'idle'
        column1.elevatorInAction.status = 'on idle'
        column1.elevatorInAction.door = 'open'
        column1.elevatorInAction.floorRequestList = []

        console.log("Elevator " + column1.elevatorInAction.ID + " is " + column1.elevatorInAction.status)
        console.log('The door is ' + column1.elevatorInAction.door)

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
column1.elevatorsList[0].idle = 2
column1.elevatorsList[1].idle = 6
/* column1.elevatorsList[2].currentFloor = 8 */


column1.requestElevator(9, 'down') 
column1.elevatorsList[0].requestFloor(2)   


module.exports = {Column, Elevator, CallButton, FloorRequestButton, Door}