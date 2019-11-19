


export class Tamagotchi {
  constructor(name, healthLevel, foodLevel) {
    this.name = name;
    this.healthLevel = healthLevel;
    this.foodLevel = foodLevel;
  }

  setHealth() {
    setInterval(() => {
      this.healthLevel--;
      console.log(this.healthLevel);
    }, 1000);
  }

  hug() {
    this.healthLevel = this.healthLevel + 2;
  }

  setFood() {
    setInterval(() => {
      this.foodLevel--;
      // console.log(this.foodLevel);
    }, 1000);
  }

  didTamagotchiLive() {
    setInterval(() => {
      if (this.foodLevel > 0 && this.healthLevel > 0) {
        return  true;
      } else {
        alert("dead");
        return false;
      }
    }, 1000);
  }

  feed() {
    this.foodLevel = this.foodLevel + 2
    console.log(this.foodLevel);
  }
}
