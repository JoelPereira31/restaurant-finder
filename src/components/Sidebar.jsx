import React from 'react'
import { Search, Star, MapPin, Utensils } from 'lucide-react'
import { categories } from '../data/restaurants'
import './Sidebar.css'

function Sidebar({
  restaurants,
  selectedCategory,
  onSelectCategory,
  searchTerm,
  onSearchChange,
  onlyOpen,
  onToggleOnlyOpen,
  selectedRestaurant,
  onSelectRestaurant
}) {
  return (
    <aside className="sidebar">
      {/* Topo / Logo */}
      <div className="sidebar__header">
        <div className="sidebar__brand">
          <div className="sidebar__brand-icon">
            <Utensils size={20} />
          </div>
          <h1>FoodFinder</h1>
        </div>

        {/* Input de Busca */}
        <div className="sidebar__search">
          <Search className="sidebar__search-icon" size={18} />
          <input
            type="text"
            placeholder="Buscar por restaurante ou prato..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      {/* Pílulas de Categorias */}
      <div className="sidebar__categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filtro Rápido: Aberto agora */}
      <div className="sidebar__filters">
        <button
          className={`filter-chip ${onlyOpen ? 'active' : ''}`}
          onClick={onToggleOnlyOpen}
        >
          {onlyOpen ? '✓ ' : ''}Aberto agora
        </button>
        <span style={{ margin: 'auto 0 auto auto', fontSize: '0.8rem' }}>
          {restaurants.length} encontrados
        </span>
      </div>

      {/* Lista de Restaurantes */}
      <div className="sidebar__list">
        {restaurants.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: '#94a3b8' }}>
            <p>Nenhum restaurante encontrado com esses filtros. 🍽️</p>
          </div>
        ) : (
          restaurants.map((restaurant) => {
            const isSelected = selectedRestaurant?.id === restaurant.id

            return (
              <div
                key={restaurant.id}
                className={`restaurant-card ${isSelected ? 'active' : ''}`}
                onClick={() => onSelectRestaurant(restaurant)}
              >
                <img
                  className="restaurant-card__image"
                  src={restaurant.image}
                  alt={restaurant.name}
                />
                <div className="restaurant-card__content">
                  <div>
                    <h3 className="restaurant-card__title">{restaurant.name}</h3>
                    <p className="restaurant-card__category">
                      {restaurant.category} • {restaurant.price}
                    </p>
                  </div>

                  <div className="restaurant-card__stats">
                    <span className="stat-rating">
                      <Star size={14} fill="#eab308" color="#eab308" />
                      {restaurant.rating}
                    </span>
                    <span className={`stat-status ${restaurant.isOpen ? 'open' : 'closed'}`}>
                      {restaurant.isOpen ? 'Aberto' : 'Fechado'}
                    </span>
                  </div>

                  <p className="restaurant-card__address">
                    <MapPin size={12} style={{ display: 'inline', marginRight: '3px' }} />
                    {restaurant.address}
                  </p>
                </div>
              </div>
            )
          })
        )}
      </div>
    </aside>
  )
}

export default Sidebar