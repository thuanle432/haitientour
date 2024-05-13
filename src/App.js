import Routers from "./routes/Routers";
import { UserProvider } from "./services/UserContext";
function App() {
  return (
    <>
      <UserProvider>
        <Routers />
      </UserProvider>
    </>
  );
}

export default App;
