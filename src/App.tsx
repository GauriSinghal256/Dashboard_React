import { ThemeProvider } from "@/components/theme-provider";
import Dashboard from "@/components/dashboard/Dashboard";
import Layout from "@/components/layout/Layout";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
}

export default App;