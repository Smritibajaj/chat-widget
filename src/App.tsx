import SearchForm from "./app/components/Input";
import MessageComponent from "./app/components/MessageComponent";

function App() {
  return (
    <div className="w-screen h-screen max-w-md bg-blue-100 mx-auto shadow-sm border border-gray-100 px-4 relative">
      <MessageComponent isRtl={true} />
      <MessageComponent isRtl={false} />
      <MessageComponent isRtl={true} />
      <MessageComponent isRtl={false} />
      <div className="absolute bottom-2 left-0 w-full px-4">
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
