import './CreateReviewModal.css';

const CreateReviewModal = ({data, setCreateReviewModalState}) => {

  return (
    <section className="createReviewModal">
      <h3>New Review</h3>
      <form>
        <input type='text' placeholder='Select a game to Review'/>
        <div className='gameToReview'>
          <p>Game Title</p>
          <span>93</span>
        </div>

        <input type="text" placeholder='Insert a title for your review' />
        
        <div className='scoreSelector'>
          {[1,2,3,4,5,6,7,8,9,10].map( (item, index) => (
            <div key={index} className='scoreSelectorItem'></div>
          )
          )}
        </div>

        <textarea placeholder='Write your review' />

        <input type='submit' value={'Review'} />
      </form>
    </section>
  )
}

export default CreateReviewModal;