//MINICURSO DE GIT HUB
module.exports = class Calculator{

  print(a,b){
    return String("a = "+a, "b = "+b);
  }

  sum(a,b){
    return a + b;
  } 

  subtract(a,b){
    return (a - b);
  }

  multiply(a,b){
    return a*b;
  }
}
