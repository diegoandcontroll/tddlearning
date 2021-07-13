'use strict';
import { expect } from "chai";
import every from './everyRecursive';

it('every should be a functon', () => {
  expect(every).to.be.a('function');
});

it('every([], (item) => item) return should return true', () => {
  expect(every([], (item) => item)).to.be.ok
});

it('every([0,2,3], (item) => item) return should return false', () => {
  expect(every([0,2,3], (item) => item)).to.not.be.ok
});

it('every([2,3,4], (item) => item) return should return true', () => {
  expect(every([2,3,4], (item) => item)).to.be.ok
});  

it('every([1,2,3], (item, index) => index === item - 1) return should return true',() =>{
  expect(every([1,2,3], (item, index) => index === item - 1)).to.be.ok
});

it('every([1,2,3], (item, index,array) => array.length === 3) return should return true',() =>{
  expect(every([1,2,3], (item, index,array) => array.length === 3)).to.be.ok
});