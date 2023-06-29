const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Friendslist />
        <AddFriend />
        {/* <Button>Add Friend</Button> */}
      </div>

      <SplitBill />
    </div>
  );
}

function Friendslist() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} Rs.{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you Rs.{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are even</p>}

      <Button>Select</Button>
    </li>
  );
}

function Button({ children }) {
  return <button class="button">{children}</button>;
}

function AddFriend() {
  return (
    <form className="form-add-friend">
      <label>😂Friend name</label>
      <input type="text" placeholder="name..." />
      <label>🖼️ Image URL</label>
      <input type="text" placeholder="url" />
      <Button>Add</Button>
    </form>
  );
}

function SplitBill() {
  return (
    <form className="form-split-bill">
      <h2>split bill with friend.name</h2>
      <label>💵 Bill Value</label>
      <input type="text" />
      <label>💶 your expense</label>
      <input type="text" />
      <label>💷 friend expense</label>
      <input type="text" disabled />
      <label>who is paying the bill</label>
      <select>
        <option value="user">you</option>
        <option value="friend">friend</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

export default App;
