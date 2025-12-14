import express from 'express'
import { loginDoctor, registerDoctor, appointmentsDoctor, appointmentCancel, appointmentComplete, deleteAppointment, doctorDashboard, doctorProfile, updateDoctorProfile, doctorList } from '../controllers/doctorController.js'
import authDoctor from '../middlewares/authDoctor.js'
import upload from '../middlewares/multer.js'

const doctorRouter = express.Router()

doctorRouter.post('/register', upload.single('image'), registerDoctor)
doctorRouter.post('/login', loginDoctor)
doctorRouter.post('/list', doctorList)
doctorRouter.get('/appointments', authDoctor, appointmentsDoctor)
doctorRouter.post('/complete-appointment', authDoctor, appointmentComplete)
doctorRouter.post('/cancel-appointment', authDoctor, appointmentCancel)
doctorRouter.post('/delete-appointment', authDoctor, deleteAppointment)
doctorRouter.get('/dashboard', authDoctor, doctorDashboard)
doctorRouter.get('/profile', authDoctor, doctorProfile)
doctorRouter.post('/update-profile', upload.single('image'), authDoctor, updateDoctorProfile)

export default doctorRouter

