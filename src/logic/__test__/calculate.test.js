/* eslint-disable import/order */
/* eslint-disable quotes */
import calculate from "../calculate";
import renderer from "react-test-renderer";
import Calculator from "../../components/Calculator";

describe("testing the calculate function", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  const obj = {
    total: 0,
    next: null,
    operation: null,
  };

  // Addition
  test("test addition", () => {
    let result = calculate(obj, "1");
    result = calculate(result, "+");
    result = calculate(result, "2");
    result = calculate(result, "=");
    expect(result.total).toBe("3");
  });

  // Substraction
  test("test Substraction", () => {
    let result = calculate(obj, "5");
    result = calculate(result, "-");
    result = calculate(result, "3");
    result = calculate(result, "=");
    expect(result.total).toBe("2");
  });

  // Division
  test("test Division", () => {
    let result = calculate(obj, "5");
    result = calculate(result, "÷");
    result = calculate(result, "2");
    result = calculate(result, "=");
    expect(result.total).toBe("2.5");
  });

  // Mod
  test("test Mod", () => {
    let result = calculate(obj, "9");
    result = calculate(result, "%");
    result = calculate(result, "4");
    result = calculate(result, "=");
    expect(result.total).toBe("1");
  });

  // Multiplication
  test("test Multiplication", () => {
    let result = calculate(obj, "2");
    result = calculate(result, "x");
    result = calculate(result, "3");
    result = calculate(result, "=");
    expect(result.total).toBe("6");
  });
});
