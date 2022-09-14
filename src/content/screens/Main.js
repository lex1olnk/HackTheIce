import '../styles/Main.css'

const Main = () => {
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between flex-column flex-md-row mt-4">
        <div className="d-flex align-items-left flex-column" style={{maxWidth: '50%'}}>
          <div className="mb-4" style={{fontSize: 48}}>
            Придайте форму
            <br/>
            <span style={{color: "#1CD9CD"}}>Своему телу</span>
          </div>
          <div className="mb-5" style={{fontSize: 18, fontWeight: 400}}>
            Для любителей силовых тренировок CLUB 108 предлагает современный тренажерный зал, оборудованный профессиональными тренажерами
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <button className="mainButton mainButtonF">
              Пробная тренировка
            </button>
            <button className="mainButton mainButtonS">
              Подробнее
            </button>
          </div>
        </div>
        <div>
          <img src={require('../images/Kach.png')} style={{width: '480px', height: '720px'}}/>
        </div>
      </div>
    </div>
  );
}

export default Main;