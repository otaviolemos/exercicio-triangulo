import { InvalidTriangle } from './invalid-triangle'

export enum TriangleType {
  EQUILATERAL = 1,
  SCALENE,
  ISOSCELES
}

export class Triangle {
  private readonly sideA: number
  private readonly sideB: number
  private readonly sideC: number

  constructor (sideA: number, sideB: number, sideC: number) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0 ||
        sideA >= sideB + sideC ||
        sideB >= sideC + sideA ||
        sideC >= sideA + sideB) {
      throw new InvalidTriangle('Invalid triangle.')
    }
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }

  classify (): TriangleType {
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return TriangleType.EQUILATERAL
    }
    if (this.sideA !== this.sideB && this.sideB !== this.sideC &&
        this.sideA !== this.sideC) {
      return TriangleType.SCALENE
    }
    return TriangleType.ISOSCELES
  }
}
