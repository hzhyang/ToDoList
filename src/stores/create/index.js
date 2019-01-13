import { observable, action} from 'mobx';

import CONSTANT from './constant';
class Store {

	/**
	* @props
	* */
	@observable formProps = CONSTANT.formProps;

}

export default Store;