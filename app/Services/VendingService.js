import { ProxyState } from "../AppState.js";

class VendingService {

  addMoney() {
    // ProxyState.money = ProxyState.money
    ProxyState.money += .25
    console.log(money);
  }
}



export const vendingService = new VendingService