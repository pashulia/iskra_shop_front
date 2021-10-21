import Carausel from '../../components/UI/Carausel/Carausel';
import Catalog from '../../components/UI/Catalog/Catalog';
import BrakePadsProductTabs from '../../components/UI/ProductTabs/BrakePadsProductTabs';
import PopularProductTabs from '../../components/UI/ProductTabs/PopularProductTabs';
import SparkPlugProductTabs from '../../components/UI/ProductTabs/SparkPlugProductTabs';
import WiresProductTabs from '../../components/UI/ProductTabs/WiresProductTabs';
import PromoBlock from '../../components/UI/PromoBlock/PromoBlock';

const Main = () => {
    return (
        <>
            <div className="app">
                <div className="sidebar">
                    <div className="promo__menu">
                        <Catalog/>
                        <PopularProductTabs/>
                    </div>
                    <div className="promo">
                        <Carausel/>
                        <PromoBlock/>
                    </div>
                </div>
                <div className="app-content">
                    <SparkPlugProductTabs/>
                    <BrakePadsProductTabs/>
                    <WiresProductTabs/>
                </div>
            </div>
        </>
    )
}

export default Main;