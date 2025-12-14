import doctorModel from "../models/doctorModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";

const changeAvailablity = async (req, res) => {
    try {
        const { docId } = req.body;

        const docData = await doctorModel.findById(docId);
        await doctorModel.findByIdAndUpdate(docId, { available: !docData.available });
        res.json({ success: true, message: "Availablity Changed" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const doctorList = async (req, res) => {
    try {

        const doctors = await doctorModel.find({}).select(['-password', '-email']);
        res.json({ success: true, doctors });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// API for doctor Login 
const loginDoctor = async (req, res) => {

    try {

        const { email, password } = req.body
        const doctor = await doctorModel.findOne({ email })

        if (!doctor) {
            return res.json({ success: false, message: "Invalid credentials" })
        }

        const isMatch = await bcrypt.compare(password, doctor.password)

        if (isMatch) {
            const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials" })
        }


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API for doctor Registration
const registerDoctor = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        console.log('Request file:', req.file);

        const { name, email, password, speciality, degree, experience, about, fees, address, workingDays, timeSlots, breakTime } = req.body

        // Check if all required fields are provided
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            console.log('Missing fields:', { name, email, password, speciality, degree, experience, about, fees, address });
            return res.json({ success: false, message: "All fields are required" })
        }

        // Check if doctor already exists
        const existingDoctor = await doctorModel.findOne({ email })
        if (existingDoctor) {
            return res.json({ success: false, message: "Doctor already exists" })
        }

        // Validate password length
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters" })
        }

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Handle image upload
        const imageFile = req.file
        let imageUrl = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect fill='%236366f1' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='80' fill='white'%3E" + name.charAt(0).toUpperCase() + "%3C/text%3E%3C/svg%3E"

        if (imageFile) {
            // Use local file path
            imageUrl = `http://localhost:4000/uploads/${imageFile.filename}`
        }

        // Create new doctor
        const doctorData = {
            name,
            email,
            password: hashedPassword,
            image: imageUrl,
            speciality,
            degree,
            experience,
            about,
            fees: Number(fees),
            address: typeof address === 'string' ? JSON.parse(address) : address,
            date: Date.now(),
            available: true
        }

        // Add schedule if provided
        if (workingDays) {
            doctorData.workingDays = typeof workingDays === 'string' ? JSON.parse(workingDays) : workingDays
        }
        if (timeSlots) {
            doctorData.timeSlots = typeof timeSlots === 'string' ? JSON.parse(timeSlots) : timeSlots
        }
        if (breakTime) {
            doctorData.breakTime = typeof breakTime === 'string' ? JSON.parse(breakTime) : breakTime
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        const token = jwt.sign({ id: newDoctor._id }, process.env.JWT_SECRET)
        res.json({ success: true, token, message: "Doctor registered successfully" })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get doctor appointments for doctor panel
const appointmentsDoctor = async (req, res) => {
    try {

        const { docId } = req.body
        const appointments = await appointmentModel.find({ docId })

        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to mark appointment completed for doctor panel 
const appointmentComplete = async (req, res) => {
    try {

        const { docId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

        if (appointmentData && appointmentData.docId === docId) {

            await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })
            res.json({ success: true, message: "Appointment Completed" })

        } else {
            res.json({ success: false, message: "Mark Failed" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to cancel appointment for doctor panel 
const appointmentCancel = async (req, res) => {
    try {

        const { docId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

        if (appointmentData && appointmentData.docId === docId) {

            await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
            res.json({ success: true, message: "Appointment Cancelled" })

        } else {
            res.json({ success: false, message: "Cancellation Failed" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to delete appointment for doctor panel 
const deleteAppointment = async (req, res) => {
    try {

        const { docId, appointmentId } = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

        if (appointmentData && appointmentData.docId === docId) {

            await appointmentModel.findByIdAndDelete(appointmentId)
            res.json({ success: true, message: "Appointment Deleted" })

        } else {
            res.json({ success: false, message: "Delete Failed" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get dashboard data for doctor panel 
const doctorDashboard = async (req, res) => {
    try {

        const { docId } = req.body

        const appointments = await appointmentModel.find({ docId })

        let earnings = 0

        appointments.map((item) => {
            if (item.isCompleted || item.payment) {
                earnings += item.amount
            }
        })

        let patients = []

        appointments.map((item) => {
            if (!patients.includes(item.userId)) {
                patients.push(item.userId)
            }
        })

        const dashData = {
            earnings,
            appointments: appointments.length,
            patients: patients.length,
            latestAppointments: appointments.reverse().slice(0, 5)
        }

        res.json({ success: true, dashData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get doctor profile for Doctor Panel 
const doctorProfile = async (req, res) => {
    try {

        const { docId } = req.body
        const profileData = await doctorModel.findById(docId).select('-password')

        res.json({ success: true, profileData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to update doctor profile data from Doctor Panel 
const updateDoctorProfile = async (req, res) => {
    try {

        const { docId, fees, address, available, workingDays, timeSlots, breakTime } = req.body
        const imageFile = req.file

        const updateData = { fees, available }

        // Parse address if it's a string
        if (address) {
            updateData.address = typeof address === 'string' ? JSON.parse(address) : address
        }

        // Add schedule updates if provided
        if (workingDays) {
            updateData.workingDays = typeof workingDays === 'string' ? JSON.parse(workingDays) : workingDays
        }
        if (timeSlots) {
            updateData.timeSlots = typeof timeSlots === 'string' ? JSON.parse(timeSlots) : timeSlots
        }
        if (breakTime) {
            updateData.breakTime = typeof breakTime === 'string' ? JSON.parse(breakTime) : breakTime
        }

        // Upload image to local storage if provided
        if (imageFile) {
            // Use local file path
            updateData.image = `http://localhost:4000/uploads/${imageFile.filename}`
        }

        console.log('Update data:', updateData)
        await doctorModel.findByIdAndUpdate(docId, updateData)

        // Fetch and return updated profile data
        const updatedProfile = await doctorModel.findById(docId).select('-password')
        console.log('Updated profile:', updatedProfile)

        res.json({ success: true, message: "Profile Updated", profileData: updatedProfile })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export {
    changeAvailablity,
    doctorList,
    loginDoctor,
    registerDoctor,
    appointmentsDoctor,
    appointmentCancel,
    appointmentComplete,
    deleteAppointment,
    doctorDashboard,
    doctorProfile,
    updateDoctorProfile
}
