import React from 'react';
import common from '@src/utils/common';

export default {
	formProps:{
		onFieldsChange: null,
		formLayout: {
			labelCol: {
				span:6
			},
			wrapperCol: {
				span: 16
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
					value: 'qweqwe',
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
					placeholder: '请输入代办备注'
				}
			}
		]
	},
	ModalProps:{
		title: '修改',
		visible: false
	},
	tableprops: {
		pagination:{},
		// rowSelection:{
		// 	onChange: null
		// },
		columns:[
			{
				dataIndex: 'checkbox',
				key: 'checkbox',
				title: '标记',
				width: 100
			},
			{
				dataIndex: 'todo_name',
				key: 'todo_name',
				title: '事件名称',
				width:250
			},
			{
				dataIndex: 'createdate',
				key: 'createdate',
				title: '事件创建时间',
				width: 150,
				render: (text) => {
					return (
							<span>
								{
									common.gettime(text)
								}
							</span>
					)
				}
			},
			{
				dataIndex: 'status',
				key: 'status',
				title: '状态',
				width: 100,
				render: ( text ) => {
					return (
							<span>
								{
									text ? '已完成' : '未完成'
								}
							</span>
					)
				}
			},
			{
				dataIndex: 'todo_type',
				key: 'todo_type',
				title: '事件类型',
				width: 150,
				render: (text) => {
					let tmptext = '';
					switch (text) {
						case 'important':
							tmptext = '重要';
							break;
						case 'urgent':
							tmptext = '紧急';
							break;
						case 'importanturgent':
							tmptext = '重要紧急';
							break;
						case 'general':
							tmptext = '一般';
							break;
						default :
							return null
					}
					return (
							<span>{ tmptext }</span>
					)
				}
			},
			{
				dataIndex: 'todo_remarks',
				key: 'todo_remarks',
				title: '备注',
				width: 150
			},
			{
				dataIndex: '',
				key: 'operate',
				title: '操作',
				width:180,

			}
		],
		dataSource:[]

	}
}