import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";


function _drawSnack() {
  let item = ProxyState.snack
  let template = ''
  item.forEach(i => template += i.Template)
  // console.log(template);
  document.getElementById('item').innerHTML = template
}

function _drawMoney() {
  document.getElementById('money').innerText = ProxyState.money.toString()
}







export class VendingController {
  constructor() {
    // console.log('vending controller', ProxyState.snack);
    _drawSnack()
    _drawMoney()
    ProxyState.on('money', _drawMoney)
    // _drawTotal()
  }

  addMoney() {
    console.log('adding to the total');
    vendingService.addMoney()
  }

}