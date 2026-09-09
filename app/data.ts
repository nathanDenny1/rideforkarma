export const GOAL_KM = 100;

export type Donor = {
  name: string;
  km: number;
};

export const donors: Donor[] = [
  {
    name: "Abby and Scott",
    km: 10
  },
  {
    name: "Bryce and Sahana",
    km: 20
  },
  {
    name: "Rebecca B",
    km: 75
  }
];

export function priceForKm(km: number) {
  return km;
}

export const donorByKm = new Map(donors.map((donor) => [donor.km, donor]));

export const kmClaimed = donors.length;
export const kmRemaining = GOAL_KM - kmClaimed;
export const AMOUNT_RAISED = donors.reduce((sum, donor) => sum + priceForKm(donor.km), 0);
export const FUNDRAISING_GOAL = (GOAL_KM * (GOAL_KM + 1)) / 2;
