import React from "react";
class ChildComponent extends React.Component {
  state = {
    showChild: false,
    editFriend: "",
  };
  handleShowHide = () => {
    this.setState({ showChild: !this.state.showChild });
  };
  handleOnClickDelete = (friend) => {
    this.props.deleteFriend(friend);
    // alert("Call from chid");
  };
  handleOnClickEdit = (friend) => {
    let { editFriend } = this.state;
    let isEmptyObj = Object.keys(editFriend).length === 0;
    isEmptyObj = false;

    if (isEmptyObj === false && editFriend.id === friend.id) {
      this.props.editFriend(editFriend);
      friend = "";
    }
    this.setState({
      editFriend: friend,
    });
    // alert("Edit friend");
  };
  handleOnChangeEditName = (event) => {
    let editFriendCopy = { ...this.state.editFriend };
    editFriendCopy.fullname = event.target.value;
    this.setState({
      editFriend: editFriendCopy,
    });
  };
  render() {
    console.log(">>>>>> Props: ", this.props);
    let { friendList } = this.props;
    let { showChild, editFriend } = this.state;
    let isEmptyObj = Object.keys(editFriend).length === 0;
    console.log(">>>>>>>check isEmpty", isEmptyObj);
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
            <div className="list_friend">
              {friendList.map((friend, index) => {
                // let fullName = friend.fullName;
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
                      {isEmptyObj === false && editFriend.id === friend.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {friend.fullname}
                      </span>
                    ) : (
                      <>
                        {friend.id === editFriend.id ? (
                          <span>
                            {index + 1} -
                            <input
                              value={editFriend.fullname}
                              onChange={(event) =>
                                this.handleOnChangeEditName(event)
                              }
                            ></input>
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {friend.fullname}
                          </span>
                        )}
                      </>
                    )}
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
