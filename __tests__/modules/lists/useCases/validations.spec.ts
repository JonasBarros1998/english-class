import {titleValidation} from '@modules/lists/useCases/validations';

jest.mock('../../../../src/services/errorTracking/exception/captureErrorMessage.ts');
jest.mock('../../../../src/services/errorTracking/exception/captureErrorException.ts');

describe("title validation", function() {
  test("should return a throw error", function() {

    function returnThrowError() {
      titleValidation("");
    }

    expect(returnThrowError).toThrow(new Error("The length of title shouldn't zero"));
  });
})