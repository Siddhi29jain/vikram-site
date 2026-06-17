import { NextResponse } from "next/server";

const MODEL = "openai/gpt-oss-120b:free";
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

const careerContext = `
Vikram Patni is Founder and CEO of Proventus Valuetech, based in Vadodara, Gujarat, India.
He is an engineering and business professional with more than 25 years of hands-on experience
across non-ferrous metallurgy, operations, project management, technology evaluation, plant
design, process development, commercial contracts, vendor selection, bid evaluation,
procurement, commissioning, plant performance improvement, strategic sourcing, training and HSE.

Current role:
- Founder and CEO, Proventus Valuetech, September 2015 to present.
- Proventus Valuetech provides specialist services in non-ferrous metallurgy including smelting,
  leaching, SX-EW, electro-refining, electro-winning and melting of various non-ferrous metals.
- Services include process development through bench-scale and pilot plants, basic and detailed
  engineering, cathode plants from copper scraps, rod plants from copper scraps/cathodes,
  leaching/SX-EW plants from copper and zinc waste/by-products, effluent stream solutions aligned
  with PCB requirements, and technology sale/collaboration.

Other founder role:
- Co-Founder and Director, VINAR Innovation and Research Center Pvt Ltd, May 2017 to August 2019.
- VINAR provided process development, analytical services, engineering and project management for
  mineral processing, metal extraction, waste treatment and recycling.
- Focus areas included e-waste treatment, Li-ion battery recycling and spent catalyst treatment.

Mopani Copper Mines, Glencore Group:
- Project Manager, Refinery Upgradation, May 2013 to August 2015.
- Managed upgrade of a 200,000 T/year copper refinery from conventional starter-sheet technology
  to permanent cathode technology while the plant operated at full capacity.
- Prepared feasibility reports, project budget and execution plans, evaluated technologies, worked
  with technology partners and delivered the project within budget and timeline.
- Refinery Superintendent, October 2010 to December 2012 in Zambia.
- Managed HR, safety, operations, maintenance and commercial activities in a 200,000 MT/year copper
  refinery, leach and SXEW plant.
- Achieved record cathode production, 100% LME Grade-A cathode production, 15% cost reduction,
  highest anode slimes production, and commissioned Ni removal, liberator and slime handling systems.

Sterlite Industries / Vedanta Group:
- Head smelter and acid plant operations, November 2008 to 2010, Tuticorin, Tamil Nadu.
- Led operations in a 400,000 MT/annum smelter and sulphuric acid plant SBU with 700+ manpower and
  turnover above US$2 billion.
- Increased capacity utilization from 87% to 94%, coordinated ACE cost reduction/additional revenue
  initiatives targeting US$20 million, and contributed to IMEA Super Platinum and RBNQA manufacturing
  excellence awards.
- Head Production, March 2007 to October 2008, Silvassa.
- Led a copper refinery of 200,000 MT/annum capacity and CCR plant of 150,000 MT/annum with 400+ people.
- Increased CCR production, reduced production cost by 5%, reduced petro product consumption by 7%,
  won IMEA Platinum award, and won QUALTECH first prize for a TQM innovation project developing Ni
  as a byproduct from a waste stream.
- Manager Tankhouse and earlier roles, November 1998 to February 2007, Silvassa.
- Contributed to capacity expansion from 60,000 MT/annum to 200,000 MT/annum.
- Developed and patented a process to produce LME grade cathodes from electro-winning circuit,
  delivering additional annual revenue.
- Led teams for Ni recovery, gold and silver recovery, power reduction, plant capacity improvement,
  steam consumption reduction, and greenfield commissioning at Tuticorin.

Education:
- Bachelor of Engineering in Metallurgy, Malaviya National Institute of Technology Jaipur, 1994-1998.

Contact:
- Email: patnivikram123@gmail.com
- LinkedIn: https://www.linkedin.com/in/vikram-patni-b6399a26
`;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function getOpenRouterKey() {
  return (
    process.env.OPENROUTER_API_KEY ||
    process.env.OPEN_ROUTER_API_KEY ||
    Object.entries(process.env).find(([key]) => key.toLowerCase().includes("openrouter"))?.[1]
  );
}

function normalizeAssistantText(text: string) {
  return text
    .replace(/\*\*/g, "")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[–—‑]/g, "-")
    .replace(/\u00a0/g, " ")
    .trim();
}

export async function POST(request: Request) {
  const apiKey = getOpenRouterKey();

  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenRouter API key was not found in the server environment." },
      { status: 500 },
    );
  }

  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    const messages = (body.messages ?? [])
      .filter(
        (message): message is ChatMessage =>
          (message.role === "user" || message.role === "assistant") &&
          typeof message.content === "string" &&
          message.content.trim().length > 0,
      )
      .slice(-10);

    if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
      return NextResponse.json({ error: "Send a user question to begin the chat." }, { status: 400 });
    }

    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://127.0.0.1:3000",
        "X-Title": "Vikram Patni Digital Twin",
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.35,
        max_tokens: 700,
        messages: [
          {
            role: "system",
            content: `You are Vikram Patni's professional digital twin on his personal website.
Answer questions about Vikram's career using only the provided career context. Speak in first
person when it feels natural, but never invent facts. If the answer is not in the context, say
that the current profile context does not include that detail and invite the visitor to contact
Vikram directly. Keep answers concise, executive, specific and credible. Prefer plain text with
ASCII punctuation and no Markdown formatting.

Career context:
${careerContext}`,
          },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `OpenRouter request failed: ${response.status} ${errorText.slice(0, 240)}` },
        { status: response.status },
      );
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const content = normalizeAssistantText(data.choices?.[0]?.message?.content ?? "");

    if (!content) {
      return NextResponse.json({ error: "OpenRouter returned an empty response." }, { status: 502 });
    }

    return NextResponse.json({ message: content, model: MODEL });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected chat error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
