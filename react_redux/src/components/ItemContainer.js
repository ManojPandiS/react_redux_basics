import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIcecream } from '../redux'

function ItemContainer( props ) {
  return (
    <div>
        <h1>Item - { props.itemCount }</h1>
        <button onClick={ props.buyItem }>Buy Item</button>
    </div>
  )
}

const mapStateToProps = ( state, ownProps ) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIcecreams
    return {
        itemCount : itemState
    }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
    const dispatchFN = ownProps.cake ? () => dispatch( buyCake() ) : () => dispatch( buyIcecream() )
    return {
        buyItem : dispatchFN
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)