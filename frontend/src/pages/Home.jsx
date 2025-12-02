import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mt-20 flex flex-col items-center text-center px-6">

      {/* Title Section */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sistem CRUD Data Mahasiswa
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-gray-600 mt-4 text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Kelola data mahasiswa dengan mudah, cepat, dan modern.
        Gunakan menu di atas untuk mulai mengelola data.
      </motion.p>

      {/* Feature Card */}
      <motion.div
        className="mt-12 bg-white shadow-lg rounded-2xl p-8 max-w-4xl w-full border border-gray-100"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-2xl font-semibold text-blue-600">
          Fitur Utama Aplikasi
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-gray-800 text-lg">Tambah Data</h4>
            <p className="text-gray-600 mt-2">
              Tambahkan informasi mahasiswa secara instan dan aman.
            </p>
          </div>

          <div className="p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-gray-800 text-lg">Edit Data</h4>
            <p className="text-gray-600 mt-2">
              Perbarui data mahasiswa dengan cepat dan efisien.
            </p>
          </div>

          <div className="p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-gray-800 text-lg">Hapus Data</h4>
            <p className="text-gray-600 mt-2">
              Menghapus data mahasiswa hanya dengan satu klik.
            </p>
          </div>

          <div className="p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="font-semibold text-gray-800 text-lg">Lihat Data</h4>
            <p className="text-gray-600 mt-2">
              Lihat daftar mahasiswa secara lengkap dan terstruktur.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Statistics Section */}
      <motion.div
        className="mt-16 max-w-4xl bg-white shadow-md p-10 rounded-2xl border border-gray-100 w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800">Statistik Sistem</h3>
        <p className="text-gray-600 mt-2">
          Data berikut hanyalah contoh dummy untuk ilustrasi tampilan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-blue-100 rounded-xl text-center shadow-sm hover:shadow-md">
            <h4 className="text-3xl font-bold text-blue-600">320+</h4>
            <p className="text-gray-700 mt-2">Mahasiswa terdaftar</p>
          </div>

          <div className="p-6 bg-blue-100 rounded-xl text-center shadow-sm hover:shadow-md">
            <h4 className="text-3xl font-bold text-blue-600">12</h4>
            <p className="text-gray-700 mt-2">Kelas aktif</p>
          </div>

          <div className="p-6 bg-blue-100 rounded-xl text-center shadow-sm hover:shadow-md">
            <h4 className="text-3xl font-bold text-blue-600">98%</h4>
            <p className="text-gray-700 mt-2">Akurasi data</p>
          </div>
        </div>
      </motion.div>

      {/* Call To Action */}
      <motion.div
        className="mt-20 p-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl text-white max-w-4xl shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold">Siap Mengelola Data Anda?</h3>
        <p className="mt-2 mb-4 text-lg opacity-90">
          Mulai gunakan sistem CRUD modern dengan tampilan profesional.
        </p>

        <Link 
        to={`/mahasiswa/`}
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow hover:bg-gray-100 transition">
          Mulai Kelola Data
        </Link>
      </motion.div>

      {/* Floating Animation
      <motion.div
        className="mt-14"
        initial={{ y: 0 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-xl blur-[1px]" />
      </motion.div> */}
    </div>
  );
}
