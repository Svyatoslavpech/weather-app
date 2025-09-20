# 🌤️ Simple Weather App

A lightweight, client-side weather application that fetches **current weather** and a **7-day forecast** using the free [Open-Meteo API](https://open-meteo.com/).  
Built for **portfolio showcase**: clean UI, responsive design, automated tests, and simple deployment.

---

## 📦 Overview

This app allows users to:

- Search by **city name** (worldwide coverage via Geocoding API)
- Display **current weather conditions**: temperature, wind speed, weather code
- Show a **7-day forecast** (max/min temperatures, icons)
- Toggle between **Celsius / Fahrenheit**
- View **visual icons** (day & night variants)
- Handle invalid city names with **error messages**

💡 Designed for learning, demos, and portfolio use.

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **APIs**: Open-Meteo Geocoding + Forecast
- **Testing**: Mocha + Chai
- **Assets**: Custom PNG icons (mapped to Open-Meteo weather codes)

---

### 🚀 Installation & Setup

Clone the repository:

  ``` bash
    git clone `https://github.com/YOUR-USERNAME/weather-app.git`
  ```

Open the app in Windows:

  ```bash
    cd weather-app
  ```

  ```bash
    start index.html
  ```

⚠️ No API keys or build process required — runs directly in any modern browser.

---

#### 📖 Usage Guide

1. Open **index.html**.
2. Enter a **city name** (e.g., New York, Paris, Tokyo).
3. (Optional) Toggle **Fahrenheit**.
4. Click **Get Weather**.
5. View the current weather and the 7 day forecast with icons.

```📊 Example Output

Input: **"Chicago"**, **Fahrenheit ON**
Output:

Current Weather for Chicago, US
Temperature: 75.2 °F
Wind Speed: 10 km/h

7-Day Forecast:
2025-06-13
☀️ Max: 80.6 °F, Min: 68.0 °F
...

```

(Sample icons such as ☀️, 🌧️, ❄️ are displayed depending on the weather code.)

Icons update depending on Open-Meteo weather code.

---

##### 🌐 API Reference

This section provides a quick overview of the APIs used in this project.

[Geocoding API](https://geocoding-api.open-meteo.com/v1/search?name=Berlin)  
**URL:** `https://geocoding-api.open-meteo.com/v1/search?name={city}`  
**Description:** Used to search for geographic coordinates by city name.  
**Parameters:**  
**`name`**: The city name (required).

[Forecast API](https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto)

**URL:** `https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&...`  
**Description:** Used to retrieve a weather forecast for specific geographic coordinates.  
**Parameters:**  
**`latitude`**: The latitude (required).  
**`longitude`**: The longitude (required).  
**`...`**: Other parameters to customize the forecast.

---

###### ✔️ Key Features

**Free to use:** All APIs are free.
**No authentication required:** No API key or token is needed.

🧪 Testing

Automated unit tests via **Mocha** + **Chai** (test.html):

✅ **Empty input validation**

✅ **Invalid city handling**

✅ **City encoding (São Paulo)**

✅ **Case-insensitive search**

✅ **DOM rendering check**

✅ **Weather icon mapping (getIcon())**

Run tests:
Open **test.html** in browser → view console results.

###### 🧩 Project Structure  
  
  .  
├── public/  
│   ├── icons/            # Weather icons (day/night, mapped to codes)  
│   └── test-weather.js   # Mocha/Chai tests  
├── index.html            # Main UI  
├── style.css             # Styling  
├── script.js             # Weather logic  
├── test.html             # Test runner  
├── test.js               # Unit tests  
├── .gitignore  
└── README.  
  
  ---


🧭 **Roadmap / Future Improvements**

📍 **Auto-detect location via Geolocation API**

🌍 **Multi-language support**

📊 **Weather trends & historical charts**

🌓 **Dark mode toggle**

💾 **Cache last searched city**

⚙️ **Modular JS structure (ES Modules)**

🙌 **Contributing**

Pull requests are welcome!
For significant changes, open an issue first to discuss the proposal.

📜 **License**

Distributed under the **MIT License**
<https://choosealicense.com/licenses/mit/>

---
