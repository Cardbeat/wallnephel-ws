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
    const file = event.target.files[0]
    const uploadTask = firebase.storage().ref('images/' + event.target.files[0].name).put(event.target.files[0])
    uploadTask.on('state_changed',  
    
    (snapshot) => {
    },
    
    (error) => {
        console.log(error)
    },
    
    () => {
      this.props.getImage(file.name)
     }
    )
  }

  render() {
    return (
      <div>
        <img src={this.state.file} height="90" width="90"/>
        <br/>
        <input id="image" type="file" onChange={this.handleChange} required />
      </div>
    );
  }
}
module.exports = Upload