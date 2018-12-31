import { observable, action } from "mobx";
import CONTENTS from './contents';

export default class Store {
	@observable tableprops = CONTENTS.tableprops

}