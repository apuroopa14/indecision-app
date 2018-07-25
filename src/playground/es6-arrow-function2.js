const add=(a,b)=>a+b;

console.log(add(2,3));

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
      return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
  };
  console.log(user.printPlacesLived());

  //challenge

  const multiplier={
       number:[1,2,3],
       multiplyBY:2,
       multiply(){
           return this.number.map((numb)=> this.multiplyBY * numb);
       }
  }
  console.log(multiplier.multiply());