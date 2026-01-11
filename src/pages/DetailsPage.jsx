import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { 
  fetchOneCamper, 
  selectCamperDetails, 
  selectLoading, 
  selectError 
} from '../redux/campersSlice';


import css from './DetailsPage.module.css';


import BookingForm from '../components/BookingForm/BookingForm';
import Features from '../components/Features/Features';
import Reviews from '../components/Reviews/Reviews';

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  

  const camper = useSelector(selectCamperDetails);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  

  const [activeTab, setActiveTab] = useState('features');


  useEffect(() => {
    if (id) {
      dispatch(fetchOneCamper(id));
    }
  }, [dispatch, id]);

  if (isLoading) return <div className="loader">Yükleniyor...</div>;
  if (error) return <div className="error">Hata oluştu: {error}</div>;
  if (!camper) return null; 

  return (
    <div className={css.container}>
      <div className={css.headerSection}>
        <h2 className={css.title}>{camper.name}</h2>
        
        <div className={css.subInfo}>
          <span className={css.rating}>
            ⭐ {camper.rating} ({camper.reviews?.length} Reviews)
          </span>
          <span className={css.location}>📍 {camper.location}</span>
        </div>

        <div className={css.price}>
          €{camper.price ? Number(camper.price).toFixed(2) : '0.00'}
        </div>
      </div>


      <div className={css.gallerySection}>
        {camper.gallery && camper.gallery.length > 0 ? (
          camper.gallery.map((img, index) => (
            <div key={index} className={css.imageWrapper}>
              <img 
                src={img.original} 
                alt={`${camper.name} ${index + 1}`} 
                className={css.image}
              />
            </div>
          ))
        ) : (
          <p>Görsel yok</p>
        )}
      </div>


      <p className={css.description}>{camper.description}</p>

      <div className={css.tabs}>
        <button 
          onClick={() => setActiveTab('features')}
          className={activeTab === 'features' ? css.activeTab : ''}
        >
          Features
        </button>
        <button 
          onClick={() => setActiveTab('reviews')}
          className={activeTab === 'reviews' ? css.activeTab : ''}
        >
          Reviews
        </button>
      </div>

      <hr className={css.divider} />

      <div className={css.bottomSection}>

        <div className={css.tabContent}>
          {activeTab === 'features' && (
            <Features camper={camper} />
          )}

          {activeTab === 'reviews' && (
            <Reviews reviews={camper.reviews || []} />
          )}
        </div>


        <div className={css.bookingFormWrapper}>
          <BookingForm />
        </div>

      </div>
    </div>
  );
};

export default DetailsPage;