const { default: mongoose, Schema, model, models } = require("mongoose");

const appointmentSchema = new Schema({
    title: {type:String, required: true},
    name: {type:String, required: true},
    size: {type: Number, required: true},
    description: {type:String, required: true},
    location: {type:String, required: true},
    date: {type: Date, required: true},
    email: {type:String, required: true},
}, {timestamps: true});

export const Appointment = models?.Appointment || model('Appointment', appointmentSchema);