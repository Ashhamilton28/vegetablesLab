const React = require('react');


function New(){
    return(
        <div>
            <h1>Add another vegetable here!</h1>

            <form action='/vegetables' method="POST">

                Name:<input type="text" name ="name"/>
                <br/>

                Color: <input type="text" name="color" />
                <br/>

                Can use Power-ups?: <input type="checkbox" name ="readyToEat"
                />
                 <br/>
                 
                 <input type="submit" value="Add a vegetable" />

            </form>
        </div>
    )
}

module.exports = New