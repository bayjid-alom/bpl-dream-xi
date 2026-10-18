## 🔥 BPL Dream `XI`

**BPL Dream XI** is a cricket team selection web application where users can explore players, manage virtual coins, select their favorite cricketers, and build their ultimate BPL dream team.

<!-- **Live Demo |** [BPL Dream XI](https://bpl-dream-xi-titans.surge.sh/) -->
**Live Demo |** [BPL Dream XI](https://bpl-dream-xi-titans.netlify.app/)

---


#### 📁 Project Structure

```
bpl-dream-xi/
├── public/
│   └── CNAME
│   └── players.json
├── src/
│   ├── assets/
│   │   ├── banner-main.png
│   │   ├── bg-shadow.png
│   │   ├── doller.png
│   │   ├── logo-footer.png
│   │   ├── logo.png
│   │   └── react.svg
│   ├── components/
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   ├── Banner/
│   │   │   └── Banner.jsx
│   │   ├── Players/
│   │   │   └── Players.jsx
│   │   ├── AvailablePlayers/
│   │   │   └── AvailablePlayers.jsx
│   │   ├── UI/
│   │   │   └── Card.jsx
│   │   │   └── SelectedCard.jsx
│   │   └── SelectedPlayers/
│   │       └── SelectedPlayers.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

<br>





<details>
  <summary>|| Image Hosting — ImgBB</summary>

  - **What:** Free online image hosting service.
  - **Why:** Host cricket player images and use direct URLs in JSON data.
  - **How:** Upload an image to [ImgBB](https://imgbb.com/) and copy its Direct Link.
  - **Usage:** Add the image URL to `playerImg` in your JSON data.
  - **Benefit:** No need to store every image inside the project folder.

</details>

<br>





### || `Working Flow`


#### 📌 State Management & Toggle Functionality (Available / Selected)

<details>
<summary>📌 Manage State with useState</summary>

In >> `Players.jsx`

Use `useState` to track the active section. The default state is `"available"`.

```jsx
const [selectedType, setSelectedType] = useState("available");
```

</details>

<details>
<summary>📌 Toggle Between Available and Selected</summary>

Use `onClick` to update the state and conditional classes to highlight the active button.

```jsx
<div>
  <button
    onClick={() => setSelectedType("available")}
    className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : ""}`}
  >
    Available
  </button>

  <button
    onClick={() => setSelectedType("selected")}
    className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : ""}`}
  >
    Selected
  </button>
</div>
```

</details>

<details>
<summary>📌 Conditional Heading</summary>

Display a heading based on the current state.

```jsx
<h2 className="text-xl font-bold">
  {selectedType === "available"
    ? "Available Players"
    : "Selected Players"}
</h2>
```

</details>

<details>
<summary>📌 Conditional Component Rendering</summary>

Render the appropriate component according to the selected state.

```jsx
{selectedType === "available" ? (
  <AvailablePlayers players={players} />
) : (
  <SelectedPlayers />
)}
```

</details>
<br>

> **Key Concept:** `useState` manages the active tab, `onClick` updates the state, and conditional rendering displays the corresponding heading and component.
<br>








<details>
<summary>📌 Implement Player Selection and Reduce Coins</summary>

### 1. Player Selection with `useState`

`Card.jsx`

```jsx
const [isSelected, setIsSelected] = useState(false);

<button
    disabled={isSelected === true}
    onClick={() => setIsSelected(true)}
    className="btn border-amber-500 bg-amber-400 text-slate-900 shadow-sm transition-colors duration-300 hover:border-amber-600 hover:bg-amber-500"
>
    {isSelected ? "Selected" : "Choose Players"}
