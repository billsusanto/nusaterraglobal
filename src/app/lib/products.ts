export type ProductVariant = "premium" | "standard";

export interface Product {
  id: string;
  name: string;
  shortName?: string; // Optional shorter name for UI display
  image: string;
  description: string;
  specifications: {
    fixedCarbon: string;
    ashContent: string;
    burnTime: string;
    calorificValue: string;
  };
  dimensions: {
    length?: string;
    width?: string;
    height?: string;
    diameter?: string;
    density?: string;
  };
  packaging: {
    bag: string;
    container: string;
    palletized: boolean;
  };
}

export const products: Product[] = [
  {
    id: "coconut-charcoal",
    name: "Coconut Shell Charcoal Briquettes",
    shortName: "Coconut Shell Charcoal",
    image: "/products/coconut_charcoal_briquettes.png",
    description:
      "Crafted from 100% Indonesian coconut shells, our shisha charcoal offers pure flavor, ultra-low ash, and lasting performance in Standard or Premium Grade.",
    specifications: {
      fixedCarbon: "80%+",
      ashContent: "<2.5%",
      burnTime: "90 - 120 mins",
      calorificValue: "7500 - 8000 kcal/kg",
    },
    dimensions: {
      length: "25mm",
      width: "25mm",
      height: "25mm",
    },
    packaging: {
      bag: "10kg paper bags",
      container: "20-foot container, 18 tons",
      palletized: true,
    },
  },
  {
    id: "bbq-charcoal",
    name: "BBQ Charcoal",
    image: "/products/bbq_charcoal.png",
    description:
      "Crafted from select Indonesian hardwood, our BBQ Charcoal Brisqettes offers long-lasting heat, clean burn, and pure flavor for a refined grilling experience and other industrial usage.",
    specifications: {
      fixedCarbon: "75%+",
      ashContent: "<4%",
      burnTime: "60-90 mins",
      calorificValue: "7000 - 7500 kcal/kg",
    },
    dimensions: {
      length: "5-10cm",
      width: "0.5-2cm",
    },
    packaging: {
      bag: "20kg paper bags",
      container: "20-foot container, 18 tons",
      palletized: true,
    },
  },
  {
    id: "activated-carbon",
    name: "Activated Carbon",
    image: "/products/activated_carbon.png",
    description:
      "From 100% premium Indonesian coconut shells, our activated carbon delivers superior adsorption, low ash, and high hardness. Steam-activated and available in powder or granular form, it ensures consistent performance for water, air, gold, and food & beverage filtration",
    specifications: {
      fixedCarbon: "85%+",
      ashContent: "<3%",
      burnTime: "N/A",
      calorificValue: "N/A",
    },
    dimensions: {
      diameter: "0.5-4mm granules",
    },
    packaging: {
      bag: "25kg paper bags",
      container: "20-foot container, 16 tons",
      palletized: true,
    },
  },
  {
    id: "natural-zeolite",
    name: "Natural Zeolite",
    image: "/products/natural_zeolite.png",
    description:
      "Our natural zeolite comes from Indonesia’s rich volcanic mineral reserves and is processed by trusted partner factories. Each batch is carefully graded, milled, and sized to meet international standards, ensuring consistent quality in every shipment",
    specifications: {
      fixedCarbon: "N/A",
      ashContent: "N/A",
      burnTime: "N/A",
      calorificValue: "N/A",
    },
    dimensions: {
      diameter: "0.5-2mm granules",
      density: "0.7-0.9 g/cm³",
    },
    packaging: {
      bag: "25kg PP bags",
      container: "20-foot container, 20 tons",
      palletized: false,
    },
  },
  {
    id: "palm-kernel",
    name: "Palm Kernel Expeller",
    image: "/products/palm_kernel_expeller.png",
    description:
      "Carefully sourced from select Indonesian producers, our Palm Kernel Expeller is delivered with consistent quality and full traceability from mill to shipment. Naturally rich in fiber, protein, and energy, it serves as a reliable and versatile feed ingredient for cattle, sheep, and goats, meeting the standards of discerning buyers worldwide.",
    specifications: {
      fixedCarbon: "N/A",
      ashContent: "<4%",
      burnTime: "N/A",
      calorificValue: "N/A",
    },
    dimensions: {
      diameter: "0.5-2cm pellets",
    },
    packaging: {
      bag: "50kg PP bags",
      container: "20-foot container, 22 tons",
      palletized: false,
    },
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getOtherProducts(currentId: string): Product[] {
  return products.filter((product) => product.id !== currentId);
}
