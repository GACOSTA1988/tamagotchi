

export class Tamagotchi {
  constructor(name, healthLevel, foodLevel) {
    this.name = name;
    this.healthLevel = healthLevel;
    this.foodLevel = foodLevel;
  }


  setHealth() {
    setInterval(() => {
      this.healthLevel--;
    }, 1000);
  }

  hug() {
    this.healthLevel = this.healthLevel + 2;
  }


  setFood() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }



  didTamagotchiLive() {
    if (this.foodLevel > 0 && this.healthLevel > 0) {
      return  true;
    } else {
      return false;
    }
  };

  feed() {
    this.foodLevel = this.foodLevel + 2;
  }
};
