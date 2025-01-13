function Rating ({children}) {

    const stars =  (value) => {
        switch (value) {
            case 0:
                return '☆☆☆☆☆';
            case 1:
                return '★☆☆☆☆';
                
            case  2:
                return '★★☆☆☆';
                
            case  3:
                return '★★★☆☆';
                
            case  4:
                return '★★★★☆';
                
            case  5:
                return '★★★★★';   
            
            default:
                return '☆☆☆☆☆'; 
            
        }
    
    };
    const roundedValue = Math.round(Number(children));


    return(
        <>
             <p>{stars(roundedValue)}</p>
        </>

    )
}
export default Rating