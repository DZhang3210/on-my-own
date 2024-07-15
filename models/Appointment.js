const { default: mongoose } = require("mongoose");

const appointmentSchema = new Schema({
    name: {type:String, required: true},
    title: {type:String, required: true},
    email: {type:String, required: true},
    size: {type: Number, required: true},
    location: {type:String, required: true},
    time: {type:String, required: true},
    date: {type: Date, required: true},
}, {timestamps: true});

export const AppointmentMode = models?.Appointment || model('Appointment', appointmentSchema);