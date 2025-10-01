import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import BlogSection from "../../components/BlogSection";

// Define interfaces for blog content structure
interface SubSection {
  subheading: string;
  paragraphs?: string[];
  list?: string[];
}

interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  paragraphs2?: string[];
  paragraphs3?: string[];
  list?: string[];
  list2?: string[];
  subheading?: string;
  sublist?: string[];
  subSections?: SubSection[];
}

interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  content: BlogSection[];
}

// Blog data
const blogPosts: BlogPost[] = [
  {
    id: "premium-fuel-shisha",
    title:
      "Coconut Shell Charcoal Briquettes from Indonesia: The Premium Fuel for Shisha & Hookah",
    date: "10/09/2025",
    image: "/images/blog1.jpg",
    content: [
      {
        heading: "What Are Coconut Shell Charcoal Briquettes?",
        paragraphs: [
          "Coconut shell charcoal briquettes are a premium natural fuel crafted from compressed charcoal powder derived from discarded coconut shells—an abundant byproduct of Indonesia's thriving coconut industry. Unlike traditional wood charcoal, they don't contribute to deforestation, making them 100% eco-friendly, sustainable, and renewable.",
          "What sets these briquettes apart is their superior performance: They burn hotter, last longer, and produce cleaner heat than conventional charcoal. Odorless, smokeless, and spark-free, these briquettes guarantee a consistent and enjoyable shisha experience. This unique balance of sustainability and quality has positioned Indonesia as the world's leading supplier for hookah and shisha charcoal.",
        ],
      },
      {
        heading: "Key Applications",
        list: [
          "Shisha & Hookah Smoking - Long burn time, stable heat, and low smoke output. Clean white ash ensures tobacco flavor remains pure.",
        ],
        subheading: "Why businesses choose them:",
        sublist: [
          "Shisha Lounges → Longer sessions, minimal ash, consistent heat.",
          "Distributors & Wholesalers → Growing demand in MENA, Europe, USA.",
          "Retail Consumers → Easy-to-light, eco-friendly, globally packaged.",
        ],
      },
      {
        heading: "Popular Sizes & Shapes",
        list: [
          "Cube 25 (25×25×25 mm): Global standard, burns 90–100 minutes.",
          "Cube 26 (26×26×26 mm): Premium, 100–120 minutes, popular in Saudi Arabia, UAE, Germany.",
          "Hexagonal Stick (20×50 mm): Burns up to 2 hours, popular in Turkey, Middle East, Russia.",
          "Finger Stick (18×35 mm / 18×50 mm): Traditional Egyptian style, 60–80 minutes, used in Egypt, North Africa, Gulf.",
        ],
      },
      {
        heading: "Typical Specifications",
        list: [
          "Moisture Content: ≤ 6%",
          "Ash Content: ≤ 2.5% (Premium ≤ 2.2%)",
          "Fixed Carbon: ≥ 75%",
          "Burning Time: 90–120 mins (cubes), up to 2 hrs (sticks)",
          "Calorific Value: 7,000–7,500 Kcal/kg",
          "Ash Color: White to light grey",
          "Shape & Size: Uniform, durable, no cracks",
          "Certification: COA & MSDS available",
        ],
      },
      {
        heading: "Why Source from Indonesia?",
        paragraphs: [
          "Indonesia dominates the global coconut shell charcoal market, supplying premium-grade shisha charcoal to Saudi Arabia, UAE, Europe, and the USA. Buyers trust Indonesian briquettes because of:",
        ],
        list: [
          "Abundant Raw Materials – Leveraging one of the world's largest coconut industries.",
          "Eco-Friendly Production – 100% agricultural waste, no deforestation.",
          "Consistent Quality – High heat, low ash, uniform size, and stable performance.",
          "Export-Ready Standards – Packaging, certification, and documentation tailored for international trade.",
        ],
        paragraphs2: [
          "For shisha distributors, wholesalers, and lounge owners, Indonesia offers a reliable supply chain, competitive pricing, and premium quality charcoal trusted worldwide. 👉 If you're searching for shisha charcoal suppliers, hookah charcoal wholesalers, or premium coconut shell briquettes, Indonesia is your number one source. Combining eco-friendliness, performance, and export expertise, coconut shell charcoal briquettes from Indonesia continue to dominate the global shisha market.",
        ],
      },
      {
        heading: "Partner with Us",
        paragraphs: [
          "At Nusaterra Global Resources, we specialize in exporting premium coconut shell charcoal briquettes that meet the highest international standards. Our offerings include:",
        ],
        list: [
          "Consistent cube/stick sizes for reliable burn times",
          "Premium-grade quality with <2.5% ash content",
          "Export-ready packaging: 1 kg retail, 10 kg bulk, or custom cartons",
          "Complete documentation (COA, MSDS) for hassle-free importing",
          "Flexible MOQ and competitive pricing for distributors and wholesalers",
          "Long-term supply agreements for businesses requiring stability",
        ],
        paragraphs2: [
          "Contact us today to discuss your coconut shell charcoal requirements and experience the Indonesian quality difference that leading shisha brands and lounges trust worldwide.",
        ],
      },
    ],
  },
  {
    id: "indonesian-zeolite",
    title:
      "Indonesian Zeolite: The Eco-Friendly Mineral Powering Feed, Farming, and Aquaculture",
    date: "10/09/2025",
    image: "/images/blog2.jpg",
    content: [
      {
        heading: "What is Zeolite?",
        paragraphs: [
          "Zeolite is a naturally occurring mineral formed when volcanic ash reacts with alkaline groundwater over thousands of years. Classified as a hydrated alumino-silicate, it is widely recognized for its unique porous, honeycomb-like structure. This structure gives zeolite three highly valuable properties:",
        ],
        list: [
          "Ion Exchange: It can swap harmful ions such as ammonium or heavy metals with safe ions like calcium and sodium.",
          "Adsorption: Zeolite acts as a natural sponge, binding toxins, gases, and pollutants.",
          "Molecular Sieving: Its pores allow only certain molecules to pass, making it an effective natural filter.",
        ],
        paragraphs2: [
          "Non-toxic, stable, and environmentally safe, zeolite has earned a reputation as a trusted mineral solution across animal feed, aquaculture, and agriculture industries worldwide.",
        ],
      },
      {
        heading: "Key Applications",
        subSections: [
          {
            subheading: "1. Animal Feed Additive",
            paragraphs: [
              "In modern livestock production, zeolite is used as a functional feed additive. It binds harmful toxins such as aflatoxin and other mycotoxins, preventing them from entering the animal's bloodstream. By stabilizing gut pH and improving nutrient absorption, zeolite enhances digestion and feed efficiency. For poultry, swine, and cattle farmers, this translates into healthier animals, reduced mortality, and improved growth performance.",
            ],
          },
          {
            subheading: "2. Aquaculture (Fish & Shrimp Farming)",
            paragraphs: [
              "Aquaculture operations face constant challenges with pond water quality. Zeolite is a proven solution: it removes toxic substances including ammonia, nitrite, hydrogen sulfide (H₂S), and heavy metals. By improving water clarity and stabilizing pH, zeolite creates healthier environments for fish and shrimp. Farmers using zeolite see lower mortality rates, stronger immunity in stock, and faster growth cycles—making it an essential input for sustainable aquaculture.",
            ],
          },
          {
            subheading: "3. Agriculture (Soil & Crop Farming)",
            paragraphs: [
              "In agriculture, zeolite is widely applied as a soil conditioner and fertilizer enhancer. Its porous structure locks in essential nutrients like nitrogen (N), phosphorus (P), and potassium (K), then releases them slowly to crops. This reduces fertilizer leaching and cuts fertilizer usage by up to 30%. Additionally, zeolite supplies beneficial silica and trace minerals while improving soil aeration and water retention. Farmers benefit from higher yields, healthier soils, and reduced input costs.",
            ],
          },
        ],
      },
      {
        heading: "Why Buyers Choose Zeolite",
        list: [
          "Animal Feed Mills: Secure livestock health, improve feed conversion ratios, and lower toxin risks.",
          "Aquaculture Farms: Cleaner ponds, reduced fish and shrimp mortality, and stronger harvest yields.",
          "Agriculture Producers: Higher crop productivity with lower fertilizer expenses and better soil quality.",
        ],
      },
      {
        heading: "Forms of Zeolite & Recommended Usage",
        subSections: [
          {
            subheading: "Animal Feed Industry → Zeolite Powder",
            list: [
              "Mesh Sizes: 100, 150, 200",
              "Usage: Add 2–5% of feed weight during milling.",
              "Benefits: Acts as a toxin binder, pH buffer, and digestion enhancer.",
              "Positioning: Essential feed additive for poultry, swine, and cattle feed mills.",
            ],
          },
          {
            subheading: "Aquaculture → Zeolite Granular / Round Ball",
            list: [
              "Form: 2–5 mm round balls",
              "Usage: Broadcast 10–25 kg per 1,000 m² pond surface depending on water condition.",
              "Benefits: Reduces ammonia, nitrite, and heavy metals → cleaner water and healthier stock.",
              "Positioning: Eco-friendly pond purifier for fish and shrimp farms.",
            ],
          },
          {
            subheading: "Agriculture → Zeolite Chips",
            list: [
              "Forms: 0.5–1 mm, 1–3 mm, 3–6 mm, 6–10 mm",
              "Usage: Mix 200–500 kg per hectare or 5–10% into soil blends.",
              "Benefits: Retains NPK nutrients, detoxifies heavy metals, improves soil fertility.",
              "Positioning: Fertilizer enhancer and soil conditioner for rice, maize, and plantation crops.",
            ],
          },
        ],
      },
      {
        heading: "Typical Zeolite Product Specifications",
        list: [
          "Moisture Content: <10%",
          "Cation Exchange Capacity (CEC): 100–150 meq/100g",
          "Si/Al Ratio: ~4–5",
          "Color: Greenish-grey (typical for Indonesian zeolite)",
          "Forms Available:",
          "- Powder: Mesh 100, Mesh 150, Mesh 200",
          "- Granular: Round Ball 2–5 mm",
          "- Chips: 0.5–1 mm, 1–3 mm, 3–6 mm, 6–10 mm",
          "Certification: COA (Certificate of Analysis) available on request",
        ],
        paragraphs: [
          "These specifications ensure global buyers receive a consistent, high-purity, and performance-driven product.",
        ],
      },
      {
        heading: "Why Source Zeolite from Indonesia?",
        paragraphs: [
          "Indonesia is among the top global suppliers of natural zeolite, with abundant reserves and high-purity deposits. Buyers choose Indonesian zeolite because it combines:",
        ],
        list: [
          "High Quality: Strong cation exchange capacity and consistent mineral composition.",
          "Sustainability: Eco-friendly mining and processing methods.",
          "Competitive Advantage: Abundant reserves allow for stable supply at cost-effective pricing.",
          "Export-Ready Standards: Professional packaging, quality documentation, and flexible logistics for global buyers.",
        ],
        paragraphs2: [
          "For industries in animal nutrition, aquaculture, and agriculture, Indonesian zeolite remains a reliable and sustainable mineral solution.",
        ],
      },
      {
        heading: "Partner with Us",
        paragraphs: [
          "If you are searching for a trusted zeolite supplier in Indonesia for animal feed, aquaculture ponds, or agricultural use, zeolite offers a natural, cost-efficient, and eco-friendly solution that continues to drive demand worldwide.",
          "At Nusaterra Global Resources, we supply premium-grade Indonesian zeolite tailored for:",
        ],
        list: [
          "Animal feed industries",
          "Aquaculture farms",
          "Agricultural producers",
        ],
        list2: [
          "✓ Consistent quality",
          "✓ Flexible particle sizes",
          "✓ Reliable documentation (COA, specifications)",
          "✓ Export-ready packaging",
        ],
        paragraphs2: ["Contact us today to discuss your zeolite requirements"],
      },
    ],
  },
  {
    id: "indonesian-bbq-charcoal",
    title:
      "Why Indonesian Sawdust Charcoal is the Green Energy Revolution Behind Barbecue, Agriculture, and Industry",
    date: "10/09/2025",
    image: "/images/blog3.jpg",
    content: [
      {
        heading: "What is Sawdust Charcoal?",
        paragraphs: [
          "Sawdust charcoal is more than just an alternative fuel — it's a symbol of how waste can be transformed into energy for the future. Produced from compressed sawdust, a fine byproduct of the wood industry, this charcoal takes what would otherwise be discarded and turns it into a high-performance, eco-friendly fuel.",
          "Thanks to its high calorific value, sawdust charcoal burns hotter and more efficiently than traditional firewood. It produces steady heat with minimal smoke and ash, making it cleaner for the environment and healthier for people. Unlike coal, which accelerates deforestation and pollutes the air, sawdust charcoal is stable, renewable, and sustainable— a true ally in the global push for green energy.",
          "Today, it's being used in kitchens, factories, and farms worldwide, proving that a simple byproduct can power a real energy revolution.",
        ],
      },
      {
        heading: "Key Applications",
        subSections: [
          {
            subheading: "1. Barbecue & Cooking Fuel",
            paragraphs: [
              "For barbecue lovers and professional chefs, sawdust charcoal is redefining the grilling experience. Its consistent, high heat ensures food cooks evenly without flare-ups. With low ash residue and long burn times, it makes both backyard cookouts and restaurant kitchens more efficient and enjoyable.",
              "That's why restaurants and households are switching to sawdust charcoal — it delivers a premium grilling experience that combines taste, reliability, and sustainability.",
            ],
          },
          {
            subheading: "2. Industrial Fuel / Energy Production",
            paragraphs: [
              "In industry, energy efficiency is everything. Sawdust charcoal is now powering kilns, boilers, and furnaces, giving companies a renewable alternative to coal. Its high calorific output reduces fuel costs, while its low-emission profiles support greener business practices.",
              "For industries aiming to cut carbon footprints without sacrificing performance, sawdust charcoal is proving to be a cost-effective and sustainable energy source.",
            ],
          },
          {
            subheading: "3. Charcoal Briquette Production",
            paragraphs: [
              "One of the fastest-growing applications for sawdust charcoal is briquette manufacturing. When processed with natural binders like starch, sawdust charcoal transforms into uniform, high-density briquettes that are easy to package, store, and transport. These briquettes burn longer, cleaner, and hotter than lump charcoal — making them highly attractive to both domestic and international buyers.",
              "For manufacturers, sawdust charcoal is not just raw material — it's the backbone of a booming global briquette industry.",
            ],
          },
          {
            subheading: "4. Soil Amendment / Horticulture",
            paragraphs: [
              "Beyond energy, sawdust charcoal also plays a revolutionary role in agriculture. Processed into biochar, it is used to improve soil structure, retain water, reduce acidity, and boost crop yields. Farmers and horticulturists rely on it to create healthier soils and more productive harvests.",
              "In sustainable agriculture, biochar made from sawdust charcoal is seen as a game-changing tool for combating soil degradation and ensuring long-term food security.",
            ],
          },
        ],
      },
      {
        heading: "Why Buyers Choose Sawdust Charcoal",
        paragraphs: [
          "The versatility of sawdust charcoal explains its rise in global demand:",
        ],
        list: [
          "Restaurants & Households → clean, reliable Barbecue fuel.",
          "Industrial Users → cost-efficient biomass energy for boilers and kilns.",
          "Briquette Manufacturers → consistent feedstock for premium briquettes.",
          "Farmers & Horticulturists → biochar that enriches soil and increases yields.",
        ],
        paragraphs2: [
          "Across every sector, sawdust charcoal is proving to be more than fuel — it's a sustainable solution for the future.",
        ],
      },
      {
        heading: "Forms of Sawdust Charcoal & Recommended Usage",
        list: [
          "Barbecue & Cooking Fuel (Briquettes / Logs): Easy ignition, long burn time, minimal smoke.",
          "Industrial Fuel / Energy (Loose Sawdust / Pellets): High calorific value, efficient combustion, renewable alternative to coal.",
          "Charcoal Briquette Production (Powder / Granules): Uniform density and quality for commercial briquette manufacturing.",
          "Soil Amendment / Horticulture (Ground Charcoal / Biochar): Improves fertility, moisture retention, and soil structure.",
        ],
      },
      {
        heading: "Typical Specifications",
        list: [
          "Source: Hardwood/softwood sawdust",
          "Moisture Content: <10%",
          "Ash Content: <5%",
          "Bulk Density: 0.4–0.6 g/cm³",
          "Calorific Value: 4,500–5,500 kcal/kg",
          "Particle Size: Fine (briquettes), coarse (logs/industrial use)",
        ],
      },
      {
        heading: "Why Source from Indonesia?",
        paragraphs: [
          "Indonesia is at the forefront of the biomass energy movement, with abundant sawdust supplies from its thriving wood industry. Indonesian sawdust charcoal is:",
        ],
        list: [
          "Sustainably sourced from renewable biomass.",
          "Cost-effective with stable calorific performance.",
          "Flexible in form — powder, briquettes, pellets, or biochar.",
          "Export-ready with reliable certification and documentation.",
        ],
        paragraphs2: [
          "For buyers worldwide, Indonesian sawdust charcoal isn't just another product — it's the fuel powering the global green energy revolution.",
        ],
      },
      {
        heading: "Partner with Us",
        paragraphs: [
          "If you are searching for a trusted sawdust charcoal supplier in Indonesia for Barbecue fuel, industrial energy, briquette manufacturing, or agricultural use, our products offer a natural, cost-efficient, and eco-friendly solution that continues to drive demand worldwide.",
          "At Nusaterra Global Resources, we supply premium sawdust charcoal for multiple industries :",
        ],
        list: [
          "Barbecue & household cooking fuel",
          "Industrial boilers and kilns",
          "Briquette manufacturing feedstock",
          "Soil and horticultural applications",
        ],
        list2: [
          "✓ Consistent quality and calorific value",
          "✓ Multiple forms for different applications",
          "✓ Reliable documentation and certification",
          "✓ Export-ready packaging and logistics",
        ],
        paragraphs2: [
          "Contact us today to discuss your sawdust charcoal requirements",
        ],
      },
    ],
  },
];

