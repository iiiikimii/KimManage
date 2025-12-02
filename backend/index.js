const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// KONEKSI DATABASE
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_mahasiswa"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

// ======================
// GET semua mahasiswa
// ======================
app.get("/mahasiswa", (req, res) => {
  db.query("SELECT * FROM mahasiswa", (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

// ======================
// GET mahasiswa by ID
// ======================
app.get("/mahasiswa/:id", (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM mahasiswa WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).send(err);

    if (result.length === 0) {
      return res.status(404).send({ message: "Mahasiswa tidak ditemukan" });
    }

    res.send(result[0]); // Mengirim hanya satu data
  });
});

// ======================
// CREATE mahasiswa
// ======================
app.post("/mahasiswa", (req, res) => {
  const { NPM, Nama, Kelas } = req.body;

  db.query(
    "INSERT INTO mahasiswa (NPM, Nama, Kelas) VALUES (?, ?, ?)",
    [NPM, Nama, Kelas],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send({ message: "Mahasiswa berhasil ditambahkan!" });
    }
  );
});

// ======================
// UPDATE mahasiswa
// ======================
app.put("/mahasiswa/:id", (req, res) => {
  const { id } = req.params;
  const { NPM, Nama, Kelas } = req.body;

  db.query(
    "UPDATE mahasiswa SET NPM=?, Nama=?, Kelas=? WHERE id=?",
    [NPM, Nama, Kelas, id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send({ message: "Mahasiswa berhasil diperbarui!" });
    }
  );
});

// ======================
// DELETE mahasiswa
// ======================
app.delete("/mahasiswa/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM mahasiswa WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "Mahasiswa berhasil dihapus!" });
  });
});

// ======================
// SERVER
// ======================
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
