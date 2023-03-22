import {Card as typeCard} from '@global/interfaces/Card';

export type componentParam = {
  onChangeInputWord: (value: string) => void,
  onChangeInputContext: (value: string) => void,
  onChangeInputTranslation: (value: string) => void,
  data: typeCard[],
  cardIndex: number,
  removeCard: () => any,
  initialWordValue?: string,
  initialTranslationValue?: string,
  initialContextValue?: string,
  editable?: boolean,
  animatedCard?: boolean
}