import { captureErrorException } from "@services/errorTracking/exception/captureErrorException";

export function titleValidation(titleList: string) {
  if (titleList.length === 0) {
    const error = new Error("The length of title shouldn't zero");
    captureErrorException(error);
    throw error.message;
  }
}
