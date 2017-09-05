class Elevator {
  constructor(){
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = 'up';
    this.waitingList = [];
    this.passengers = [];
  }

  start() { 
   let intervalId = setInterval(() => this.update(), 1000);
  }

  stop() { 
    clearInterval(intervalId);
  }

  update() { 
    this.log();
  }

  _passengersEnter() { 
    
  }

  _passengersLeave() {

   }

  floorUp() {
    this.direction = 'up';
    return (this.floor < this.MAXFLOOR) ? this.floor += 1 : this.stop();
   }

  floorDown() {
    this.direction = 'down';
    return (this.floor > 0) ? this.floor -= 1 : this.stop();
   }

  call() { 

  }
  
  log() { 
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
