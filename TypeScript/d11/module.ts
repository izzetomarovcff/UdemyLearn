import { Taxi } from "./taxi";

let taxi_1: Taxi = new Taxi({x:2, y:5});
taxi_1.travelTo({x:1, y:2})

console.log(taxi_1.location)
taxi_1.location = {x:40, y:50}
console.log(taxi_1.location)



