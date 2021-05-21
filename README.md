# Rocket-Elevators-Javascript-Controller

////// francais /////////

Pour tester différents scénarios, rendez-vous a la ligne (279). 
1. Sur la ligne (281), il est possible de changer le nombre d'étages et le nombre d'ascenseur sur la colonne.
   La 2e valeur, le 10 dans cet exemple, correspond au nombre d'étage.
   La 3e valeur, le 2 dans cet exemple, correspond au nombre d'ascenseur.

2. Sur la ligne (282 et 283), il est possible de changer l'étage initial de chaque ascenseur.
   La valeur inscrite a la fin de la ligne représente leur étage initial, dans cet exemple l'ascenseur A(ligne 282) est au 2e étage.
   *Si l'on veut 3 ascenseurs, il faudra créé une 3e ligne comme l'exemple à la ligne (284) et changer la 3e valeur sur la ligne (281) pour 3 dans cet exemple.

3. Sur la ligne (287), il est possible de simuler une requête d'ascenseur et la direction que l'on voudrait aller.
   La 1re valeur correspond, a l'étage qu'on serait pour faire cette requête.
   La 2e valeur correspond à la direction que l'on souhaiterait aller une fois dans l'ascenseur, soit "up" soit "down".

4. Sur la ligne (288), il est possible de simuler une requête une fois dans l'ascenseur afin de choisir un étage.
   La valeur inscrite a la fin de la ligne, le 2 dans cet exemple, définit l'étage qui cera choisi une fois dans l'ascenseur.

Voilà, vous pouvez lancer l'app.

Pour ce faire, avec Visual Studio Code, ouvrez le terminal et inscrivez node residential_controller.js



////// english /////////


To test different scenarios, go to the line (281).

1. On the line (281), it is possible to change the number of floors and the number of elevator on the column.
   The second value, the 10 in this example, is the number of floors.
   The 3rd value, the 2 in this example, corresponds to the number of lift.

2. On the line (282 and 283), it is possible to change the initial floor of each elevator.
   The value at the end of the line represents their initial floor, in this example the elevator A(line 282) is on the 2nd floor.
   *If we want 3 elevator, we will have to create a 3rd line as the example on the line (284) and change the 3rd value on the line (281) for 3 in this example.

3. On the line (287) it is possible to simulate an elevator request and the direction one would like to go.
   The first value matches the floor we’d be on to make that request.
   The second value corresponds to the direction you would like to go once in the elevator, either "up" or "down".

4. On the line (288), it is possible to simulate a request once in the elevator to choose a floor.
   The value entered at the end of the line, the 2 in this example, defines the floor that will be chosen once in the elevator.

Voilà, you can launch the app.

To do this, with Visual Studio Code, open the terminal and enter node residential_controller.js

