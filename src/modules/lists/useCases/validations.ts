export function titleValidation(titleList: string) {
  if (titleList.length === 0) 
    throw new Error("The length of title shouldn't zero");
}
