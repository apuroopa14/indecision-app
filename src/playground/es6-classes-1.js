//car
//make
//model
//vin 
//getDescription--->method

class Person {
constructor(name='Anonymous',age=0){
    this.name=name;
    this.age=age;
}
getDescription(){
    return `${this.name} is ${this.age} year(s) old.`;
}
getGretting(){
   // return 'HI '+this.name+'!';
   return `Hi. I am ${this.name}!`;
}

}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
  
        this.major=major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description=super.getDescription();
       if(this.hasMajor())
       {
        description+=` Their major is ${this.major}`;
       }
        return description;
    }
}
;

//const me=new Student('Apuroopa Gottapu',25,'CS');
//console.log(me.getDescription());
//console.log(me.hasMajor());
//const other=new Student();
//console.log(other.getDescription())

//challenge
//traveller

class Travller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;  
    }
    getGretting(){
       let message=super.getDescription();
       if(this.hasHomeLocation())
       {
           message+=`Their home location is ${this.homeLocation}`;
       }
       return message;
    }
}




const me=new Travller('Apuroopa Gottapu',25,'Troy');
console.log(me.getGretting());
//console.log(me.hasMajor());
const other=new Travller();
console.log(other.getGretting());
//console.log(other.hasMajor());


