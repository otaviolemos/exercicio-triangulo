import { InvalidTriangle } from './invalid-triangle'
import { Triangle, TriangleType } from './triangle'

describe('triangle class', () => {
  test('should throw error for invalid triangle with side <= 0', () => {
    expect(() => {
      const t1 = new Triangle(-4, -4, -4)
      console.log(t1)
    }).toThrow(new InvalidTriangle('Invalid triangle.'))
  })

  test('should throw error for invalid triangle with one side larger than the sum of the other two', () => {
    expect(() => {
      const t1 = new Triangle(11, 5, 5)
      console.log(t1)
    }).toThrow(new InvalidTriangle('Invalid triangle.'))
  })

  test('should correctly classify an equilateral triangle', () => {
    const t1 = new Triangle(10, 10, 10)
    const ret = t1.classify()
    expect(ret).toEqual(TriangleType.EQUILATERAL)
  })

  test('should correctly classify an isosceles triangle', () => {
    const t1 = new Triangle(10, 3, 10)
    const ret = t1.classify()
    expect(ret).toEqual(TriangleType.ISOSCELES)
  })

  test('should correctly classify an scalene triangle', () => {
    const t1 = new Triangle(8, 3, 10)
    const ret = t1.classify()
    expect(ret).toEqual(TriangleType.SCALENE)
  })
})
