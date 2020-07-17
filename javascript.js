//feet to mile assignment 1
function feetToMile(feet){
    var mile = feet / 5280;
    mile = mile.toFixed(2); // fixed in 2 decimal
    return mile;
}
var result = feetToMile(30292); // put feet number here.
console.log(result);

//wood calculator assignment 2
function woodCalculator(chair, table, bed){
    var forChair = chair * 1;
    var forTable = table * 3;
    var forBed = bed * 5;
    var totalWoodNeed = forChair + forTable + forBed;
    return totalWoodNeed;
}
var total = woodCalculator(3, 2, 5); // put value
console.log(total);

// brick calculator assignment3
function brickCalculator(floor){
    if(floor <= 10){
        var totalBrick = (floor * 15 * 1000);
        return totalBrick;
    }
    else if(floor >=11 && floor <=20 ){
        var totalBrick = (floor * 15 * 1000) + 12 * 1000;
        return totalBrick;
    }
    else{
        var totalBrick = (floor * 15 * 1000) + (floor * 12 * 1000) + 10 * 1000;
        return totalBrick;
    }
}

var totalBrickNeed = brickCalculator(12); // put value here
console.log(totalBrickNeed);

//  tiny friend assignment 4
function tinyFriend(name){
    var smallName = name[0];
    for(var i = 0; i < name.length; i++){
        var currentName = name[i];
        if(currentName.length < smallName.length){
            smallName = currentName;
        }
    }
    return smallName;
}
var mySmallFriendName = tinyFriend(['ari', 'arif', 'ma']); //put name here
console.log(mySmallFriendName);

