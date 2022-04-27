/*
Task
Create function symDiff getting 2 sets as arguments and returning a new Set as result of symmetric difference of these sets.
*/

function symDiff(s1, s2){
  const onlyInS1 = [...s1].filter(elt => !s2.has(elt));
  const onlyInS2 = [...s2].filter(elt => !s1.has(elt));
  return new Set([...onlyInS1, ...onlyInS2]);
}

/*Há maneiras mais eficientes de resolver esse desafio,
evitando a repetição desnecessária do filter. É possível
atingir esse resultado por meio da lógica do XOR ou
excluindo elementos que estão presentes em ambos os
conjuntos usando &&*/

//Momento para apreciar a beleza da lógica (XOR)
function symDiff(s1, s2){
  return  new Set([...s1,...s2].filter(e=>s1.has(e)^s2.has(e)))
}

//Exclusão com base no operador &&
function symDiff(s1, s2) {
  const universe = [...s1].concat([...s2]);
  return new Set(
    universe.filter(x => !(s1.has(x) && s2.has(x)))
  );
}
