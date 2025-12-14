import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true },
    address: { type: Object, required: true },
    date: { type: Number, required: true },
    slots_booked: { type: Object, default: {} },
    workingDays: {
        type: [String],
        default: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    },
    timeSlots: {
        startTime: { type: String, default: '09:00' },
        endTime: { type: String, default: '17:00' },
        slotDuration: { type: Number, default: 30 } // minutes
    },
    breakTime: {
        start: { type: String, default: '' },
        end: { type: String, default: '' }
    }
}, { minimize: false, strict: false })


const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema)

export default doctorModel