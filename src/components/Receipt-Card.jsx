function ReceiptCard(props){



    return(


        <div className="receiptCard">
            <h2>{props.receipt.person}</h2>
            <span>
            <h3>Main: {props.receipt.order.main}</h3>
            <h3>Protein: {props.receipt.order.protein}</h3>
            <h3>Rice: {props.receipt.order.rice}</h3>
            <h3>Sauce: {props.receipt.order.sauce}</h3>
            <h3>Drink: {props.receipt.order.drink}</h3>
            <h3>Cost: ${props.receipt.order.cost}</h3>
            </span>

        </div>
    )
}
export default ReceiptCard