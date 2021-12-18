import debug from 'debug'

class hero{
    name: string = '';
    private _health: number = 100;
    protected xp: number = 2;
    hunger: number = 5; 
  
    log;
    set health(input: number){
        this._health = input
    }

    get heatlh(){
       return this. _health
    } 

    constructor(name: string){
        this.name = name;
        this.log = debug('app:hero');

       const hendler = setInterval(()=>{
            this.hunger--
            this.log("remaing hunger", this.hunger)
            if(this.amIDead()){
                console.log('I','m Daed');
                clearInterval(hendler);
            }
        },5000)
    }

    attack(){
        this.log('Attacking')
    }


    amIDead(){
        return this._health <= 0 || this.hunger <= 0;
    }
}



class Archer extends hero{
    attack(){
        this.log('Archer attacking ')
    }
    
}


class knight extends hero{

    sword: number = 5;
    constructor(name: string, sword: number){

        super(name)
        this.log(this.xp)
        this.sword = sword;
    }
}

class Soldier extends knight{

}




class Tribe{
    heroes: hero[] = [];

     attack(){
        this.heroes.forEach((hero) => {
            hero.attack();
        })

    }
}

const tribe = new Tribe();

tribe.heroes?.push(new Archer('archer1'))
tribe.heroes?.push(new knight('kinght',5))
tribe.heroes?.push(new Soldier('soldier',1))

tribe.attack();

