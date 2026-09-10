export const GOAL_KM = 100;

export type Donor = {
  name: string;
  km: number;
};

export const donors: Donor[] = [
  {
    name: "Adrienne and Quinn",
    km: 1
  },
  {
    name: "Abby and Scott",
    km: 10
  },
  {
    name: "Bryce and Sahana",
    km: 20
  },
  {
    name: "Stephanie Bella",
    km: 39
  },
  {
    name: "Brandon and Kathleen",
    km: 50
  },
  {
    name: "Stephanie Bella",
    km: 51
  },
  {
    name: "Kim Bella",
    km: 52
  },
  {
    name: "Stephanie Bella",
    km: 65
  },
  {
    name: "Rebecca B",
    km: 75
  },
  {
    name: "Stephanie Bella",
    km: 95
  },
  {
    name: "Kyle Seckford Denny",
    km: 98
  },
  {
    name: "Brett and Sylvie",
    km: 99
  },
  {
    name: "Karen Engeland",
    km: 100
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
