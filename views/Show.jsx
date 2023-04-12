const React = require('react')

function Show(props){
    
    const {vegetables} = props
    console.log(vegetables)
    return (
        <div>
            <h1>Vegetables Show Page</h1>

            <p>The {vegetables.name} is {vegetables.color} {' '}
            {vegetables.readyToEat ? 'ready to eat': 'not ready to eat'}
            </p>
        </div>
    )
}

 module.exports  = Show;