</button>
```

- `isSelected` checks whether a player is selected or not.
- `setIsSelected(true)` selects the player.
- The button becomes disabled after selection.

### 2. Props Drilling

**Props drilling:** Passing data from parent to child components through props.

### 3. Lift Up the State

**Lifting state up:** Moving state to a parent component so multiple components can use or update it.

`App.jsx` | Inside the App function

```jsx
const [coin, setCoin] = useState(1000000);
```

- `coin` stores the available coins.
- `setCoin` updates the coin balance.

**Props flow:**

`App.jsx` → `Navbar.jsx`

Send `coin` as props to `Navbar.jsx` and display it dynamically using `{coin}`.

`App.jsx` → `Players.jsx` → `AvailablePlayers.jsx` → `Card.jsx`

Send `coin` and `setCoin` as props to `Players.jsx`, then pass them to the child components where needed.

**Note:** Props are passed from parent to child. A child can update the parent's state by calling a function received through props.

### 4. Reduce Coins on Player Selection

Instead of writing the logic directly inside the button's `onClick`, create a separate function.

`Card.jsx`

```jsx
const handleChoosePlayers = () => {
    let newCoin = coin - player.price;

    if (newCoin >= 0) {
        setCoin(newCoin);
        alert(`${player.playerName} is selected.`);
        setIsSelected(true);
        return;
    } else {
        alert("You don't have enough coins to purchase this player!");
        return;
    }
};
```

**How it works:**

- Subtract the player's price from the available coins.
- If `newCoin >= 0`, update the coin balance, show an alert, and select the player.
- Otherwise, show an alert and do not select the player.



### 5. Call the Function from the Button

```jsx
onClick={() => handleChoosePlayers()}
```

Instead of writing all the logic inside `onClick`, call the function. This keeps the button code simple.

### ✅ Remember

- **Props drilling:** Parent to child data passing.
- **Lift state up:** Keep shared state in a common parent.
- `setCoin(newCoin)` updates the available coins.
- `setIsSelected(true)` marks the player as selected.
- `handleChoosePlayers()` handles the coin check and player selection.

</details><br>







#### || `Thinking`: How Does It Work?

<details>
<summary>🧠 Understand the Flow</summary>

- `selectedPlayers` state কোথায় update করব? → `Players.jsx`
- `Players.jsx` থেকে data কোথায় পাঠাব? → `AvailablePlayers.jsx` এবং `SelectedPlayers.jsx`
- `SelectedPlayers.jsx`-এ array-এর data কীভাবে show করব? → `map()` ব্যবহার করে।
- `AvailablePlayers.jsx` থেকে `Card.jsx`-এ কী পাঠাব? → `selectedPlayers` এবং `setSelectedPlayers` as props।
- Select button-এ click করলে কী হবে? → Player array-তে add হবে এবং coins deduct হবে।
- Delete icon-এ click করলে কী হবে? → Player remove হবে, coins ফেরত আসবে এবং selected players-এর count কমবে।

</details>






<details>
<summary>📌 Create State and Share Data</summary>

`Players.jsx`

`selectedPlayers` state-টি `Players.jsx`-এ রাখব, কারণ এই parent component থেকে `AvailablePlayers.jsx` এবং `SelectedPlayers.jsx`—দুই জায়গায় data পাঠাতে হবে।

```jsx
const [selectedPlayers, setSelectedPlayers] = useState([]);

{selectedType === "available" ?
    <AvailablePlayers
        players={players}
        coin={coin}
        setCoin={setCoin}
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
    /> :
    <SelectedPlayers selectedPlayers={selectedPlayers} />
}
```

**Explaination :**
- `selectedPlayers` → selected player-দের array রাখবে।
- `setSelectedPlayers` → array update করবে।
- `AvailablePlayers` → player select করার প্রয়োজনীয় data ও setter পাবে।
- `SelectedPlayers` → array পাবে এবং UI-তে player card show করবে।

এটাই **Lifting State Up** — একাধিক child component-এর মধ্যে state share করার জন্য common parent component-এ state রাখা।

</details>








<details>
<summary>📌 Data Flow: Players.jsx → AvailablePlayers.jsx → Card.jsx</summary>

`AvailablePlayers.jsx` থেকে `Card.jsx`-এ `selectedPlayers` এবং `setSelectedPlayers` props হিসেবে পাঠাব।

**AvailablePlayers.jsx**

```jsx
<Card
    player={player}
    coin={coin}
    setCoin={setCoin}
    selectedPlayers={selectedPlayers}
    setSelectedPlayers={setSelectedPlayers}
