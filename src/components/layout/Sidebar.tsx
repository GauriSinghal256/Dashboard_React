import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  FileText,
  KeyRound,
  Import,
  UploadCloud,
  Package,
  HardDrive,
  Bot,
  Link2,
  Bookmark,
  Puzzle,
  ListOrdered,
  Settings,
  HelpCircle,
  MessageSquare,
  UserRound,
} from "lucide-react";
import { useState } from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("articles");
  const [expandedItems, setExpandedItems] = useState<string[]>(["articles"]);

  const toggleExpand = (item: string) => {
    setExpandedItems((current) =>
      current.includes(item)
        ? current.filter((i) => i !== item)
        : [...current, item]
    );
  };

  return (
    <div className={cn("flex h-screen w-[240px] flex-col", className)}>
      <div className="flex h-14 items-center border-b px-6">
        <span className="text-xl font-bold">abun</span>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-2 p-2">
          <div className="flex items-center gap-2 rounded-md border border-transparent px-3 py-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-white">
              a
            </div>
            <div className="relative flex-1">
              <select className="w-full appearance-none border-none bg-transparent pr-8 text-sm focus:outline-none">
                <option>amazon.com</option>
              </select>
              <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
                <svg
                  className="h-4 w-4 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Articles Section */}
          <div className="mt-2">
            <Button
              variant="ghost"
              className={cn(
                "flex w-full justify-start gap-2 px-3",
                activeItem === "articles" && "bg-muted font-medium"
              )}
              onClick={() => {
                setActiveItem("articles");
                toggleExpand("articles");
              }}
            >
              <FileText className="h-4 w-4" />
              <span>Articles</span>
              <svg
                className={cn(
                  "ml-auto h-4 w-4 transition-transform duration-200",
                  expandedItems.includes("articles") ? "rotate-180" : ""
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>

            {expandedItems.includes("articles") && (
              <div className="ml-4 mt-1 space-y-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start pl-7 text-xs font-normal"
                >
                  Create Article
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start pl-7 text-xs font-normal"
                >
                  Generated Articles
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start pl-7 text-xs font-normal"
                >
                  Keyword Projects
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start pl-7 text-xs font-normal"
                >
                  AI Keyword to Article
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start pl-7 text-xs font-normal"
                >
                  Seed Competitor Keyword
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start pl-7 text-xs font-normal"
                >
                  Import Keyword from GSC
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start pl-7 text-xs font-normal"
                >
                  Manual Keyword to Article
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start pl-7 text-xs font-normal"
                >
                  Bulk Keyword to Article
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start pl-7 text-xs font-normal"
                >
                  Longtail Keyword to Article
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start pl-7 text-xs font-normal"
                >
                  Article Settings
                </Button>
              </div>
            )}
          </div>

          {/* Other menu items */}
          <NavItem
            icon={<Bot className="h-4 w-4" />}
            title="Auto Blog"
            isActive={activeItem === "autoblog"}
            onClick={() => setActiveItem("autoblog")}
          />
          <NavItem
            icon={<Link2 className="h-4 w-4" />}
            title="Internal Links"
            isActive={activeItem === "internallinks"}
            onClick={() => setActiveItem("internallinks")}
          />
          <NavItem
            icon={<Bookmark className="h-4 w-4" />}
            title="Free Backlinks"
            isActive={activeItem === "backlinks"}
            onClick={() => setActiveItem("backlinks")}
          />
          <NavItem
            icon={<Puzzle className="h-4 w-4" />}
            title="Integrations"
            isActive={activeItem === "integrations"}
            onClick={() => setActiveItem("integrations")}
          />
          <NavItem
            icon={<ListOrdered className="h-4 w-4" />}
            title="Subscription"
            isActive={activeItem === "subscription"}
            onClick={() => setActiveItem("subscription")}
          />
          <NavItem
            icon={<Package className="h-4 w-4" />}
            title="Affiliate Program"
            isActive={activeItem === "affiliate"}
            onClick={() => setActiveItem("affiliate")}
          />
          <NavItem
            icon={<HelpCircle className="h-4 w-4" />}
            title="Help Center"
            isActive={activeItem === "help"}
            onClick={() => setActiveItem("help")}
          />
          <NavItem
            icon={<MessageSquare className="h-4 w-4" />}
            title="Updates"
            isActive={activeItem === "updates"}
            onClick={() => setActiveItem("updates")}
          />
          <NavItem
            icon={<MessageSquare className="h-4 w-4" />}
            title="Live Chat Support"
            isActive={activeItem === "livechat"}
            onClick={() => setActiveItem("livechat")}
          />
          <NavItem
            icon={<UserRound className="h-4 w-4" />}
            title="Profile"
            isActive={activeItem === "profile"}
            onClick={() => setActiveItem("profile")}
          />
        </nav>
      </ScrollArea>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

function NavItem({ icon, title, isActive, onClick }: NavItemProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "flex w-full justify-start gap-2 px-3",
        isActive && "bg-muted font-medium"
      )}
      onClick={onClick}
    >
      {icon}
      <span>{title}</span>
    </Button>
  );
}