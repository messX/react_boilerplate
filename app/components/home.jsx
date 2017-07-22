var React = require('react');
var {Link, IndexLink} = require('react-router');

var Home = React.createClass({
  render: function(){
    return (
      <div>
        <div>
          <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
          <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
        </div>
        <div>
          Hello check your city weather here ...
          {this.props.children}
        </div>
      </div>
    )
  }
})

module.exports = Home
