import React, { Component } from 'react';
import {Form, Input, Select,} from 'antd';

class FormBuild extends Component{
	constructor(props) {
		super(props);
	}

	renderInner = (type,item) => {
		if (item.innerConfig.value) {
			item.innerConfig.initialvalue = item.innerConfig.value;
		}
		delete item.innerConfig.value;
		const rendertype = `render${type}`;
		return this[rendertype](item);
	};

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

	renderButtion = () => {

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
		console.log(formProps)
		const items = formProps.items;
		const { getFieldDecorator } = this.props.form;
		return (
			<Form>
				{
					items.map((item,index) => (
						<Form.Item key={index} {...(item.itemLayout ? item.itemLayout : formProps.formLayout)} label={item.config.label}>
							{getFieldDecorator( item.name, { rules: item.rules })(
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