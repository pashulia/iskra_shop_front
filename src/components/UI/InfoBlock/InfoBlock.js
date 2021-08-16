import './InfoBlock.css';

import {
  faClock,
  faPhoneSquare,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const clock = <FontAwesomeIcon icon={faClock} />
const truck = <FontAwesomeIcon icon={faTruck} />
const phone = <FontAwesomeIcon icon={faPhoneSquare} />
const InfoBlock = () => {
  return (
    <div className="container">
      <div class="support-client hidden-xs">
        <div className="row">
          {/* <!-- Start Single-Support --> */}
            <div className="col-md-3 hidden-sm">
              <div className="single-support">
                <div className="support-content">
                  <i className="fa fa-clock-o">{clock}</i>
                  <div className="support-text">
                    <h1 className="zero gfont-1">Время работы</h1>
                    <p>Пн - Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Single-Support -->
            <!-- Start Single-Support --> */}
            <div className="col-md-3 col-sm-4">
              <div className="single-support">
                <i className="fa fa-truck">{truck}</i>
                <div className="support-text">
                  <h1 className="zero gfont-1">Доставка</h1>
                  <p>При заказе от 40000тг</p>
                </div>
              </div>
            </div>
            {/* <!-- End Single-Support -->
            <!-- Start Single-Support --> */}
            <div className="col-md-3 col-sm-4">
              <div className="single-support">
                <i className="fa fa-phone-square">{phone}</i>
                <div className="support-text">
                  <h1 className="zero gfont-1">Тел: +7(777)1234567</h1>
                  <p>Закажи онлайн сейчас!</p>
                </div>
              </div>
            </div>
          {/* <!-- End Single-Support --> */}
        </div>
      </div>
      
    </div>
  )
};

export default InfoBlock;