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

    const [promoMultiplier, setPromoMultiplier] = useState(1);
    const [disablePromoButton, setDisablePromoButton] = useState(false);

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

const mapStateToProps = (state) => {
    return {
        taxInformation: getTaxInformation(state),
        promoCode: getPromoCode(state),
        total: getTotal(state),
        storeDiscount: getStoreDiscount(state),
        province: getProvince(state)
    }
};

const mapDispatchToProps = {
    promoCodeActionCreator: promoCodeActionCreator,
    taxInformationActionCreatorAsync: taxInformationActionCreatorAsync,
    totalActionCreator: totalActionCreator,
    storeDiscountActionCreator: storeDiscountActionCreator,
    provinceActionCreator: provinceActionCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);