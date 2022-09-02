
//Module 2.  Handleing multiple Promises. 
const myPromise = new Promise((resolved, rejected) => {
    const user = {name: "iqbal", id: 1};
    if (!user) {
        rejected("Something went wrong")
    }
    else {
        setTimeout(() => {
            resolved({name: "john"})
        }, 2000);
    }
});

// note: We use promise in the backend for skipping callback hell. this is something nesting callback for geeting data based on data. If we have to write a promise new Promise is the keyword. Promises gives us something in the future. There is three state in a promise: 1. resolved, 2.rejected 3. pending . if data is got from database we can call resolved if not we will call rejected. 

myPromise
 .then(res => console.log("From then: ",res))
 .catch(res => console.log("From catch: ", res));

 // Consuming promise is actually executing promises. There is three sate of consuming promises. if data is resloved will have in .then. if not found any data it will be in .catch method.


 const userIds = [1, 2, 3, 4, 5, 6];
 let userData = [];

//  for(let i = 0; i < userIds.length; i++){
//     const newData = userIds[i];
    
//     myPromise.then(user => {
//         userData.push(user);
//     })
//  }

 for(let i = 0; i < userIds.length; i++){
    const newData = userIds[i];
    userData.push(myPromise)
 }

 Promise.all(userData).then(res => {
    console.log(res)
 })

//  console.log(userData);

 // Suppose we have to load multiple data from database based on some ids those are comming from frontend. first, we have to loop through the ids. and write a new array to keep all new data are coming for each and every id. We have to do a async database call and push data to the new array. we are using the Promise we wrote before by consuming. I think this would not work. Yes. there arises a problem, we are consuming myPromise consctructor. This is a asyncrounus task when code executes myPromise counsumer would be send to the threat poll and and we quene is empty it will console log "userData". 

 // To solve this problem we can use Promise.all function. First, we have to push promise to userData now it is not a async task. after that line we can call promise.all function it will execute all the data one by one. after that send respone to the frontend.  


 
