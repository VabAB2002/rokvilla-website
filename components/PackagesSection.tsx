"use client";

import { useState } from "react";

interface PackageItem {
  title: string;
  items: string[];
}

interface Package {
  name: string;
  price: number;
  priceUnit: string;
  sections: PackageItem[];
}

const packages: Package[] = [
  {
    name: "Standard",
    price: 1870,
    priceUnit: "per sq. ft (Ex GST)",
    sections: [
      {
        title: "Design",
        items: [
          "Digital plot and contour survey",
          "2D floor plan & 3D Elevation",
          "GFC -Good for construction drawings (Section,Elevation, architectural drawings, cross section, details etc.)",
          "RCC drawings",
          "Electrical & Plumbing drawings",
        ],
      },
      {
        title: "Structure",
        items: [
          "Steel - 550 TMT bars",
          "Cement - Zuari/Ultratech/Birla",
          "UG Sump built with RCC",
          "Concrete - M20 grade",
          "Machine cut solid Concrete blocks - 6\" & 4\"",
        ],
      },
      {
        title: "Flooring and dado",
        items: [
          "Kitchen & Bedrooms - Vitrified tiles",
          "Balcony, Sit-out, Staircase, Common Areas - Anti-skid tiles",
          "Parking - Parking tiles",
          "Kitchen dado - Up to 2 feet height",
          "Bathroom dado - Up to 7 feet height",
        ],
      },
      {
        title: "Door and windows",
        items: [
          "Main door - Teak wood door with teak wood frame",
          "Internal doors - Flush doors with sal wood frame",
          "Windows - UPVC windows with shutters and MS grills",
          "Door hardware - SS hinges, handles & tower bolts",
        ],
      },
      {
        title: "Plumbing accessories",
        items: [
          "Sanitary ware - Hindware/Parryware",
          "CP & Fittings - Jaquar/Hindware",
          "Kitchen Sink - SS Sink",
          "Water Supply - PVC for internal, CPVC for external",
        ],
      },
      {
        title: "Painting",
        items: [
          "Interior - JK Putty + Tractor emulsion",
          "Exterior - Asian primer + Asian Apex exterior paint",
          "Polish - Melamine polish for all doors",
        ],
      },
      {
        title: "Electrical",
        items: [
          "Wires - Finolex wires",
          "Switches & Sockets - Anchor Roma (Modular)",
          "MCB & DB - Schneider/Siemens",
          "Conduits - RIGID PVC",
        ],
      },
      {
        title: "Plumbing",
        items: [
          "External Plumbing - Astral CPVC",
          "Internal Plumbing - Astral PVC",
          "Overhead Tank - Sintex 500L triple layer",
          "Underground Sump - Built with RCC",
        ],
      },
      {
        title: "Railing and handrails",
        items: [
          "Balcony railing - MS railing painted",
          "Staircase railing - SS handrail with MS balusters",
        ],
      },
    ],
  },
  {
    name: "Premium",
    price: 2050,
    priceUnit: "per sq. ft (Ex GST)",
    sections: [
      {
        title: "Design",
        items: [
          "Digital plot and contour survey",
          "2D floor plan & 3D Elevation",
          "GFC -Good for construction drawings (Section,Elevation, architectural drawings, cross section, details etc.)",
          "RCC drawings",
          "Electrical & Plumbing drawings",
        ],
      },
      {
        title: "Structure",
        items: [
          "Steel - 550 TMT bars (upgraded)",
          "Cement - Ultratech/ACC",
          "UG Sump built with RCC (waterproofed)",
          "Concrete - M25 grade",
          "Machine cut solid Concrete blocks - 6\" & 4\"",
        ],
      },
      {
        title: "Flooring and dado",
        items: [
          "Kitchen & Bedrooms - Premium Vitrified tiles (800x800mm)",
          "Balcony, Sit-out, Staircase - Designer Anti-skid tiles",
          "Parking - Premium Parking tiles",
          "Kitchen dado - Up to 2.5 feet height (designer tiles)",
          "Bathroom dado - Full height with premium tiles",
        ],
      },
      {
        title: "Door and windows",
        items: [
          "Main door - Premium Teak wood door with teak wood frame",
          "Internal doors - Veneer finished flush doors with sal wood frame",
          "Windows - Premium UPVC windows with MS grills",
          "Door hardware - Premium SS hinges, handles & locks",
        ],
      },
      {
        title: "Plumbing accessories",
        items: [
          "Sanitary ware - Jaquar/Kohler",
          "CP & Fittings - Jaquar/Grohe",
          "Kitchen Sink - Premium SS Sink with accessories",
          "Water Supply - CPVC for all plumbing",
        ],
      },
      {
        title: "Painting",
        items: [
          "Interior - Birla Putty + Asian Royale emulsion",
          "Exterior - Asian primer + Asian Apex Ultima",
          "Polish - PU polish for all wooden surfaces",
        ],
      },
      {
        title: "Electrical",
        items: [
          "Wires - Polycab wires",
          "Switches & Sockets - Legrand Myrius (Modular)",
          "MCB & DB - Schneider",
          "Conduits - ISI marked PVC",
        ],
      },
      {
        title: "Plumbing",
        items: [
          "External Plumbing - Astral CPVC Pro",
          "Internal Plumbing - Astral PVC",
          "Overhead Tank - Sintex 1000L triple layer",
          "Underground Sump - Built with RCC (waterproofed)",
        ],
      },
      {
        title: "Railing and handrails",
        items: [
          "Balcony railing - Designer SS railing",
          "Staircase railing - Premium SS handrail with glass balusters",
        ],
      },
    ],
  },
  {
    name: "Luxury",
    price: 2350,
    priceUnit: "per sq. ft (Ex GST)",
    sections: [
      {
        title: "Design",
        items: [
          "Digital plot and contour survey",
          "2D floor plan & 3D Elevation with walkthroughs",
          "GFC -Good for construction drawings (Section,Elevation, architectural drawings, cross section, details etc.)",
          "RCC drawings with structural consultant approval",
          "Electrical & Plumbing drawings",
          "Interior design concepts",
        ],
      },
      {
        title: "Structure",
        items: [
          "Steel - 550 TMT bars (top grade)",
          "Cement - ACC/Ultratech premium",
          "UG Sump built with RCC (waterproofed with membrane)",
          "Concrete - M25/M30 grade as per design",
          "Lightweight concrete blocks - 6\" & 4\"",
        ],
      },
      {
        title: "Flooring and dado",
        items: [
          "Kitchen & Bedrooms - Premium imported Vitrified tiles (800x1600mm)",
          "Balcony, Sit-out - Designer tiles with patterns",
          "Parking - Premium designer parking tiles",
          "Kitchen dado - Full height (7 feet) with premium designer tiles",
          "Bathroom dado - Full height with imported tiles",
        ],
      },
      {
        title: "Door and windows",
        items: [
          "Main door - Designer Teak wood door with brass fittings",
          "Internal doors - Premium veneer finished engineered doors",
          "Windows - Premium UPVC/Aluminium windows with MS grills",
          "Door hardware - Imported SS/brass hinges, handles & locks",
        ],
      },
      {
        title: "Plumbing accessories",
        items: [
          "Sanitary ware - Kohler/Grohe/American Standard",
          "CP & Fittings - Grohe/Hansgrohe",
          "Kitchen Sink - Premium undermount SS sink",
          "Water Supply - Premium CPVC with insulation",
        ],
      },
      {
        title: "Painting",
        items: [
          "Interior - Birla Putty + Asian Royale Luxury emulsion",
          "Exterior - Asian primer + Asian Apex Ultima with texture",
          "Polish - Premium PU polish for all wooden surfaces",
          "Designer wall finishes in selected areas",
        ],
      },
      {
        title: "Electrical",
        items: [
          "Wires - Premium Polycab/Havells wires",
          "Switches & Sockets - Legrand/Schneider premium range",
          "MCB & DB - Schneider premium range",
          "Conduits - Premium ISI marked concealed conduits",
          "Home automation ready",
        ],
      },
      {
        title: "Plumbing",
        items: [
          "External Plumbing - Astral CPVC Pro with insulation",
          "Internal Plumbing - Premium Astral PVC",
          "Overhead Tank - Sintex 1500L triple layer with insulation",
          "Underground Sump - RCC with complete waterproofing",
        ],
      },
      {
        title: "Railing and handrails",
        items: [
          "Balcony railing - Premium designer SS/Glass railing",
          "Staircase railing - Imported SS handrail with frameless glass",
        ],
      },
    ],
  },
];

