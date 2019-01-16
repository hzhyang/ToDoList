export default {
	formProps: {
		onFieldsChange: null,
		formLayout: {
			labelCol: {
				span:10
			},
			wrapperCol: {
				span: 4
			},
		},
		items: [
			{
				name: 'todo_name',
				type: 'Input',
				config: {
					label: '代办名称',
				},
				innerConfig: {
					value: '',
					placeholder: '请输入代办名称'
				},
				rules: [
					{ required: true, message: '请输入名称'}
				]
			},
			{
				name: 'todo_type',
				type: 'Select',
				config: {
					label: '代办类型',
				},
				innerConfig: {},
				options: [
					{
						value: 'test',
						label: 'test'
					}
				]
			},
			{
				name: 'todo_remarks',
				type: 'Textarea',
				config: {
					label: '代办备注',
				},
				innerConfig: {
					placeholder: '请输入代办备注'
				}
			}
		]
	}

}