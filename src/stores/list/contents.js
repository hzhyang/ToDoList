import React from 'react';
import common from '@src/utils/common';

export default {
	tableprops: {
		columns:[
			{
				dataIndex: 'todo_name',
				title: '事件名称',
				width:250
			},
			{
				dataIndex: 'createdate',
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
				dataIndex: 'todo_type',
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
				title: '备注',
				width: 150
			}
		],
		dataSource:[]

	}
}