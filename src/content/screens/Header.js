import '../styles/Main.css'

const Header = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center flex-column flex-md-row justify-content-between mt-4 pb-3">
        <div style={{fontSize: "20px"}}>
          CLUB
          <span style={{color: '#1CD9CD'}}>
            108
          </span>
        </div>
        <div 
          className="d-flex align-items-center flex-column flex-md-row justify-content-between text-decoration-none"
          style={{ 
            width: "340px",
            fontSize: "16px",
          }}
        >
          <a href="#">
            О клубе
          </a>
          <a href="#">
            Абонименты
          </a>
          <a href="#">
            Контакты
          </a>
        </div>
        <button className='mainButton mainButtonS'>
          УЗНАТЬ СТОИМОСТЬ
        </button>
      </div>
    </div>
  );
}

export default Header;