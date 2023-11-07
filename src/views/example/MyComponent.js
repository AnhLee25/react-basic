import React from "react";
import ChildComponent from "./ChildComponent";
import UpdateComponent from "./UpdateComponent";
class MyComponent extends React.Component {
  state = {
    friendList: [
      { id: 1, fullname: "Le Anh" },
      { id: 2, fullname: "Nguyen Kien" },
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
    // alert("Delete Success");
  };
  editFriend = (friend) => {
    let currentFriends = this.state.friendList;
    currentFriends.forEach((element, index) => {
      if (element.id === friend.id) {
        currentFriends[index].fullname = friend.fullname;
      }
    });
    this.setState({
      friendList: currentFriends,
    });
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
          editFriend={this.editFriend}
        />
      </>
    );
  }
}

export default MyComponent;
// export default -> trả ra 1 class
// export {component1, component2}
