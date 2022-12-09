import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../redux'

function IcecreamContainer( props ) {
    console.log(props)
  return (
    <div>
        <h1>Number of Icecreams - { props.numOfIcecreams }</h1>
        <button onClick={ props.buyIcecream }>Buy Icecream</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfIcecreams : state.iceCream.numOfIcecreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream : () => dispatch( buyIcecream() )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( IcecreamContainer )