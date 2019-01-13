export default {
	formProps: {
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
				// itemLayout: {
				// 	labelCol: { span: 2},
				// 	wrapperCol: { span: 4}
				// },
				innerConfig: {
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
				selectConfig: {},
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
				// itemLayout: {
				// 	labelCol: { span: 2},
				// 	wrapperCol: { span: 4}
				// },
				innerConfig: {
					value: '请输入代办备注'
				}
			}
		]
	}

}