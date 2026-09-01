# Telehealth Monitoring System

A **telehealth monitoring system** that enables remote monitoring of patient vital signs using an **ESP32 microcontroller** and connected sensors. The system provides a React-based web interface for viewing and monitoring collected health data in real time.

## Features

* 📊 **Vitals Dashboard** — Displays monitored health data in a simple UI.
* ❤️ **Heart Rate Monitoring** — Tracks the patient's heart rate.
* 🌡️ **Temperature Monitoring** — Measures body temperature.
* 🫁 **Oxygen Monitoring** — Monitors blood oxygen saturation (SpO₂).
* 🚶 **Motion Detection** — Detects patient movement/activity.
* 📡 **Remote ESP32 Connection** — Communicates with the ESP32 and connected sensors remotely.
* ⚛️ **React UI** — Responsive web interface for healthcare monitoring.

## System Overview

The ESP32 collects data from the connected sensors and transmits the readings to the telehealth application. The React dashboard then presents the collected vitals in an easy-to-understand interface.

<img width="944" height="418" alt="Screenshot 2024-06-03 155141" src="https://github.com/user-attachments/assets/79c9a8e9-7433-48b6-8fc6-9cebd4d934b6" />


![Telehealth Monitoring System](./screenshots/dashboard.png)

## Technologies

* **Frontend:** React
* **Microcontroller:** ESP32
* **Sensors:** Heart Rate, Temperature, SpO₂, Motion
* **Communication:** Remote ESP32 communication
* **Dashboard:** Real-time vitals monitoring

## Project Status

🚧 **In Development** — Additional monitoring, data visualization, and system features are being developed.


## Available Scripts


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about 

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.




