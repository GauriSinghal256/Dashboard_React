export interface Article {
  id: string;
  title: string;
  keyword: string;
  words: number;
  createdOn: string;
  status: "draft" | "published" | "scheduled" | "archived";
}

export const articles: Article[] = [
  {
    id: "1",
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [240000]",
    words: 4575,
    createdOn: "20 hours ago",
    status: "draft",
  },
  {
    id: "2",
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [240000]",
    words: 3485,
    createdOn: "21 hours ago",
    status: "draft",
  },
  {
    id: "3",
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [240000]",
    words: 2678,
    createdOn: "4 day ago",
    status: "draft",
  },
  {
    id: "4",
    title: "Top Virtual Executive Assistant Services [2024]",
    keyword: "virtual executive assistant [2600]",
    words: 2408,
    createdOn: "1 Oct, 24",
    status: "published",
  },
  {
    id: "5",
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services [3160]",
    words: 7153,
    createdOn: "—",
    status: "draft",
  },
  {
    id: "6",
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods [3600]",
    words: 2647,
    createdOn: "—",
    status: "scheduled",
  },
  {
    id: "7",
    title: "Backlinks 101: What are backlinks and why they're important [Free template]",
    keyword: "backlinks [11100]",
    words: 2201,
    createdOn: "—",
    status: "published",
  },
  {
    id: "8",
    title: "7 Leading AI SEO Tools in 2024 [Ranked & Compared]",
    keyword: "ai seo software [1810]",
    words: 1643,
    createdOn: "—",
    status: "archived",
  },
  {
    id: "9",
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [3160]",
    words: 1874,
    createdOn: "—",
    status: "draft",
  },
  {
    id: "10",
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [3160]",
    words: 1876,
    createdOn: "—",
    status: "draft",
  },
  {
    id: "11",
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [3160]",
    words: 1884,
    createdOn: "—",
    status: "draft",
  },
  {
    id: "12",
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [240000]",
    words: 3485,
    createdOn: "21 hours ago",
    status: "draft",
  },
  {
    id: "13",
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [240000]",
    words: 2678,
    createdOn: "4 day ago",
    status: "draft",
  },
  {
    id: "14",
    title: "Top Virtual Executive Assistant Services [2024]",
    keyword: "virtual executive assistant [2600]",
    words: 2408,
    createdOn: "1 Oct, 24",
    status: "published",
  },
  {
    id: "15",
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services [3160]",
    words: 7153,
    createdOn: "—",
    status: "draft",
  }
];