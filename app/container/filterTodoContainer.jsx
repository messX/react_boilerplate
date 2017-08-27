import { connect } from 'react-redux'
import { actions } from 'actions'
import FilterTodo from 'FilterTodo'


const mapDispatchToProps = dispatch => {
  return {
    handleFilter: () => {
        dispatch(actions.toggleShowCompleted());

    }
  }
}


const ToggleTodoContainer = connect(
  mapDispatchToProps
)(FilterTodo)

module.export = ToggleTodoContainer;
