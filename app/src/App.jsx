import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { routes } from "./routes/routes"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound" // 🔹 bu muhim: alohida import

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-blue-100">
        <p className="text-blue-600 text-xl font-semibold">Yuklanmoqda...</p>
      </div>
    )
  }

  return (
    <Router>
      <Header />

      <main className="min-h-[80vh] bg-gray-50">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          {/* 🔻 Bu doimo eng oxirida bo‘lishi kerak */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  )
}
