
export interface IData {
  number: string
  status: string
  protocol: string
  country: string
  currentClient: string
  extensions: string
  lastShipmentDate: string
  currentBalance: string
  clientBalance: string
  totalBalance: string
  createdBy: string
  clients: Client[]
}

export interface Client {
  name: string
  assignDate: string
  unassignDate: string
  assigner: string
  localMinutes: string
  internationalMinutes: string
  amount: string
}

