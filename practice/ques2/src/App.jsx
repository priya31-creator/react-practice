import React from 'react'
import car1 from "./assets/car1.jpg"
import car2 from "./assets/car2.jpg"
import car3 from "./assets/car3.jpg"
import car4 from "./assets/car4.jpg"
const arr= [car1, car2 , car3 , car4];
function app(){

  let choice = arr[Math.floor(Math.random() * 4)];
  return(
    <img src={choice} alt="" />
  )

}
export default app;