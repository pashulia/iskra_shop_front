import { Divider } from '@material-ui/core';

import AppToolbar from '../../components/UI/AppToolbar/AppToolbar';
import Carausel from '../../components/UI/Carausel/Carausel';
import Catalog from '../../components/UI/Catalog/Catalog';
import BrakePadsProductTabs
  from '../../components/UI/ProductTabs/BrakePadsProductTabs';
import PopularProductTabs
  from '../../components/UI/ProductTabs/PopularProductTabs';
import SparkPlugProductTabs
  from '../../components/UI/ProductTabs/SparkPlugProductTabs';
import WiresProductTabs from '../../components/UI/ProductTabs/WiresProductTabs';
import PromoBlock from '../../components/UI/PromoBlock/PromoBlock';

const Main = () => {
    return (
        <>
            <header>
                <AppToolbar />
            </header>
            <Divider style={{backgroundColor: 'blue', height: '2px'}} />
            <div className="App">
                <div className="Sidebar">
                    <Catalog />
                    <PopularProductTabs />
                </div>
                <div className="app-content">
                    <Carausel />
                    <PromoBlock />
                    <SparkPlugProductTabs />
                    <BrakePadsProductTabs />
                    <WiresProductTabs />
                </div>
            </div>
        </>
    )
}

export default Main;