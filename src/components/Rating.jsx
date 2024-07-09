import PropTypes from 'prop-types';

export default function Rating({children}) {
    const rating = parseInt(children);
    return (
    <>
      {rating === 1 ? <h1>★☆☆☆☆</h1> :
       rating === 2 ? <h1>★★☆☆☆</h1> :
       rating === 3 ? <h1>★★★☆☆</h1> :
       rating === 4 ? <h1>★★★★☆</h1> :
       rating === 5 ? <h1>★★★★★</h1> :
       <h1>☆☆☆☆☆</h1>}
    </>
  )
}
Rating.propTypes = {
    children: PropTypes.string
}
