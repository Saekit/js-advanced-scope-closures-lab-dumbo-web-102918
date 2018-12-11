function produceDrivingRange(driversRange){
  return function(start, end){
    let diffBtwn = parseInt(end) - parseInt(start);
    let range = driversRange - diffBtwn;
    console.log(start, end, diffBtwn, driversRange, range)
      if (range > 0) {
        return `within range by ${range}`
      } else {
        return `${Math.abs(range)} blocks out of range`
  }
}
}

function produceTipCalculator(percent){
  return function(amount){
    return amount * percent;
  }
}

function createDriver(){
  let driverId = 0;
  return class{
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
