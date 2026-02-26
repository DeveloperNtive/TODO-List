export interface TaskResponseDTO {
  id: string;
  title: string;
  description?: string;
  status: 'PENDING' | 'COMPLETED' | 'POSTPONED' |'DELETED';
  due_date?: Date;
  created_by: string;
  created_at: Date;
  updated_at: Date;
}