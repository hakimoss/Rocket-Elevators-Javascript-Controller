


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
            this.callButtonsList.push(new CallButton(i + 10, 'idle', i, 'down' ))
        }   
    }

/////////////////////////  FONCION D'APPELLE  ////////////////////////////////
    


    requestElevator(_requestedFloor, _direction){

        let score = 0;
        console.log('//////// étas DES elevator /////////')
        for (let i = 0; i < this.elevatorsList.length; i++){

            this.elevatorsList[i].currentFloor = this.elevatorsList[i].idle
            ///////////////  CRÉATION DU SCORE  ////////////
            
            if (this.elevatorsList[i].currentFloor > _requestedFloor){
                score =  this.elevatorsList[i].currentFloor - _requestedFloor
                } else {
                    score =  _requestedFloor - this.elevatorsList[i].currentFloor
                } 
                if (_direction === this.elevatorsList[i].direction){
                    score +=  2
                }
                this.elevatorsList[i].score += score

                ///étas DES elevator
                console.log(this.elevatorsList[i])  
              
            }
            var amountOfElevators = this.amountOfElevators 

            /////////////  REGLE ET SELECTION  /////////////
 
            let scoreFinal = this.elevatorsList.reduce((accumulator, current) => accumulator + current.score, 0);
            var selectedElevatorList =  this.elevatorsList.filter(function(selectedElevator) {
                
                return selectedElevator.score <= (scoreFinal / amountOfElevators)
            });

            ////state avans mouvement 
            console.log('///////////elevator selectioné////////////') 
            
            console.log(selectedElevatorList[0])
            console.log('///////////Mouvement/////////') 
       
            //////////////  MOUVEMENT DE L'ASCENCEUR  ////////////////
            selectedElevatorList[0].status = 'moving'


            if (selectedElevatorList[0].currentFloor < selectedElevatorList[0].idle) {

                selectedElevatorList[0].direction = 'up'

                for (let i = (selectedElevatorList[0].currentFloor); i < selectedElevatorList[0].idle; i++){

                    selectedElevatorList[0].currentFloor = selectedElevatorList[0].currentFloor + 1
                    ////compte les floor parcourue
         /*         console.log('score : ' + selectedElevatorList[0].score) */
                    console.log('Status : ' + selectedElevatorList[0].status )
                    console.log('Direction : ' + selectedElevatorList[0].direction )
                    console.log('Floor : ' + selectedElevatorList[0].currentFloor )
   
                }
            } else {

                selectedElevatorList[0].direction = 'down'

                for (let i = (selectedElevatorList[0].currentFloor); i > selectedElevatorList[0].idle; i--){

                    selectedElevatorList[0].currentFloor = selectedElevatorList[0].currentFloor - 1
                    ///compte les floor parcourue
           /*       console.log('score : ' + selectedElevatorList[0].score) */
                    console.log('Status : ' + selectedElevatorList[0].status )
                    console.log('Direction : ' + selectedElevatorList[0].direction )
                    console.log('Floor : ' + selectedElevatorList[0].currentFloor )
   
                }
            }


            //////////////  MOUVEMENT DES PORTES  ////////////////
            
            selectedElevatorList[0].direction = 'idle'
            selectedElevatorList[0].status = 'idle'
            selectedElevatorList[0].door = 'open'
 
            ////state des portes            
            console.log('the door is ' + selectedElevatorList[0].door)

            ////state apres mouvement
            console.log('///////////state apres mouvement////////////') 
            console.log(selectedElevatorList[0])

            this.elevatorInAction = selectedElevatorList[0]
           
            

         
/*      -Trouver un ascenseur disponible(x)
        -Faire bouger cet ascenseur jusqu’à l’utilisateur(x)
        -Gérer les portes(x)
        -Retourner l’ascenseur à la fin de la fonction, pour être utilisé par la méthode request(x) */
    }
}

class Elevator {
    constructor(_id, _amountOfFloors, _currentFloor, _idle){
        this.ID = _id;
        this.status = 'idle';
        this.direction = 'idle'
        this.currentFloor = _currentFloor;
        this.idle = _idle
        this.door = new Door(_id);
        this.floorRequestButtonList = [];
        this.floorRequestList = [];
        this.score = 0;
       

    }
    
