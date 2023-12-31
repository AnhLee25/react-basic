import React from "react";
import "../Style.scss";
class UpdateComponent extends React.Component {
  state = {
    firstname: "First Name",
    lastname: "Last Name",
  };
  handleOnChangeFirstName = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };
  handleOnChangeLastName = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    if (!this.state.firstname || !this.state.lastname) {
      alert("Missing input, please type in First Name and Last Name");
    } else {
      this.props.addNewFriend({
        id: Math.floor(Math.random() * 100),
        firstname: this.state.firstname,
        lastname: this.state.lastname,
      });
      alert("Hello " + this.state.firstname + " " + this.state.lastname);
      this.setState({
        firstname: "",
        lastname: "",
      });
    }
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="fname"> First Name: </label>
          <br />
          <input
            type="text"
            value={this.state.firstname}
            onChange={(event) => this.handleOnChangeFirstName(event)}
          ></input>
          <br />
          <label htmlFor="lname"> Last Name: </label>
          <br />
          <input
            type="text"
            value={this.state.lastname}
            onChange={(event) => this.handleOnChangeLastName(event)}
          ></input>
          <br />
          <button
            className="btn"
            // type="submit"

            onClick={(event) => this.handleOnSubmit(event)}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}
export default UpdateComponent;
