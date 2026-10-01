export const courseFilters = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export type LearningPathIcon =
  | "design"
  | "development"
  | "software"
  | "business"
  | "marketing"
  | "photography";

export interface LearningPath {
  title: string;
  icon: LearningPathIcon;
}

export const learningPaths: LearningPath[] = [
  {
    title: "Design",
    icon: "design",
  },
  {
    title: "Development",
    icon: "development",
  },
  {
    title: "IT & Software",
    icon: "software",
  },
  {
    title: "Business",
    icon: "business",
  },
  {
    title: "Marketing",
    icon: "marketing",
  },
  {
    title: "Photography",
    icon: "photography",
  },
];