export function getBlogPostById(id: string) {
  return blogPosts.find((post) => post.id === id);
}

export async function generateStaticParams() {
  // Mark as async for consistency with Next.js patterns
  return blogPosts.map((post) => ({
    blogId: post.id,
  }));
}

interface BlogDetailPageProps {
  params: { blogId: string };
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  // Await the params object as required by Next.js
  const { blogId } = await params;
  const post = getBlogPostById(blogId);

  if (!post) {
    return { title: "Blog Post Not Found" };
  }

  return {
    title: `${post.title} - Nusaterra Global Resources`,
    description: post.content[0].paragraphs
      ? post.content[0].paragraphs[0].substring(0, 160)
      : "",
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  // Mark the function as async and await params
  const { blogId } = await params;
  const post = getBlogPostById(blogId);

  if (!post) {
    return notFound();
  }

  return (
    <main className="bg-[#f9f9f2] min-h-screen">
      <div className="container-custom pt-32 pb-10 md:pb-16 px-4 md:px-6">
        {/* Main Blog Image */}
        <div className="w-full rounded-lg md:rounded-xl overflow-hidden mb-6 md:mb-10">
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              unoptimized={true}
            />
          </div>
        </div>

        {/* Title and Date */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight">
          {post.title}
        </h1>
        <div className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">
          {post.date}
        </div>

        {/* Blog Content */}
        {post.content.map((section, index) => (
          <section key={index} className="mb-8 md:mb-10">
            {section.heading && (
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                {section.heading}
              </h2>
            )}

            {section.paragraphs?.map((paragraph, pIndex) => (
              <p key={pIndex} className="mb-4 md:mb-6 text-base md:text-lg">
                {paragraph}
              </p>
            ))}

            {section.list && (
              <ul
                className={`${
                  section.heading === "Why Buyers Choose Zeolite"
                    ? "space-y-3"
                    : ""
                } list-disc list-inside text-base md:text-lg mb-4 md:mb-6`}
              >
                {section.list.map((item, lIndex) => (
                  <li
                    key={lIndex}
                    className={
                      section.heading === "Why Buyers Choose Zeolite"
                        ? "font-medium"
                        : ""
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.paragraphs2?.map((paragraph, pIndex) => (
              <p
                key={`p2-${pIndex}`}
                className={`mb-4 md:mb-6 text-base md:text-lg ${
                  section.heading === "Partner with Us" ? "font-medium" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}

            {section.list2 && (
              <ul className="list-none text-base md:text-lg mb-4 md:mb-6 space-y-2">
                {section.list2.map((item, lIndex) => (
                  <li
                    key={`li2-${lIndex}`}
                    className={`mb-2 ${
                      item.startsWith("✓")
                        ? 'pl-7 relative before:content-["✓"] before:absolute before:left-0 before:text-green-600'
                        : ""
                    }`}
                  >
                    {item.startsWith("✓") ? item.substring(1).trim() : item}
                  </li>
                ))}
              </ul>
            )}

            {section.subheading && (
              <h3 className="text-lg md:text-xl font-semibold mt-4 mb-2">
                {section.subheading}
              </h3>
            )}

            {section.sublist && (
              <ul className="list-disc list-inside text-base md:text-lg mb-4 md:mb-6 ml-4">
                {section.sublist.map((item, slIndex) => (
                  <li key={slIndex}>{item}</li>
                ))}
              </ul>
            )}

            {section.subSections &&
              section.subSections.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-6 md:mb-8">
                  <h3 className="text-lg md:text-xl font-semibold mb-3">
                    {subsection.subheading}
                  </h3>
                  {subsection.paragraphs?.map((paragraph, pIndex) => (
                    <p
                      key={`subsection-${subIndex}-p-${pIndex}`}
                      className="mb-4 md:mb-6 text-base md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {subsection.list && (
                    <ul className="list-disc list-inside text-base md:text-lg mb-4 space-y-2">
                      {subsection.list.map((item, lIndex) => (
                        <li
                          key={`subsection-${subIndex}-li-${lIndex}`}
                          className="pl-2"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </section>
        ))}
      </div>

      {/* Other Blogs Section */}
      <BlogSection />
    </main>
  );
}
