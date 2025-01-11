


function Greetings ({lang,children}){

    const getGreetings = (value) => {
        switch (value) {
            case 'en':
                return 'Hello';
                
            case  'es':
                return 'Hola';
                
            case  'fr':
                return 'Bonjour';
                
            case  'de':
                return 'Hallo';
                
        }
    
    };

    return (
        <div>
            <p lang={lang}>
            {getGreetings(lang)} {children}
            </p>
           
        </div>
    )
}
export default Greetings