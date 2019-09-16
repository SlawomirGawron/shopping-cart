import React, { useState, useEffect  } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';

import SubTotal from 'src/components/ShoppingCart/SubTotal/SubTotal';
import StoreDiscount from 'src/components/ShoppingCart/StoreDiscount/StoreDiscount';
import SalesTax from 'src/components/ShoppingCart/SalesTax/SalesTax';
import TotalDue from 'src/components/ShoppingCart/TotalDue/TotalDue';
import ItemDetails from 'src/components/ShoppingCart/ItemDetails/ItemDetails';
import PromoCode from 'src/components/ShoppingCart/PromoCode/PromoCode';

import { promoCodeActionCreator } from 'src/store/actions/promoCodeActions';
import { taxInformationActionCreatorAsync } from 'src/store/actions/taxInformationActions';
import { getPromoCode } from 'src/store/selectors/promoCodeSelectors';
import { getTaxInformation } from 'src/store/selectors/taxInformationSelectors';
import {getTotal} from "src/store/selectors/totalSelectors";
import {totalActionCreator} from "src/store/actions/totalActions";
import {getStoreDiscount} from "src/store/selectors/storeDiscountSelectors";
import {storeDiscountActionCreator} from "src/store/actions/storeDiscountActions";
import {getProvince} from "src/store/selectors/provinceSelectors";
import {provinceActionCreator} from "src/store/actions/provinceActionCreators";

import 'src/components/ShoppingCart/ShoppingCart.scss';

function ShoppingCart(props) {
    const { taxInformationActionCreatorAsync, taxInformation, promoCode, total, storeDiscount, province } = props;

    // States using React Hooks. If setMyState isn't needed, then consider making it a variables/constant instead.
    const [promoMultiplier, setPromoMultiplier] = useState(1);
    const [disablePromoButton, setDisablePromoButton] = useState(false);

    // Helper functions.
    const giveDiscountHandler = () => {
        if (promoCode.code === "discount") {
            setPromoMultiplier(0.9);
            setDisablePromoButton(true);
        }
    };

    const roundTwoDecimal = (number) => {
        return Math.round( number * 1e2)/1e2;
    };

    const getSalesTaxRate = () => {
        return taxInformation.result[province]["applicable"];
    };

    // Calculations
    const totalSalesTax = ((total + storeDiscount) * getSalesTaxRate());
    const totalDue = (total + storeDiscount + totalSalesTax) * promoMultiplier;

    useEffect(() => {
        taxInformationActionCreatorAsync();
    },[taxInformationActionCreatorAsync]);

    return (
        <div className="shopping-cart">
            <Container className="shopping-cart-container">
                <SubTotal
                    total={roundTwoDecimal(total)}
                />
                <StoreDiscount
                    storeDiscount={roundTwoDecimal(storeDiscount)}
                />
                <SalesTax
                    province={province}
                    taxes={roundTwoDecimal(totalSalesTax)}
                />
                <TotalDue
                    total={roundTwoDecimal(totalDue)}
                />
                <ItemDetails
                    price={roundTwoDecimal(total)}
                />
                <PromoCode
                    isDisabled={disablePromoButton}
                    giveDiscount={() => giveDiscountHandler()}
                />
            </Container>
        </div>
    );
}


// Maps states to properties for connect.
const mapStateToProps = (state) => {
    return {
        taxInformation: getTaxInformation(state),
        promoCode: getPromoCode(state),
        total: getTotal(state),
        storeDiscount: getStoreDiscount(state),
        province: getProvince(state)
    }
};

// Maps action creators to dispatches. Look at ..actions.js. This is the shorthand version, meaning that it does a a call in the background.
const mapDispatchToProps = {
    promoCodeActionCreator: promoCodeActionCreator,
    taxInformationActionCreatorAsync: taxInformationActionCreatorAsync,
    totalActionCreator: totalActionCreator,
    storeDiscountActionCreator: storeDiscountActionCreator,
    provinceActionCreator: provinceActionCreator
};

// Connects the store to the component.
// Store => createStore, actions, reducers
// connect => MapStateToProps(what you want to get from the store), mapDispatchToProps(This is not reducers. This dispatches an action to the store,
//                            meaning if you click this button then Redux will send that action to the store, the store will check it's reducers for that action [action.type], which updates the store)
// Store and connect are sort of separate things.
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);