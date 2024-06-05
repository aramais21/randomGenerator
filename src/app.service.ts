import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
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

  async getRandomWord(): Promise<string> {
    const binanceApi = this.configService.get<string>('BINANCEAPI');
    const arr = [
      'K-means Clustering',
      'Principal Component Analysis (PCA)',
      'Ensemble Learning - Random Forests',
      '-Get Bitcoin Value from KRAKEN oder BINANCE and show the curent BTC Value',
      'Setting up BTC',
      'Vectorization',
      'Simulated Annealing',
      'Weighting Data',
      'Mining Data',
    ];

    const randomItem = (items) =>
      items[Math.floor(Math.random() * items.length)];
    const selectedWord = randomItem(arr);

    if (selectedWord !== arr[3]) {
      return selectedWord;
    }
    try {
      const response = await axios.get(
        binanceApi + '/api/v3/ticker/price?symbol=BTCUSDT',
      );
      const btcPrice = response.data.price;
      return `${parseFloat(btcPrice)}`;
    } catch (error) {
      console.error('Error fetching BTC value:', error);
      return 'Error fetching BTC value';
    }
  }
}
