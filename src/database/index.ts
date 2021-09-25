export const listDetails = [
  {
    id: 1,
    word: 'floor',
    translation: 'chão',
    phrase: 'The flor of house is blue',
  },
  {
    id: 2,
    word: 'car',
    translation: 'carro',
    phrase: "the car's father",
  },
  {
    id: 3,
    word: 'find',
    translation: 'pesquisar',
    phrase: `present continuos: I'm fiding a motherboard present 
    present continuos: I'm fiding a motherboard present present`.replace(/\n/g, ''),
  },
];

export * from './repository/search';
