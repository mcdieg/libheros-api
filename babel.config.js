process.env.BUILD_TARGET === 'client'
			? [
				require.resolve('@babel/preset-env'),
				{
					modules: false,
				},
			  ]
			: [
				require.resolve('@babel/preset-env'),
				{
					targets: {
						node: 'current',
					},
					exclude: [
						'babel-plugin-transform-classes',
						'@babel/plugin-transform-classes',
					],
					modules: false,
				},
			  ];