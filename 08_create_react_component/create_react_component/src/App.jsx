import Card from "./component/Card"

function App() {

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900">
        <h1 className="text-white text-5xl">Create New Component In React</h1>
        <div className="mt-5">
          <Card></Card>
        </div>
      </div>
    </>
  )
}

export default App