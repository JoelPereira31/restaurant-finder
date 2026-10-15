import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Map from './components/Map'
import RestaurantModal from './components/RestaurantModal'
import { initialRestaurants } from './data/restaurants'
import './App.css'

function App() {
  const [restaurants] = useState(initialRestaurants)
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [onlyOpen, setOnlyOpen] = useState(false)
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)
  const [modalRestaurant, setModalRestaurant] = useState(null)
  const [userLocation, setUserLocation] = useState(null)

  // Filtro inteligente em tempo real
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCategory =
      selectedCategory === 'Todos' || restaurant.category === selectedCategory

    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesOpen = !onlyOpen || restaurant.isOpen

    return matchesCategory && matchesSearch && matchesOpen
  })

  // Localização via GPS do navegador
  const handleFindLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation([latitude, longitude])
          setSelectedRestaurant(null)
        },
        (error) => {
          alert('Não foi possível obter sua localização. Verifique as permissões do navegador!')
          console.error(error)
        }
      )
    } else {
      alert('Geolocalização não é suportada pelo seu navegador.')
    }
  }

  // Quando seleciona um restaurante, foca no mapa e abre os detalhes completos
  const handleSelectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant)
    setModalRestaurant(restaurant)
  }

  return (
    <div className="app-container">
      <Sidebar
        restaurants={filteredRestaurants}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onlyOpen={onlyOpen}
        onToggleOnlyOpen={() => setOnlyOpen(!onlyOpen)}
        selectedRestaurant={selectedRestaurant}
        onSelectRestaurant={handleSelectRestaurant}
      />

      <main className="map-section">
        <Map
          restaurants={filteredRestaurants}
          selectedRestaurant={selectedRestaurant}
          onSelectRestaurant={handleSelectRestaurant}
          userLocation={userLocation}
          onFindLocation={handleFindLocation}
        />
      </main>

      {/* Modal de Detalhes com Rota no Google Maps */}
      {modalRestaurant && (
        <RestaurantModal
          restaurant={modalRestaurant}
          onClose={() => setModalRestaurant(null)}
        />
      )}
    </div>
  )
}

export default App