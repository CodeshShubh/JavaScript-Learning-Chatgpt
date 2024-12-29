// Question 1: Nested Timeout
// Create a function simulateDay that uses setTimeout to simulate:

// Morning: Log "Good morning" after 1 second.
// Afternoon: Log "Good afternoon" after 2 seconds.
// Evening: Log "Good evening" after 3 seconds.
// Night: Log "Good night" after 4 seconds. Use nested callbacks to achieve this.

// const simulateDay =()=>{

//     setTimeout(()=>{
//          console.log("Good morning");
//          setTimeout(()=>{
//             console.log("Good afternoon");
//             setTimeout(()=>{
//                 console.log("Good evening")
//                  setTimeout(()=>{
//                     console.log("Good night")
//                  },1000);
//             },1000)
//          },1000);
//     },1000)

// }
// simulateDay();


// second Method

// const simulateDay = ()=>{
//     const sayGoodMorning= ()=>{
//         console.log("Good morning");
//         setTimeout(sayGoodAfternoon, 1000);
//     };

//     const sayGoodAfternoon = ()=>{
//         console.log("Good afternoon");
//         setTimeout(sayGoodEvening, 1000);
//     }

//     const sayGoodEvening = ()=>{
//         console.log("Good evening");
//         setTimeout(sayGoodnight, 1000);
//     }

//     const sayGoodnight =()=>{
//         console.log("Good night");
//     }

//     setTimeout(sayGoodMorning, 1000);
// }

// simulateDay();





// Question 3: File Download Simulation
// Simulate downloading 3 files:

// File 1 takes 2 seconds.
// File 2 takes 4 seconds.
// File 3 takes 1 second. Log "File 1 downloaded", "File 2 downloaded", and "File 3 downloaded" in the correct order using nested callbacks.



// const downloading = ()=>{

//     setTimeout(()=>{
//         console.log("File 1 downloaded")
//         setTimeout(()=>{
//            console.log("File 2 downloaded")
//            setTimeout(()=>{
//             console.log("File 3 downloaded");
//            },1000)
//         },4000)
//     },2000);
    
// }
// downloading()



// Promises

// Question 1: Temperature Check
// Create a function checkTemperature() that:

// Resolves with "Temperature is below 30°C" if the temperature is less than 30.
// Rejects with "Temperature is above 30°C" otherwise. Input: 25.


// const  checkTemperature = (temp)=>{
//     return new Promise((resolve , rejtect)=>{
//       if(temp < 30){
//            resolve("Temperature is below 30°C");
//       }else{
//         rejtect("Temperature is above 30°C")
//       }
//     })
// }


// checkTemperature(31).then((message)=>console.log(message))
// .catch((err)=> console.log(err))