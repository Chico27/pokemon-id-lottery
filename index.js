
function calcPokemonId(){

  var valiationNum = document.getElementById('pokemonId').value;

  // let valiationNum = 100;

  const PatternX1 = 10*1*1*1*1*1;
  const PatternX2 = 10*10*1*1*1*1;
  const PatternX3 = 10*10*10*1*1*1;
  const PatternX4 = 10*10*10*10*1*1;
  const PatternX5 = 10*10*10*10*10*1;

  let soloX1 = PatternX1/10**6;
  let soloX2 = PatternX2/10**6-soloX1;
  let soloX3 = PatternX3/10**6-soloX2;
  let soloX4 = PatternX4/10**6-soloX3;
  let soloX5 = PatternX5/10**6-soloX4;
  // let x1 = valiationNum* 1*(1/10)*(1/10)*(1/10)*(1/10)*(1/10);
  // let x2 = valiationNum* 1*1*(1/10)*(1/10)*(1/10)*(1/10)-x1;
  // let x3 = valiationNum* 1*1*1*(1/10)*(1/10)*(1/10)-x1-x2;
  // let x4 = valiationNum* 1*1*1*1*(1/10)*(1/10)-x1-x2-x3;
  // let x5 = valiationNum* 1*1*1*1*1*(1/10)-x1-x2-x3-x4;

  // console.log((soloX1*100).toFixed(6));
  // console.log((soloX2*100).toFixed(6));
  // console.log((soloX3*100).toFixed(6));
  // console.log((soloX4*100).toFixed(6));
  // console.log((soloX5*100).toFixed(6));
  // console.log('');

  let x1 = 1-(1-soloX1)**valiationNum;
  let x2 = 1-(1-soloX2)**valiationNum-x1;
  let x3 = 1-(1-soloX3)**valiationNum-x2-x1;
  let x4 = 1-(1-soloX4)**valiationNum-x3-x2-x1;
  let x5 = 1-(1-soloX5)**valiationNum-x4-x3-x2-x1;

  // console.log((x1*100).toFixed(6));
  // console.log((x2*100).toFixed(6));
  // console.log((x3*100).toFixed(6));
  // console.log((x4*100).toFixed(6));
  // console.log((x5*100).toFixed(6));

  document.getElementById('5IdHit').innerHTML = (x1*100).toFixed(6);
  document.getElementById('4IdHit').innerHTML = (x2*100).toFixed(6);
  document.getElementById('3IdHit').innerHTML = (x3*100).toFixed(6);
  document.getElementById('2IdHit').innerHTML = (x4*100).toFixed(6);
  document.getElementById('1IdHit').innerHTML = (x5*100).toFixed(6);

};
