import { useState } from "react";
import axios from "axios";

export default function CekPengeluaranBarang() {
  const [trxOutNo, setTrxOutNo] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    try {
      const response = await axios.get(`http://localhost:8080/pengeluaran/${trxOutNo}`);
      setResult(response.data);
    } catch (err) {
      setError("Data tidak ditemukan atau terjadi kesalahan.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Cek Pengeluaran Barang</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="trx_out_no" className="block text-sm font-medium text-gray-700 mb-2">
              Nomor Transaksi
            </label>
            <input
              type="text"
              id="trx_out_no"
              name="trx_out_no"
              value={trxOutNo}
              onChange={(e) => setTrxOutNo(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
          >
            Submit
          </button>
        </form>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {result && (
          <div className="mt-4 p-4 bg-gray-100 border rounded">
            <pre className="text-sm text-gray-700">{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
