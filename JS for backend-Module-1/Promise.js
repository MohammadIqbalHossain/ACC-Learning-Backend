

const myPromise = new Promise((resolved, rejected) => {
    const user = {name: "iqbal", id: 1};
    if (!user) {
        rejected("Something went wrong")
    }
    else {
        setTimeout(() => {
            resolved("Successfully got data")
        }, 2000);
    }
});

// note: We use promise in the backend for skipping callback hell. this is something nesting callback for geeting data based on data. If we have to write a promise new Promise is the keyword. Promises gives us something in the future. There is three state in a promise: 1. resolved, 2.rejected 3. pending . if data is got from database we can call resolved if not we will call rejected. 

myPromise
 .then(res => console.log("From then: ",res))
 .catch(res => console.log("From catch: ", res));

 // Consuming promise is actually executing promises. There is three sate of consuming promises. if data is resloved will have in .then. if not found any data it will be in .catch method.