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
				width: 150
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