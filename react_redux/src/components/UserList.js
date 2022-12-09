import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { feachUsers } from '../redux'

function UserList( { userData, feachUserList } ) {
    
    useEffect(() => {
        feachUserList()
    }, [])

    return (
        <div>
            {
                userData.loading ? <h1>Loading...</h1> : userData.error ? <h1>{ userData.error }</h1> : (
                    <div>
                        <h1>User List</h1>
                        {
                            userData.users.map( ( userName, index ) => <p key={ index }>{ userName }</p>)
                        }
                    </div>
                )

            }
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return {
        userData : state.users
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        feachUserList : () => dispatch( feachUsers() )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( UserList )