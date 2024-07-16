'use client'
import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import BookingForm from './BookingForm'

const BookingButton = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <AlertDialog open = {open} onOpenChange={setOpen}>
        <AlertDialogTrigger className='w-full bg-red-300 rounded-lg py-2 border-red-300 transition hover:border-2 hover:bg-white box-border'>Submit</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>
            Header
          </AlertDialogTitle>
          <BookingForm/>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default BookingButton
