import { useParams } from 'react-router-dom'

export default function MovieDetail() {
	const { id } = useParams()
	return <div>MovieDetail {id}</div>
}
