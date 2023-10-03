interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Ticket Seller'],
  customerRoles: ['Customer'],
  tenantRoles: ['Theater Manager', 'Ticket Seller', 'Customer Service Representative'],
  tenantName: 'Cinema',
  applicationName: 'Movies Ticket Booking Online',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read cinema and movie information',
    'Book a show',
    'Manage bookings',
    'Update personal information',
  ],
  ownerAbilities: ['Manage tickets', 'Read cinema details', 'Read movie details', 'Read show details'],
  getQuoteUrl: 'https://app.roq.ai/proposal/e09cfa57-dbad-499f-8e2b-93b46a3501dd',
};
