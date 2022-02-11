
function myEach(collection, callback){
    let arr = [];

    if (Array.isArray(collection)) {
        arr = collection;
    } else if (typeof collection === 'object'  && collection !== null){
        arr = Object.values(collection);
    }
    for (let i =0; i <arr.length; i++){
        callback(arr[i]);
    }
    return collection;
}



function myMap(collection, callback){
    let arr = [];

    if (Array.isArray(collection)) {
        arr = collection;
    } else if (typeof collection === 'object'  && collection !== null){
        arr = Object.values(collection);
    }
    for (let i =0; i <arr.length; i++){
        callback(arr[i]);
    }
    let newArr = [];
    for (let i =0; i <arr.length; i++){
        newArr.push(callback(arr[i]));
}
    return newArr;
}



function myReduce(collection, callback, acc){
    let arr = [];

    if (Array.isArray(collection)) {
        arr = collection;
    } else if (typeof collection === 'object'  && collection !== null){
        arr = Object.values(collection);
    }

    let currVal = acc;

    if(!acc){                                                   //Confused from here down to return CurrVal
        currVal = arr[0];
        for (let i = 1; i < arr.length; i++){
            currVal = callback(currVal, arr[i], arr)
        }
        } else {
            for (let i in arr){
                currVal = callback(currVal, arr[i], arr);
            }
        }
        return currVal;
}



function myFind(collection, predicate){
   
    let x = [...collection];

    if (collection instanceof Array === false){
        x = Object.values(collection);
    } 
    
    for (let i = 0; i < x.length; i++){                   //Need to gain better understanding of this
        if(predicate(x[i])){
            return x[i];
        }
    }
    return undefined;
}


function myFilter(collection, predicate){
   
    let x = [...collection];                          //creates shallow copy of collection

    if (collection instanceof Array === false){            // If the collection is not an array, then it is an object
        x = Object.values(collection); 
    } 
    const newCollection = [];
    
    for (let i = 0; i < x.length; i++){                 
        if(predicate(x[i])){                     //Need to gain better understanding of this
            newCollection.push(x[i]);    
        }
    }
    return newCollection;
}



function mySize(collection){

    let x = [...collection];

    if (collection instanceof Array === false){
        x = Object.values(collection);
    } 
    return x.length;
}



function myFirst(array, n){

    if (typeof n !== 'number'){
        return array[0];
    } else {

        let newArray = [];
        for (let i = 0; i < n; i++){
            newArray.push(array[i]);
        }
        return newArray;
    }
}



   

function myLast(array, n){

    if (typeof n !== 'number'){
        return array[array.length - 1];
    } else {

        let newArray = [];
        for (let i = 1; i <= n; i++){                     // why does i start at 1?
            newArray.unshift(array[array.length - i]);      // confused about the - i;
        }
        return newArray;
    }
    
}

function myKeys(object){

    const arrOfKeys = [];

    for (let key in object){
        arrOfKeys.push(key);
    }
    return arrOfKeys;
}


function myValues(object){
    const arrOfValues = [];

    for (let key in object){
        arrOfValues.push(object[key]);
    }
    return arrOfValues;
}













