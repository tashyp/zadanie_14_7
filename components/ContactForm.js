var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className={'contactForm'}>
        <label>
          <input type="text" value={this.props.contact.firstName}/>
        </label>
        <label>
          <input type="text" value={this.props.contact.lastName}/>
        </label>
        <label>
          <input type="email" value={this.props.contact.email}/>
        </label>
        <button type="submit">Dodaj kontakt</button>
      </form>  
    )
  },
})