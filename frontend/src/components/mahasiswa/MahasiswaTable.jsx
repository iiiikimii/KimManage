import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const MahasiswaTable = () => {
  const [mahasiswa, setMahasiswa] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/mahasiswa").then(res => {
      setMahasiswa(res.data);
    });
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Hapus Data?",
      text: "Data mahasiswa akan dihapus secara permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:8000/mahasiswa/${id}`);

        // update state supaya tidak reload
        setMahasiswa(mahasiswa.filter(m => m.id !== id));

        Swal.fire({
          title: "Berhasil!",
          text: "Data mahasiswa telah dihapus.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="p-2">

      {/* Title */}
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Data Mahasiswa
      </motion.h2>

      {/* Add Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6"
      >
        <Link
          to="/add"
          className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          + Tambah Mahasiswa
        </Link>
      </motion.div>

      {/* Table */}
      <motion.div
        className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <table className="w-full text-left">
          <thead className="bg-blue-50">
            <tr>
              <th className="p-4 text-gray-700 font-semibold">NPM</th>
              <th className="p-4 text-gray-700 font-semibold">Nama</th>
              <th className="p-4 text-gray-700 font-semibold">Kelas</th>
              <th className="p-4 text-gray-700 font-semibold">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {mahasiswa.length > 0 ? (
              mahasiswa.map((mhs, index) => (
                <motion.tr
                  key={mhs.id}
                  className="border-b hover:bg-gray-50 transition"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <td className="p-4">{mhs.NPM}</td>
                  <td className="p-4">{mhs.Nama}</td>
                  <td className="p-4">{mhs.Kelas}</td>

                  <td className="p-4 flex gap-3">
                    <Link
                      to={`/edit/${mhs.id}`}
                      className="bg-yellow-400 text-white px-4 py-1 rounded-xl shadow hover:bg-yellow-500 transition"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(mhs.id)}
                      className="bg-red-500 text-white px-4 py-1 rounded-xl shadow hover:bg-red-600 transition"
                    >
                      Hapus
                    </button>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td className="p-6 text-center text-gray-500" colSpan="4">
                  Tidak ada data mahasiswa.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </motion.div>

    </div>
  );
};

export default MahasiswaTable;
