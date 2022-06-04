import '../styles/Cart.css'

function Cart() {
    const cart = ["Monstera", "lierre", "bouquet de fleur"];
    const priceMonstera = 8;
    const priceIvy = 10;
    const priceFlower = 15;
    return <div className='lmj-cart'>
        <h2>Panier</h2>
        <ul>
            <li>{cart[0]} : {priceMonstera} euros</li>
            <li>{cart[1]} : {priceIvy} euros</li>
            <li>{cart[2]} : {priceFlower} euros</li>
        </ul>
        Total : {priceMonstera + priceIvy + priceFlower}
    </div>;
}
export default Cart;