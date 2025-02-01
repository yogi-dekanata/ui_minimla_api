import { useState } from "react";
import axios from "axios";

export default function PenerimaanBarang() {
  const [formData, setFormData] = useState({
    whs_idf: 0,
    trx_in_date: new Date().toISOString().split("T")[0],
    trx_in_supp_idf: 0,
    trx_in_notes: "",
    details: [{ trx_in_d_product_idf: 0, trx_in_d_qty_dus: 0, trx_in_d_qty_pcs: 0 }],
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const handleDetailChange = (index, e) => {
    const { name, value, type } = e.target;
    const newDetails = [...formData.details];
    newDetails[index][name] = type === "number" ? Number(value) : value;
    setFormData({ ...formData, details: newDetails });
  };

  const addDetail = () => {
    setFormData({
      ...formData,
      details: [
        ...formData.details,
        { trx_in_d_product_idf: 0, trx_in_d_qty_dus: 0, trx_in_d_qty_pcs: 0 },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/penerimaan", formData);
      // Ambil "TrxInNo" dari response sukses
      const { TrxInNo } = response.data;
      alert(`Penerimaan Barang Berhasil! Nomor Transaksi: ${TrxInNo}`);
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.status) {
        alert(`Error: ${error.response.status}`);
      } else {
        alert("Error submitting data");
      }
      console.error("Error submitting data", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Penerimaan Barang</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Warehouse ID
            </label>
            <input
              type="number"
              name="whs_idf"
              value={formData.whs_idf}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tanggal Penerimaan
            </label>
            <input
              type="date"
              name="trx_in_date"
              value={formData.trx_in_date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Supplier ID
            </label>
            <input
              type="number"
              name="trx_in_supp_idf"
              value={formData.trx_in_supp_idf}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Catatan
            </label>
            <textarea
              name="trx_in_notes"
              value={formData.trx_in_notes}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-4">Detail Barang</h3>
          {formData.details.map((detail, index) => (
            <div key={index} className="mb-4 p-4 border border-gray-200 rounded">
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product ID
                </label>
                <input
                  type="number"
                  name="trx_in_d_product_idf"
                  value={detail.trx_in_d_product_idf}
                  onChange={(e) => handleDetailChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Jumlah (Dus)
                </label>
                <input
                  type="number"
                  name="trx_in_d_qty_dus"
                  value={detail.trx_in_d_qty_dus}
                  onChange={(e) => handleDetailChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Jumlah (Pcs)
                </label>
                <input
                  type="number"
                  name="trx_in_d_qty_pcs"
                  value={detail.trx_in_d_qty_pcs}
                  onChange={(e) => handleDetailChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={addDetail}
            >
              Tambah Detail
            </button>
            <button
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
