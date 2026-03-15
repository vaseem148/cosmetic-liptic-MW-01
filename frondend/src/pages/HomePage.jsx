function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Create-MERN-App</h1>
      <p className="text-lg mb-2">
        🚀 Boilerplate created by{" "}
        <span className="font-semibold">Lokendra</span>
      </p>
      <p className="text-gray-700 mb-6">
        This template helps you start a MERN project quickly with ready-to-use
        backend auth and frontend structure.
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a
          href="https://github.com/yourusername/create-mern-app"
          target="_blank"
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          View on GitHub
        </a>
        <a
          href="#"
          className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Documentation
        </a>
      </div>

      <footer className="mt-12 text-gray-500 text-sm">
        Made with ❤️ by Lokendra
      </footer>
    </div>
  );
}

export default HomePage;
