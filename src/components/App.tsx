import Container from './layout/Container';
import Footer from './layout/Footer';
import HashtagList from './hasgtag/HashtagList';
import { useFeedbackItemsStore } from '../components/stores/feedbackItemsStore';
import { useEffect } from 'react';

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Footer />

      <Container />

      <HashtagList />
    </div>
  );
}

export default App;
