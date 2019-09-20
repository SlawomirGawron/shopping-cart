import React from 'react';
import { connect } from 'react-redux';

import CheckboxInput from "src/components/BaseDataInputs/CheckboxInput/CheckboxInput";
import TextFieldInput from "src/components/BaseDataInputs/TextFieldInput/TextFieldInput";
import SelectInput from "src/components/BaseDataInputs/SelectInput/SelectInput";

import {getTotal} from "src/store/selectors/totalSelectors";
import {totalActionCreator} from "src/store/actions/totalActions";
import {getStoreDiscount} from "src/store/selectors/storeDiscountSelectors";
import {storeDiscountActionCreator} from "src/store/actions/storeDiscountActions";
import {getProvince} from "src/store/selectors/provinceSelectors";
import {provinceActionCreator} from "src/store/actions/provinceActionCreators";

import 'src/components/BaseDataInputs/BaseDataInputs.scss';


function BaseDataInputs(props) {
    const { total, totalActionCreator, storeDiscount, storeDiscountActionCreator, province, provinceActionCreator  } = props;

    const updateTotalInStore = (input) => {
        totalActionCreator(input);
    };

    const updateStoreDiscountInStore = (input) => {
        storeDiscountActionCreator(input);
    };

    const updateProvinceInStore = (input) => {
        provinceActionCreator(input);
    };

    return (
        <div className="base-data-inputs">
            <TextFieldInput total={total} storeDiscount={storeDiscount} updateTotalInStore={updateTotalInStore} />
            <CheckboxInput total={total} storeDiscount={storeDiscount} updateStoreDiscountInStore={updateStoreDiscountInStore}/>
            <SelectInput province={province} updateProvinceInStore={updateProvinceInStore} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        total: getTotal(state),
        storeDiscount: getStoreDiscount(state),
        province: getProvince(state)
    }
};

const mapDispatchToProps = {
    totalActionCreator: totalActionCreator,
    storeDiscountActionCreator: storeDiscountActionCreator,
    provinceActionCreator: provinceActionCreator
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseDataInputs);