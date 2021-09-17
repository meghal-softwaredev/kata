//https://gist.github.com/meghalshah210/76ecd2f28ed918184ac6bd048e590988
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return (4/3) * PI * radius * radius * radius;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return (1/3) * PI * radius * radius * height;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
   return height * width * depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let volume = 0;
  for(let i = 0;i < solids.length;i++){
    const shape = solids[i];
    const type = shape.type;
    if(type === "sphere"){
      const radius = shape.radius;
      volume += sphereVolume(radius);      
    }else if(type === "cone"){
      const radius = shape.radius;
      const height = shape.height;
      volume += coneVolume(radius, height);
    }else if(type === "prism"){
      const height = shape.height;
      const width = shape.width;        
      const depth = shape.depth;
      volume += prismVolume(height, width, depth);
    }
  } 
  return volume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);