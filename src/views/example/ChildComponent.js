import React from "react";
class ChildComponent extends React.Component {
  state = {
    showChild: false,
  };
  handleShowHide = () => {
    this.setState({ showChild: !this.state.showChild });
  };
  handleOnClickDelete = (friend) => {
    this.props.deleteFriend(friend);
    // alert("Call from chid");
  };
  handleOnClickEdit = (friend) => {
    // this.props.deleteFriend(friend);
    alert("Edit friend");
  };
  render() {
    console.log(">>>>>> Props: ", this.props);
    let { friendList } = this.props;
    let { showChild } = this.state;
    return (
      <>
        {showChild === false ? (
          <div>
            <button
              className="btn btn__show"
              onClick={() => this.handleShowHide()}
            >
              Show
            </button>
          </div>
        ) : (
          <>
            <div>
              <button
                className="btn btn__show"
                onClick={() => this.handleShowHide()}
              >
                Hide
              </button>
            </div>
            <div className="list__friend">
              {friendList.map((friend) => {
                return (
                  <div className="item" key={friend.id}>
                    <button
                      className="btn__delete"
                      onClick={() => this.handleOnClickDelete(friend)}
                    >
                      X
                    </button>
                    <button
                      className="btn__edit"
                      onClick={() => this.handleOnClickEdit(friend)}
                    >
                      edit
                    </button>
                    <div className="text-align-left">
                      {friend.id}. {friend.firstname} {friend.lastname}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </>
    );
  }
}
// const ChildComponent = (props) => {
//   console.log("check props", props);
//   let { name } = props;
//   return <div> Child Component: {name}</div>;
// };
export default ChildComponent;
// export default -> trả ra 1 class
// export {component1, component2}
