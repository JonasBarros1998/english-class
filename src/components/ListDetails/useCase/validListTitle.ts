function validListTitle(titleList: string) {
  if (titleList.trim().length === 0) {
    return false;
  }
  return true;
}

export {validListTitle};
