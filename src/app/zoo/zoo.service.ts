import {Injectable} from '@angular/core';

@Injectable()
export class ZooService {
  constructor() {

  }

  addAnimal(name: string) {

    return new Promise((resolve, reject) => {
      if (0.5 > Math.random()) {
        setTimeout(() => reject(null), 3000);
      } else {
        setTimeout(() => resolve(name), 1000);
      }
    });
  }
}
