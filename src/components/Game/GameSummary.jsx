import './GameSummary.css';

const GameSummary = ({content}) => {
  
  return (
    <section className='gameSummary'>
      <h6>Summary</h6>
      <p>{content}</p>
    </section>
  )
}

export default GameSummary;