const React = require("react");

function Index(props) {
  const { vegetables } = props;

  return (
    <div>
         <nav>
        <a href="/vegetables/new">Create a New Vegetable</a>
      </nav>
      <h1>Index Page</h1>
      <ul>
        {vegetables.map((vegetables, i) => {
          return (
            <li>
              <a href={`/vegetables/${i}`}>{vegetables.name}</a> is {vegetables.color} and {
             vegetables.readyToEat ?  ` ready to eat`
              : `not ready to eat`
            
            }
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;