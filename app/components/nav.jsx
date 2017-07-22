var React = require('react');
var {Link} = require('react-router-dom');
var Nav = React.createClass({
  render: () => (
    <nav>
      <ul>
        <li><Link to="/">Weather</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
})
module.exports = Nav
