import {
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Article } from "./data";

interface ArticlesTableProps {
  articles: Article[];
  currentTab: string;
}

export function ArticlesTable({ articles }: ArticlesTableProps) {
  const [sortColumn, setSortColumn] = useState<keyof Article | null>("title");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [entriesPerPage, setEntriesPerPage] = useState("10");
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const handleSort = (column: keyof Article) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedArticles = [...articles].sort((a, b) => {
    if (!sortColumn) return 0;

    if (sortDirection === "asc") {
      return a[sortColumn] > b[sortColumn] ? 1 : -1;
    } else {
      return a[sortColumn] < b[sortColumn] ? 1 : -1;
    }
  });

  const handleSelectAllRows = (checked: boolean) => {
    if (checked) {
      setSelectedRows(articles.map((article) => article.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    }
  };

  const renderSortIcon = (column: keyof Article) => {
    if (sortColumn !== column) return null;
    return sortDirection === "asc" ? (
      <ChevronUp className="ml-1 h-4 w-4" />
    ) : (
      <ChevronDown className="ml-1 h-4 w-4" />
    );
  };

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox
                  checked={
                    selectedRows.length > 0 &&
                    selectedRows.length === articles.length
                  }
                  onCheckedChange={handleSelectAllRows}
                  aria-label="Select all"
                />
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("title")}
              >
                <div className="flex items-center">
                  Article Title
                  {renderSortIcon("title")}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("keyword")}
              >
                <div className="flex items-center">
                  Keyword [Traffic]
                  {renderSortIcon("keyword")}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("words")}
              >
                <div className="flex items-center">
                  Words
                  {renderSortIcon("words")}
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("createdOn")}
              >
                <div className="flex items-center">
                  Created On
                  {renderSortIcon("createdOn")}
                </div>
              </TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Publish</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedArticles.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="h-24 text-center text-muted-foreground"
                >
                  No articles found.
                </TableCell>
              </TableRow>
            ) : (
              sortedArticles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(article.id)}
                      onCheckedChange={(checked) =>
                        handleSelectRow(article.id, !!checked)
                      }
                      aria-label={`Select ${article.title}`}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{article.title}</TableCell>
                  <TableCell>
                    <span className="text-blue-600 hover:underline">
                      {article.keyword}
                    </span>
                  </TableCell>
                  <TableCell>{article.words}</TableCell>
                  <TableCell>{article.createdOn}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 rounded-md px-3 text-xs"
                    >
                      View
                    </Button>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="ml-auto flex h-8 w-8 p-0"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Publish Now</DropdownMenuItem>
                          <DropdownMenuItem>Schedule</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div>Total {articles.length} Article Titles</div>
          <div>|</div>
          <div>Show</div>
          <Select
            value={entriesPerPage}
            onValueChange={setEntriesPerPage}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
          <div>entries per page</div>
        </div>

        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">
              Page 1 / 1
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              disabled
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronDown className="h-4 w-4 rotate-90" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              disabled
            >
              <span className="sr-only">Go to next page</span>
              <ChevronDown className="h-4 w-4 -rotate-90" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}