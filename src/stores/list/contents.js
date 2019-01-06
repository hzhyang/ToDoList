export default {
	tableprops: {
		columns:[
			{
				dataIndex: 'todoname',
				title: '事件名称',
				width:250
			},
			{
				dataIndex: 'todocreatetime',
				title: '事件创建时间',
				width: 150
			}
		],
		dataSource:[
			{
				key: 1,
				todoname: 'test',
				todocreatetime: '2019-1-1'
			},
			{
				key: 2,
				todoname: 'test2',
				todocreatetime: '2018-1-1'
			}
		]

	}
}