import React from 'react';
import common from '@src/utils/common';

export default {
	tableprops: {
		pagination:{},
		rowSelection:{
			onChange: null
		},
		columns:[
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
				width:80,

			}
		],
		dataSource:[]

	}
}