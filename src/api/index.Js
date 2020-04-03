import { BACKEND_HOSTNAME } from '../config'
import {v4 as uuid } from 'uuid';
import Chance from 'chance';
import _ from 'lodash';

const chance = new Chance()

const hobbies = {};

new Array(150).fill(0).forEach((x, i) => {
  const id = uuid()
  hobbies[id] = {
    id,
    name: chance.name(),
    description: chance.name(),
    imageUrl: 'https://cataas.com/cat'
  };
});

const delay = 200;

function resolve(object, action =  () => {}) {
  return new Promise((resolve) => setTimeout(() => {
    action();
    resolve(object);
  }, delay));
}


export default class Api {
  static enpdoint = `${BACKEND_HOSTNAME}/api`
  static async fetchHobbies(offset = 0, max = 20) {
    // return fetch(`${enpdoint}/hobbies?offset=${offset}`, {
    //   method: 'GET',
    // }).then(response => response.json())
    return resolve({ data: { items : _.take(_.slice(Object.values(hobbies), offset), max) }}); //TODO
  } 
}