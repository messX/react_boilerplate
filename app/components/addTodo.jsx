var React = require('react');



var AddTodo = ({onAddTodo})=> {
        let todoText;

        var handleSubmit = () => {
          onAddTodo(todoText.value);
        }
        return (
          <div>
            <input type="text" ref={ e1=> todoText = e1} placeholder="What you need to do"/>
            <button onClick={handleSubmit}>Add Todo</button>

        </div>)
}

module.exports = AddTodo