/>
```

**Card.jsx**

```jsx
const Card = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {
```

**Explaination :** `Players.jsx`-এ state তৈরি হয়েছে। Props-এর মাধ্যমে state ও setter নিচের component-গুলোতে পৌঁছেছে। এখন `Card.jsx` থেকে `setSelectedPlayers()` ব্যবহার করে parent-এর state update করা যাবে।

</details>









<details>
<summary>📌 Update State When Select Button Is Clicked</summary>

`selectedPlayers`

`Card.jsx`-এ select button click করলে `handleChoosePlayers` function trigger হবে। পর্যাপ্ত coins থাকলে player select হবে এবং coins deduct হবে।

```jsx
if (newCoin >= 0) {
    setCoin(newCoin);
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers, player]);
    toast.success(`${player.playerName} is selected.`);
    return;
}
```

**Explaination:**
- `setCoin(newCoin)` → player-এর price অনুযায়ী coins deduct হবে।
- `setIsSelected(true)` → player selected হয়েছে বোঝাবে।
- `setSelectedPlayers([...selectedPlayers, player])` → আগের array-এর সঙ্গে নতুন player add হবে।
- `toast.success()` → success message দেখাবে।

এখন `selectedPlayers` array-তে player object জমা হবে: `[{...}, {...}, {...}]`

এখানে spread operator (`...`) দিয়ে আগের array-এর সব player রাখা হয়েছে, তারপর নতুন `player` যোগ করা হয়েছে।

</details>









<details>
<summary>📌 Use map() to Render Selected Cards</summary>

`selectedPlayers` array-টি `map()` করে প্রতিটি player-এর জন্য reusable `SelectedCard.jsx` component render করব।

```jsx
{
    selectedPlayers.map(selectedPlayer => {
        return <SelectedCard key={selectedPlayer.playerName} selectedPlayer={selectedPlayer} />;
    })
}
```

**Explaination :**
- `map()` → array-এর প্রতিটি player-এর জন্য একবার করে কাজ করবে।
- `selectedPlayer` → প্রতিবার একটি player object পাবে।
- `SelectedCard` → player-এর image, name, batting style ইত্যাদি দেখাবে।
- `key` → React-কে list-এর প্রতিটি item আলাদাভাবে identify করতে সাহায্য করবে।

এভাবে `selectedPlayers` array-তে যতজন player থাকবে, ততগুলো card UI-তে show হবে।

</details>






<details>
<summary>📌 Receive Props and Create Handler</summary>

`SelectedCard.jsx`-এ delete functionality তৈরি করতে প্রয়োজনীয় props receive করব।

```jsx
const SelectedCard = ({ selectedPlayer, selectedPlayers, setSelectedPlayers, coin, setCoin }) => {}
```

- `selectedPlayer` → যে player-এর card-এ delete click করা হয়েছে।
- `selectedPlayers` → সব selected player-এর array।
- `setSelectedPlayers` → array update করবে।
- `coin` → বর্তমানে থাকা coins।
- `setCoin` → coins update করবে।

**Create the handler function:**

```jsx
const handleDeleteSelectedPlayer = () => {
    const filteredPlayers = selectedPlayers.filter(player => player.playerName !== selectedPlayer.playerName);
    setCoin(coin + selectedPlayer.price);
    setSelectedPlayers(filteredPlayers);
};
```

**Explaination :**
1. `filter()` দিয়ে delete করা player-টিকে বাদ দিয়ে নতুন array তৈরি হবে।
2. `setCoin(coin + selectedPlayer.price)` → player-এর price ফেরত যোগ হবে।
3. `setSelectedPlayers(filteredPlayers)` → updated array state-এ set হবে।
4. React re-render করবে, ফলে card UI থেকে চলে যাবে এবং selected players-এর count কমবে।

এখানে `filter()` ব্যবহার করা হয়েছে, কারণ আমাদের player object-গুলো রাখতে হবে; শুধু `true` বা `false` নয়।

</details>







<details>
<summary>📌 Trigger the Handler on Click</summary>

```jsx
<button onClick={handleDeleteSelectedPlayer}>
    <MdDelete />
</button>
```

Delete icon-এ click করলে `handleDeleteSelectedPlayer` function trigger হবে। Player array থেকে remove হবে এবং তার price coins-এর সঙ্গে ফেরত যোগ হবে।

**Note:** `SelectedCard.jsx`-এ `coin` এবং `setCoin` props পাঠাতে হবে।

</details>

#### 📌 Complete Data Flow




<details>
<summary>📌 Player Selection Flow</summary>

`Players.jsx` → `AvailablePlayers.jsx` → `Card.jsx` → `setSelectedPlayers([...selectedPlayers, player])`

এরপর:

`selectedPlayers` → `SelectedPlayers.jsx` → `map()` → `SelectedCard.jsx`

</details>

<details>
<summary>📌 Player Deletion Flow</summary>

`SelectedCard.jsx` → `handleDeleteSelectedPlayer()` → `filter()` → `setSelectedPlayers(filteredPlayers)`

একই সঙ্গে:

`setCoin(coin + selectedPlayer.price)` → Coins ফেরত যোগ হবে।

</details>

<details>
<summary>📌 Final Result</summary>

- Player select করলে selected players-এর array-তে add হবে।
- Coins deduct হবে।
- Selected tab-এ player card show হবে।
- Delete icon-এ click করলে player remove হবে।
- Player-এর price coins-এর সঙ্গে ফেরত যোগ হবে।
- Selected players-এর count update হবে।

**Remember:** Parent component-এ state রাখলে একাধিক child component-এ সেই state share করা যায়। Child component থেকে setter function ব্যবহার করে parent-এর state update করা যায়।

</details>

<br>



































## 👨‍💻 Author

**Bayjid Alom**

> Every small step in coding brings you closer to something extraordinary.