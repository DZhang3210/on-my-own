const { default: mongoose, Schema, model, models } = require("mongoose");

const appointmentSchema = new Schema({
    name: {type:String, required: true},
    title: {type:String, required: true},
    email: {type:String, required: true},
    size: {type: Number, required: true},
    location: {type:String, required: true},
    description: {type:String, required: true},
    date: {type: Date, required: true},
}, {timestamps: true});

export const Appointment = models?.Appointment || model('Appointment', appointmentSchema);