    requestFloor(_requestedFloor) {
        var initialFloor =  this.currentFloor
        console.log('ici   ' + initialFloor)
        
        //////////////  CRÉATION DES REQUETTE D'ÉTAGE  ////////////////
        
        for (let i = 1; i <= this.floorRequestList.length + 1; i++){
            var idFloorRequest = i
        } 
        this.floorRequestList.push(new FloorRequestButton(idFloorRequest, _requestedFloor))


        console.log(this.floorRequestList)
        
        //////////////  OUVERTURE DE PORTE A PARTIR DE L'INTERIEUR ////////////////
//***//
        column1.elevatorInAction.door = 'closed'
        console.log('The door is ' + column1.elevatorInAction.door)
        

        //////////////  MOUVEMENT DE L'ASCENCEUR A PARTIR DE L'INTERIEUR ////////////////

        column1.elevatorInAction.status = 'moving'

        if (column1.elevatorInAction.currentFloor < _requestedFloor) {

            column1.elevatorInAction.direction = 'up'

            for (let i = (column1.elevatorInAction.currentFloor); i < _requestedFloor; i++){

                column1.elevatorInAction.currentFloor = column1.elevatorInAction.currentFloor + 1
                ////compte les floor parcourue
                console.log('Status : ' + column1.elevatorInAction.status )
                console.log('Direction : ' + column1.elevatorInAction.direction )
     /*         console.log('score : ' + column1.elevatorInAction.score) */
                console.log('Floor : ' + column1.elevatorInAction.currentFloor )
   
            }
        } else {

            column1.elevatorInAction.direction = 'down'

            for (let i = (column1.elevatorInAction.currentFloor); i > _requestedFloor; i--){

                column1.elevatorInAction.currentFloor = column1.elevatorInAction.currentFloor - 1
                ///compte les floor parcourue
                console.log('Status : ' + column1.elevatorInAction.status )
            /*  console.log('score : ' + column1.elevatorInAction.score) */
                console.log('Direction : ' + column1.elevatorInAction.direction )
                console.log('Floor : ' + column1.elevatorInAction.currentFloor )
   
            }
        }
//***//
        //////////////  OUVERTURE DE PORTE A PARTIR DE L'INTERIEUR ////////////////

        column1.elevatorInAction.status = 'idle'

        column1.elevatorInAction.direction = 'idle'
        column1.elevatorInAction.door = 'open'
        console.log('The door is ' + column1.elevatorInAction.door)       
        console.log('////////// etas elevator //////////////')
        console.log(column1.elevatorInAction)

        //////////////  RETOUR A SON EMPLACEMENT INITIAL ////////////////
        
        column1.elevatorInAction.door = 'closed'
        console.log('The door is ' + column1.elevatorInAction.door)
        column1.elevatorInAction.status = 'moving'


        

        
        

         if (column1.elevatorInAction.currentFloor < initialFloor) {

            column1.elevatorInAction.direction = 'up'

            for (let i = (column1.elevatorInAction.currentFloor); i < initialFloor; i++){

                column1.elevatorInAction.currentFloor = column1.elevatorInAction.currentFloor + 1
                ////compte les floor parcourue
                console.log('Status : ' + column1.elevatorInAction.status )
                console.log('Direction : ' + column1.elevatorInAction.direction )
            //  console.log('score : ' + column1.elevatorInAction.score) 
                console.log('Floor : ' + column1.elevatorInAction.currentFloor )
   
            }
        } else {

            column1.elevatorInAction.direction = 'down'

            for (let i = (column1.elevatorInAction.currentFloor); i > initialFloor; i--){

                column1.elevatorInAction.currentFloor = column1.elevatorInAction.currentFloor - 1
                ///compte les floor parcourue
                console.log('Status : ' + column1.elevatorInAction.status )
            //  console.log('score : ' + column1.elevatorInAction.score) 
                console.log('Direction : ' + column1.elevatorInAction.direction )
                console.log('Floor : ' + column1.elevatorInAction.currentFloor )
   
            }
        } 

        //////////////////  IDLE AUX POINT D'ORIGINE /////////////////////
        column1.elevatorInAction.direction = 'idle'
        column1.elevatorInAction.status = 'idle'
        column1.elevatorInAction.door = 'open'
        column1.elevatorInAction.floorRequestList = []

        console.log('The door is ' + column1.elevatorInAction.door)


        console.log(column1.elevatorInAction)
   
/*      -Déplacer l’ascenseur jusqu’à l’étage demandé par l’utilisateur (x)
        -Gérer les portes (x) */
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




column1.requestElevator(1, 'up') 
console.log("////// mouvement a partire de l'elevator///////")
column1.elevatorsList[0].requestFloor(5)   
/* console.log(column1.elevatorInAction) */
/* column1.elevatorsList[0].requestFloor(2)   */






