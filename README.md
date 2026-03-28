# 🏎️ F1 Dashboard

A modern, dynamic Formula 1 dashboard built using **HTML, CSS, and JavaScript**, providing real-time race insights, standings, and live countdowns.

---

## 🚀 Features

* ⏱️ **Live Countdown Timer**

  * Shows time remaining for the **next upcoming event** (FP, Qualifying, Race, etc.)

* 🏁 **Smart Event Detection**

  * Automatically detects the **next session** instead of just the race

* 🧑‍✈️ **Driver Standings**

  * Displays current season standings with:

    * Position
    * Driver name
    * Team
    * Points

* 🏎️ **Constructor Standings**

  * Team rankings with points

* 🏆 **Top 3 Highlight**

  * Gold 🥇, Silver 🥈, Bronze 🥉 styling for top drivers

* 🌑 **Dark F1-Inspired UI**

  * Clean, modern interface

---

## 🧠 Tech Stack

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**
* **Jolpica F1 API (Ergast replacement)**

---

## 📡 APIs Used

* Race Schedule
  ```https://api.jolpi.ca/ergast/f1/current.json```

* Driver Standings
  ```https://api.jolpi.ca/ergast/f1/current/driverStandings.json```

* Constructor Standings
  ```https://api.jolpi.ca/ergast/f1/current/constructorStandings.json```

---

## ⚙️ How It Works

1. Fetches current season data from F1 API
2. Extracts next race and all session events
3. Converts sessions into a unified event list
4. Identifies the **next upcoming event**
5. Displays a live countdown using `setInterval()`
6. Dynamically renders standings into tables

---

## 📁 Project Structure

```
f1-dashboard/
│
├── dashboard.html
├── style.css
├── script.js
```

---

## 🛠️ Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/tejasvmaske-lab/f1-dashboard.git
```

2. Open the project folder

3. Run using Live Server (recommended)

---

## 💡 Future Improvements

* 📊 Charts for points progression
* 🌍 Circuit maps & location visuals
* 🏁 Race results & lap data
* 📱 Fully responsive mobile UI
* 🌐 Multi-season support
* 🖼️ Driver Images

---

## 🙌 Acknowledgements

* Jolpica API (Ergast replacement)
* Formula 1 data providers

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!