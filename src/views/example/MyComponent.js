import React from "react";
import ChildComponent from "./ChildComponent";
import UpdateComponent from "./UpdateComponent";
class MyComponent extends React.Component {
  state = {
    friendList: [
      { id: 1, firstname: "Le", lastname: "Anh" },
      { id: 2, firstname: "Nguyen", lastname: "An" },
    ],
  };
  addNewFriend = (friend) => {
    this.setState({
      friendList: [...this.state.friendList, friend],
    });
  };
  deleteFriend = (friend) => {
    let currentFriends = this.state.friendList;
    currentFriends = currentFriends.filter((item) => item.id !== friend.id);
    this.setState({
      friendList: currentFriends,
    });
    alert("Delete Success");
  };
  // componentDidMount -> call APIs from backend here
  componentDidMount() {}
  // When data change
  componentDidUpdate(prevProps, prevState) {
    console.log(">> PrevState:", prevState, "CurrentState: ", this.state);
  }

  render() {
    return (
      <>
        <UpdateComponent addNewFriend={this.addNewFriend} />
        <ChildComponent
          friendList={this.state.friendList}
          deleteFriend={this.deleteFriend}
        />
      </>
    );
  }
}

export default MyComponent;
// export default -> trả ra 1 class
// export {component1, component2}
