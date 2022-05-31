import { Snack } from "./Models/Vending.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  money = 0

  snack = [
    new Snack('Cauliflower Rice Bites', 6.25, './assets/img/vendingmachine/snack 1.jpg'),
    new Snack('Tuna Cuce', 5.25, './assets/img/vendingmachine/tunacuc.jpg'),
    new Snack('Pork Rinds', 3.75, './assets/img/vendingmachine/porkrinds.webp'),
    new Snack('No Bake PB Bites', 2.50, './assets/img/vendingmachine/nobakepbbites.webp'),
    new Snack('Chip & Guac', 6.75, './assets/img/vendingmachine/chipguac.jpeg'),
    new Snack('Eggy Avacado', 10.75, './assets/img/vendingmachine/avacadoegg.jpg')
  ]
}



export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
