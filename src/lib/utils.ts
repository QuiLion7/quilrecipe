interface Colors {
  bg: string;
  badge: string;
}

interface ColorsNamesProps {
  [key: string]: Colors;
}

const COLORS: ColorsNamesProps = {
  green: {
    bg: "bg-[#ECF7D4]",
    badge: "bg-[#D6F497]",
  },
  orange: {
    bg: "bg-[#F9EFE1]",
    badge: "bg-[#F7E0B8]",
  },
  red: {
    bg: "bg-[#FBE5E7]",
    badge: "bg-[#FDC6C7]",
  },
  blue: {
    bg: "bg-[#E0F2F8]",
    badge: "bg-[#B3E5FC]",
  },
  yellow: {
    bg: "bg-[#FFF9C4]",
    badge: "bg-[#FFEB3B]",
  },
  purple: {
    bg: "bg-[#EDE7F6]",
    badge: "bg-[#D1C4E9]",
  },
  pink: {
    bg: "bg-[#FCE4EC]",
    badge: "bg-[#F8BBD0]",
  },
  brown: {
    bg: "bg-[#EFEBE9]",
    badge: "bg-[#D7CCC8]",
  },
  teal: {
    bg: "bg-[#E0F2F1]",
    badge: "bg-[#B2DFDB]",
  },
  lime: {
    bg: "bg-[#F9FBE7]",
    badge: "bg-[#E6EE9C]",
  },
  indigo: {
    bg: "bg-[#E8EAF6]",
    badge: "bg-[#C5CAE9]",
  },
  cyan: {
    bg: "bg-[#E0F7FA]",
    badge: "bg-[#B2EBF2]",
  },
  amber: {
    bg: "bg-[#FFF8E1]",
    badge: "bg-[#FFECB3]",
  },
};

export const getRandomColor = () => {
  const colorNames = Object.keys(COLORS);
  const randomIndex = Math.floor(Math.random() * colorNames.length);
  const randomColorName = colorNames[randomIndex];
  return COLORS[randomColorName];
};
