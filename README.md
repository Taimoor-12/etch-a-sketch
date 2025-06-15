# 🎨 Etch-a-Sketch

A simple and interactive **browser-based Etch-a-Sketch** app built with HTML, CSS, and JavaScript. Inspired by the classic drawing toy, this app lets you "draw" on a grid by hovering over the squares — with colors that get progressively more opaque each time you revisit a square.

---

## ✨ Features

- 📦 **Dynamic Grid Creation** — Change grid size up to 100x100 squares.
- 🌈 **Random Colors** — Each cell gets a random RGB color on hover.
- 🌡️ **Progressive Shading** — Repeated hovers increase opacity until fully visible.

---

## 🧠 How It Works

- A grid of square `<div>`s is generated based on user input.
- Hovering over a square triggers an event that applies a random RGBA color.
- If a square already has color, its opacity increases by 0.1 per hover (up to 1.0).

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/Taimoor-12/etch-a-sketch.git
cd etch-a-sketch
