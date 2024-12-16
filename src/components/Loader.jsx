import 'ldrs/ring'
export default function Loader() {
	return (
		<div style={{ minHeight: 'calc(100vh - 350px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
			<l-ring size='60' color='coral'></l-ring>
		</div>
	)
}
