export const GOAL_KM = 100;

export type Donor = {
  name: string;
  km: number;
  customAmount?: number;
};

export const donors: Donor[] = [
  {
    name: "Adrienne and Quinn",
    km: 1,
    customAmount: 100
  },
  {
    name: "Daniel H",
    km: 2,
    customAmount: 50
  },
  {
    name: "Abby and Scott",
    km: 10
  },
  {
    name: "Sally S",
    km: 11
  },
  {
    name: "Tom Bella",
    km: 12
  },
  {
    name: "Tom Bella",
    km: 13
  },
  {
    name: "Nic Keeler",
    km: 14
  },
  {
    name: "Bryce and Sahana",
    km: 20
  },
  {
    name: "Rowan G",
    km: 21
  },
  {
    name: "Joseph Alexander Appleton Owen",
    km: 34
  },
  {
    name: "Stephanie Bella",
    km: 39
  },
  {
    name: "Amy Martin",
    km: 40
  },
  {
    name: "Hannah D",
    km: 49
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
    name: "Chris 'The Brockstar' Brock",
    km: 53
  },
  {
    name: "Matt and Erika",
    km: 54
  },
  {
    name: "Stephanie Bella",
    km: 65
  },
  {
    name: "Kalem Wight",
    km: 69
  },
  {
    name: "Rebecca B",
    km: 75
  },
  {
    name: "Aunt Kate",
    km: 80
  },
  {
    name: "Tom Bella",
    km: 87
  },
  {
    name: "Tom Bella",
    km: 88
  },
  {
    name: "Stephanie Bella",
    km: 95
  },
  {
    name: "Aidan Denny",
    km: 97
  },
  {
    name: "Kyle Seckford Denny",
    km: 98,
    customAmount: 400
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
