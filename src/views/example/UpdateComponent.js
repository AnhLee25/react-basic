import React from "react";
import "../Style.scss";
class UpdateComponent extends React.Component {
  state = {
    fullname: "fullname",
  };
  handleOnChangeFullName = (event) => {
    this.setState({
      fullname: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    if (!this.state.fullname) {
      alert("Missing input, please type in First Name and Last Name");
    } else {
      this.props.addNewFriend({
        id: Math.floor(Math.random() * 100),
        fullname: this.state.fullname,
      });
      alert("Hello " + this.state.fullname);
      this.setState({
        fullname: "",
      });
    }
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="fname"> Full Name: </label>
          <br />
          <input
            type="text"
            value={this.state.fullname}
            onChange={(event) => this.handleOnChangeFullName(event)}
          ></input>
          <br />
          {/* <label htmlFor="lname"> Last Name: </label>
          <br />
          <input
            type="text"
            value={this.state.lastname}
            onChange={(event) => this.handleOnChangeLastName(event)}
          ></input>
          <br /> */}
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
