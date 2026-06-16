import mongoose, { Schema, Document } from 'mongoose';

export interface IPrediction extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  imageUrl: string;
  imagePath: string;
  disease: string;
  confidence: number;
  severity: string;
  treatment?: string;
  plantType?: string;
  createdAt: Date;
  updatedAt: Date;
}

const PredictionSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  imageUrl: String,
  imagePath: {
    type: String,
    required: true
  },
  disease: {
    type: String,
    required: true
  },
  confidence: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  severity: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium'
  },
  treatment: String,
  plantType: String
}, { timestamps: true });

export default mongoose.model<IPrediction>('Prediction', PredictionSchema);
