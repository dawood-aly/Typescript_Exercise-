interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; // allow any other property
}

function createCar(manufacturer: string, model: string, ...args: any[]): Car {
  const car: Car = {
    manufacturer,
    model
  };
  
  // iterate over the rest of the arguments and add them as key-value pairs
  for (let i = 0; i < args.length; i += 2) {
    let uNique=args[i]
    car[args[i]] = args[i+1];
    
    console.log(`Special Values entered are ${uNique} = ${car[args[i]] = args[i+1]}`);
  }
  return car;
}
const car1: Car = createCar("Toyota", "Camry", "color", "blue", "features","sunroof");

console.log(car1);
