"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
class hero {
    constructor(name) {
        this.name = '';
        this._health = 100;
        this.xp = 2;
        this.hunger = 5;
        this.name = name;
        this.log = (0, debug_1.default)('app:hero');
        const hendler = setInterval(() => {
            this.hunger--;
            this.log("remaing hunger", this.hunger);
            if (this.amIDead()) {
                console.log('I', 'm Daed');
                clearInterval(hendler);
            }
        }, 5000);
    }
    set health(input) {
        this._health = input;
    }
    get heatlh() {
        return this._health;
    }
    attack() {
        this.log('Attacking');
    }
    amIDead() {
        return this._health <= 0 || this.hunger <= 0;
    }
}
class Archer extends hero {
    attack() {
        this.log('Archer attacking ');
    }
}
class knight extends hero {
    constructor(name, sword) {
        super(name);
        this.sword = 5;
        this.log(this.xp);
        this.sword = sword;
    }
}
class Soldier extends knight {
}
class Tribe {
    constructor() {
        this.heroes = [];
    }
    attack() {
        this.heroes.forEach((hero) => {
            hero.attack();
        });
    }
}
const tribe = new Tribe();
(_a = tribe.heroes) === null || _a === void 0 ? void 0 : _a.push(new Archer('archer1'));
(_b = tribe.heroes) === null || _b === void 0 ? void 0 : _b.push(new knight('kinght', 5));
(_c = tribe.heroes) === null || _c === void 0 ? void 0 : _c.push(new Soldier('soldier', 1));
tribe.attack();
