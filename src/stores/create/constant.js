export default {
	formProps: {
		onFieldsChange: null,
		formLayout: {
			labelCol: {
				span:2
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
					innervalue: '',
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
				innerConfig: {
					innervalue: ''
				},
				options: [
					{
						value: 'important',
						label: '重要的'
					},
					{
						value: 'urgent',
						label: '紧急的'
					},
					{
						value: 'importanturgent',
						label: '紧急且重要的'
					},
					{
						value: 'general',
						label: '一般的'
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
					innervalue:'',
					placeholder: '请输入代办备注'
				}
			},
			{
				name: 'todo_submit',
				type: 'Button',
				issubmit: true,
				iscance: true,
				canceRoute: '',
				config: {
					label: ''
				},
				innerConfig: {
					label: '提交',
					type: 'primary',
					disabled: false
				}
			},
		]
	}
}
