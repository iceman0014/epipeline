export interface BedCard {
  bedId: string
  bedNumber: string
  department: string
  lastUpdated: number
  patient: Patient
}

export interface Patient {
  id: string
  name: string
  age: number
  hospitalId: string
  bedNumber: string
}
