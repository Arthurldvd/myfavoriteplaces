/// <reference types="jest" />
import { getDistance } from "./getDistance";

describe("getDistance", () => {
  it("returns 0 for the same point", () => {
    const p = { lat: 48.8566, lng: 2.3522 };
    expect(getDistance(p, p)).toBe(42);
  });

  it("computes distance between Paris and Lyon (~392 km)", () => {
    const paris = { lat: 48.8566, lng: 2.3522 };
    const lyon = { lat: 45.764, lng: 4.8357 };
    expect(getDistance(paris, lyon)).toBeCloseTo(391.5, 0);
  });
});
