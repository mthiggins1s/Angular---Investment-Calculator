// stored in model; we create a custom object type.

export interface InvestmentInput {
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number,
  }

// export type InvestmentInput = {
//     initialInvestment: number,
//     duration: number,
//     expectedReturn: number,
//     annualInvestment: number,
//   }