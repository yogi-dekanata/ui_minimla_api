# README

## 📌 Project Overview

This application is a React.js-based platform used to manage stock data, receipts, and expenditures, communicating with a backend via REST API.

## 🚀 Features

- Display stock list
- Add expenditure data
- Add receipt data
- Check expenditure details by transaction number
- Check receipt details by transaction number
- Dynamic navigation in the dashboard

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Backend API:** REST API (using Axios for HTTP requests)
- **Styling:** CSS

## 🔧 Installation & Setup

1. **Clone this repository**
   ```bash
   git clone https://github.com/yogi-dekanata/ui_minimla_api
   cd ui_minimla_api
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the application**
   ```bash
   npm start
   ```

## 📡 API Endpoints

This application communicates with the backend via the following endpoints:

### 📌 Stock Management

- **Get all stocks:** `GET http://localhost:8080/stocks`

### 📌 Expenditure

- **Add Expenditure:** `POST http://localhost:8080/pengeluaran`
- **Check Expenditure:** `GET http://localhost:8080/pengeluaran/{trxOutNo}`

### 📌 Receipt

- **Add Receipt:** `POST http://localhost:8080/penerimaan`
- **Check Receipt:** `GET http://localhost:8080/penerimaan/{trxInNo}`

## 📜 File Structure

```
/src
│-- App.js           # React entry point
│-- index.js         # Root file
│-- Dashboard.js     # Main dashboard component
│-- StockList.js     # Displays stock list
│-- PengeluaranForm.js  # Expenditure form
│-- PenerimaanForm.js   # Receipt form
│-- CekPengeluaranForm.js  # Check expenditure by transaction number
│-- CekPenerimaanForm.js   # Check receipt by transaction number
│-- App.css          # Styling
```


## 🤝 Contributing

1. Fork this repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Added feature X'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a pull request

## 📄 License

MIT License - Feel free to use it as needed!

