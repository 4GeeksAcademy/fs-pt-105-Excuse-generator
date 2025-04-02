
const phrase = ()=>{
  let who =['The dog','My grandma','The mailman','My bird'];
  let action = ['ate','peed','crushed','broke'];
  let what = ['my homework','my phone','the car','the computer'];
  let when = ['before the class','when I was sleeping','while I was exercising','during my lunch','while I was praying'];

  return `${who[Math.floor(Math.random()*who.length)]}
  ${action[Math.floor(Math.random()*action.length)]}
  ${what[Math.floor(Math.random()*what.length)]}
  ${when[Math.floor(Math.random()*when.length)]}`;
  
}
document.getElementById("excuse").textContent = phrase();

const generatorColor =()=>{
  const gnCol =['col-red','col-blue','col-yellow'];

  return gnCol[Math.floor(Math.random()*gnCol.length)];
}
document.body.classList.add(generatorColor());