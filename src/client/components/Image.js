const React = require('react')

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  render() {
    return (
      <div>
        <img src={this.state.file} height="90" width="90"/>
        <br/>
        <input type="file" onChange={this.handleChange}/>
      </div>
    );
  }
}
module.exports = Upload