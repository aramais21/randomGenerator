import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private getRndInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomNumber(): number[] {
    let n1;
    let n;
    const arr = [];

    const prob = Math.random();
    if (prob < 0.6) {
      n1 = this.getRndInteger(60, 80);
    } else if (prob < 0.85) {
      n1 = this.getRndInteger(81, 100);
    } else {
      n1 = this.getRndInteger(0, 59);
    }

    for (let i = 0; i < 8; i++) {
      const n2 = this.getRndInteger(1, 10);
      n = n1 + n2;

      if (n > 100) {
        n = 100;
      }

      arr.push(n);
    }

    return arr;
  }

  getRandomWord(): string {

    const arr =
        [
          "K-means Clustering",
          "Principal Component Analysis (PCA)",
          "Ensemble Learning - Random Forests",
          "-Get Bitcoin Value from KRAKEN oder BINANCE and show the curent BTC Value",
          "(This is not a word showing it should grab current BTC VALUE from KRAKEN / BINANCE.",
          "Setting up BTC",
          "Vectorization",
          "Simulated Annealing",
          "Weighting Data",
          "Mining Data"
        ];

    const randomItem = (items) => items[Math.floor(Math.random() * items.length)];
    return randomItem(arr);
  }
}
