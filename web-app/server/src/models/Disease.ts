import mongoose, { Schema, Document } from 'mongoose';

export interface IDisease extends Document {
  name: string;
  description: string;
  symptoms: string[];
  treatment: string[];
  prevention: string[];
  affectedPlants: string[];
  severity: string;
  imageUrls?: string[];
  createdAt: Date;
}

const DiseaseSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  symptoms: [String],
  treatment: [String],
  prevention: [String],
  affectedPlants: [String],
  severity: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium'
  },
  imageUrls: [String]
}, { timestamps: true });

export default mongoose.model<IDisease>('Disease', DiseaseSchema);
