import { Card } from "@global/interfaces/Card";
import { captureErrorException } from "@services/errorTracking/exception/captureErrorException";

export function titleValidation(titleList: string) {
  if (titleList.length === 0) {
    const error = new Error("The length of title shouldn't zero");
    error.name = "titleValidation";
    captureErrorException(error);
    throw error;
  }
}


/**
 * Nao deve salvar os cards no banco de conter algum card sem 
 * que os seguintes campos estiverem preenchidos: palavra e traduçao
 */
export function validationCards(cards: Card[]) {
  cards.find(function(card) {
    if (card.word.length === 0 || card.translation.length === 0) {
      const error = new Error("Before saving the list, fill in all added cards");
      error.name = "validationCards";
      captureErrorException(error);
      throw error
    }
  });
}
