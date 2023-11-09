import { Toaster } from "react-hot-toast";
import PageTitle from "./components/PageTitle";
import style from "./styles/modules/app.module.scss";
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO LIST</PageTitle>
        <div className={style.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          fontSize: "1.4rem",
        }}
      ></Toaster>
    </>
  );
}

export default App;
