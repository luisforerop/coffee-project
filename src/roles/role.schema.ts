import { model, Schema, Document } from 'mongoose'
import { iRole } from '../models'

interface connectorRole extends Document, iRole {
  
}

const roleSchema = new Schema<connectorRole>({
  role: {
    type: String,
    required: [true, 'Type of role is required']
  }
})

export const RoleModel = model<connectorRole>('Role', roleSchema)