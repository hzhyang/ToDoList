import React, { Component } from 'react';
import {Form, Input, Select, Button } from 'antd';
import { Link } from 'react-router-dom';
import {toJS} from "mobx";

class FormBuild extends Component{
	constructor(props) {
		super(props);
	}

	// this.props.form.validateFields((err) => {
	// 	if (err) {
	// 		item.iserror = false;
	// 	} else {
	// 	item.iserror = true;
	// 	}
	// })

	renderInner = (type,item) => {
		if (item.innerConfig.value) {
			item.innerConfig.initialvalue = item.innerConfig.value;
		}
		delete item.innerConfig.value;
		// console.log(item)
		const rendertype = `render${type}`;
		return this[rendertype](item);
	};

	renderButton = (item) => {
		return (
				<div className="button-wrap">
					<Button {...item.innerConfig}>{item.innerConfig.label}</Button>
					{
						item.iscance ? (
						<Button disabled={item.innerConfig.disabled}>
							<Link to={item.canceRoute}>取消</Link>
						</Button>
						): null
					}
				</div>

		)
	}

	renderInput = (item) => {
		return (
				<Input {...item.innerConfig}/>
		)
	}

	renderTextarea = (item) => {
		return (
				<Input.TextArea {...item.innerConfig}/>
		)
	}


	renderSelect = (item) => {
			return (
				<Select {...item.innerConfig}>
					{
						item.options.map((item,index) => (
							<Select.Option key={index} value={item.value}>{item.label}</Select.Option>
						))
					}
				</Select>
			)
	}

	render() {
		const { formProps } = this.props;
		const items = formProps.items;
		const { getFieldDecorator } = this.props.form;
		return (
			<Form>
				{
					items.map((item,index) => (
						<Form.Item key={index} {...(item.itemLayout ? item.itemLayout : formProps.formLayout)} label={item.config.label}>
							{getFieldDecorator( item.name, { rules: item.rules})(
									this.renderInner(item.type,item)
							)}
						</Form.Item>
					))
				}
			</Form>
		);
	}
}

export default Form.create({
	onValuesChange(props, fields, valueMap) {
		const name = Object.keys(fields)[0];
		const value = fields[name];
		const fieldData = {
			name,
			value
		}
		props.formProps.onFieldsChange && props.formProps.onFieldsChange(fieldData, props, valueMap);
	}
})(FormBuild);
