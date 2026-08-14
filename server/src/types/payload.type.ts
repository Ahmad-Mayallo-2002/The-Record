import { Types } from 'mongoose';
import { Roles } from '../enums/roles.enum';

export type Payload = { sub: Types.ObjectId; email: string; role: Roles };
