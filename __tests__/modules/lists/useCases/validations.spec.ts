import {titleValidation} from '@modules/lists/useCases/validations';

describe("title validation", function() {
  test("should return a throw error", function() {

    function returnThrowError() {
      titleValidation("");
    }

    expect(returnThrowError).toThrow(new Error("The length of title shouldn't zero"));
  });
})