'use strict';

class Animal {
  static alive = [];

  static removeDied(animal) {
    const index = Animal.alive.indexOf(animal);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

  takeDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      Animal.removeDied(this);
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100, hidden) {
    super(name, health);
    this.hidden = false;
  }

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      const damage = 50;

      target.takeDamage(damage);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
