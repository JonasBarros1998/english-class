import {select} from '@database/repository/search';

type cards = {
  cards: Array<{
    context: string;
    word: string;
    id: number;
    translation: string;
  }>;
  title: string;
};

async function searchPrivateLists() {
  const datas: any[] = [];

  return select('123456789/lists')
    .then(function (response) {
      response.forEach(function(name) {
        const {cards, title} = name.toJSON() as cards;
        datas.push({
          id: name.key,
          name: title,
          quantityWords: cards.length,
          idioma: 'inglês',
        });
      });
      return datas;
    })
    .catch(function (erro) {
      return Promise.reject(new Error(erro));
    });
}

export {searchPrivateLists};
