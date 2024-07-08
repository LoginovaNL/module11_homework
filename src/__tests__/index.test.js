import { getMonth } from "../index.js";
    
describe('tests for getMonth function', () => {
    it( "Entering the correct number get the name of the month", () => {
       expect(getMonth(1)).toBe('январь'); 
    }),
    it( "Entering invalid data", () => {
       expect(getMonth(15)).toBe('неизвестно'); 
   }),
    it( "send an empty field", () => {
       expect(getMonth()).toBe('неизвестно'); 
 })
}); 
