type forms = {
  id: number,
  word: string,
  translation: string,
  context: string,
}[];


function addNewCardEmpty(datas: forms | []) {
  const dados = [];
  dados.push(...datas);

  dados.push({
    id: Math.floor(Math.random() * 10000),
    word: "",
    translation: "",
    context: ""
  });

  return dados;
}



export {addNewCardEmpty};
