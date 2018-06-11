import { helloTravis } from "./index";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;
describe("Hello travis library", () => {
  it("should return hello", () => {
    expect(helloTravis()).to.equal("hello");
  });
});
