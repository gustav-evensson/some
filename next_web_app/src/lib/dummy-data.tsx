type Team = {
  id: string;
  name: string;
  gradient: string[];
}

type User = {
  id: string;
  name: string;
  email: string;
  gradient: string[];
  // company: string;
  role: string;
  location: string;
  teams: Team[];
}

export const user: User = {
  id: "123e4567-e89b-12d3-a456-426614174013",
  name: "Gustav Evensson",
  email: "gustav@some.se",
  gradient: ["ff6467", "51a2ff"],
  // company: "SoMe",
  role: "Founder",
  location: "Stockholm, Sweden",
  teams: [
    {
      id: "some-123456",
      name: "SoMe",
      gradient: ["FF5733", "33FF57"],
    },
    {
      id: "dinmedia-123456",
      name: "DinMedia",
      gradient: ["FF33A8", "33A8FF"],
    },
    {
      id: "geweb-123456",
      name: "GeWeb",
      gradient: ["FFD700", "FF8C00"],
    },
  ],
}

export const platforms = [
  {
    name: "Instagram",
    value: "instagram",
    icon: "@/public/instagram.svg",
  },
  {
    name: "TikTok",
    value: "tiktok",
    icon: "@/public/tiktok.svg",
  },
  {
    name: "YouTube",
    value: "youtube",
    icon: "@/public/youtube.svg",
  },
]

export const vibrantColors = [
  "FF5733", // Bright Red-Orange
  "FF33A8", // Hot Pink
  "33FF57", // Neon Green
  "33A8FF", // Electric Blue
  "FFD700", // Vivid Gold
  "FF8C00", // Deep Orange
  "8000FF", // Vivid Purple
  "00E5FF", // Cyan Blue
  "FF0066", // Neon Magenta
  "39FF14"  // Electric Lime
];

export const getRandomGradient = () => {
  const colorId1 = Math.floor(Math.random() * vibrantColors.length);
  let colorId2 = Math.floor(Math.random() * vibrantColors.length);
  while (colorId1 === colorId2) {
    colorId2 = Math.floor(Math.random() * vibrantColors.length);
  }
  return [vibrantColors[colorId1], vibrantColors[colorId2]];
}
