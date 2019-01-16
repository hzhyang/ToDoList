import { observable, action} from 'mobx';

import CONSTANT from './constant';
class Store {
	constructor() {
		this.init();
	}

	/**
	* @props
	* */
	@observable formProps = CONSTANT.formProps;


	/**@action
	 * */
	@action init = () => {
		this.formProps.onFieldsChange = this.onFromChange;
	}

	@action onFromChange = (fields) => {
		console.log(fields,808080)
		this.formProps.items.forEach(item => {
			if (item.name == fields.name) {
				item.innerConfig.value = item.value;
			}
		})
	}

}

export default Store;