var FilterTodo = (handleFilter)=> (
    <div>
      <input type="checkbox" ref="showCompleted" onChange={handleFilter} />
      Show Completed
    </div>
)
module.exports = FilterTodo;
