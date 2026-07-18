import IndustryLayout from "./IndustryLayout";

const logisticsData = {
  hero: {
    title: "Logistics",
    subtitle: "Delivering intelligent supply chain transformation through AI, automation and connected operations.",
    image: "/images/industries/logistics-hero.jpg",
  },

  sectionOne: {
    title: "Smarter Supply Chains",
    description:
      "We modernize logistics with real-time visibility, warehouse automation and predictive delivery intelligence.",
    image: "/images/industries/logistics-section1.jpg",
  },

  focusCards: [
    {
      title: "Warehouse Automation",
      image: "/images/cards/warehouse.jpg",
    },
    {
      title: "Fleet Management",
      image: "/images/cards/fleet.jpg",
    },
    {
      title: "AI Route Planning",
      image: "/images/cards/route.jpg",
    },
    {
      title: "Inventory Intelligence",
      image: "/images/cards/inventory.jpg",
    },
  ],

  sectionTwo: {
    title: "Built For Global Logistics",
    description:
      "Enterprise-grade logistics platforms that improve efficiency and reduce operational costs.",
    image: "/images/industries/logistics-section2.jpg",
  },
};

export default function Logistics() {
  return <IndustryLayout data={logisticsData} />;
}