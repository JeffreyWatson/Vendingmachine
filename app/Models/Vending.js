

export class Snack {
  constructor(name, price, img) {
    this.name = name
    this.price = price.toFixed(2)
    this.img = img
  }


  get Template() {
    return `
    <div class="card d-flex align-items-center flex-column" style="width: 18rem;">
  <img src="${this.img}" class="card food" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center">${this.name}</h5>
    <p class="card-text text-center">${this.price}</p>
    </div>
    </div>
    `
  }
}
{/* <a href="#" class="btn btn-dark text-light">Buy Now</a> */ }
