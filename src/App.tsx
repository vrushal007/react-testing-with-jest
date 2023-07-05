import { MuiMode } from "./components/mui/Mui-mode";
import { AppProviders } from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <MuiMode />
    </AppProviders>
  );
}

export default App;
