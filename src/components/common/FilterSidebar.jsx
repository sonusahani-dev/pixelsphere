"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PriceSlider from "./PriceSlider";
import RatingFilter from "./RatingFilter";
import { usePhotographers } from '@/context/PhotographerContext';

const cities = ["Delhi", "Mumbai", "Bangalore", "Hyderabad"];
const styles = ["Indoor", "Outdoor", "Traditional", "Modern"];
const tags = ["Wedding", "Newborn", "Family", "Pre-wedding"];
const pricingOptions = ["₹10,000", "₹20,000", "₹30,000", "₹50,000"];

const FilterSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const { setFilters } = usePhotographers();

  const [selectedCity, setSelectedCity] = useState(searchParams.get("city") || "");
  const [selectedStyles, setSelectedStyles] = useState(searchParams.get("styles")?.split(",") || []);
  const [selectedTags, setSelectedTags] = useState(searchParams.get("tags")?.split(",") || []);
  const [selectedPricing, setSelectedPricing] = useState(searchParams.get("pricing")?.split(",") || []);
  const [selectedRating, setSelectedRating] = useState(searchParams.get("rating") || "");
  const [searchText, setSearchText] = useState(searchParams.get("search") || "");

  //Single useEffect to update URL + Context
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCity) params.set("city", selectedCity);
    if (selectedStyles.length) params.set("styles", selectedStyles.join(","));
    if (selectedTags.length) params.set("tags", selectedTags.join(","));
    if (selectedPricing.length) params.set("pricing", selectedPricing.join(","));
    if (selectedRating) params.set("rating", selectedRating);
    if (searchText) params.set("search", searchText);

    // Update the URL
    router.push(`${pathname}?${params.toString()}`);

    // Update Context Filters (used in filtering logic)
    setFilters({
      city: selectedCity,
      styles: selectedStyles,
      tags: selectedTags,
      search: searchText,
      minRating: selectedRating ? parseFloat(selectedRating) : 0,
      maxPrice:
        selectedPricing.length > 0
          ? Math.max(...selectedPricing.map(p => parseInt(p.replace(/[₹,]/g, ''))))
          : 50000,
    });
  }, [selectedCity, selectedStyles, selectedTags, selectedPricing, selectedRating, searchText]);

  const handleCheckboxChange = (value, selectedValues, setSelectedValues) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-20 right-4 z-50 bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 
          transition-all duration-600 ease-in-out
          ${isOpen ? "translate-y-138 opacity-100" : "-translate-y-2 opacity-80"}
        `}
      >
        {isOpen ? "Close" : "Filters"}
      </button>

      {/* Slide-in Sidebar */}
      <aside
        className={`fixed top-17 right-0 h-fit w-72 dark:bg-teal-80 bg-white shadow-lg rounded-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 pt-5 overflow-hidden h-full">
          <h2 className="text-xl font-bold mb-4">Filter Photographers</h2>

          <SearchBar />
          <PriceSlider />
          <RatingFilter />

          {/* City Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">City</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full border rounded px-2 py-1"
            >
              <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Styles Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Styles</label>
            {styles.map((style) => (
              <label key={style} className="flex items-center space-x-2 text-sm mb-1">
                <input
                  type="checkbox"
                  checked={selectedStyles.includes(style)}
                  onChange={() =>
                    handleCheckboxChange(style, selectedStyles, setSelectedStyles)
                  }
                />
                <span>{style}</span>
              </label>
            ))}
          </div>

          {/* Tags Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Tags</label>
            {tags.map((tag) => (
              <label key={tag} className="flex items-center space-x-2 text-sm mb-1">
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() =>
                    handleCheckboxChange(tag, selectedTags, setSelectedTags)
                  }
                />
                <span>{tag}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