export default function PackagesSection() {
  // Track which section index is open across all packages
  const [openSectionIndex, setOpenSectionIndex] = useState<number>(0);

  const toggleSection = (sectionIndex: number) => {
    // If clicking the same section, close it; otherwise open the new section
    setOpenSectionIndex((prev) => (prev === sectionIndex ? -1 : sectionIndex));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Packages
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover the package that fits your needs.
          </p>
          <div className="inline-flex items-center gap-2 text-gray-600">
            <span>Showing from</span>
            <span className="text-orange-500 font-semibold">Hubli</span>
            <svg
              className="w-4 h-4 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Package Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹ {pkg.price.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{pkg.priceUnit}</p>
              </div>

              {/* Accordion Sections */}
              <div className="space-y-3">
                {pkg.sections.map((section, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    {/* Section Header */}
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-gray-700 font-medium">
                          {openSectionIndex === index ? "−" : "+"}
                        </span>
                        <span className="font-semibold text-gray-900">
                          {section.title}
                        </span>
                      </div>
                    </button>

                    {/* Section Content */}
                    {openSectionIndex === index && (
                      <div className="px-4 pb-4">
                        <ul className="space-y-2 ml-7">
                          {section.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start text-sm text-gray-600"
                            >
                              <span className="mr-2 text-gray-400">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-gray-500 max-w-5xl mx-auto">
          The package pricing shown above is calculated on a considered Built-Up
          Area of 2500 Sqft. In case of change in Built-Up Area, the package
          pricing would change accordingly.
        </div>
      </div>
    </section>
  );
}

