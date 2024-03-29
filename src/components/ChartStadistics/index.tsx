import './index.scss';

const ChartStadistics = ({
	hp,
	atk,
	def,
	atkSp,
	defSp,
	spe,
}: {
	hp: number;
	atk: number;
	def: number;
	atkSp: number;
	defSp: number;
	spe: number;
}) => {
	return (
		<>
			<div id='orientation-example-7'>
				<table className='charts-css bar show-heading show-labels'>
					<thead>
						<tr>
							<th scope='col'> Stadistics </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope='row'> PS </th>
							<td style={{ '--size': hp / 255 } as React.CSSProperties}>
								{hp}
							</td>
						</tr>
						<tr>
							<th scope='row'> Atq </th>
							<td style={{ '--size': atk / 255 } as React.CSSProperties}>
								{atk}
							</td>
						</tr>
						<tr>
							<th scope='row'> Def </th>
							<td style={{ '--size': def / 255 } as React.CSSProperties}>
								{def}
							</td>
						</tr>
						<tr>
							<th scope='row'> AtqEsp </th>
							<td style={{ '--size': atkSp / 255 } as React.CSSProperties}>
								{atkSp}
							</td>
						</tr>
						<tr>
							<th scope='row'> DefEsp </th>
							<td style={{ '--size': defSp / 255 } as React.CSSProperties}>
								{defSp}
							</td>
						</tr>
						<tr>
							<th scope='row'> Vel </th>
							<td style={{ '--size': spe / 255 } as React.CSSProperties}>
								{spe}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default ChartStadistics;
