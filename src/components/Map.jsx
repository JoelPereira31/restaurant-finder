import React, { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { Navigation } from 'lucide-react'
import './Map.css'

// Cria o ícone personalizado de pino de restaurante usando HTML/CSS
const createRestaurantIcon = (isActive) => {
  return L.divIcon({
    className: `custom-marker ${isActive ? 'active' : ''}`,
    html: `<span class="custom-marker-icon">🍽️</span>`,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38]
  })
}

// Cria o ícone do ponto azul do usuário
const userIcon = L.divIcon({
  className: 'user-marker',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
})

// Subcomponente inteligente que controla o centro, zoom e o balão do mapa
function MapController({ center, selectedRestaurant, markerRefs }) {
  const map = useMap()

  useEffect(() => {
    if (selectedRestaurant) {
      // 1. Voa suavemente até o restaurante
      map.flyTo(selectedRestaurant.coords, 16, {
        duration: 1.2
      })

      // 2. Abre o balãozinho automaticamente após o voo
      const timer = setTimeout(() => {
        const marker = markerRefs.current[selectedRestaurant.id]
        if (marker) {
          marker.openPopup()
        }
      }, 600)

      return () => clearTimeout(timer)
    } else if (center) {
      map.flyTo(center, 14, {
        duration: 1.2
      })
    }
  }, [center, selectedRestaurant, map, markerRefs])

  return null
}

function Map({ restaurants, selectedRestaurant, onSelectRestaurant, userLocation, onFindLocation }) {
  const defaultCenter = [-23.5614, -46.6559]
  // Guarda a referência de cada marcador no mapa para podermos abrir o popup via código
  const markerRefs = useRef({})

  return (
    <div className="map-container">
      <MapContainer
        center={defaultCenter}
        zoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Gerenciador de animação de voo e abertura de popup */}
        <MapController
          center={userLocation || defaultCenter}
          selectedRestaurant={selectedRestaurant}
          markerRefs={markerRefs}
        />

        {/* Marcador da localização real do usuário */}
        {userLocation && (
          <Marker position={userLocation} icon={userIcon}>
            <Popup>Você está aqui! 📍</Popup>
          </Marker>
        )}

        {/* Marcadores dos Restaurantes */}
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.id}
            position={restaurant.coords}
            icon={createRestaurantIcon(selectedRestaurant?.id === restaurant.id)}
            ref={(el) => {
              if (el) markerRefs.current[restaurant.id] = el
            }}
            eventHandlers={{
              click: () => onSelectRestaurant(restaurant)
            }}
          >
            <Popup>
              <div className="popup-card">
                <img src={restaurant.image} alt={restaurant.name} />
                <h4>{restaurant.name}</h4>
                <p>⭐ {restaurant.rating} • {restaurant.category}</p>
                <p style={{ marginTop: '4px', fontSize: '0.75rem' }}>{restaurant.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Botão flutuante para encontrar localização */}
      <button className="geo-button" onClick={onFindLocation}>
        <Navigation size={18} />
        Minha Localização
      </button>
    </div>
  )
}

export default Map