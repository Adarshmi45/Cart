import React from "react"; 

class CartItem extends React.Component {
    render () {
        const { price , title ,qty } = this.props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                    <img alt="increase" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/3524/premium/3524388.png?token=exp=1658728672~hmac=1c3f97fc52f28f9ba75951499e1ecc15" onClick={()=>onIncreaseQuantity(product)}/>
                    <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={()=>onDecreaseQuantity(product)}/>
                    <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1658728732~hmac=4255257053bad94c6e9a598ee01b13e6"  onClick={()=>onDeleteProduct(product.id)}/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height :130,
        width : 130,
        borderRadius:4,
        background : '#ccc'
    }
}

export default CartItem;