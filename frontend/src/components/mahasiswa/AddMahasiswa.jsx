import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const AddMahasiswa = () => {
  const [form, setForm] = useState({
    NPM: "",
    Nama: "",
    Kelas: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!form.NPM || !form.Nama || !form.Kelas) {
      Swal.fire({
        title: "Oops!",
        text: "Semua field wajib diisi!",
        icon: "warning",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    try {
      await axios.post("http://localhost:8000/mahasiswa", form);

      Swal.fire({
        title: "Berhasil!",
        text: "Data mahasiswa berhasil ditambahkan.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => navigate("/mahasiswa"), 1500);
    } catch (error) {
      Swal.fire({
        title: "Gagal!",
        text: "Terjadi kesalahan saat menambahkan data.",
        icon: "error",
      });
    }
  };

  return (
    <motion.div
      className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-5">
        Tambah Mahasiswa
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Input NPM */}
        <div>
          <label className="text-gray-700 font-medium">NPM</label>
          <input
            name="NPM"
            placeholder="Masukkan NPM"
            value={form.NPM}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Input Nama */}
        <div>
          <label className="text-gray-700 font-medium">Nama</label>
          <input
            name="Nama"
            placeholder="Masukkan Nama"
            value={form.Nama}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Input Kelas */}
        <div>
          <label className="text-gray-700 font-medium">Kelas</label>
          <input
            name="Kelas"
            placeholder="Masukkan Kelas"
            value={form.Kelas}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-blue-600 text-white py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          Simpan
        </motion.button>

      </form>
    </motion.div>
  );
};

export default AddMahasiswa;
