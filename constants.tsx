
import { SummaryData } from './types';

export const MOCK_SUMMARY: SummaryData = {
  title: "AI and the Future of Human Creativity",
  description: "A deep dive into how generative AI is reshaping the creative landscape, featuring leading technologists and philosophers.",
  date: "Oct 24, 2024",
  duration: "52 mins",
  speakers: [
    { id: "1", name: "Dr. Elena Vance", role: "AI Ethicist", avatar: "https://picsum.photos/seed/elena/150/150" },
    { id: "2", name: "Marcus Thorne", role: "Digital Artist", avatar: "https://picsum.photos/seed/marcus/150/150" },
    { id: "3", name: "Satoshi Nakamoto", role: "Systems Architect", avatar: "https://picsum.photos/seed/satoshi/150/150" }
  ],
  consensus: [
    "AI is a collaborative tool, not a full replacement for human intent.",
    "Data privacy and attribution remain the biggest hurdles for adoption.",
    "The 'human touch' is moving from technical execution to conceptual curation."
  ],
  divergence: [
    "Should AI-generated art be copyrightable?",
    "The definition of 'originality' in an era of infinite training data.",
    "Speed vs. Quality: Does hyper-productivity devalue the creative process?"
  ],
  quotes: [
    { speakerId: "1", text: "Creativity isn't about the output, it's about the struggle of decision-making that leads to the output." },
    { speakerId: "2", text: "The brush didn't kill painting; AI won't kill art. It just changes the size of the canvas." },
    { speakerId: "3", text: "We are moving from a world of 'Search' to a world of 'Synthesis'." }
  ],
  recommendations: [
    "Start treating AI as a brainstorming partner, not a final output machine.",
    "Invest 30 minutes a day in learning 'latent space' navigation.",
    "Follow the ethical guidelines published by the Creative Commons for AI attribution."
  ],
  mindMap: {
    id: "root",
    label: "AI Creativity",
    children: [
      {
        id: "c1",
        label: "Tools",
        children: [
          { id: "c1-1", label: "LLMs" },
          { id: "c1-2", label: "Diffusion Models" }
        ]
      },
      {
        id: "c2",
        label: "Ethics",
        children: [
          { id: "c2-1", label: "Copyright" },
          { id: "c2-2", label: "Bias" }
        ]
      },
      {
        id: "c3",
        label: "Future",
        children: [
          { id: "c3-1", label: "Personalized Media" },
          { id: "c3-2", label: "Interactive Narratives" }
        ]
      }
    ]
  }
};
