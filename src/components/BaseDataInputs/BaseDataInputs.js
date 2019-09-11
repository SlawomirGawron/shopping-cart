import React, { useEffect  } from 'react';
import { connect } from 'react-redux';

import CheckboxInput from "src/common/CheckboxInput/CheckboxInput";
import TextFieldInput from "src/common/TextFieldInput/TextFieldInput";
import SelectInput from "src/common/SelectInput/SelectInput";

import {getTotal} from "src/store/selectors/totalSelectors";
import {totalActionCreator} from "src/store/actions/totalActions";
import {getStoreDiscount} from "src/store/selectors/storeDiscountSelectors";
import {storeDiscountActionCreator} from "src/store/actions/storeDiscountActions";
import {getProvince} from "src/store/selectors/provinceSelectors";
import {provinceActionCreator} from "src/store/actions/provinceActionCreators";

import 'src/components/BaseDataInputs/BaseDataInputs.scss';


function BaseDataInputs(props) {
    const { total } = props;

    return (
        <div className="base-data-inputs">
            <TextFieldInput edit={4}/>
            <CheckboxInput edit={5}/>
            <SelectInput edit={3}/>
        </div>
    );
}


// Maps states to properties for connect.
const mapStateToProps = (state) => {
    return {
        total: getTotal(state),
        storeDiscount: getStoreDiscount(state),
        province: getProvince(state)
    }
};

// Maps action creators to dispatches. Look at ..actions.js. This is the shorthand version, meaning that it does a a call in the background.
const mapDispatchToProps = {
    totalActionCreator: totalActionCreator,
    storeDiscountActionCreator: storeDiscountActionCreator,
    provinceActionCreator: provinceActionCreator
};

// Connects the store to the component.
// Store => createStore, actions, reducers
// connect => MapStateToProps(what you want to get from the store), mapDispatchToProps(This is not reducers. This dispatches an action to the store,
//                            meaning if you click this button then Redux will send that action to the store, the store will check it's reducers for that action [action.type], which updates the store)
// Store and connect are sort of separate things.
export default connect(mapStateToProps, mapDispatchToProps)(BaseDataInputs);