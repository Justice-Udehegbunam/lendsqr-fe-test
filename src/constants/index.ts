import {
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
  users,
  whiteList,
} from "../assets";

type PropTypes = {
  id: number;
  imgUrl: string;
  text: string;
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
