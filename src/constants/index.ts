import {
  activeUsers,
  auditLogs,
  decisionModels,
  feesAndCharges,
  feesAndPricing,
  guarantors,
  karma,
  loanProducts,
  loanRequests,
  loans,
  organization,
  prefrences,
  reports,
  savings,
  savingsProducts,
  serviceAccount,
  services,
  settlements,
  transactions,
  userUsers,
  users,
  usersWithLoans,
  usersWithSavings,
  whiteList,
} from "../assets";

type PropTypes = {
  id: number;
  imgUrl: string;
  text: string;
};

type UserConstants = {
  id?: number;
  imgUrl: string;
  userDetails: string;
  numOfUsers: string;
};

type TableDataProps = {
  org: string;
  username: string;
  email: string;
  phoneNumber: number | string;
  dateJoined: string;
  staus: {
    active: boolean;
    inactive: boolean;
    blacklisted: boolean;
    pending: boolean;
  };
};

export const customers: PropTypes[] = [
  {
    id: 0,
    imgUrl: users,
    text: "Users",
  },
  {
    id: 1,
    imgUrl: guarantors,
    text: "Guarantors",
  },
  {
    id: 2,
    imgUrl: loans,
    text: "Loans",
  },
  {
    id: 3,
    imgUrl: decisionModels,
    text: "Decision Models",
  },
  {
    id: 4,
    imgUrl: savings,
    text: "Savings",
  },
  {
    id: 5,
    imgUrl: loanRequests,
    text: "Loan Requests",
  },
  {
    id: 6,
    imgUrl: whiteList,
    text: "Whitelist",
  },
  {
    id: 7,
    imgUrl: karma,
    text: "Karma",
  },
];

export const businesses: PropTypes[] = [
  {
    id: 8,
    imgUrl: organization,
    text: "Organization",
  },
  {
    id: 9,
    imgUrl: loanProducts,
    text: "Loan Products",
  },
  {
    id: 10,
    imgUrl: savingsProducts,
    text: "Savings Products",
  },
  {
    id: 11,
    imgUrl: feesAndCharges,
    text: "Fees and Charges",
  },
  {
    id: 12,
    imgUrl: transactions,
    text: "Transactions",
  },
  {
    id: 13,
    imgUrl: services,
    text: "Services",
  },
  {
    id: 14,
    imgUrl: serviceAccount,
    text: "Service Account",
  },
  {
    id: 15,
    imgUrl: settlements,
    text: "Settlements",
  },
  {
    id: 16,
    imgUrl: reports,
    text: "Reports",
  },
];

export const settings: PropTypes[] = [
  {
    id: 17,
    imgUrl: prefrences,
    text: "Preffrences",
  },
  {
    id: 18,
    imgUrl: feesAndPricing,
    text: "Fees and Pricing",
  },
  {
    id: 19,
    imgUrl: auditLogs,
    text: "Audit Logs",
  },
];

export const UserDetails: UserConstants[] = [
  {
    id: 0,
    imgUrl: userUsers,
    userDetails: "USERS",
    numOfUsers: "2,453",
  },
  {
    id: 1,
    imgUrl: activeUsers,
    userDetails: "ACTIVE USERS",
    numOfUsers: "2,453",
  },
  {
    id: 2,
    imgUrl: usersWithLoans,
    userDetails: "USERS WITH LOANS",
    numOfUsers: "12,453",
  },
  {
    id: 3,
    imgUrl: usersWithSavings,
    userDetails: "USERS WITH SAVINGS",
    numOfUsers: "102,453",
  },
];

export const tableData: TableDataProps[] = [
  {
    org: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "08078903721",
    dateJoined: "May 15, 2020 10:00 AM",
    staus: {
      active: false,
      inactive: true,
      blacklisted: false,
      pending: false,
    },
  },
  {
    org: "Irorun",
    username: "Debby Ogana",
    email: "debby2@irorun.com",
    phoneNumber: "08160780928",
    dateJoined: "Apr 30, 2020 10:00 AM",
    staus: {
      active: false,
      inactive: false,
      blacklisted: false,
      pending: true,
    },
  },
  {
    org: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phoneNumber: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    staus: {
      active: false,
      inactive: false,
      blacklisted: true,
      pending: false,
    },
  },
  {
    org: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phoneNumber: "07003309226",
    dateJoined: "Apr 10, 2020 10:00 AM",
    staus: {
      active: false,
      inactive: false,
      blacklisted: false,
      pending: true,
    },
  },
  {
    org: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phoneNumber: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    staus: {
      active: true,
      inactive: false,
      blacklisted: false,
      pending: false,
    },
  },
  {
    org: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phoneNumber: "08060780900",
    dateJoined: "Apr 10, 2020 10:00 AM",
    staus: {
      active: true,
      inactive: false,
      blacklisted: false,
      pending: false,
    },
  },
  {
    org: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phoneNumber: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    staus: {
      active: false,
      inactive: false,
      blacklisted: true,
      pending: false,
    },
  },
  {
    org: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phoneNumber: "08060780900",
    dateJoined: "Apr 10, 2020 10:00 AM",
    staus: {
      active: false,
      inactive: true,
      blacklisted: false,
      pending: false,
    },
  },
  {
    org: "Lendstar",
    username: "Grace Effiom",
    email: "grace@lendstar.com",
    phoneNumber: "07060780922",
    dateJoined: "Apr 30, 2020 10:00 AM",
    staus: {
      active: false,
      inactive: true,
      blacklisted: false,
      pending: false,
    },
  },
];
