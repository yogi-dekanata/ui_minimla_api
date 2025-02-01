import { useEffect, useState } from "react";
import axios from "axios";

export default function StockList() {
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/stocks");
        setStocks(response.data.data);
      } catch (err) {
        setError("Gagal mengambil data stok.");
      }
    };
    fetchStocks();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg mt-5 w-full md:w-3/4 lg:w-1/2">
      <h2 className="text-2xl font-bold mb-4">List Stok</h2>
      {error && <p className="text-red-500">{error}</p>}
      <table className="table table-bordered mt-4">
        <thead className="bg-gray-200">
          <tr>
            <th>Gudang</th>
            <th>Produk</th>
            <th>Qty (Dus)</th>
            <th>Qty (Pcs)</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((item, index) => (
            <tr key={index}>
              <td>{item.gudang}</td>
              <td>{item.produk}</td>
              <td>{item.qty_dus}</td>
              <td>{item.qty_pcs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
