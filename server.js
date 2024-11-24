const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Replace with your MongoDB Atlas connection string
const uri = 'mongodb+srv://divyabonda462:Divya$462@cluster0.cx34y.mongodb.net/hospitalDB?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const patientSchema = new mongoose.Schema({
    Date: String,
    'patients registered': Number,
    Treated: Number,
    Operation: Number,
    Discharge: Number,
    Recover: Number,
    id: String
});

const Patient = mongoose.model('Patient', patientSchema);

app.get('/AllDates', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
