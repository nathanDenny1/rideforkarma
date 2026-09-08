"use client";

import Road from "./Road";
import { GOAL_KM, kmClaimed } from "./data";

export default function Fundraising() {
  return <Road kmClaimed={kmClaimed} goalKm={GOAL_KM} />;
}
