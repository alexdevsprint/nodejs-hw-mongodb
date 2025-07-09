import { model, Schema } from 'mongoose';

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      enum: ['male', 'female', 'other'],
    },
    isFavourite: {
      type: Boolean,
      required: true,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);


export const ContactsCollection = model('contacts', contactsSchema);