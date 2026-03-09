import { sum } from "../../sum"

test('Calculate the sum of 2 numbers',()=>{
    const result = sum(1,2);
    expect(result).toBe(3);
})