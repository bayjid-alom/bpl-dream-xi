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

















## 👨‍💻 Author

**Bayjid Alom**

> Every small step in coding brings you closer to something extraordinary.