import { ArticlesTable } from "./ArticlesTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { articles } from "./data";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTab, setCurrentTab] = useState("generated");

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Articles</h1>
      </div>

      <Tabs
        defaultValue="generated"
        className="space-y-4"
        onValueChange={setCurrentTab}
      >
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <TabsList>
            <TabsTrigger value="generated">Generated Articles</TabsTrigger>
            <TabsTrigger value="published">Published Articles</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Articles</TabsTrigger>
            <TabsTrigger value="archived">Archived Articles</TabsTrigger>
          </TabsList>

          <div className="flex w-full max-w-sm items-center">
            <Input
              placeholder="Search for Title & Keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9"
            />
          </div>
        </div>

        <TabsContent value="generated" className="space-y-4">
          <ArticlesTable
            articles={filteredArticles}
            currentTab={currentTab}
          />
        </TabsContent>

        <TabsContent value="published" className="space-y-4">
          <ArticlesTable
            articles={filteredArticles.filter(
              (article) => article.status === "published"
            )}
            currentTab={currentTab}
          />
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <ArticlesTable
            articles={filteredArticles.filter(
              (article) => article.status === "scheduled"
            )}
            currentTab={currentTab}
          />
        </TabsContent>

        <TabsContent value="archived" className="space-y-4">
          <ArticlesTable
            articles={filteredArticles.filter(
              (article) => article.status === "archived"
            )}
            currentTab={currentTab}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}