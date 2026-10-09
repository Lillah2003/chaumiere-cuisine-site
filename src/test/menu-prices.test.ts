import { describe, expect, it } from "vitest";

import { wines } from "@/data/restaurant";

// Prices come from the supplied menu; the Gamay is at 7 € as last confirmed.
describe("Carte des vins", () => {
  it("affiche le Gamay « 23 » à 7 €", () => {
    const gamay = wines
      .find((group) => group.category === "Rouges")
      ?.items.find((item) => item.name.startsWith("Gamay"));

    expect(gamay?.price).toBe(7);
  });
});
