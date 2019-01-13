import React, { Component } from 'react';
import {Form, Input, Select,} from 'antd';

class FormBuild extends Component{
	constructor(props) {
		super(props);
	}

	renderInner = (type,item) => {
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
				<Select {...item.selectConfig}>
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

export default Form.create()(FormBuild);