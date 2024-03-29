import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import Router from "router/Router";
import Layout from "components/templates/Layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
      retry:1
    }
  }
})

function App() {
  
  
  return (
    
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Toaster />
          <Layout>
            <Router/>
          </Layout>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App;
