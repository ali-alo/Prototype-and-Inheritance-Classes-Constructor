// Create 2 objects: animal and cat, add move property to animal object,
// cat object must inherit move property from object animal

class Animal {
  constructor(maxSpeed) {
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(
      `Animal is moving with a speed of ${this.maxSpeed} km per hour!`
    );
  }
}

class Cat extends Animal {
  constructor(maxSpeed, name) {
    super(maxSpeed);
    this.name = name;
  }

  move() {
    console.log(
      `${this.name} is moving with a speed of ${this.maxSpeed} km per hour! Meow!`
    );
  }
}

const murzik = new Cat(24, "Murzik");
murzik.move(); // Murzik is moving with a speed of 24 km per hour! Meow!
