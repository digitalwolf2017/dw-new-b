export const AI_WORKFLOW_STEPS = [
  {
    number: "1",
    title: "Understand\n& Discover",
    icon: "megaphone",
    description:
      "Before creating any strategy, we use AI-powered insights to understand your market, customers, competitors, and business challenges to uncover new growth opportunities.",
  },
  {
    number: "2",
    title: "Strategise\n& Plan",
    icon: "pen",
    description:
      "We combine human expertise with AI-driven insights to identify patterns, understand customer intent, and create strategies aligned with your business goals.",
  },
  {
    number: "3",
    title: "Create &\nEnhance",
    icon: "megaphone",
    description:
      "AI helps us generate ideas, explore possibilities, and speed up content creation, while our team adds the creativity, strategy, and brand understanding that make it impactful.",
  },
  {
    number: "4",
    title: "Execute &\nAutomate",
    icon: "pen",
    description:
      "We connect AI with MarTech tools, CRM, and automation workflows to streamline processes, improve customer experiences, and make marketing more efficient.",
  },
  {
    number: "5",
    title: "Analyse &\nOptimise",
    icon: "megaphone",
    description:
      "We continuously monitor performance, uncover insights, and refine strategies using AI-powered analysis to help your marketing deliver better results over time.",
  },
] as const;

export type AiWorkflowIcon = (typeof AI_WORKFLOW_STEPS)[number]["icon"];
