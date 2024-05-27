"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getRandomNumber() {
        let n1;
        let n;
        const arr = [];
        const prob = Math.random();
        if (prob < 0.6) {
            n1 = this.getRndInteger(60, 80);
        }
        else if (prob < 0.85) {
            n1 = this.getRndInteger(81, 100);
        }
        else {
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
    getRandomWord() {
        const arr = [
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
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map