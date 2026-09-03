import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, RotateCcw, Search, Heart, Check } from 'lucide-react';
import { PROPERTIES, Property } from '../../data/properties';
import { PropertyCard } from '../../components/PropertyCard/PropertyCard';
import './Properties.css';

interface PropertiesProps {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const Properties: React.FC<PropertiesProps> = ({ favorites, onToggleFavorite }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Filter States initialized from URL params if present
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [locationFilter, setLocationFilter] = useState<string>(searchParams.get('location') || '');
  const [typeFilter, setTypeFilter] = useState<string>(searchParams.get('type') || '');
  const [statusFilter, setStatusFilter] = useState<string>(searchParams.get('status') || '');
  const [priceRange, setPriceRange] = useState<string>(searchParams.get('price') || '');
  const [bhkFilter, setBhkFilter] = useState<string>(searchParams.get('bhk') || '');
  const [bathsFilter, setBathsFilter] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const showOnlyFavorites = searchParams.get('favorites') === 'true';

  useEffect(() => {
    // If URL has params, update filter states
    const loc = searchParams.get('location');
    if (loc) setLocationFilter(loc);
    const typ = searchParams.get('type');
    if (typ) setTypeFilter(typ);
    const stat = searchParams.get('status');
    if (stat) setStatusFilter(stat);
    const bhk = searchParams.get('bhk');
    if (bhk) setBhkFilter(bhk);
    const prc = searchParams.get('price');
    if (prc) setPriceRange(prc);
  }, [searchParams]);

  // Handle Category Pills
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setTypeFilter('');
    } else if (category === 'Penthouses') {
      setTypeFilter('Penthouse');
    } else if (category === 'Villas') {
      setTypeFilter('Villa');
    } else if (category === 'Sky Residences') {
      setTypeFilter('Sky Residence');
    } else if (category === 'Estates & Mansions') {
      setTypeFilter('Estate');
    }
  };

  const handleAmenityToggle = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]
    );
  };

  const resetAllFilters = () => {
    setSelectedCategory('All');
    setLocationFilter('');
    setTypeFilter('');
    setStatusFilter('');
    setPriceRange('');
    setBhkFilter('');
    setBathsFilter('');
    setSearchTerm('');
    setSelectedAmenities([]);
    setSortBy('featured');
    setSearchParams({});
  };

  // Filtered Properties Computation
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      // Favorites filter
      if (showOnlyFavorites && !favorites.includes(prop.id)) {
        return false;
      }

      // Text search
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesName = prop.title.toLowerCase().includes(query);
        const matchesLoc = prop.location.toLowerCase().includes(query);
        const matchesDesc = prop.description.toLowerCase().includes(query);
        if (!matchesName && !matchesLoc && !matchesDesc) return false;
      }

      // Location
      if (locationFilter && prop.city !== locationFilter) {
        return false;
      }

      // Property Type
      if (typeFilter && prop.type !== typeFilter) {
        return false;
      }

      // Buy / Rent
      if (statusFilter && prop.status !== statusFilter) {
        return false;
      }

      // Bedrooms
      if (bhkFilter && prop.bhk < parseInt(bhkFilter, 10)) {
        return false;
      }

      // Bathrooms
      if (bathsFilter && prop.bathrooms < parseInt(bathsFilter, 10)) {
        return false;
      }

      // Price Range (in Cr)
      if (priceRange) {
        if (priceRange === 'under-15' && prop.priceNumeric >= 15) return false;
        if (priceRange === '15-25' && (prop.priceNumeric < 15 || prop.priceNumeric > 25))
          return false;
        if (priceRange === '25-40' && (prop.priceNumeric < 25 || prop.priceNumeric > 40))
          return false;
        if (priceRange === 'above-40' && prop.priceNumeric <= 40) return false;
      }

      // Amenities filter
      if (selectedAmenities.length > 0) {
        const hasAllSelected = selectedAmenities.every((req) =>
          prop.amenities.some((a) => a.toLowerCase().includes(req.toLowerCase()))
        );
        if (!hasAllSelected) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') {
        return a.priceNumeric - b.priceNumeric;
      }
      if (sortBy === 'price-high') {
        return b.priceNumeric - a.priceNumeric;
      }
      if (sortBy === 'area-desc') {
        return b.areaNumeric - a.areaNumeric;
      }
      // default: featured first
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [
    showOnlyFavorites,
    favorites,
    searchTerm,
    locationFilter,
    typeFilter,
    statusFilter,
    bhkFilter,
    bathsFilter,
    priceRange,
    selectedAmenities,
    sortBy,
  ]);

  const displayedProperties = filteredProperties.slice(0, visibleCount);

  return (
    <div className="properties-page" id="properties-catalog-page">
      {/* 1. HERO SECTION */}
      <section className="properties-hero-section">
        <h1 className="properties-hero-title">
          {showOnlyFavorites ? 'Saved Residences' : 'Explore Properties'}
        </h1>
        <p className="properties-hero-sub">
          {showOnlyFavorites
            ? 'Your private curated shortlist of signature architectural properties.'
            : 'Unrivaled private residences, waterfront duplexes, and heritage acreage curated across India’s blue-chip enclaves.'}
        </p>
      </section>

      {/* 2. CONTROLS BAR */}
      <div className="properties-controls-bar">
        {/* Category Pills */}
        <div className="category-pill-list">
          {['All', 'Penthouses', 'Villas', 'Sky Residences', 'Estates & Mansions'].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategorySelect(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Right Controls */}
        <div className="controls-right">
          <button
            type="button"
            className={`filter-toggle-btn ${showAdvancedFilters ? 'active' : ''}`}
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            aria-expanded={showAdvancedFilters}
          >
            <SlidersHorizontal size={15} />
            <span>{showAdvancedFilters ? 'Close Filters' : 'Advanced Filters'}</span>
          </button>

          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort properties"
          >
            <option value="featured">Sort: Featured Residences</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="area-desc">Area: Largest Space</option>
          </select>
        </div>
      </div>

      {/* 3. ADVANCED FILTERS DRAWER */}
      {showAdvancedFilters && (
        <div className="advanced-filters-panel" id="advanced-filters-drawer">
          <div className="advanced-filters-container">
            {/* Search Query */}
            <div className="filter-group">
              <label className="filter-group-label">Keywords / Neighborhood</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="e.g. Worli Sea Face, Golf Links..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="filter-field-input"
                  style={{ width: '100%', paddingLeft: '2.25rem' }}
                />
                <Search
                  size={15}
                  color="var(--accent-gold)"
                  style={{ position: 'absolute', left: '10px', top: '12px' }}
                />
              </div>
            </div>

            {/* Location */}
            <div className="filter-group">
              <label className="filter-group-label">City</label>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="filter-field-select"
              >
                <option value="">All Locations</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Pune">Pune</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Patna">Patna</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div className="filter-group">
              <label className="filter-group-label">Bedrooms (Min BHK)</label>
              <select
                value={bhkFilter}
                onChange={(e) => setBhkFilter(e.target.value)}
                className="filter-field-select"
              >
                <option value="">Any Bedrooms</option>
                <option value="4">4+ BHK</option>
                <option value="5">5+ BHK</option>
                <option value="6">6+ BHK</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="filter-group">
              <label className="filter-group-label">Acquisition Bracket</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="filter-field-select"
              >
                <option value="">All Prices</option>
                <option value="under-15">Under ₹ 15 Cr</option>
                <option value="15-25">₹ 15 Cr – ₹ 25 Cr</option>
                <option value="25-40">₹ 25 Cr – ₹ 40 Cr</option>
                <option value="above-40">₹ 40 Cr +</option>
              </select>
            </div>
          </div>

          {/* Amenities Row */}
          <div className="amenities-filter-row">
            <span
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontWeight: 600,
                color: 'var(--accent-gold)',
              }}
            >
              Curated Features:
            </span>
            {['Pool', 'Wine Cellar', 'Spa', 'Helipad', 'Sea Link', 'Zen Courtyard'].map(
              (amenity) => (
                <label key={amenity} className="amenity-checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => handleAmenityToggle(amenity)}
                  />
                  <span>{amenity}</span>
                </label>
              )
            )}

            <button
              type="button"
              onClick={resetAllFilters}
              style={{
                marginLeft: 'auto',
                background: 'transparent',
                border: 'none',
                color: 'var(--accent-gold)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <RotateCcw size={13} />
              <span>Reset Filters</span>
            </button>
          </div>
        </div>
      )}

      {/* 4. LISTING RESULTS */}
      <section className="properties-grid-section">
        <div className="results-meta-bar">
          <span>
            Displaying {displayedProperties.length} of {filteredProperties.length} Signature Residences
          </span>
          {(locationFilter || typeFilter || bhkFilter || priceRange || searchTerm) && (
            <button
              type="button"
              onClick={resetAllFilters}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--accent-gold)',
                cursor: 'pointer',
                fontSize: '0.8125rem',
                textDecoration: 'underline',
              }}
            >
              Clear active filters
            </button>
          )}
        </div>

        {filteredProperties.length === 0 ? (
          <div className="properties-empty-state">
            <h3 className="empty-state-title">No Matching Residences Found</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              We could not find any properties that match your specified parameters. Our private acquisitions desk frequently negotiates off-market estates.
            </p>
            <button type="button" onClick={resetAllFilters} className="luxury-btn-primary">
              <span>View All Properties</span>
            </button>
          </div>
        ) : (
          <div className="properties-listing-grid">
            {displayedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                isFavorited={favorites.includes(property.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        )}

        {/* Load More Button if more properties exist */}
        {visibleCount < filteredProperties.length && (
          <div className="properties-pagination-wrap">
            <button
              type="button"
              className="luxury-btn-outline"
              onClick={() => setVisibleCount((prev) => prev + 6)}
            >
              <span>Load More Residences ({filteredProperties.length - visibleCount} remaining)</span>
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
