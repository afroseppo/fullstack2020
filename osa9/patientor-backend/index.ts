import express from 'express';
import cors = require('cors');
import diagnosisService from './services/diagnosisService';
import patientService from './services/patientService';
import toNewPatientEntry from './utils';

const app = express();
app.use(express.json());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
    res.send('pinged');
});

app.get('/api/patients', (_req, res) => {
    res.status(200).send(patientService.getPatients());
});

app.get('/api/patients/:id', (req, res) => {
    const patient = patientService.getPatient(req.params.id);

    if (!patient) {
        res.status(404);
    } else {
        res.status(200).send(patient);
    }
});

app.get('/api/diagnoses', (_req, res) => {
    res.status(200).send(diagnosisService.getDiagnoses());
});

app.post('/api/patients', (req, res) => {
    try {
        const newPatientEntry = toNewPatientEntry(req.body);
        
        const addedPatient = patientService.addPatient(newPatientEntry);
        res.json(addedPatient);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});