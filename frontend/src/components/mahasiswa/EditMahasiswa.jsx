import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const EditMahasiswa = () => {
  const [form, setForm] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  // Ambil data berdasarkan ID
  useEffect(() => {
    axios
      .get(`http://localhost:8000/mahasiswa/${id}`)
      .then(res => {
        setForm(res.data);
      })
      .catch(() => {
        Swal.fire("Gagal!", "Data tidak ditemukan!", "error");
      });
  }, [id]);

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8000/mahasiswa/${id}`, form);

      Swal.fire({
        title: "Berhasil!",
        text: "Data mahasiswa berhasil diupdate.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      setTimeout(() => navigate("/mahasiswa"), 1500);

    } catch (error) {
      Swal.fire("Gagal!", "Terjadi kesalahan saat update.", "error");
    }
  };

  return (
    <motion.div
      className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-5">
        Edit Data Mahasiswa
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Input NPM */}
        <div>
          <label className="text-gray-700 font-medium">NPM</label>
          <input
            name="NPM"
            value={form.NPM || ""}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Input Nama */}
        <div>
          <label className="text-gray-700 font-medium">Nama</label>
          <input
            name="Nama"
            value={form.Nama || ""}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Input Kelas */}
        <div>
          <label className="text-gray-700 font-medium">Kelas</label>
          <input
            name="Kelas"
            value={form.Kelas || ""}
            onChange={handleChange}
            className="border p-3 w-full rounded-lg mt-1 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Button Submit */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-yellow-500 text-white py-2 rounded-xl shadow hover:bg-yellow-600 transition"
        >
          Update Data
        </motion.button>
      </form>
    </motion.div>
  );
};

export default EditMahasiswa;
