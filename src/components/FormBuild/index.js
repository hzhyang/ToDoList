import React, { Component } from 'react';
import {Form, Input, Select, Button } from 'antd';
import { Link } from 'react-router-dom';

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
					items.map((item,index) => {
						let initialValue = item.innerConfig.value;
						item.innerConfig.initialvalue = initialValue;
						const _item = {...item};
						delete _item.innerConfig.value;
						return(
							<Form.Item key={index} {...(_item.itemLayout ? _item.itemLayout : formProps.formLayout)} label={_item.config.label}>
								{getFieldDecorator( _item.name, { rules: _item.rules,initialValue})(
									this.renderInner(_item.type,_item)
								)}
							</Form.Item>
						)
					})
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
