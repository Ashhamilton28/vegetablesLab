const React = require('react')

function Show(props){
    
    const {vegetable} = props
    console.log(vegetable,'here')
    return (
        <div>
            <h1>Vegetables Show Page</h1>

            <p>The {vegetable.name} is {vegetable.color} {' '}
            {vegetable.readyToEat ? 'ready to eat': 'not ready to eat'}
            </p>
        </div>
    )
}

 module.exports  = Show;