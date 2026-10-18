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


#### 🔄 State Management & Toggle Functionality (Available / Selected)

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









## 👨‍💻 Author

**Bayjid Alom**

> Every small step in coding brings you closer to something extraordinary.