import React from 'react'
import { X, Star, MapPin, Phone, Clock, Compass, ExternalLink } from 'lucide-react'
import './RestaurantModal.css'

function RestaurantModal({ restaurant, onClose }) {
  if (!restaurant) return null

  // Link direto para abrir a rota no Google Maps com as coordenadas
  const googleMapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${restaurant.coords[0]},${restaurant.coords[1]}`

  return (
    <div className="restaurant-modal__backdrop" onClick={onClose}>
      <div className="restaurant-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="restaurant-modal__close" onClick={onClose} aria-label="Fechar">
          <X size={20} />
        </button>

        <img
          className="restaurant-modal__image"
          src={restaurant.image}
          alt={restaurant.name}
        />

        <div className="restaurant-modal__body">
          <div className="restaurant-modal__header">
            <h2>{restaurant.name}</h2>
          </div>

          <div className="restaurant-modal__tags">
            <span className="tag-rating">
              <Star size={16} fill="#eab308" color="#eab308" />
              {restaurant.rating}
            </span>
            <span className="tag-reviews">({restaurant.reviewsCount} avaliações)</span>
            <span>•</span>
            <span style={{ fontWeight: 600, color: '#0f172a' }}>{restaurant.category}</span>
            <span>•</span>
            <span style={{ color: '#16a34a', fontWeight: 600 }}>{restaurant.price}</span>
          </div>

          <p className="restaurant-modal__description">
            {restaurant.description}
          </p>

          <div className="restaurant-modal__info-list">
            <div className="info-item">
              <Clock size={18} color="#64748b" />
              <span>
                Status: <strong style={{ color: restaurant.isOpen ? '#16a34a' : '#94a3b8' }}>
                  {restaurant.isOpen ? 'Aberto agora' : 'Fechado no momento'}
                </strong>
              </span>
            </div>

            <div className="info-item">
              <MapPin size={18} color="#64748b" />
              <span>{restaurant.address}</span>
            </div>

            <div className="info-item">
              <Phone size={18} color="#64748b" />
              <a href={`tel:${restaurant.phone}`}>{restaurant.phone}</a>
            </div>
          </div>

          <div className="restaurant-modal__actions">
            <a
              href={googleMapsRouteUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-route"
            >
              <Compass size={18} />
              Como Chegar (Abrir Rota no Google Maps)
              <ExternalLink size={14} style={{ marginLeft: '4px' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantModal