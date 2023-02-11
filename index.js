const btnCart = document.querySelector('.contenedor-icon')
const containerCartProducts = document.querySelector('.contenedor-carro-productos')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})
