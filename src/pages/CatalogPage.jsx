import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campersSlice";
import CamperCard from "../components/CamperCard/CamperCard"; 
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./CatalogPage.module.css";
const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.campers);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useState({});
  useEffect(() => {
    dispatch(fetchCampers({ page, limit: 4, ...searchParams }));
  }, [dispatch, page, searchParams]);
    const handleSearch = (params) => {
    setSearchParams(params); 
    setPage(1);
  };
  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(fetchCampers({ page: nextPage, limit: 4 }));
    setPage(nextPage);
  };

  return (
    <div className={styles.catalogPage}>
      <Sidebar onSearch={handleSearch} />
      
      <div className={styles.listContainer}>
        {isLoading && items.length === 0 && <p>Loading...</p>}
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {Array.isArray(items) && items.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))}
        </div>
        {!isLoading && items.length === 0 && <p>No vehicles meeting the criteria were found.</p>}
  
        {items.length > 0 && !isLoading && (
            <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
                Load More
            </button>
        )}
        
        {isLoading && items.length > 0 && <p style={{textAlign: "center"}}>Loading more...</p>}
        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
};

export default CatalogPage;