import { useState } from "react";
import {
  FaBars,
  FaMoneyBillWave,
  FaBox
} from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdInventory } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import PenerimaanForm from "./PenerimaanForm";
import CekPenerimaanBarang from "./CekPenerimaanForm";
import PengeluaranForm from "./PengeluaranForm";
import CekPengeluaranBarang from "./CekPengeluaranForm";
import StockList from "./StockList";

export default function Dashboard() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [activeView, setActiveView] = useState("dashboard");

  const sidebarWidth = isSidebarExpanded ? '25%' : '10%';
  const mainContentMargin = isSidebarExpanded ? '25%' : '10%';

  const navigateTo = (view) => setActiveView(view);
  const toggleSidebar = () => setIsSidebarExpanded(!isSidebarExpanded);

  const menuItems = [
    {
      id: "penerimaan",
      icon: <MdInventory className="me-2" />,
      label: "Penerimaan Barang"
    },
    {
      id: "cekPenerimaan",
      icon: <IoMdCheckmarkCircleOutline className="me-2" />,
      label: "Cek Penerimaan Barang"
    },
    {
      id: "pengeluaran",
      icon: <FaMoneyBillWave className="me-2" />,
      label: "Pengeluaran Barang"
    },
    {
      id: "cekPengeluaran",
      icon: <IoMdCheckmarkCircleOutline className="me-2" />,
      label: "Cek Pengeluaran Barang"
    },
    {
      id: "stok",
      icon: <FaBox className="me-2" />,
      label: "List Stok"
    }
  ];

  return (
    <div className="d-flex flex-column flex-md-row vh-100 bg-light">
      {/* Navigation Panel */}
      <div
        className={`bg-dark text-white p-3 d-flex flex-column position-fixed h-100`}
        style={{
          width: sidebarWidth,
          transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        }}
      >
        <button
          onClick={toggleSidebar}
          className="btn btn-outline-light mb-3"
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>

        <nav className="nav flex-column gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              className={`btn nav-link text-white d-flex align-items-center
                ${activeView === item.id ? "active bg-secondary" : ""}`}
            >
              {item.icon}
              {isSidebarExpanded && item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div
        className="flex-grow-1 p-4 overflow-auto"
        style={{
          marginLeft: mainContentMargin,
          transition: "margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        }}
      >
        {activeView === "dashboard" && (
          <h1 className="fw-bold mb-4">Dashboard Overview</h1>
        )}

        {activeView === "penerimaan" && (
          <div className="animated-fade-in">
            <h1 className="fw-bold mb-4">Penerimaan Barang</h1>
            <PenerimaanForm />
          </div>
        )}

        {activeView === "cekPenerimaan" && (
          <div className="animated-fade-in">
            <h1 className="fw-bold mb-4">Cek Penerimaan Barang</h1>
            <CekPenerimaanBarang />
          </div>
        )}

        {activeView === "pengeluaran" && (
          <div className="animated-fade-in">
            <h1 className="fw-bold mb-4">Pengeluaran Barang</h1>
            <PengeluaranForm />
          </div>
        )}

        {activeView === "cekPengeluaran" && (
          <div className="animated-fade-in">
            <h1 className="fw-bold mb-4">Cek Pengeluaran Barang</h1>
            <CekPengeluaranBarang />
          </div>
        )}

        {activeView === "stok" && (
          <div className="animated-fade-in">
            <h1 className="fw-bold mb-4">Manajemen Stok</h1>
            <StockList />
          </div>
        )}
      </div>
    </div>
  );
}