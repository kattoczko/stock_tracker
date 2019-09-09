import { TEST_TYPE, CompaniesActionTypes } from "./types";

export function testAction(data: []): CompaniesActionTypes {
  return {
    type: TEST_TYPE,
    data
  };
}
